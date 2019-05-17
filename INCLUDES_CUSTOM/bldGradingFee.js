function bldGradingFee() {

newGradeTotal = 0;

//start replaced branch: BuildingGradingFee:Lookup
 {
if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Hydrology/Hydraulic Report' && GRADINGINFORMATIONDETAIL [xxx]['Quantity']>0) newGradeTotal += 317.22;
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Hydrology/Hydraulic Report' && GRADINGINFORMATIONDETAIL [xxx]['Quantity']>5) newGradeTotal += (Math.ceil(GRADINGINFORMATIONDETAIL [xxx]['Quantity']/5)-1) * 126.89;
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Hydrology/Hydraulic Report (industrial)') newGradeTotal += parseFloat(GRADINGINFORMATIONDETAIL [xxx]['Quantity']) * 0.00;
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Hydrology/Hydraulic Report(single custom lot)') newGradeTotal += parseFloat(GRADINGINFORMATIONDETAIL [xxx]['Quantity']) * 190.33;
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Precise Grading') newGradeTotal += parseFloat(GRADINGINFORMATIONDETAIL [xxx]['Quantity']) * 126.89;
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Private Street Improvement - Water and Sewer 1 to 50 lots' && parseFloat(GRADINGINFORMATIONDETAIL [xxx]['Quantity']) <= 10) newGradeTotal += 253.78;
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Private Street Improvement - Water and Sewer' && parseFloat(GRADINGINFORMATIONDETAIL [xxx]['Quantity']) > 10) newGradeTotal += 887.08;
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Rough Grading - Cut and Fill' && GRADINGINFORMATIONDETAIL [xxx]['Quantity']>50 && GRADINGINFORMATIONDETAIL [xxx]['Quantity']<=100) newGradeTotal += 317.22;
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Rough Grading - Cut and Fill' && GRADINGINFORMATIONDETAIL [xxx]['Quantity']>100 && GRADINGINFORMATIONDETAIL [xxx]['Quantity']<1000) newGradeTotal += 317.22 + (Math.floor((GRADINGINFORMATIONDETAIL [xxx]['Quantity']-100)/100) * 222.06);
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Rough Grading - Cut and Fill' && GRADINGINFORMATIONDETAIL [xxx]['Quantity']>=1000 && GRADINGINFORMATIONDETAIL [xxx]['Quantity']<10000) newGradeTotal += 750.76 + (Math.floor((GRADINGINFORMATIONDETAIL [xxx]['Quantity']-1000)/1000) * 222.06);
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Rough Grading - Cut and Fill' && GRADINGINFORMATIONDETAIL [xxx]['Quantity']>=10000 && GRADINGINFORMATIONDETAIL [xxx]['Quantity']<100000) newGradeTotal += 1099.70  + (Math.floor((GRADINGINFORMATIONDETAIL [xxx]['Quantity']-10000)/10000) * 306.65);
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Rough Grading - Cut and Fill' && GRADINGINFORMATIONDETAIL [xxx]['Quantity']>=100000) newGradeTotal += 1670.70  + (Math.floor((GRADINGINFORMATIONDETAIL [xxx]['Quantity']-100000)/100000) * 465.26);
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Water Quality Management' && GRADINGINFORMATIONDETAIL [xxx]['Quantity']>0) newGradeTotal += 380.67;
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Water Quality Management' && GRADINGINFORMATIONDETAIL [xxx]['Quantity']>5) newGradeTotal += (Math.ceil(GRADINGINFORMATIONDETAIL [xxx]['Quantity']/5)-1) * 126.89;
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Water and Sewer (retail, commercial, and industrial)' && parseFloat(GRADINGINFORMATIONDETAIL [xxx]['Quantity']) <= 5) newGradeTotal += 253.78;
	}

if (typeof(GRADINGINFORMATIONDETAIL) == 'object') {
	for (xxx in GRADINGINFORMATIONDETAIL) if (GRADINGINFORMATIONDETAIL [xxx]['Type of Use'] == 'Water and Sewer (retail, commercial, and industrial)' && parseFloat(GRADINGINFORMATIONDETAIL [xxx]['Quantity']) > 5) newGradeTotal += 793.06;
	}

}
//end replaced branch: BuildingGradingFee:Lookup;
if (newGradeTotal > 0) {
	updateFee('GRD002','BLD_GRADE','FINAL', newGradeTotal*1.019*1.020*1.025*1.024*1.025,'N');
	}

// DISABLED: BLDEMSEFee:GradingFee:04 (original)
// if (newGradeTotal > 0) {
// 	updateFee('GRD001','BLD_GRADE','FINAL', newGradeTotal*1.019*1.020*1.025*1.024,'N');
// 	updateFee('GRD002','BLD_GRADE','FINAL',newGradeTotal*1.019*1.020*1.025*1.024,'N');
// 	}

}
