
var grandTot = 0;
var diversionPercentTot = 0;
if (typeof(DIVERSIONPROGRAMINFORMATION) == 'object') {
	
//start replaced branch: ENG:CDDCALCTOTALS
 {
if (typeof(DIVERSIONPROGRAMINFORMATION) == 'object') {
	diversionTot=0;
	for (xxx in DIVERSIONPROGRAMINFORMATION) if (DIVERSIONPROGRAMINFORMATION[xxx]['Material Type'] != 'Trash'  && DIVERSIONPROGRAMINFORMATION[xxx]['Ticket Status'] == 'Approved') diversionTot+=DIVERSIONPROGRAMINFORMATION[xxx]['Net Weight in Tons'] * 1;
	comment('What is diversionTot = ' + diversionTot);
	}

if (typeof(DIVERSIONPROGRAMINFORMATION) == 'object') {
	refuseTot = 0;
	for (xxx in DIVERSIONPROGRAMINFORMATION) if(DIVERSIONPROGRAMINFORMATION[xxx]['Material Type'] == 'Trash' && DIVERSIONPROGRAMINFORMATION[xxx]['Ticket Status'] == 'Approved') refuseTot+=DIVERSIONPROGRAMINFORMATION[xxx]['Net Weight in Tons'] * 1;
	comment('What is refuseTot = ' + refuseTot);
	}

}
//end replaced branch: ENG:CDDCALCTOTALS;
	}

if (diversionTot > 0) {
	editAppSpecific('CD INFORMATION.Diversion Total',diversionTot);
	}

if (refuseTot > 0) {
	editAppSpecific('CD INFORMATION.Refuse Total',refuseTot);
	}

if (diversionTot > 0 || refuseTot > 0) {
	grandTot = parseFloat(diversionTot) + parseFloat(refuseTot);
	diversionPercentTot = parseFloat(diversionTot) / parseFloat(grandTot);
	}

if (diversionTot > 0 || refuseTot > 0) {
	editAppSpecific('CD INFORMATION.Grand Total',grandTot.toFixed(2));
	editAppSpecific('CD INFORMATION.Diversion Percentage',diversionPercentTot.toFixed(3));
	}

