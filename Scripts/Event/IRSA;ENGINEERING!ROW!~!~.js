
// DISABLED: IRSA:Engineering/ROW/*/*:01
// if (inspResult == 'Corrections Needed') {
// 	emailContact('Inspection Result for ROW permit: ' +capIDString,' <p>Youer inspection for ' +inspType+' resulted in 'Corrections Needed' on your Engineering Construction Permit (' + capIDString + ').</p><p>Please use go to  Accelerate at http://aca.accela.com/cityofrc/<br> To View Inspector's Comments: <ol> <li>1. Open the record / permit </li><br><li> 2. Scroll down to Inspections</li></br><li>3. Click on the 'triangle' or '+' sign to expand to view inspector's notes</li></ol> </br><p>For more information please contact the Engineering Inspector for further details at  909-477-2740.</p><p>Thank you,<br/>City of Rancho Cucamonga<br/>Engineering Department</p>');
// 	}

if (inspResult == 'Corrections Needed') {
	emailContact('Your inspection generated a corrections notice on ROW permit: ' +capIDString,'<p>Corrections are required on your Engineering Construction Permit (' + capIDString + ').</p><p>Please use the online Accelerate at http://aca.accela.com  to review the correction(s) relating to the inspection(s) or contact the Engineering Inspector for further details at 909-477-2740.</p><p>Thank you,<br/>City of Rancho Cucamonga<br/>Engineering Department</p>');
	}

