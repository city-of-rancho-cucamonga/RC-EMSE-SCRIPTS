function validateLicense(UserName, Password, createBy) {
	logDebug("DEBUG>> Inside Function validateLicense");
	var capdel = getRecordDetail(capId);

	createBy = createBy.toUpperCase();

	logDebug("DEBUG>> capdel = " + capdel);
	logDebug("DEBUG>> capdel['createby'] = " + capdel['createby']);
	logDebug("DEBUG>> createBy = " + createBy);

	if (capdel['createby'] == createBy) {
		logDebug("DEBUG>> capdel createby == createBy");

		editAppSpecific("BUSINESS INFORMATION.HDL Transmit", "Ready");
		logDebug("DEBUG>>  HDL Transmit ASI updated to Ready");
		//TODO GET LICENSE

		// RV - This is not used at all, and the function is causing an error in Includes Custom, so will remove.
		//var liceArray=getLicenseProfessional(capId);

		var licenNum = "";

		//if(capLicenseArr == null )
		//{
		//	licenNum="";
		//}
		//else{licenNum=capLicenseArr;}

		//logDebug("licenNum"+licenNum);

		//var HdlAccountNum=verHDL(licenNum);
		//5/30 No need to retrieve from service, just get from ASI
		var HdlAccountNum = getAppSpecific("BUSINESS INFORMATION.Business License Number");

		//TODO GET ASI
		var HdlApprovalId;
		var ignoreArr = new Array();
		var limitCopy = false;
		if (arguments.length > 1) {
			ignoreArr = arguments[1];
			limitCopy = true;
		}

		for (asi in AInfo) {
			//Check list
			if (limitCopy) {
				var ignore = false;
				for (var i = 0; i < ignoreArr.length; i++)
					if (ignoreArr[i] == asi) {
						ignore = true;
						break;
					}
				if (ignore)
					continue;
			}
			if (asi == "BUSINESS INFORMATION.HDL Approval ID") {
				HdlApprovalId = AInfo[asi];
			}

		}

		//TODO GET APPSTART
		var appStatus = capStatus;
		//   ApproverName
		var approName = aa.env.getValue("StaffFirstName") + " " + aa.env.getValue("StaffLastName");

		// comment
		var comment;
		if (wfComment) {
			comment = wfComment;
		} else {
			var step = new Array();
			var process = new Array();
			var com = new Array();
			var due = new Array();
			var staff = new Array();
			var j = 0;
			for (i in wfObj) {
				fTask = wfObj[i].getTaskItem();

				if (fTask.getDispositionComment()) {
					step[j] = fTask.getStepNumber();
					process[j] = fTask.getProcessCode();
					com[j] = fTask.getDispositionComment();
					due[j] = fTask.getDueDate();
					staff[j] = fTask.getSysUser();
					j++;

				}
			}

			if (com.length == 1) {
				comment = com[0];
				approName = staff[0];
			} else {
				var jsDate1;
				var jsDate2;

				for (var n = 0; n < com.length - 1; n++) {
					jsDate1 = new Date(due[n].getYear(), due[n].getMonth(), due[n].getDayOfMonth(), due[n].getYear(), due[n].getHourOfDay(), due[n].getMinute(), due[n].getSecond());
					jsDate2 = new Date(due[n + 1].getYear(), due[n + 1].getMonth(), due[n + 1].getDayOfMonth(), due[n + 1].getYear(), due[n + 1].getHourOfDay(), due[n + 1].getMinute(), due[n + 1].getSecond());
					if (jsDate1.getTime() - jsDate2.getTime() > 0) {
						comment = com[n];
						approName = staff[n];
					} else if (jsDate1.getTime() - jsDate2.getTime() < 0) {
						comment = com[n + 1];
						approName = staff[n + 1]
					} else {
						comment = com[n + 1];
						approName = staff[n + 1];
					}
				}

			}
		}

		//logDebug("------------hdl_validateLicense:record:"+capId.getCustomID());
		//logDebug("liceArray:"+liceArray);
		//logDebug("HdlAccountNum:"+HdlAccountNum);
		//logDebug("HdlApprovalId:"+HdlApprovalId);
		//logDebug("appStatus:"+appStatus);

		//logDebug("approName:"+approName);
		//logDebug("comment:"+comment);


		if (HdlApprovalId == null) {
			HdlApprovalId = "";
		}
		// TEST var accelawsUrl = 'http://209.150.82.95/Approvals/'+HdlApprovalId;
		var accelawsUrl = 'https://businesslicense.cityofrc.us/Approvals/' + HdlApprovalId;
		var client = aa.httpClient;
		var today = new Date();
		// set url parameters
		var params = client.initPostParameters();
		params.put('UserName', UserName);
		logDebug("UserName: " + UserName);
		params.put('Password', Password);
		logDebug("Password: " + Password);
		//AAHdLPrime
		params.put('HdlAccountNum', HdlAccountNum);
		logDebug("HdlAccountNum: " + HdlAccountNum);
		//071304
		params.put('HdlApprovalId', HdlApprovalId);
		logDebug("HdlApprovalId: " + HdlApprovalId);
		//0985
		params.put('LicenseApprovalStatus', appStatus.toUpperCase());
		logDebug("appStatus.toUpperCase(): " + appStatus.toUpperCase());

		//params.put('DateApproved', dateChange2(today));
		params.put('DateApproved', sysDateMMDDYYYY);
		logDebug("Date Approved: " + sysDateMMDDYYYY);

		params.put('ApproverName', approName);
		logDebug("approName: " + approName);
		params.put('ApprovalComments', comment);
		logDebug("comment: " + comment);

		// do validate via web service
		var scripResult = client.post(accelawsUrl, params);

		// check the return value
		if (scripResult.getSuccess()) {
			logDebug("DEBUG>>  HDL Post was successful");

			var resultString = String(scripResult.getOutput());
			//logDebug("resultString"+resultString);
			//Convert to jsonObject
			var arr = resultString.split("&");
			var AccountNum = arr[0].substring(arr[0].indexOf("=") + 1);
			var ApprovalId = arr[1].substring(arr[1].indexOf("=") + 1);
			var Result = arr[2].substring(arr[2].indexOf("=") + 1);
			var responseComment = "";
			if (arr.length > 3)
				responseComment = arr[3].substring(arr[3].indexOf("=") + 1);

			logDebug("DEBUG>>  HDL Response AccountNum: " + AccountNum);
			logDebug("DEBUG>>  HDL Response ApprovalId: " + ApprovalId);
			logDebug("DEBUG>>  HDL Response Result: " + Result);
			logDebug("DEBUG>>  HDL Response Comment: " + responseComment);

			if (Result.toUpperCase() == "SUCCESS") {
				logDebug("DEBUG>>  Result is SUCCESS.  Update HDL Transmit ASI to Done");
				editAppSpecific("BUSINESS INFORMATION.HDL Transmit", "Done");
			}
		} else {
			logDebug("ERROR: Failed to validate license with HDL Service: " + scripResult.getErrorMessage());
		}
	} else {
		logDebug("DEBUG>> capdel createby != createBy, so script logic will not execute");
	}

} //END Function validateLicense()
