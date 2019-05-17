function bldPlmMH() {

newPlmTotal = 0;

//start replaced branch: BuildingPlmFeeMH:Lookup
 {
if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Sewer') newPlmTotal +=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 59.00;
	}

if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Private Sewage Disposal System') newPlmTotal +=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 59.00;
	}

if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Water Heater') newPlmTotal +=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 52.00;
	}

if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Gas Piping (1-5 outlets)') newPlmTotal +=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 52.00;
	}

if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Water Service') newPlmTotal +=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 46.00;
	}

if (typeof(PLUMBINGINFORMATIONTABLE) == 'object') {
	for (xxx in PLUMBINGINFORMATIONTABLE) if (PLUMBINGINFORMATIONTABLE[xxx]['Plumbing Type'] == 'Water Treating Equipment') newPlmTotal +=PLUMBINGINFORMATIONTABLE[xxx]['Quantity'] * 52.00;
	}

}
//end replaced branch: BuildingPlmFeeMH:Lookup;
if (newPlmTotal > 0) {
	updateFee('MBH100','BLD_MBH','FINAL',newPlmTotal,'N');
	}

}
