function engDevFeeBeautification() {

var beauFee =0;
if (AInfo['RESIDENTIAL INFORMATION.Type of Dwelling'] == 'Single Family - Room Addition' && AInfo['RESIDENTIAL INFORMATION.New Single Family Residence Sq Ft'] >= 650) {
	beauFee = AInfo['RESIDENTIAL INFORMATION.New Single Family Residence Sq Ft'] * .20;
	}

if (AInfo['RESIDENTIAL INFORMATION.Type of Dwelling'] != 'Single Family - Room Addition' && AInfo['RESIDENTIAL INFORMATION.Type of Dwelling'] != 'Garage/Carport') {
	beauFee = AInfo['RESIDENTIAL INFORMATION.New Single Family Residence Sq Ft'] * .20;
	}

if (beauFee > 0 && feeExists('BE001','NEW')) {
	removeFee('BE001','FINAL');
	if (beauFee < 200) updateFee('BE001', 'ENG_DEVIMPACT', 'FINAL', 200, 'N');
	else updateFee('BE001', 'ENG_DEVIMPACT', 'FINAL', beauFee, 'N');
	}

if (beauFee == 0 && feeExists('BE001','NEW')) {
	removeFee('BE001','FINAL');
	}

}
