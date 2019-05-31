function contactSetFullName(pContactNbr, pFullName) {
	// Edits Contact Full Name for specified Contact
	// Workaround for user not inputting value in full name field of AMO or Apps
	//
	if (pContactNbr == null) {
		logDebug("ContactNbr parameter is null");
		return false;
	} else {
		var capContactResult = aa.people.getCapContactByPK(capId, pContactNbr);
		if (capContactResult.getSuccess()) {
			var contact = capContactResult.getOutput();
			//logDebug("contact class is "+contact.getClass());
			var peopleObj = contact.getCapContactModel().getPeople();
			peopleObj.setFullName(pFullName);
			contact.getCapContactModel().setPeople(peopleObj);
			var editResult = aa.people.editCapContact(contact.getCapContactModel());
			if (editResult.getSuccess()) {
				logDebug("Contact full name successfully updated to " + pFullName);
				return true;
			} else {
				logDebug("**ERROR: Could not change contact full name: " + editResult.getErrorMessage());
				return false;
			}
		} else {
			logDebug("**ERROR: Can't get contact: " + capContactResult.getErrorMessage());
			return false;
		}
	}
}
