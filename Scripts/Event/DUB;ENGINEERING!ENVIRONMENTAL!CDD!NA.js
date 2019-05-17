
JS60Date = null;
if (publicUser && AInfo['60 Day Expiration'] && AInfo['60 Day Expiration'] != '') {
	JS60Date = new Date(AInfo['60 Day Expiration']);
	}

if (JS60Date != null && JS60Date < new Date()) {
	cancel = true;
	showMessage = true;
	logMessage('Uploads have been disalled due to 60 Day Expiration Date');
	}

