
if (typeof(PERMITS) == 'object') {
	for (x in PERMITS) updateFee(lookup('FD Permit',PERMITS[x]['Permit Desc']),'FD_OPERATING','FINAL',1,'N');
	}

if (typeof(PERMITS) == 'object') {
	
//replaced branch(FD:EMSE:FEENONPROFITREDUCTION)
fdFeeNonProfitReduction();
	}

