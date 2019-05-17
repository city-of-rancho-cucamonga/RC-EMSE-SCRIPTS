function engCddUpdateASI() {

var hasChildren =childGetByCapType('Engineering/Environmental/CDD/NA');
if (hasChildren && (AInfo['Mixed Load']=='CHECKED' || AInfo['Job Site Separation']=='CHECKED')) {
	editAppSpecific('CD INFORMATION.Mixed Load',AInfo['Mixed Load'], hasChildren);
	editAppSpecific('CD INFORMATION.Job Site Separation', AInfo['Job Site Separation'],hasChildren);
	}

if (hasChildren && calcValue > 0) {
	editAppSpecific('CD INFORMATION.Project Value',calcValue,hasChildren);
	}

if (hasChildren && calcValue > 0) {
	editAppSpecific('CD INFORMATION.Project Size (Sq Ft)',getSumFromASIT('AREA INFORMATION','Area Square Footage'),hasChildren);
	}

}
