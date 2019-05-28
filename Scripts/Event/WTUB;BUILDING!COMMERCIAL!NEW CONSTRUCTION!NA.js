
var parentBal = 0;
recordParents = getParents('Planning/Application/Sign Permit/Permanent');
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && recordParents !=  null) {
	for (recCnt in recordParents) if (aa.cap.getCapDetail(recordParents[recCnt]).getOutput().getBalance() > 0) parentBal = aa.cap.getCapDetail(recordParents[recCnt]).getOutput().getBalance();
	}

if (parentBal > 0) {
	showMessage = true;
	cancel = true;
	comment('Unable to issue permit because there is a balance due on a related DRC of $ ' + parentBal);
	}

if (wfTask=='Engineering Review' && matches(wfStatus,'Approved', 'Approved w/ Comments')) {
	//replaced branch(ENG:CDD:EMSE:CANCELTASK)
engCddCancelTask();
	}

