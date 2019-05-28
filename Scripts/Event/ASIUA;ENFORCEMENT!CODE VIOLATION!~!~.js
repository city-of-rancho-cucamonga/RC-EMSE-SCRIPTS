
copyParcelGisObjects();
if (validateGisObjects()) {
	//replaced branch(ENF:EMSEUpdateGISObjects)
	enfUpdateGisObjects();
}

ceInspDist = capDetail.getAsgnStaff();
comment('what is AsgnStaff = ' + ceInspDist);
if (ceInspDist == null) {
	ceInspDist = getGISInfo('CITYOFRC', 'Enforcement Inspection Areas', 'INSPECTOR');
	comment('what is ceInspDist= ' + ceInspDist);
	assignCap(lookup('EMSE:CODEOFFICER:LOOKUP', ceInspDist));
}
