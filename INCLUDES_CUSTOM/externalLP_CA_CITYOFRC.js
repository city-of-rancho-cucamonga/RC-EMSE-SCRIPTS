function externalLP_CA_CITYOFRC(licNum, rlpType, doPopulateRef, doPopulateTrx, itemCap) {

	/*
	Version: 3.2

	Usage:

	licNum			:  Valid CA license number.   Non-alpha, max 8 characters.  If null, function will use the LPs on the supplied CAP ID
	rlpType			:  License professional type to use when validating and creating new LPs
	doPopulateRef 	:  If true, will create/refresh a reference LP of this number/type
	doPopulateTrx 	:  If true, will copy create/refreshed reference LPs to the supplied Cap ID.   doPopulateRef must be true for this to work
	itemCap			:  If supplied, licenses on the CAP will be validated.  Also will be refreshed if doPopulateRef and doPopulateTrx are true

	returns: non-null string of status codes for invalid licenses

	examples:

	appsubmitbefore   (will validate the LP entered, if any, and cancel the event if the LP is inactive, cancelled, expired, etc.)
	===============
	true ^ cslbMessage = "";
	CAELienseNumber ^ cslbMessage = externalLP_CA(CAELienseNumber,CAELienseType,false,false,null);
	cslbMessage.length > 0 ^ cancel = true ; showMessage = true ; comment(cslbMessage)

	appsubmitafter  (update all CONTRACTOR LPs on the CAP and REFERENCE with data from CSLB.  Link the CAP LPs to REFERENCE.   Pop up a message if any are inactive...)
	==============
	true ^ 	cslbMessage = externalLP_CA(null,"CONTRACTOR",true,true,capId)
	cslbMessage.length > 0 ^ showMessage = true ; comment(cslbMessage);

	Note;  Custom LP Template Field Mappings can be edited in the script below
	Note: 11/22/2012 - DQ - Updated to make HTTP GET to CSLB

	Note: For Rancho Cucamonga, do not refresh all LP's on a Record.  Only refresh/update the specific
	license being added/updated to a Record.

	04-22-2014 - Update the errorNode text display logic.  An error about the "replace" function occurred in AA when a record was added
	with an Lic # that doesn't exist in CSLB

	4/23/2014 - Add logic to ignore Worker's Comp Expiration Date update based on Attribute.

	 */

	var returnMessage = "";

	var workArray = new Array();

	if (licNum) {
		workArray.push(String(licNum));
	}

	if (itemCap) {
		var capLicenseResult = aa.licenseScript.getLicenseProf(itemCap);
		if (capLicenseResult.getSuccess()) {
			var capLicenseArr = capLicenseResult.getOutput();
		} else {
			logDebug("**ERROR: getting lic prof: " + capLicenseResult.getErrorMessage());
			return false;
		}

		// 04-07-2014 for Rancho Cucamonga, IF license # param provided, we only want single License to be updated, not all on Record.
		if (!licNum) {

			if (capLicenseArr == null || !capLicenseArr.length) {
				logDebug("**WARNING: no licensed professionals on this CAP");
			} else {
				for (var thisLic in capLicenseArr)
					if (capLicenseArr[thisLic].getLicenseType() == rlpType)
						workArray.push(capLicenseArr[thisLic]);
			}
		}
	} else
		doPopulateTrx = false; // can't do this without a CAP;

	for (var thisLic = 0; thisLic < workArray.length; thisLic++) {
		var licNum = workArray[thisLic];
		var licObj = null;
		var isObject = false;

		if (typeof(licNum) == "object") // is this one an object or string?
		{
			licObj = licNum;
			licNum = licObj.getLicenseNbr();
			isObject = true;
		}

		// Make the call to the California State License Board

		var document;
		var root;
		var aURLArgList = "https://www2.cslb.ca.gov/IVR/License+Detail.aspx?LicNum=" + licNum;
		var vOutObj = aa.httpClient.get(aURLArgList);
		var isError = false;
		if (vOutObj.getSuccess()) {
			var vOut = vOutObj.getOutput();
			var sr = aa.proxyInvoker.newInstance("java.io.StringBufferInputStream", new Array(vOut)).getOutput();
			var saxBuilder = aa.proxyInvoker.newInstance("org.jdom.input.SAXBuilder").getOutput();
			document = saxBuilder.build(sr);
			root = document.getRootElement();
			errorNode = root.getChild("Error");
		} else {
			isError = true;
		}
		if (isError) {
			logDebug("The CSLB web service is currently unavailable");
			continue;
		} else if (errorNode) {
			var errorNodeText = "";
			errorNodeText = "" + errorNode.getText();
			errorNodeText = errorNodeText.replace(/\+/g, " ");
			logDebug("Error for license " + licNum + " : " + errorNodeText);
			returnMessage += "License " + licNum + " : " + errorNodeText + " ";
			continue;
		}

		var lpBiz = root.getChild("BusinessInfo");
		var lpStatus = root.getChild("PrimaryStatus");
		var lpClass = root.getChild("Classifications");
		var lpBonds = root.getChild("ContractorBond");
		var lpWC = root.getChild("WorkersComp");

		// Primary Status
		// 3 = expired, 10 = good, 11 = inactive, 1 = canceled.   We will ignore all but 10 and return text.
		var stas = lpStatus.getChildren();
		for (var i = 0; i < stas.size(); i++) {
			var sta = stas.get(i);

			if (sta.getAttribute("Code").getValue() != "10")
				returnMessage += "License:" + licNum + ", " + sta.getAttribute("Desc").getValue() + " ";
		}

		if (doPopulateRef) // refresh or create a reference LP
		{
			var updating = false;

			// check to see if the licnese already exists...if not, create.

			var newLic = getRefLicenseProf(licNum);

			//Use these for Workmens Comp Expiration Logic (Rancho Cucamonga Requirement)
			var getWcExpDateString = "";
			var getWcExpDate = "";
			var pRefLicID = "";
			var bResetOverrideAttribute = false;

			if (newLic) {
				updating = true;
				logDebug("Updating existing Ref Lic Prof : " + licNum);
				getWcExpDate = newLic.getWcExpDate();
				pRefLicID = newLic.getLicSeqNbr();

				logDebug("DEBUG>> Updating existing Ref LP, Ref ID #: " + pRefLicID);

				if (getWcExpDate) //not null, has a date.  Convert date to string and set string var.
					getWcExpDateString = dateFormatted(getWcExpDate.getMonth(), getWcExpDate.getDayOfMonth(), getWcExpDate.getYear(), "");

				logDebug("DEBUG>> Existing License Workmens Comp Expire Date is (if blank, it's null): " + getWcExpDateString);
			} else {
				var newLic = aa.licenseScript.createLicenseScriptModel();
			}

			if (isObject) // update the reference LP with data from the transactional, if we have some.
			{
				if (licObj.getAddress1())
					newLic.setAddress1(licObj.getAddress1());
				if (licObj.getAddress2())
					newLic.setAddress2(licObj.getAddress2());
				if (licObj.getAddress3())
					newLic.setAddress3(licObj.getAddress3());
				if (licObj.getAgencyCode())
					newLic.setAgencyCode(licObj.getAgencyCode());
				if (licObj.getBusinessLicense())
					newLic.setBusinessLicense(licObj.getBusinessLicense());
				if (licObj.getBusinessName())
					newLic.setBusinessName(licObj.getBusinessName());
				if (licObj.getBusName2())
					newLic.setBusinessName2(licObj.getBusName2());
				if (licObj.getCity())
					newLic.setCity(licObj.getCity());
				if (licObj.getCityCode())
					newLic.setCityCode(licObj.getCityCode());
				if (licObj.getContactFirstName())
					newLic.setContactFirstName(licObj.getContactFirstName());
				if (licObj.getContactLastName())
					newLic.setContactLastName(licObj.getContactLastName());
				if (licObj.getContactMiddleName())
					newLic.setContactMiddleName(licObj.getContactMiddleName());
				if (licObj.getCountryCode())
					newLic.setContryCode(licObj.getCountryCode());
				if (licObj.getEmail())
					newLic.setEMailAddress(licObj.getEmail());
				if (licObj.getCountry())
					newLic.setCountry(licObj.getCountry());
				if (licObj.getEinSs())
					newLic.setEinSs(licObj.getEinSs());
				if (licObj.getFax())
					newLic.setFax(licObj.getFax());
				if (licObj.getFaxCountryCode())
					newLic.setFaxCountryCode(licObj.getFaxCountryCode());
				if (licObj.getHoldCode())
					newLic.setHoldCode(licObj.getHoldCode());
				if (licObj.getHoldDesc())
					newLic.setHoldDesc(licObj.getHoldDesc());
				if (licObj.getLicenseExpirDate())
					newLic.setLicenseExpirationDate(licObj.getLicenseExpirDate());
				if (licObj.getLastRenewalDate())
					newLic.setLicenseLastRenewalDate(licObj.getLastRenewalDate());
				if (licObj.getLicesnseOrigIssueDate())
					newLic.setLicOrigIssDate(licObj.getLicesnseOrigIssueDate());
				if (licObj.getPhone1())
					newLic.setPhone1(licObj.getPhone1());
				if (licObj.getPhone1CountryCode())
					newLic.setPhone1CountryCode(licObj.getPhone1CountryCode());
				if (licObj.getPhone2())
					newLic.setPhone2(licObj.getPhone2());
				if (licObj.getPhone2CountryCode())
					newLic.setPhone2CountryCode(licObj.getPhone2CountryCode());
				if (licObj.getSelfIns())
					newLic.setSelfIns(licObj.getSelfIns());
				if (licObj.getState())
					newLic.setState(licObj.getState());
				if (licObj.getSuffixName())
					newLic.setSuffixName(licObj.getSuffixName());
				if (licObj.getZip())
					newLic.setZip(licObj.getZip());
			}

			// Now set data from the CSLB

			if (lpBiz.getChild("Name").getText() != "")
				newLic.setBusinessName(unescape(lpBiz.getChild("Name").getText()).replace(/\+/g, " "));
			if (lpBiz.getChild("Addr1").getText() != "")
				newLic.setAddress1(unescape(lpBiz.getChild("Addr1").getText()).replace(/\+/g, " "));
			if (lpBiz.getChild("Addr2").getText() != "")
				newLic.setAddress2(unescape(lpBiz.getChild("Addr2").getText()).replace(/\+/g, " "));
			if (lpBiz.getChild("City").getText() != "")
				newLic.setCity(unescape(lpBiz.getChild("City").getText()).replace(/\+/g, " "));
			if (lpBiz.getChild("State").getText() != "")
				newLic.setState(unescape(lpBiz.getChild("State").getText()).replace(/\+/g, " "));
			if (lpBiz.getChild("Zip").getText() != "")
				newLic.setZip(unescape(lpBiz.getChild("Zip").getText()).replace(/\+/g, " "));
			if (lpBiz.getChild("BusinessPhoneNum").getText() != "")
				newLic.setPhone1(unescape(stripNN(lpBiz.getChild("BusinessPhoneNum").getText()).replace(/\+/g, " ")));
			newLic.setAgencyCode(aa.getServiceProviderCode());
			newLic.setAuditDate(sysDate);
			newLic.setAuditID(currentUserID);
			newLic.setAuditStatus("A");
			newLic.setLicenseType(rlpType);
			newLic.setLicState("CA"); // hardcode CA
			newLic.setStateLicense(licNum);

			if (lpBiz.getChild("IssueDt").getText())
				newLic.setLicenseIssueDate(aa.date.parseDate(lpBiz.getChild("IssueDt").getText()));
			if (lpBiz.getChild("ExpireDt").getText())
				newLic.setLicenseExpirationDate(aa.date.parseDate(lpBiz.getChild("ExpireDt").getText()));
			if (lpBiz.getChild("ReissueDt").getText())
				newLic.setLicenseLastRenewalDate(aa.date.parseDate(lpBiz.getChild("ReissueDt").getText()));

			var wcs = root.getChild("WorkersComp").getChildren();

			for (var j = 0; j < wcs.size(); j++) {
				wc = wcs.get(j);

				if (wc.getAttribute("PolicyNo").getValue())
					newLic.setWcPolicyNo(wc.getAttribute("PolicyNo").getValue());
				if (wc.getAttribute("InsCoCde").getValue())
					newLic.setWcInsCoCode(unescape(wc.getAttribute("InsCoCde").getValue()));
				if (wc.getAttribute("WCEffDt").getValue())
					newLic.setWcEffDate(aa.date.parseDate(wc.getAttribute("WCEffDt").getValue()))

					//Rancho Cucamonga
					// If we are updating an existing Reference LP that has a WC Expire Date value, we need to do some additional
					//      validation to determine if we should update the Workmen's Comp Expiration Date
					if (updating && getWcExpDateString != "") {
						logDebug("DEBUG>> Before we update the Ref LP WC Expiration Date, do some validation.");
						var dCurrentDate = new Date();
						logDebug("WC Expiration Date String for creating date object: " + getWcExpDateString);
						var dWCExpireDate = new Date(getWcExpDateString);

						logDebug("DEBUG>> current date object: " + dCurrentDate);
						logDebug("DEBUG>> Worker Comp Expire date object: " + dWCExpireDate);

						//If WC has not Expired
						if (dWCExpireDate > dCurrentDate) {
							logDebug("DEBUG>> WC Date has not expired.  Let's check the override LP attribute.");

							var wcOverrideFlag = "N";
							var peopAttrResult = aa.people.getPeopleAttributeByPeople(pRefLicID, rlpType);
							if (peopAttrResult.getSuccess()) {
								var peopAttrArray = peopAttrResult.getOutput();

								for (i in peopAttrArray) {
									logDebug("Attr Name: " + peopAttrArray[i].getAttributeName());
									logDebug("Attr Value: " + peopAttrArray[i].getAttributeValue());
									if (peopAttrArray[i].getAttributeName() == "WC_EXPIRE_DATE_OVERRIDE")
										wcOverrideFlag = peopAttrArray[i].getAttributeValue(); //Value is "N"(default) or "Y"
								}
							}

							logDebug("DEBUG>> Workmens Comp Override Flag attribute value: " + wcOverrideFlag);

							////If we aren't overriding an update, then ... update Ref LP normally
							if (wcOverrideFlag != "Y") {
								if (wc.getAttribute("WCExpDt").getValue())
									newLic.setWcExpDate(aa.date.parseDate(wc.getAttribute("WCExpDt").getValue()));
							} else {
								logDebug("Override Flag is Y, do not update the Workers Comp Expiration Date.");
							}

						} else {
							logDebug("DEBUG>> Ref LP Workers Comp Insurance is Expired.  Reset WC Override attribute to No and Update field from CSLB.");
							//The Ref LP Workers Comp Insurance is Expired.  Allow the Ref LP to be updated and reset the Ref LP Attribute to "N".
							if (wc.getAttribute("WCExpDt").getValue())
								newLic.setWcExpDate(aa.date.parseDate(wc.getAttribute("WCExpDt").getValue()));

							//Set this to true to update the attribute in the "if(updating)" statement below
							bResetOverrideAttribute = true;

						}
					} else //Not updating existing LP, or, existing LP doesn't have a WC Expire Date value
					{
						if (wc.getAttribute("WCExpDt").getValue())
							newLic.setWcExpDate(aa.date.parseDate(wc.getAttribute("WCExpDt").getValue()));
					}
				if (wc.getAttribute("WCCancDt").getValue())
					newLic.setWcCancDate(aa.date.parseDate(wc.getAttribute("WCCancDt").getValue()))
					if (wc.getAttribute("Exempt").getValue() == "E")
						newLic.setWcExempt("Y");
					else
						newLic.setWcExempt("N");

				break; // only use first
			}

			//
			// Do the refresh/create and get the sequence number
			//
			if (updating) {
				var myResult = aa.licenseScript.editRefLicenseProf(newLic);
				var licSeqNbr = newLic.getLicSeqNbr();

				//Need to do this here after after the "myResult" call above
				if (bResetOverrideAttribute) {
					editRefLicProfAttribute(licNum, "WC_EXPIRE_DATE_OVERRIDE", "N");
				}
			} else {
				var myResult = aa.licenseScript.createRefLicenseProf(newLic);

				if (!myResult.getSuccess()) {
					logDebug("**WARNING: can't create ref lic prof: " + myResult.getErrorMessage());
					continue;
				}

				var licSeqNbr = myResult.getOutput()
			}

			logDebug("Successfully added/updated License No. " + licNum + ", Type: " + rlpType + " Sequence Number " + licSeqNbr);

			/////
			/////  Attribute Data -- first copy from the transactional LP if it exists
			/////


			if (isObject) // update the reference LP with attributes from the transactional, if we have some.
			{
				var attrArray = licObj.getAttributes();

				if (attrArray) {
					for (var k in attrArray) {
						var attr = attrArray[k];
						editRefLicProfAttribute(licNum, attr.getAttributeName(), attr.getAttributeValue());
					}
				}
			}

			/////
			/////  Attribute Data
			/////
			/////  NOTE!  Agencies may have to configure template data below based on their configuration.  Please note all edits
			/////

			/* Comment Out for Rancho Cucamonga

			var cbs = root.getChild("Classifications").getChildren();
			for (var m=0 ; m<cbs.size(); m++)
		{
			cb = cbs.get(m);

			if (m == 0)
		{
			editRefLicProfAttribute(licNum,"CLASS CODE 1",cb.getAttribute("Code").getValue());
			editRefLicProfAttribute(licNum,"CLASS DESC 1",unescape(cb.getAttribute("Desc").getValue()).replace(/\+/g," "));
			}

			if (m == 1)
		{
			editRefLicProfAttribute(licNum,"CLASS CODE 2",cb.getAttribute("Code").getValue());
			editRefLicProfAttribute(licNum,"CLASS DESC 2",unescape(cb.getAttribute("Desc").getValue()).replace(/\+/g," "));
			}
			if (m == 2)
		{
			editRefLicProfAttribute(licNum,"CLASS CODE 3",cb.getAttribute("Code").getValue());
			editRefLicProfAttribute(licNum,"CLASS DESC 3",unescape(cb.getAttribute("Desc").getValue()).replace(/\+/g," "));
			}

			if (m == 3)
		{
			editRefLicProfAttribute(licNum,"CLASS CODE 4",cb.getAttribute("Code").getValue());
			editRefLicProfAttribute(licNum,"CLASS DESC 4",unescape(cb.getAttribute("Desc").getValue()).replace(/\+/g," "));
			}
			}


			var bos = root.getChild("ContractorBond").getChildren();

			for (var n=0 ; n<bos.size(); n++)
		{
			var bo = bos.get(n);
			if (bo.getAttribute("BondAmt").getValue()) editRefLicProfAttribute(licNum,"BOND AMOUNT",unescape(bo.getAttribute("BondAmt").getValue()));
			if (bo.getAttribute("BondCancDt").getValue()) editRefLicProfAttribute(licNum,"BOND EXPIRATION",unescape(bo.getAttribute("BondCancDt").getValue()));

			// Currently unused but could be loaded into custom attributes.

			//aa.print("Bond Surety Type       : " + unescape(bo.getAttribute("SuretyTp").getValue()))
			//aa.print("Bond Code              : " + unescape(bo.getAttribute("InsCoCde").getValue()))
			//aa.print("Bond Insurance Company : " + unescape(bo.getAttribute("InsCoName").getValue()).replace(/\+/g," "))
			//aa.print("Bond Number            : " + unescape(bo.getAttribute("BondNo").getValue()))
			//aa.print("Bond Amount            : " + unescape(bo.getAttribute("BondAmt").getValue()))
			//aa.print("Bond Effective Date    : " + unescape(bo.getAttribute("BondEffDt").getValue()))
			//aa.print("Bond Cancel Date       : " + unescape(bo.getAttribute("BondCancDt").getValue()))

			break; // only use first bond
			}

			end of comment out for Rancho Cucamonga */

			if (doPopulateTrx) {
				var lpsmResult = aa.licenseScript.getRefLicenseProfBySeqNbr(servProvCode, licSeqNbr)
					if (!lpsmResult.getSuccess()) {
						logDebug("**WARNING error retrieving the LP just created " + lpsmResult.getErrorMessage());
					}

					var lpsm = lpsmResult.getOutput();

				// Remove from CAP

				var isPrimary = false;

				for (var currLic in capLicenseArr) //Updated to workArray from capLicenseArr object for Rancho Cucamonga
				{
					var thisLP = capLicenseArr[currLic];
					if (thisLP.getLicenseType() == rlpType && thisLP.getLicenseNbr() == licNum) {
						logDebug("Removing license: " + thisLP.getLicenseNbr() + " from CAP.  We will link the new reference LP");
						if (thisLP.getPrintFlag() == "Y") {
							logDebug("...remove primary status...");
							isPrimary = true;
							thisLP.setPrintFlag("N");
							aa.licenseProfessional.editLicensedProfessional(thisLP);
						}
						var remCapResult = aa.licenseProfessional.removeLicensedProfessional(thisLP);
						if (capLicenseResult.getSuccess()) {
							logDebug("...Success.");
						} else {
							logDebug("**WARNING removing lic prof: " + remCapResult.getErrorMessage());
						}
					}
				}

				// add the LP to the CAP
				var asCapResult = aa.licenseScript.associateLpWithCap(itemCap, lpsm)
					if (!asCapResult.getSuccess()) {
						logDebug("**WARNING error associating CAP to LP: " + asCapResult.getErrorMessage())
					} else {
						logDebug("Associated the CAP to the new LP")
					}

					// Now make the LP primary again
					if (isPrimary) {
						var capLps = getLicenseProfessional(itemCap);

						for (var thisCapLpNum in capLps) {
							if (capLps[thisCapLpNum].getLicenseNbr().equals(licNum)) {
								var thisCapLp = capLps[thisCapLpNum];
								thisCapLp.setPrintFlag("Y");
								aa.licenseProfessional.editLicensedProfessional(thisCapLp);
								logDebug("Updated primary flag on Cap LP : " + licNum);

								// adding this return will cause the test script to work without error, even though this is the last statement executed
								//if (returnMessage.length > 0) return returnMessage;
								//else return null;

							}
						}
					}
			} // do populate on the CAP
		} // do populate on the REF
	} // for each license

	if (returnMessage.length > 0)
		return returnMessage;
	else
		return null;

} // end function

