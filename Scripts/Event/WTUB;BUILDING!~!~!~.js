
recFeesNew = 0;
recFeesNew = feeAmountAll(capId,'NEW');
// DISABLED: WTUB:Building/*/*/*:02 - replaced by line 09
// if (matches(wfTask,'Permit Issuance','Closed') && matches(wfStatus,'Issued','Finalized') && (balanceDue > 0 || recFeesNew > 0)) {
// 	showMessage = true;
// 	cancel = true;
// 	logMessage('Unable to issue permit because there is a balance due of $ ' + balanceDue);
// 	}

var feeList = loadFees();
var engFeeTotal = 0;
var arrFees = aa.finance.getFeeItemList(null,'ENG_DEVIMPACT',null).getOutput();
for (xxx in feeList) for (xx in arrFees) if (arrFees[xx].getFeeCod() == feeList[xxx].code && feeList[xxx].status == 'NEW') engFeeTotal += parseFloat(feeList[xxx].amount);
var arrFees = aa.finance.getFeeItemList(null,'ENG_DEVIMPACT_TRANS',null).getOutput();
for (xxx in feeList) for (xx in arrFees) if (arrFees[xx].getFeeCod() == feeList[xxx].code && feeList[xxx].status == 'NEW') engFeeTotal += parseFloat(feeList[xxx].amount);
// DISABLED: WTUB:Building/*/*/*:08 - script 99 debug
// if (matches(currentUserID,'GHESS')) {
// 	comment('engFeeTotal = ' + engFeeTotal.toFixed(2) + ', recFeesNew = ' + recFeesNew.toFixed(2));
// 	}

if (matches(wfTask,'Permit Issuance','Closed') && matches(wfStatus,'Issued','Finalized') && (balanceDue > 0 || (recFeesNew > 0 && engFeeTotal.toFixed(2) != recFeesNew.toFixed(2)))) {
	showMessage = true;
	cancel = true;
	logMessage('Unable to issue permit because there is a balance due of $ ' + balanceDue);
	}

var incompleteTasks = false;
if (wfTask == 'Closed' && wfStatus == 'Finalized') {
	if (!allTasksComplete('WFADHOC_PROCESS'))  incompleteTasks = true;
	}

if (incompleteTasks) {
	cancel=true;
	showMessage=true;
	logMessage('AdHoc Tasks must be complete to finalize the record');
	}

