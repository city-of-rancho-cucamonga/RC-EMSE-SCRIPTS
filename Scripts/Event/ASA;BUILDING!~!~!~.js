
// DISABLED: ASA:Building/*/*/*:01
// iArr = new Array();
// DISABLED: ASA:Building/*/*/*:02
// createRefContactsFromCapContactsAndLink(capId,null,iArr,false,true,comparePeopleStandard);
// DISABLED: ASA:Building/*/*/*:03
// parcelGIS = validateGisObjects();
// priAddrRec = PriAddressOnCap();
// DISABLED: ASA:Building/*/*/*:04
// if (!parcelGIS && !publicUser && priAddrRec != false) {
// 	addStdCondition('APO Condition','New Address');
// 	email('Sid.Siphomsay@cityofrc.us,jennifer.quan@cityofrc.us,Steve.Lawdis@cityofrc.us','noreply@cityofrc.us','New Address has been entered on record number ' + capIDString + ' - ' + priAddrRec, 'No address found in database for address ' + priAddrRec + ' on record # ' + capIDString + '. Please research and update as needed.');
// 	}

// DISABLED: ASA:Building/*/*/*:05
// if (validateGisObjects()) {
// 	br_nch('BLD:EMSEUpdateGISObjects');
// 	}

aa.finance.switchCalcFactor(capId,'CALC','ADMIN');
if(currentUserID == 'ROLAND') showDebug=true;
lpArray = getLicenseProfessional(capId);
if (lpArray) {
	licProfObject = lpArray[0];
	
//replaced branch(LPUA:Building/*/*/*)
licProfUpdateBld();
	}

