
if (!publicUser && !matches(capStatus, 'Pre-Inspection', 'Issued', 'TCO Issued', 'As-Built Required', 'Approved', 'Inspections', 'Inspection Phase') && !(matches(appTypeArray[1], 'Grading', 'Code Violation') || matches(appTypeArray[2], 'Septic'))) {
	cancel = true;
	showMessage = true;
	comment('The inspection cannot be scheduled because the permit does not have a record status which allows inspection scheduling');
}

if (publicUser && !matches(capStatus, 'Pre-Inspection', 'Issued', 'TCO Issued', 'As-Built Required', 'Approved', 'Inspections', 'Inspection Phase') && !(matches(appTypeArray[1], 'Grading', 'Code Violation') || matches(appTypeArray[2], 'Septic'))) {
	cancel = true;
	showMessage = true;
	comment('The inspection cannot be scheduled until fees are paid and a permit is issued. Please contact City staff to discuss your permit application at (909) 477-2700.');
}

if (matches(inspType, 'Final Inspection', 'Final Electrical', 'Final Plumbing', 'Final Mechanical', 'Pool, Spa Final', 'Final', 'Solar / Photovoltaic Final') && balanceDue > 0) {
	cancel = true;
	showMessage = true;
	comment('Unable to schedule inspection because there is a balance due of $ ' + balanceDue);
}


if (matches(inspType, 'Final Inspection', 'Final Mechanical', 'Final Electrical', 'Final Plumbing', 'Solar / Photovoltaic Final', 'Fire Occupancy Final', 'Final-Certificate of Occupancy', 'Pool, Spa Final', 'Final') && appHasCondition('Building Permit', 'Applied', 'Business License Sub List', null)) {
	cancel = true;
	showMessage = true;
	comment('Final inspection cannot be scheduled at this time due to the fact that the Subcontractor List has not been submitted to the Business License Division for Business License verification.  All contractors and subcontractors are required to have a Business License.  The appropriate Subcontractor List form can be obtained at WWW.CITYOFRC.US/BANDSFORMS.  Once completed, please email the form to BUSINESSLICENSE@CITYOFRC.US for processing.  If you have any questions, please contact the Business License Division at (909) 919-2948.');
}

// Condition "Planning Final"
if (matches(inspType, 'Final Inspection') && appHasCondition('Building Permit', 'Applied', 'Planning Final', null)) {
	cancel = true;
	showMessage = true;
	comment('Final inspection cannot be scheduled at this time. Please call Planning to schedule a Planning Final inspection.');
}

// Condition "Septic Required"
if (matches(inspType, 'Final Inspection') && appHasCondition('Building Permit', 'Applied', 'Septic Required', null)) {
	cancel = true;
	showMessage = true;
	comment('Final Septic Inspection is required prior to Building Final Inspection.');
}

// Condition "ADU Covenant"
if (matches(inspType, 'Final Inspection') && appHasCondition('Building Permit', 'Applied', 'ADU Covenant', null)) {
	cancel = true;
	showMessage = true;
	comment('Signed ADU Covenant required before Final Inspection. Please call Planning for additional information at 909-477-2750.');
}

// Condition "No C of O - Engineering Impact Fees Due"
if (matches(inspType, 'Final Inspection') && appHasCondition('Building Permit', 'Applied','No C of O - Engineering Impact Fees Due',null)) {
	cancel = true;
	showMessage = true;
	comment('Final inspection cannot be scheduled at this time. No C of O - Engineering Impact Fees Due.');
}

// Condition "OWTS As-Built"
if (matches(inspType, 'Final Plumbing', 'Final Inspection') && appHasCondition('Building Permit', 'Applied', 'OWTS As-Built', null)) {
	cancel = true;
	showMessage = true;
	comment('A final inspection cannot be scheduled at this time. GǣAs-builtsGǥ must be submitted to the Building and Safety Services Department by the contractor prior to scheduling the final inspection.');
}

if (matches(inspType, 'Final Inspection', 'Final Mechanical', 'Final Electrical', 'Final Plumbing', 'Solar / Photovoltaic Final', 'Fire Occupancy Final', 'Final-Certificate of Occupancy', 'Pool, Spa Final', 'Final') && appHasCondition('Building Permit', 'Applied', 'Transportation Diff Fee', null)) {
	cancel = true;
	showMessage = true;
	comment('Final inspection cannot be scheduled after Transportaion Fees are paid.');
}

var childRecStatus;
childIdREV = 'undefined';
childIdREV = childGetByCapType('Building/Revision/NA/NA');
if (!matches(childIdREV, false, undefined)) {
	childRecStatus = getRecordStatus(childIdREV);
	//comment('What is childRecStatus = ' + childRecStatus);
}

if (matches(inspType, 'Final Inspection', 'Final Electrical', 'Final Plumbing', 'Final Mechanical', 'Pool, Spa Final', 'Final', 'Solar / Photovoltaic Final') && matches(childRecStatus, 'In Review', 'In-Review')) {
	showMessage = true;
	cancel = true;
	comment('Pending on a Plan Review. Final inspection cannot bescheduled at this time.');
}

// test commment update