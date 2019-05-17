

//start replaced branch: ENGDEVEMSEFee:Transportation
 {
// DISABLED: ENGDEVEMSEFee:Transportation:01
// if (feeExists('TD001', 'NEW')) {
// 	feeCodeName = 'TD001';
// 	feeCodeAmount = feeQty(feeCodeName)*4654;
// 	br_nch('EngineeringFee:TransItemsAssess');
// 	}

// DISABLED: ENGDEVEMSEFee:Transportation:02
// if (feeExists('TD002', 'NEW')) {
// 	feeCodeName = 'TD002';
// 	feeCodeAmount = feeQty(feeCodeName)*2792;
// 	br_nch('EngineeringFee:TransItemsAssess');
// 	}

// DISABLED: ENGDEVEMSEFee:Transportation:03
// if (feeExists('TD003', 'NEW')) {
// 	feeCodeName = 'TD003';
// 	feeCodeAmount = feeQty(feeCodeName)*2792;
// 	br_nch('EngineeringFee:TransItemsAssess');
// 	}

// DISABLED: ENGDEVEMSEFee:Transportation:04
// if (feeExists('TD004', 'NEW')) {
// 	feeCodeName = 'TD004';
// 	feeCodeAmount = feeQty(feeCodeName)*930;
// 	br_nch('EngineeringFee:TransItemsAssess');
// 	}

// DISABLED: ENGDEVEMSEFee:Transportation:05
// if (feeExists('TD005', 'NEW')) {
// 	feeCodeName = 'TD005';
// 	feeCodeAmount = feeQty(feeCodeName)*930;
// 	br_nch('EngineeringFee:TransItemsAssess');
// 	}

// DISABLED: ENGDEVEMSEFee:Transportation:06
// if (feeExists('TD006', 'NEW')) {
// 	feeCodeName = 'TD006';
// 	feeCodeAmount = Math.ceil((feeQty(feeCodeName)*1)/1000) * 6976;
// 	br_nch('EngineeringFee:TransItemsAssess');
// 	}

// DISABLED: ENGDEVEMSEFee:Transportation:07
// if (feeExists('TD007', 'NEW')) {
// 	feeCodeName = 'TD007';
// 	feeCodeAmount = Math.ceil((feeQty(feeCodeName)*1)/1000) * 2792;
// 	br_nch('EngineeringFee:TransItemsAssess');
// 	}

// DISABLED: ENGDEVEMSEFee:Transportation:08
// if (feeExists('TD008', 'NEW')) {
// 	feeCodeName = 'TD008';
// 	feeCodeAmount = Math.ceil((feeQty(feeCodeName)*1)/1000) * 2327;
// 	br_nch('EngineeringFee:TransItemsAssess');
// 	}

// DISABLED: ENGDEVEMSEFee:Transportation:09
// if (feeExists('TD009', 'NEW')) {
// 	feeCodeName = 'TD009';
// 	feeCodeAmount = Math.ceil((feeQty(feeCodeName)*1)/1000) * 5585;
// 	br_nch('EngineeringFee:TransItemsAssess');
// 	}

// DISABLED: ENGDEVEMSEFee:Transportation:10
// if (feeExists('TD010', 'NEW')) {
// 	feeCodeName = 'TD010';
// 	feeCodeAmount = feeQty(feeCodeName)*3722;
// 	br_nch('EngineeringFee:TransItemsAssess');
// 	}

// DISABLED: ENGDEVEMSEFee:Transportation:11
// if (feeExists('TD011', 'NEW')) {
// 	feeCodeName = 'TD011';
// 	feeCodeAmount = feeQty(feeCodeName)*92;
// 	br_nch('EngineeringFee:TransItemsAssess');
// 	}

// DISABLED: ENGDEVEMSEFee:Transportation:12
// if (feeExists('TD012', 'NEW')) {
// 	feeCodeName = 'TD012';
// 	feeCodeAmount = feeQty(feeCodeName)*1163;
// 	br_nch('EngineeringFee:TransItemsAssess');
// 	}

// DISABLED: ENGDEVEMSEFee:Transportation:13
// if (feeExists('TD013', 'NEW')) {
// 	feeCodeName = 'TD013';
// 	feeCodeAmount = feeQty(feeCodeName)*23271;
// 	br_nch('EngineeringFee:TransItemsAssess');
// 	}

}
//end replaced branch: ENGDEVEMSEFee:Transportation;

//replaced branch(ENGDEVEMSEFee:Drainage)
engDevFeeDrainage();

//start replaced branch: ENGDEVEMSEFee:CD_Deposit
 {
var totalValCalUnits = getSumUnitAmount();
var feeAmount = 0;
if (feeExists('CD001','NEW') && calcValue>100000) {
	if (totalValCalUnits >= 1000 && totalValCalUnits <= 9999) feeAmount = 5000;
	}

if (feeExists('CD001','NEW') && calcValue>100000) {
	if (totalValCalUnits >= 10000 && totalValCalUnits <= 19999) feeAmount = 10000;
	}

if (feeExists('CD001','NEW') && calcValue>100000) {
	if (totalValCalUnits >= 20000) feeAmount = 15000;
	}

removeFee('CD001','FINAL');
if (feeAmount > 0) {
	updateFee('CD001', 'ENG_DEVIMPACT', 'FINAL', feeAmount, 'N');
	}

var recCDDChildId = childGetByCapType('Engineering/Environmental/CDD/NA',null,capId);
if (recCDDChildId != null && feeAmount > 0) {
	editAppSpecific('CD INFORMATION.CD Deposit Fee',feeAmount,recCDDChildId);
	}

}
//end replaced branch: ENGDEVEMSEFee:CD_Deposit;

//start replaced branch: ENGDEVEMSEFee:CD_Admin
 {
var totalValCalUnits = getSumUnitAmount();
var feeAmount = 0;
if (feeExists('CD002','NEW') && calcValue>100000) {
	if (totalValCalUnits <= 5000) feeAmount = 250;
	}

if (feeExists('CD002','NEW') && calcValue>100000) {
	if (totalValCalUnits >= 5000 && totalValCalUnits <= 9999) feeAmount = 500;
	}

if (feeExists('CD002','NEW') && calcValue>100000) {
	if (totalValCalUnits >= 10000 && totalValCalUnits <= 19999) feeAmount = 750;
	}

if (feeExists('CD002','NEW') && calcValue>100000) {
	if (totalValCalUnits >= 20000) feeAmount = 1000;
	}

removeFee('CD002','FINAL');
if (feeAmount > 0) {
	updateFee('CD002', 'ENG_DEVIMPACT', 'FINAL', feeAmount, 'N');
	}

var recCDDChildId = childGetByCapType('Engineering/Environmental/CDD/NA',null,capId);
if (recCDDChildId != null & feeAmount > 0) {
	editAppSpecific('CD INFORMATION.CD Admin Fee',feeAmount,recCDDChildId);
	}

}
//end replaced branch: ENGDEVEMSEFee:CD_Admin;

