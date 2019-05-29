
// DISABLED: WTUA:Building/Commercial/Electrical/NA:01
// if (wfTask == 'Application Submittal' && matches(wfStatus,'Submitted','Resubmitted')) {
// 	deactivateTaskOnTSINR('Application Submittal');
// 	}

if (AInfo['CVWD Review'] != 'CHECKED') {
	closeTask('CVWD Review', 'Not Required', 'Closed via Script', '', 'BLD_TRADE_RCSUB');
}
