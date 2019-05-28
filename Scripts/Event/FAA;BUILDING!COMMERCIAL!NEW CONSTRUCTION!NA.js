
// DISABLED: FAA:Building/Commercial/New Construction/NA:02
// if (feeExists('ELERESPLN','NEW') || feeExists('ELERESINSP','NEW')) {
// 	br_nch('BLDEMSEFee:ElectricalFee');
// 	}

// DISABLED: FAA:Building/Commercial/New Construction/NA:03
// if (feeExists('MECHRESPLN','NEW') || feeExists('MECHRESINSP','NEW')) {
// 	br_nch('BLDEMSEFee:MechanicalFee');
// 	}

// DISABLED: FAA:Building/Commercial/New Construction/NA:04
// if (feeExists('PLMRESPLN','NEW') || feeExists('PLMRESINSP','NEW')) {
// 	br_nch('BLDEMSEFee:PlumbingFee');
// 	}

if (calcValue >= 100000) {
	//replaced branch(ENG:CDD:EMSE:UPDATEASI)
engCddUpdateASI();
	}

var recCDDId = childGetByCapType('Engineering/Environmental/CDD/NA',null,capId);
//comment('what is recCDDId = ' + recCDDId);
if (calcValue < 100000 && recCDDId) {
	bldReferToEngCDD();
	}

