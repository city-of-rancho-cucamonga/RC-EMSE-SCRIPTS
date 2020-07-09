
if (publicUser == true) {
	email(emailRCStaffACAPay(), 'acapay-noreply@accela.com', 'PAYMENT RECEIVED - A payment was submitted via Accelerate: ' + capIDString, 'A payment was submitted on a(an) ' + cap.getCapType().getAlias() + ' application (' + capIDString + ') via Accelerate. Please review it and proceed as appropriate.');
}

// DISABLED: PaymentReceiveAfter:09
// if (pulbic User == false) {
// 	email('sid.siphomsay@cityofrc.us','PaymentReceivedCashier-NoReply@cityofrc.us','Payment Received at Cashier','Note: Payment received at the cashier. Please review it and proceed as appropriate.');
// 	}
