function fcsFeeMisc() {

newFCSMiscTotal = 0;

//start replaced branch: FCS_MiscFee:Lookup
 {
if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Public Underground Fire Service' && parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) > 5) newFCSMiscTotal += (Math.ceil(parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity'])) - 5) * 262.00;
	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
	}

if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'High Pile Storage' && parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) <=25000) newFCSMiscTotal += 918.00;
	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
	}

if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'High Pile Storage' && parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) > 25000 && parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) <= 100000) newFCSMiscTotal += 1181.00;
	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
	}

if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'High Pile Storage' && parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) > 100000) newFCSMiscTotal += (Math.ceil((parseFloat(FIREMISCELLANEOUSDETAIL[xxx]['Quantity']) - 100000)/100000) * 262.00) + 1181.00;
	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
	}

// DISABLED: FCS_MiscFee:Lookup:z01
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Above Ground Tank') newFCSMiscTotal += parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) * 496.00;
// 	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
// 	}

// DISABLED: FCS_MiscFee:Lookup:z02
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Alternate Method') newFCSMiscTotal += parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) * 126.89;
// 	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
// 	}

// DISABLED: FCS_MiscFee:Lookup:z03
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Fire Protection Plan') newFCSMiscTotal += parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) * 126.89;
// 	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
// 	}

// DISABLED: FCS_MiscFee:Lookup:z04
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Fuel Dispensing System') newFCSMiscTotal += parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) * 496.00;
// 	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
// 	}

// DISABLED: FCS_MiscFee:Lookup:z05
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Hazardous Materials') newFCSMiscTotal += parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) * 126.89;
// 	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
// 	}

// DISABLED: FCS_MiscFee:Lookup:z06
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'High Pile Storage') newFCSMiscTotal += parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) * 496.00;
// 	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
// 	}

// DISABLED: FCS_MiscFee:Lookup:z07
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Life Safety Report') newFCSMiscTotal += parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) * 126.89;
// 	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
// 	}

// DISABLED: FCS_MiscFee:Lookup:z08
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Medical Gas' && FIREMISCELLANEOUSDETAIL[xxx]['Quantity'] > 0 && FIREMISCELLANEOUSDETAIL[xxx]['Quantity'] <= 36) newFCSMiscTotal += FIREMISCELLANEOUSDETAIL [xxx]['Quantity'] * 380.67;
// 	}

// DISABLED: FCS_MiscFee:Lookup:z09
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Medical Gas' && FIREMISCELLANEOUSDETAIL[xxx]['Quantity'] > 36) newFCSMiscTotal += Math.ceil(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']/36) * 363.89;
// 	}

// DISABLED: FCS_MiscFee:Lookup:z10
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Nurse Call') newFCSMiscTotal += parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) * 150.00;
// 	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
// 	}

// DISABLED: FCS_MiscFee:Lookup:z11
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Other') newFCSMiscTotal += parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) * 126.89;
// 	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
// 	}

// DISABLED: FCS_MiscFee:Lookup:z12
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Paint Spray Booth') newFCSMiscTotal += parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) * 323.00;
// 	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
// 	}

// DISABLED: FCS_MiscFee:Lookup:z13
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Propane Tank (LPG)') newFCSMiscTotal += parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) * 265.32;
// 	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
// 	}

// DISABLED: FCS_MiscFee:Lookup:z14
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Refrigerant Monitoring System') newFCSMiscTotal += parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) * 143.36;
// 	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
// 	}

// DISABLED: FCS_MiscFee:Lookup:z15
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Refrigerant System') newFCSMiscTotal += parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) * 265.32;
// 	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
// 	}

// DISABLED: FCS_MiscFee:Lookup:z16
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Smoke Control') newFCSMiscTotal += parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) * 323.00;
// 	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
// 	}

// DISABLED: FCS_MiscFee:Lookup:z17
// if (typeof(FIREMISCELLANEOUSDETAIL) == 'object') {
// 	for (xxx in FIREMISCELLANEOUSDETAIL) if (FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] == 'Vehicle Access Gate') newFCSMiscTotal += parseFloat(FIREMISCELLANEOUSDETAIL [xxx]['Quantity']) * 150.00;
// 	comment('What is ' + FIREMISCELLANEOUSDETAIL [xxx]['Type of Use'] + ' ' + newFCSMiscTotal);
// 	}

}
//end replaced branch: FCS_MiscFee:Lookup;
// DISABLED: FCSEMSEFee:MiscFee:03
// if (newFCSMiscTotal> 0) {
// 	updateFee('FCS010','FCS_STANDARD','FINAL', newFCSMiscTotal*1.019*1.020*1.025*1.024*1.025,'N');
// 	updateFee('FCS020','FCS_STANDARD','FINAL', newFCSMiscTotal*1.019*1.020*1.025*1.024*1.025,'N');
// 	}

if (newFCSMiscTotal> 0) {
	updateFee('FCS011','FCS_STANDARD','FINAL', newFCSMiscTotal,'N');
	updateFee('FCS021','FCS_STANDARD','FINAL', newFCSMiscTotal,'N');
	updateFee('FCS050','FCS_STANDARD','FINAL', newFCSMiscTotal,'N');
	updateFee('FCS055','FCS_STANDARD','FINAL', newFCSMiscTotal,'N');
	}

}
