function engCddCancelTask() {

	var hasChildren = getChildren('Engineering/Environmental/CDD/NA');
	if (hasChildren && (AInfo['Updated.Mixed Load'] != 'CHECKED' && AInfo['Updated.Job Site Separation'] != 'CHECKED')) {
		showMessage = true;
		cancel = true;
		comment('This record has a CDD associated with it. Disposal and Recycling Info are required. Select the appropriate checkbox(es) to continue.');
	}

}
