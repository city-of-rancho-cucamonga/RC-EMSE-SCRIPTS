
if (typeof(INSPECTIONTYPES) == 'object') {
	for (x in INSPECTIONTYPES) updateFee(lookup('FD_FLDINSPTYPE',INSPECTIONTYPES[x]['Inspection Type']),'FD_FLDINSP','FINAL',1,'N');
	}

if (typeof(INSPECTIONTYPES) == 'object') {
	
//replaced branch(FD:EMSE:FEENONPROFITREDUCTION)
fdFeeNonProfitReduction();
	}

var myComplianceTbl = new Array();
myComplianceTbl = loadASITable('COMPLIANCE NOTES');
comment('what is myComplianceTb length = ' + myComplianceTbl.length);

