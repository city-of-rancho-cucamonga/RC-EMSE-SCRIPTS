
if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Final CO Issued') {
	closeTask('Closed', 'Closed', 'Closed via Script from CofO', '');
}

if (wfTask == 'Application Submittal' && wfStatus == 'Submitted' && calcValue >= 100000) {
	//replaced branch(ENG:EMSECreateEnvCDDRecord)
	engCreateEnvCddRecord();
}

if (wfTask == 'Application Submittal' && AInfo['Special Districts Review'] != 'CHECKED') {
	closeTask('Special Districts Review', 'Not Required', 'Closed via Script', '', 'BLD_NEWCNST_RCSUB');
}

if (wfTask == 'Application Submittal' && AInfo['CVWD Review'] != 'CHECKED') {
	closeTask('CVWD Review', 'Not Required', 'Closed via Script', '', 'BLD_NEWCNST_RCSUB');
}

if (wfTask == 'Application Submittal' && AInfo['SB County Health Review'] != 'CHECKED') {
	closeTask('SB County Health Review', 'Not Required', 'Closed via Script', '', 'BLD_NEWCNST_RCSUB');
}

if (wfTask == 'Review Consolidation' && wfStatus == 'Ready to Issue' && feeExists('CD020', 'NEW') && calcValue > 100000 && getSumUnitAmount() > 0) {
	updateFee('CD010', 'ENG_CD', 'FINAL', getSumUnitAmount(), 'N');
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	//replaced branch(ENGDEVEMSEFee:Invoice)
	engDevFeeInvoice();
}

if (wfTask == 'Engineering Review' && matches(wfStatus, 'Approved', 'Approved w/ Comments')) {
	//replaced branch(ENG:CDD:EMSE:UPDATEASI)
	engCddUpdateASI();
}
