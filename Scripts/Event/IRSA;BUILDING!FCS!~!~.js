
if (inspResult == 'As-Built Required') {
	activateTask('FCS Review');
	updateAppStatus('As-Built Required','Updated by Inspection Result');
	}

if (inspType == 'Fire Final' && matches(inspResult,'Approved') && AInfo['FIRE SITE INFO RECORD.Fire Site Info Record'] != null) {
	//replaced branch(EMSE:BLDFCS:FDOPERATINGPRMT)
bldFcsOperatingPermit();
	}

