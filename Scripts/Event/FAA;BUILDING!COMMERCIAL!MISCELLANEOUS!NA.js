
if (feeExists('MI001','NEW')) {
	//replaced branch(BLDEMSEFee:MiscFee)
bldMiscFee();
	}

if (feeExists('ELERESPLN','NEW') || feeExists('ELERESINSP','NEW')) {
	//replaced branch(BLDEMSEFee:ElectricalFeeNoSplit)
bldElecFeeNoSplit();
	}

if (feeExists('MECHRESPLN','NEW') || feeExists('MECHRESINSP','NEW')) {
	//replaced branch(BLDEMSEFee:MechanicalFeeNoSplit)
bldMechFeeNoSplit();
	}

if (feeExists('PLMRESPLN','NEW') || feeExists('PLMRESINSP','NEW')) {
	//replaced branch(BLDEMSEFee:PlumbingFeeNoSplit)
bldPlumbingFeeNoSplit();
	}

