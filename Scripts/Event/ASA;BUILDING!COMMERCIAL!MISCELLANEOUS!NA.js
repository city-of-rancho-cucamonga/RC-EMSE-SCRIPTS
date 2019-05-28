
if (typeof(TYPESOFWORK) == 'object' && !publicUser) {
	//replaced branch(BLDEMSEFee:MiscFee)
	bldMiscFee();
}

if (typeof(ELECTRICALINFORMATIONTABLE) == 'object' && !publicUser) {
	//replaced branch(BLDEMSEFee:ElectricalFeeNoSplit)
	bldElecFeeNoSplit();
}

if (typeof(MECHANICALINFORMATIONTABLE) == 'object' && !publicUser) {
	//replaced branch(BLDEMSEFee:MechanicalFeeNoSplit)
	bldMechFeeNoSplit();
}

if (typeof(PLUMBINGINFORMATIONTABLE) == 'object' && !publicUser) {
	//replaced branch(BLDEMSEFee:PlumbingFeeNoSplit)
	bldPlumbingFeeNoSplit();
}
