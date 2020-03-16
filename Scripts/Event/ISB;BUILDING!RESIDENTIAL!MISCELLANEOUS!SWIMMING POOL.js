if (capStatus == 'Pre-Inspection' && !matches(insType, 'Pre-Inspection'))  
	
{
	cancel = true;
	showMessage = true;
	comment('The inspection cannot be scheduled because the permit does not have a record status which allows inspection scheduling');
}
