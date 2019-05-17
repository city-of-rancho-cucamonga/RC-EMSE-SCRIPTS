
if (typeof(SIGNINFOPERM) == 'object') {
	totSgnAreaWall = 0;
	for (x in SIGNINFOPERM) if (matches(SIGNINFOPERM[x]['Type'],'Wall New','Wall Copy Change')) totSgnAreaWall+=SIGNINFOPERM[x]['Square Footage'] * 1;
	}

if (totSgnAreaWall > 0) {
	editAppSpecific('SIGN INFORMATION.Total Wall Sign Area',totSgnAreaWall);
	}

if (typeof(SIGNINFOPERM) == 'object') {
	totSgnAreaMonument = 0;
	for (x in SIGNINFOPERM) if (matches(SIGNINFOPERM[x]['Type'],'Monument New','Monument Copy Change')) totSgnAreaMonument+=SIGNINFOPERM[x]['Square Footage'] * 1;
	}

if (totSgnAreaMonument > 0) {
	editAppSpecific('SIGN INFORMATION.Total Monument Sign Area',totSgnAreaMonument);
	}

if (totSgnAreaWall > 0 || totSgnAreaMonument > 0) {
	editAppSpecific('SIGN INFORMATION.Total Number of Signs',SIGNINFOPERM.length);
	}

