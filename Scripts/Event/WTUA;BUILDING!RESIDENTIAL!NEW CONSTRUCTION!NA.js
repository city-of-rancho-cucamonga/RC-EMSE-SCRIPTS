
if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Final CO Issued') {
	closeTask('Closed','Finalized','Closed via Script from CofO','');
	}

if (wfTask == 'Application Submittal' && AInfo['Special Districts Review'] != 'CHECKED') {
	closeTask('Special Districts Review', 'Not Required','Closed via Script','','BLD_NEWCNST_RCSUB');
	}

if (wfTask == 'Application Submittal' && AInfo['CVWD Review'] != 'CHECKED') {
	closeTask('CVWD Review', 'Not Required', 'Closed via Script','','BLD_NEWCNST_RCSUB');
	}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	
//replaced branch(ENGDEVEMSEFee:Invoice)
engDevFeeInvoice();
	}

