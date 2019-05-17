
if (inspType == 'Electrical Utility Clearance (Edison)' && inspResult == 'Approved') {
	rcSendNotificationTemplateEmail('BLD_UTILITYRELEASE_SOCALEDISON');
	}

if (inspType == 'Electrical Utility Clearance (RCMU)' && inspResult == 'Approved') {
	rcSendNotificationTemplateEmail('BLD_UTILITYRELEASE_RCMU');
	}

if (inspType == 'Gas Utility Clearance' && inspResult == 'Approved') {
	rcSendNotificationTemplateEmail('BLD_UTILITYRELEASE_GASCO');
	}

if (matches(inspType,'Access Control') && inspResult == 'Approved') {
	closeTask('Inspections','Final Inspection Complete','Finaled by RCFD Prevention Bureau','');
	setTask('Closed','N','Y');
	updateAppStatus('Finalized','Updated via script');
	}

if (inspResult == 'Approved-Fire Access Req.') {
	emailContact('Important information regarding your permit: ' +capIDString,                 '<p>The Building and Safety Department completed and approved your Final Inspection today.</p><p>Please note that in order to Final your permit an Access Control inspection must be completed and approved by the Rancho Cucamonga Fire Protection District.  Gates will be inspected to ensure that they comply with the District's Vehicular Gate Standard.  You will be contacted by RCFD personnel to schedule this needed inspection.</p><p>Should you have any questions regarding this email or the Access Control inspection please contact the Rancho Cucamonga Fire Protection District, Prevention Bureau at (909) 477-2770. </p><p>Thank you,<br/><br/>City of Rancho Cucamonga<br/>Building and Safety Services</p>');
	}

if (matches(inspType, 'Final Inspection') && inspResult == 'Approved-Fire Access Req.') {
	priAddrRec = PriAddressOnCap();
	email('Alicia.Reister@cityofrc.us, tammie.graciano@cityofrc.us, shane.adams@cityofrc.us','noreply@cityofrc.us','A permit requiring an Access Control inspection was finaled by Building and Safety.','<b> </b>Record:<b> </b> ' + capIDString + '<br /><b> </b>Address:<b> </b> ' + priAddrRec + '<br /><b> </b>Work Description:<b> </b>' + capName + '.');
	}

