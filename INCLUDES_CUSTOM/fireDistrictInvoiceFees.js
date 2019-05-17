function fireDistrictInvoiceFees() {

var feeBalNew = feeAmountAll(capId,'NEW');
if (feeBalNew >= 0) {
	invoiceFeeAll(capId);
	}

// DISABLED: IRSA:EMSE:FireDistrict:InvoiceFees:03
// if (feeBalNew == 0) {
// 	}

}
