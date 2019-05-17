
if (feeExists('FCS011','NEW') || feeExists('FCS021','NEW') && !matches(appTypeArray[3], 'Alternate Methods', 'Fire Protection Plan', 'Other', 'Public Fire Service')) {
	
//replaced branch(FCSEMSEFee:MiscFee)
fcsFeeMisc();
	}

