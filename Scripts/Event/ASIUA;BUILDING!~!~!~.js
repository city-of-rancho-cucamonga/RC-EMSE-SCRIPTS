
//replaced branch(ENGDEVEMSEFee:Drainage)
engDevFeeDrainage();
// DISABLED: ASIUA:Building/*/*/*:02
// if (validateGisObjects()) {
// 	br_nch('BLD:EMSEUpdateGISObjects');
// 	}


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
else{
	fdBldUpdateGisObjects()
}