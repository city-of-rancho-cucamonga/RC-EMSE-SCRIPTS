
if (matches(wfTask,'Historic Preservation Commission') && matches(wfStatus,'Recommend Approval', 'Recommend Denial')) {
	editAppSpecific('KEY DATES.Appeal Period End Date',dateAdd(wfDateMMDDYYYY,10));
	}

