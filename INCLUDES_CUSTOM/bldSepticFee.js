function bldSepticFee() {

newSepticTotal = 0;

//start replaced branch: BuildingSepticFee:Lookup
 {
if (typeof(SEPTICINFORMATIONDETAIL) == 'object') {
	for (xxx in SEPTICINFORMATIONDETAIL) if (SEPTICINFORMATIONDETAIL [xxx]['Type of Use'] == 'Private Sewage Disposal System (new/altered) - Residential') newSepticTotal += parseFloat(SEPTICINFORMATIONDETAIL [xxx]['Quantity']) * 394.00;
	}

// DISABLED: BuildingSepticFee:Lookup:z20
// if (typeof(SEPTICINFORMATIONDETAIL) == 'object') {
// 	for (xxx in SEPTICINFORMATIONDETAIL) if (SEPTICINFORMATIONDETAIL [xxx]['Type of Use'] == 'Leach Bed') newSepticTotal += parseFloat(SEPTICINFORMATIONDETAIL [xxx]['Quantity']) * 158.61;
// 	}

// DISABLED: BuildingSepticFee:Lookup:z30
// if (typeof(SEPTICINFORMATIONDETAIL) == 'object') {
// 	for (xxx in SEPTICINFORMATIONDETAIL) if (SEPTICINFORMATIONDETAIL [xxx]['Type of Use'] == 'Leach Field') newSepticTotal += parseFloat(SEPTICINFORMATIONDETAIL [xxx]['Quantity']) * 158.61;
// 	}

// DISABLED: BuildingSepticFee:Lookup:z40
// if (typeof(SEPTICINFORMATIONDETAIL) == 'object') {
// 	for (xxx in SEPTICINFORMATIONDETAIL) if (SEPTICINFORMATIONDETAIL [xxx]['Type of Use'] == 'Seepage Pit') newSepticTotal += parseFloat(SEPTICINFORMATIONDETAIL [xxx]['Quantity']) * 158.61;
// 	}

// DISABLED: BuildingSepticFee:Lookup:z50
// if (typeof(SEPTICINFORMATIONDETAIL) == 'object') {
// 	for (xxx in SEPTICINFORMATIONDETAIL) if (SEPTICINFORMATIONDETAIL [xxx]['Type of Use'] == 'Private Sewage Disposal System') newSepticTotal += parseFloat(SEPTICINFORMATIONDETAIL [xxx]['Quantity']) * 222.05;
// 	}

}
//end replaced branch: BuildingSepticFee:Lookup;
if (newSepticTotal > 0) {
	updateFee('SE002','BLD_SEPTIC','FINAL', newSepticTotal,'N');
	updateFee('SE006','BLD_SEPTIC','FINAL', newSepticTotal,'N');
	updateFee('SE009','BLD_SEPTIC','FINAL', newSepticTotal,'N');
	}

// DISABLED: BLDEMSEFee:SepticFee:40
// if (newSepticTotal > 0) {
// 	updateFee('SE001','BLD_SEPTIC','FINAL', newSepticTotal*1.019*1.020*1.025*1.024*1.025,'N');
// 	updateFee('SE002','BLD_SEPTIC','FINAL', newSepticTotal*1.019*1.020*1.025*1.024*1.025,'N');
// 	}

}
