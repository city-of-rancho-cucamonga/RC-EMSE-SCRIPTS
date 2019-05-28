
if (typeof(SIGNINFOTEMP) == 'object') {
	totSgnArea = 0;
	for (x in SIGNINFOTEMP)
		totSgnArea += SIGNINFOTEMP[x]['Square Footage'] * 1;
}

if (totSgnArea > 0) {
	editAppSpecific('SIGN INFORMATION.Total Sign Area', totSgnArea);
	editAppSpecific('SIGN INFORMATION.Total Number of Signs', SIGNINFOTEMP.length);
}

if (typeof(SIGNINFODATES) == 'object') {
	totSgnDays = 0;
	for (x in SIGNINFODATES)
		totSgnDays += SIGNINFODATES[x]['Number of Days'] * 1;
}

if (totSgnDays > 0) {
	editAppSpecific('SIGN INFORMATION.Total Number of Days', totSgnDays);
}

editAppSpecific('KEY DATES.Expiration Date', getMaxDateFromASIT('SIGN INFO DATES', 'Display End Date'));
