
parentRecId = getParent();
cdWeightTicket = new Array();
cdWeightTicket = loadASITable('DIVERSION PROGRAM INFORMATION');
if (cdWeightTicket.length > 0) {
	addASITable('DIVERSION PROGRAM INFORMATION', cdWeightTicket, parentRecId);
}

closeTask('Record Submitted', 'Completed', 'Closed via Script', '');
