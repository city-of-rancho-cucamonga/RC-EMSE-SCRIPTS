
// DISABLED: ASA:Building/*/*/*:01
// iArr = new Array();
// DISABLED: ASA:Building/*/*/*:02
// createRefContactsFromCapContactsAndLink(capId,null,iArr,false,true,comparePeopleStandard);
// DISABLED: ASA:Building/*/*/*:03
// parcelGIS = validateGisObjects();
// priAddrRec = priAddressOnCap();
// DISABLED: ASA:Building/*/*/*:04
// if (!parcelGIS && !publicUser && priAddrRec != false) {
// 	addStdCondition('APO Condition','New Address');
// 	email('Sid.Siphomsay@cityofrc.us,jennifer.quan@cityofrc.us,Steve.Lawdis@cityofrc.us','noreply@cityofrc.us','New Address has been entered on record number ' + capIDString + ' - ' + priAddrRec, 'No address found in database for address ' + priAddrRec + ' on record # ' + capIDString + '. Please research and update as needed.');
// 	}

// DISABLED: ASA:Building/*/*/*:05
// if (validateGisObjects()) {
// 	br_nch('BLD:EMSEUpdateGISObjects');
// 	}

aa.finance.switchCalcFactor(capId, 'CALC', 'ADMIN');
lpArray = getLicenseProfessional(capId);
if (lpArray) {
	licProfObject = lpArray[0];
	//replaced branch(LPUA:Building/*/*/*)
	licProfUpdateBld();
}


/////////
var appCap = aa.cap.getCap(capId).getOutput();
var appCapType = appCap.getCapType().toString();
var appCapTypeArr = appCapType.split("/");
var appT1 = appCapTypeArr[0];
var appT2 = appCapTypeArr[1];
var appT3 = appCapTypeArr[2];
var appT4 = appCapTypeArr[3];

if (!(appT1=='Building' & appT2=='FCS' & appT3=='Miscellaneous' & appT4=='High Pile Storage') & !(appT1=='Building' & appT2=='FCS' & appT3=='Suppression System' & appT4=='Fixed')){
	bldUpdateGisObjects();
}
if ((appT1=='Building' & appT2=='FCS' & appT3=='Miscellaneous' & appT4=='High Pile Storage') | (appT1=='Building' & appT2=='FCS' & appT3=='Suppression System' & appT4=='Fixed')){
	fdBldUpdateGisObjects()
}
	