
showDebug = 1;
showMessage= false;
//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('FEA:' + appTypeArray[0] + '/*/*/*');
branch('FEA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('FEA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('FEA:' + appTypeString);

//start replaced branch: ApplicationSubmitAfter
 {
showDebug = false;
showMessage= false;
//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('ASA:' + appTypeArray[0] + '/*/*/*');
branch('ASA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('ASA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('ASA:' + appTypeArray[0] + '/*/*/' + appTypeArray[3]);
branch('ASA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);
branch('ASA:' + appTypeString);
// DISABLED: ApplicationSubmitAfter:75
// if (publicUser == true) {
// 	editAppName('Updated in ApplicationSubmitAfter');
// 	}

if (appTypeArray[0] != 'Engineering' && !(matches(appTypeArray[1],'CIP Permit','LCP','OLP','ROW'))) {
	
//start replaced branch: ASA:BuildingViolation:CodeViolation:FireDistrict:Check
 {
fdRecExist = false;
enfRecExist = false;
bldRecExist = false;
existFDRecArray = new Array();
existEnfRecArray = new Array();
existBldRecArray = new Array();
if (doesRealAddressExistOnCap()) {
	existFDRecArray =getRelatedCapsByAddress('Fire/District/Field Inspection Report/*');
	}

if (existFDRecArray) {
	for (x1 in existFDRecArray) if (!matches(aa.cap.getCap(existFDRecArray[x1].getCapID()).getOutput().getCapStatus(),'Void','No Violations','Closed')) fdRecExist=true;
	}

if (doesRealAddressExistOnCap()) {
	existEnfRecArray =getRelatedCapsByAddress('Enforcement/Code Violation/*/*');
	}

if (existEnfRecArray) {
	for (x2 in existEnfRecArray) if (!matches(aa.cap.getCap(existEnfRecArray[x2].getCapID()).getOutput().getCapStatus(),'Void','Pending','Closed')) enfRecExist=true;
	//modify list of record statuses to check;
	}

if (doesRealAddressExistOnCap()) {
	existBldRecArray =getRelatedCapsByAddress('Building/Code Violation/*/*');
	}

if (existBldRecArray) {
	for (x3 in existBldRecArray) if (!matches(aa.cap.getCap(existBldRecArray[x3].getCapID()).getOutput().getCapStatus(),'Resolved','Closed-Duplicate','Closed-Not Within City','Closed')) fdRecExist=true;
	}

// DISABLED: ASA:BuildingViolation:CodeViolation:FireDistrict:Check:08
// if (fdRecExist || enfRecExist || bldRecExist) {
// 	showDebug = false;
// 	showMessage=true;
// 	logMessage('Please be aware there is a Fire District, Code Violation, or Building Violation record currently open on this address');
// 	}

if (fdRecExist || enfRecExist || bldRecExist) {
	addStdCondition('Parcel', 'Violation');
	}

}
//end replaced branch: ASA:BuildingViolation:CodeViolation:FireDistrict:Check;
	}

parcelGIS = validateGisObjects();
priAddrRec = PriAddressOnCap();
var rcInitiatedBy = cap.getInitiatedProduct();
logDebug('This cap was initiated by ' + rcInitiatedBy);
if (!parcelGIS && !publicUser && priAddrRec != false && !(appMatch('Planning/Misc/Business License Review/NA')) && rcInitiatedBy!='CodeOfficer' && rcInitiatedBy!='AMO' && rcInitiatedBy!='GOVXML_CLIENT') {
	addStdCondition('APO Condition','New Address');
	email('Sid.Siphomsay@cityofrc.us, jennifer.quan@cityofrc.us','noreply@cityofrc.us','New Address has been entered on record number ' + capIDString + ' - ' + priAddrRec, 'No address found in database for address ' + priAddrRec + ' on record # ' + capIDString + '. Please research and update as needed. The last update was performed by ' + currentUserID + '.');
	}

if (cap.isCreatedByACA()) {
	copyParcelGisObjects();
	}

logDebug('DEBUG>> Calling asa_hdl function for the HDL Interface');
asa_hdl();

}
//end replaced branch: ApplicationSubmitAfter;

