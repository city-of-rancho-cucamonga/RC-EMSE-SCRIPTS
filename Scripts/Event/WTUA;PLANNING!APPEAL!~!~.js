
if (wfTask == 'Application Submittal' && matches(wfStatus, 'Accepted', 'Resubmitted')) {
	editAppSpecific('KEY DATES.30 Day Clock', dateAdd(wfDateMMDDYYYY, 30));
}

if (matches(wfTask, 'Staff Report', 'Planning Commission', 'Historic Preservation Commission', 'Permit Issuance') && matches(wfStatus, 'Approved', 'Denied', 'Issued')) {
	editAppSpecific('KEY DATES.Appeal Period End Date', dateAdd(wfDateMMDDYYYY, 10));
}

if (wfTask == 'Appeal' && wfStatus == 'Not Appealed') {
	editAppSpecific('KEY DATES.Expiration Date', dateAdd(wfDateMMDDYYYY, 1825));
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	editAppSpecific('KEY DATES.Expiration Date', dateAdd(wfDateMMDDYYYY, 1825));
}

if (matches(wfTask, 'City Council 2nd Read', 'Staff Report') && wfStatus == 'Approved') {
	editAppSpecific('KEY DATES.Expiration Date', dateAdd(wfDateMMDDYYYY, 1825));
}

if (matches(wfTask, 'Staff Report', 'Planning Commission', 'Historic Preservation Commission', 'City Council 2nd Read', 'Permit Issuance') && wfStatus == 'Denied') {
	editAppSpecific('KEY DATES.Expiration Date', dateAdd(wfDateMMDDYYYY, 365));
}
