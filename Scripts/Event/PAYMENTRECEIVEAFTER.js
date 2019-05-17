
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('PRA:' + appTypeArray[0] + '/*/*/*');
branch('PRA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('PRA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('PRA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);
branch('PRA:' + appTypeArray[0] + '/*/*/' + appTypeArray[3]);
branch('PRA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/' + appTypeArray[3]);
if (publicUser == true) {
	email(emailRCStaffACAPay(),'acapay-noreply@cityofrc.us','PAYMENT RECEIVED - A payment was submitted via Accelerate: ' + capIDString, 'A payment was submitted on a(an) ' + cap.getCapType().getAlias() + ' application (' + capIDString + ') via Accelerate. Please review it and proceed as appropriate.');
	}

// DISABLED: PaymentReceiveAfter:09
// if (pulbic User == false) {
// 	email('sid.siphomsay@cityofrc.us','PaymentReceivedCashier-NoReply@cityofrc.us','Payment Received at Cashier','Note: Payment received at the cashier. Please review it and proceed as appropriate.');
// 	}

