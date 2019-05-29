
if (wfTask == 'Planning Commission' - á && wfStatus == 'Approved') {
	var rcUserAssigned = '';
	if (capDetail.getAsgnStaff() != null)
		rcUserAssigned = capDetail.getAsgnStaff();
	else
		rcUserAssigned = '(A user has not been assigned)';
	email('Rafael.Balneg@cityofrc.us,Jennifer.Nakamura@cityofrc.us,jose.ramirez@cityofrc.us', 'noreply@cityofrc.us', 'A Project (' + capIDString + ') Has Been Approved', 'Project ' + capIDString + ' has been approved and may require an update by GIS. Please review it and make any necessary updates. If you have any questions, please contact the assigned staff, ' + rcUserAssigned + '.');
}
