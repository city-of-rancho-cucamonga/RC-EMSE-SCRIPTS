function enfGenerateViolations() {

	gsi = gsoArry[x];
	gsi.loadInfo();
	gsi.loadInfoTables();
	rowVals = new Array();
	if (gsi.status == 'Fail') {

		//start replaced branch: ENF_GenerateEnfViolationsASITRow
		{
			rowVals['Date'] = new asiTableValObj('Date', inspResultDate, 'N');
			rowVals['Violation'] = new asiTableValObj('Violation', gsi.text, 'N');
			rowVals['Status'] = new asiTableValObj('Violation Count', gsi.status, 'N');
			addToASITable('FIELD VIOLATIONS', rowVals);

		}
		//end replaced branch: ENF_GenerateEnfViolationsASITRow;
	}

}
