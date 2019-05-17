
if (wfTask == 'Distribution' && matches(wfStatus,'Distributed','Resubmittal')) {
	deactivateTaskOnTSINR('Distribution');
	}

var engAssignUser = getTaskAssignUser('Distribution');
if (wfTask == 'Distribution' && matches(wfStatus,'Distributed','Resubmittal') && engAssignUser) {
	assignTask('Engineering Review',engAssignUser);
	assignTask('Review Consolidation',engAssignUser);
	}

