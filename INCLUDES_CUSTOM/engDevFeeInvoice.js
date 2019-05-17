function engDevFeeInvoice() {

var feeList = loadFees();
var arrFees = aa.finance.getFeeItemList(null,'ENG_DEVIMPACT',null).getOutput();
for (xxx in feeList) for (xx in arrFees) if (arrFees[xx].getFeeCod() == feeList[xxx].code) invoiceFee(feeList[xxx].code, 'FINAL');
var arrFees = aa.finance.getFeeItemList(null,'ENG_DEVIMPACT_TRANS',null).getOutput();
for (xxx in feeList) for (xx in arrFees) if (arrFees[xx].getFeeCod() == feeList[xxx].code) invoiceFee(feeList[xxx].code, 'FINAL');

}
