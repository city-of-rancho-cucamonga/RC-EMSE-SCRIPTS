function engUpdateEnvCddRecordAndEmail() {

	var childCDDRec = undefined;
	childCDDRec = childGetByCapType('Engineering/Environmental/CDD/NA', capId);
	childCDDRecAltId = childCDDRec.getCustomID();
	var rcInspDate = inspObj.getInspectionStatusDate().getMonth() + '/' + inspObj.getInspectionStatusDate().getDayOfMonth() + '/' + inspObj.getInspectionStatusDate().getYear();
	editAppSpecific('CD INFORMATION.60 Day Expiration', dateAdd(null, 60), childCDDRec);
	holdId = capId;
	capId = childCDDRec;
	closeTask('Courtesy Review', 'Final Inspection Complete', 'Updated via script', '');
	capId = holdId;
	updateAppStatus('Final Inspection Complete', 'Updated via Script by Final Inspection', childCDDRec);
	email('sid.siphomsay@cityofrc.us,Marissa.Ostos@cityofrc.us,Rebecca.Fuller@cityofrc.us,Linda.Ceballos@cityofrc.us', 'noreply@accela.com', 'A Final Inspection has occurred related to ' + childCDDRecAltId, 'A final inspection occurred requiring generation of the CDD 60 day letter. The PMT related to this record is: ' + capIDString + '.');
	emailContact('The ' + inspType + ' was recently approved on permit record number: ' + capIDString + '.', 'This e-mail is to inform you that your project associated with ' + capIDString + ' has completed its final inspection on ' + rcInspDate + '.  You have 60 days from this date to apply for a refund of your Construction and Demolition Diversion Recycling Deposit (' + childCDDRecAltId + ').  Please submit and indicate your final weight tickets by the deadline if you want to be considered for a deposit refund.  You will forfeit your deposit if you fail to submit your request and your final supporting weight tickets by the deadline.</p><p>For questions or assistance, you may contact a member of the Environmental Programs Division staff at 909-919-2635 during regular business hours Monday through Thursday from 7:00 A.M. to 6:00 P.M.  Thank you.</p><p>Sincerely,<br /></p><p>Linda Ceballos <br />Environmental Programs Manager</p>');

}
