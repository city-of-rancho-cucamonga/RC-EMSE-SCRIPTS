function bldSolarFee() {

newRSolarTotal = 0;

//start replaced branch: BuildingSolarFee:Lookup
 {
if (typeof(WORKDESCRIPTION) == 'object') {
	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'Solar/Photovoltaic-Residential' && (WORKDESCRIPTION[xxx]['Kilowatts']*1) > 0) newRSolarTotal += 145.00;
	comment('What is newRSolarTotal = ' + newRSolarTotal);
	}

if (typeof(WORKDESCRIPTION) == 'object') {
	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'Solar/Photovoltaic-Residential' && (WORKDESCRIPTION[xxx]['Kilowatts']*1) > 15) newRSolarTotal += Math.ceil(((WORKDESCRIPTION[xxx]['Kilowatts']*1)-15)) * 15.00;
	}

if (typeof(WORKDESCRIPTION) == 'object') {
	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'Solar/Photovoltaic-Residential w/ electrical service upgrade' && (WORKDESCRIPTION[xxx]['Kilowatts']*1) > 0) newRSolarTotal += 407.00;
	comment('What is newRSolarTotal = ' + newRSolarTotal);
	}

if (typeof(WORKDESCRIPTION) == 'object') {
	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'Solar/Photovoltaic-Residential w/ electrical service upgrade' && (WORKDESCRIPTION[xxx]['Kilowatts']*1) > 15) newRSolarTotal += Math.ceil(((WORKDESCRIPTION[xxx]['Kilowatts']*1)-15)) * 15.00;
	}

if (typeof(WORKDESCRIPTION) == 'object') {
	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'Solar/Photovoltaic-Commercial' && (WORKDESCRIPTION[xxx]['Kilowatts']*1) > 0) newRSolarTotal += 498.00;
	comment('What is newRSolarTotal = ' + newRSolarTotal);
	}

if (typeof(WORKDESCRIPTION) == 'object') {
	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'Solar/Photovoltaic-Commercial' && (WORKDESCRIPTION[xxx]['Kilowatts']*1) > 250) newRSolarTotal += Math.ceil(((WORKDESCRIPTION[xxx]['Kilowatts']*1)-250)) * 5.00;
	}

if (typeof(WORKDESCRIPTION) == 'object') {
	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'Solar Water System') newRSolarTotal += parseInt(WORKDESCRIPTION [xxx]['Quantity']) * 328.00;
	comment('What is newRSolarTotal = ' + newRSolarTotal);
	}

if (typeof(WORKDESCRIPTION) == 'object') {
	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'Solar Power Storage System') newRSolarTotal += parseInt(WORKDESCRIPTION [xxx]['Quantity']) * 315.00;
	comment('What is newRSolarTotal = ' + newRSolarTotal);
	}

// DISABLED: BuildingSolarFee:Lookup:z100
// if (typeof(WORKDESCRIPTION) == 'object') {
// 	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'Solar / Photovoltaic up to 10 Kw') newRSolarTotal += parseInt(WORKDESCRIPTION [xxx]['Quantity']) * 145.00;
// 	comment('What is newRSolarTotal = ' + newRSolarTotal);
// 	}

// DISABLED: BuildingSolarFee:Lookup:z120
// if (typeof(WORKDESCRIPTION) == 'object') {
// 	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'Solar / Photovoltaic up to 10 Kw w/electrical service upgrade') newRSolarTotal += parseInt(WORKDESCRIPTION [xxx]['Quantity']) * 407.00;
// 	comment('What is newRSolarTotal = ' + newRSolarTotal);
// 	}

// DISABLED: BuildingSolarFee:Lookup:z130
// if (typeof(WORKDESCRIPTION) == 'object') {
// 	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'Solar / Photovoltaic - 10.1 GÇô 30 Kw') newRSolarTotal += parseInt(WORKDESCRIPTION [xxx]['Quantity']) * 552.00;
// 	comment('What is newRSolarTotal = ' + newRSolarTotal);
// 	}

// DISABLED: BuildingSolarFee:Lookup:z140
// if (typeof(WORKDESCRIPTION) == 'object') {
// 	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'Solar / Photovoltaic - 10.1 GÇô 30 Kw w/ electrical service upgrade') newRSolarTotal += parseInt(WORKDESCRIPTION [xxx]['Quantity']) * 814.00;
// 	comment('What is newRSolarTotal = ' + newRSolarTotal);
// 	}

// DISABLED: BuildingSolarFee:Lookup:z150
// if (typeof(WORKDESCRIPTION) == 'object') {
// 	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'Solar / Photovoltaic - 30.1+ Kw') newRSolarTotal += parseInt(WORKDESCRIPTION [xxx]['Quantity']) * 775.00;
// 	comment('What is newRSolarTotal = ' + newRSolarTotal);
// 	}

// DISABLED: BuildingSolarFee:Lookup:z160
// if (typeof(WORKDESCRIPTION) == 'object') {
// 	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'Solar / Photovoltaic - 30.1+ Kw- w/ electrical service upgrade') newRSolarTotal += parseInt(WORKDESCRIPTION [xxx]['Quantity']) * 1037.00;
// 	comment('What is newRSolarTotal = ' + newRSolarTotal);
// 	}

// DISABLED: BuildingSolarFee:Lookup:z170
// if (typeof(WORKDESCRIPTION) == 'object') {
// 	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'New PV System up to 30 KW' && WORKDESCRIPTION [xxx]['Quantity']<=1000) newRSolarTotal += parseFloat(WORKDESCRIPTION [xxx]['Quantity']) * 127;
// 	comment('What is newRSolarTotal = ' + newRSolarTotal);
// 	}

// DISABLED: BuildingSolarFee:Lookup:z180
// if (typeof(WORKDESCRIPTION) == 'object') {
// 	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'New PV System up to 30 KW w/electrical service upgrade' && WORKDESCRIPTION [xxx]['Quantity']<=1000) newRSolarTotal += parseFloat(WORKDESCRIPTION [xxx]['Quantity']) * 190.42;
// 	comment('What is newRSolarTotal = ' + newRSolarTotal);
// 	}

// DISABLED: BuildingSolarFee:Lookup:z190
// if (typeof(WORKDESCRIPTION) == 'object') {
// 	for (xxx in WORKDESCRIPTION) if (WORKDESCRIPTION [xxx]['Type of Work'] == 'Water System Fixtures - Solar' && WORKDESCRIPTION [xxx]['Quantity']<=1000) newRSolarTotal += parseFloat(WORKDESCRIPTION [xxx]['Quantity']) * 190.33;
// 	comment('What is newRSolarTotal = ' + newRSolarTotal);
// 	}

}
//end replaced branch: BuildingSolarFee:Lookup;
// DISABLED: BLDEMSEFee:RSolarFee:30
// if (newRSolarTotal > 0) {
// 	updateFee('PV010','BLD_R_SOLAR','FINAL', newRSolarTotal*1.019*1.020*1.025*1.024*1.025,'N');
// 	updateFee('PV020','BLD_R_SOLAR','FINAL', newRSolarTotal*1.019*1.020*1.025*1.024*1.025,'N');
// 	}

if (newRSolarTotal > 0) {
	updateFee('PV011','BLD_R_SOLAR','FINAL', newRSolarTotal,'N');
	updateFee('PV021','BLD_R_SOLAR','FINAL', newRSolarTotal,'N');
	updateFee('PV060','BLD_R_SOLAR','FINAL', newRSolarTotal,'N');
	updateFee('PV070','BLD_R_SOLAR','FINAL', newRSolarTotal,'N');
	}

}
