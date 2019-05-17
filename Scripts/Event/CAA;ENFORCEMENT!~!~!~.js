
var newConFullName;
ca = new Array();
ca = getContactArray();
for (y in ca) if(ca[y]['fullName'] == null) newConFullName = ca[y]['firstName'] + ' ' + ca[y]['lastName'];
if (newConFullName != null) {
	contactSetFullName(ca[y]['contactSeqNumber'], newConFullName);
	comment('what is newConFullName ' + newConFullName);
	}

