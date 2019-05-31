function sendClosureNotification(url) //updated with debug 4/3/2014.  Use this one.
{
	logDebug("CIVICA INTERFACE: In function sendClosureNotification.  wfTask = " + wfTask + " and wfStatus = " + wfStatus);
	logDebug("CIVICA INTERFACE: url parameter = " + url);
	logDebug("CIVICA INTERFACE: If correct wfTask/wfStatus combination, function sentServiceRequestNumber will be called ...");

	if (wfTask == "Complaint Received" && wfStatus == "Duplicate Case")
		sentServiceRequestNumber(url);
	if (wfTask == "Complaint Received" && wfStatus == "Not Within City")
		sentServiceRequestNumber(url);
	if (wfTask == "Initial Inspection" && wfStatus == "Duplicate Case")
		sentServiceRequestNumber(url);
	if (wfTask == "Initial Inspection" && wfStatus == "Not Within City")
		sentServiceRequestNumber(url);
	if (wfTask == "Initial Inspection" && wfStatus == "Unfounded")
		sentServiceRequestNumber(url);
	if (wfTask == "Initial Inspection" && wfStatus == "Refer to PD")
		sentServiceRequestNumber(url);
	if (wfTask == "Initial Inspection" && wfStatus == "Refer to Building")
		sentServiceRequestNumber(url);
	if (wfTask == "Initial Inspection" && wfStatus == "Refer to BS")
		sentServiceRequestNumber(url);
	if (wfTask == "Initial Inspection" && wfStatus == "Refer to Fire")
		sentServiceRequestNumber(url);
	if (wfTask == "Initial Inspection" && wfStatus == "Refer to PWS")
		sentServiceRequestNumber(url);
	if (wfTask == "Initial Inspection" && wfStatus == "Refer to Other")
		sentServiceRequestNumber(url);
	if (wfTask == "Follow-up Inspection" && wfStatus == "Resolved")
		sentServiceRequestNumber(url);
	if (wfTask == "Trial" && wfStatus == "Verdict")
		sentServiceRequestNumber(url);
	if (wfTask == "Arraignment" && wfStatus == "Plea Guilty")
		sentServiceRequestNumber(url);
	if (wfTask == "Pre-trial" && wfStatus == "Plea Guilty")
		sentServiceRequestNumber(url);
	if (wfTask == "Readiness Meeting" && wfStatus == "Plea Guilty")
		sentServiceRequestNumber(url);
	if (wfTask == "Trial" && wfStatus == "Plea Guilty")
		sentServiceRequestNumber(url);
	if (wfTask == "Arraignment" && wfStatus == "Plea no Contest")
		sentServiceRequestNumber(url);
	if (wfTask == "Pre-trial" && wfStatus == "Plea no Contest")
		sentServiceRequestNumber(url);
	if (wfTask == "Readiness Meeting" && wfStatus == "Plea no Contest")
		sentServiceRequestNumber(url);
	if (wfTask == "Trial" && wfStatus == "Plea no Contest")
		sentServiceRequestNumber(url);
	if (wfTask == "Compliance Hearing" && wfStatus == "In Compliance")
		sentServiceRequestNumber(url);
}
