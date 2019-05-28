
if (validateGisObjects()) {
	//replaced branch(FD:EMSE:UpdateGISObjects)
	fdUpdateGisObjects();
}

editFirePermitsASITableRow(capId, 'PERMITS', 'Permit Desc', 'Refresh', 'Refresh', 'Refresh', false);

//start replaced branch: FD:EMSE:SITEINFO_PROCESS_FEES
{
	if (typeof(PERMITS) == 'object') {
		permitFees = loadFees();
		for (ff in permitFees)
			//start replaced branch: FD:EMSE:SITEINFO_DELETE_FEES_LOOP
		{
			thisFee = permitFees[ff];
			vFeeCode = thisFee.code;
			vFeeItemSeq = thisFee.sequence;
			vFeeExists = false;
			for (xx in PERMITS)
				if (PERMITS[xx]['Fee Item Seq'] == vFeeItemSeq)
					vFeeExists = true;
			for (xx in INSPECTIONTYPES)
				if (INSPECTIONTYPES[xx]['Fee Item Seq'] == vFeeItemSeq)
					vFeeExists = true;
			for (xx in FEESANDCHARGES)
				if (FEESANDCHARGES[xx]['Fee Item Seq'] == vFeeItemSeq)
					vFeeExists = true;
			if (!vFeeExists && !matches(vFeeCode, 'FDROP1020', 'FDROP1030')) {
				removeFee(thisFee.code, thisFee.period);
			}

		}
		//end replaced branch: FD:EMSE:SITEINFO_DELETE_FEES_LOOP;
	}

	if (typeof(PERMITS) == 'object') {
		for (x in PERMITS)
			//start replaced branch: FD:EMSE:SITEINFO_ASSESS_PERMIT_FEES_LOOP
		{
			permitDesc = PERMITS[x]['Permit Desc'].toString();
			//logDebug('PERMITS[x][Fee Item Seq]: ' + PERMITS[x]['Fee Item Seq'].toString());
			logDebug('permit desc: ' + permitDesc);
			if (!feeExists(lookup('FD Permit', permitDesc), 'NEW', 'INVOICED')) {
				feeItemSeq = addFee(lookup('FD Permit', permitDesc), 'FD_OPERATING', 'FINAL', 1, 'N');
				if (feeItemSeq)
					editFirePermitsASITableRow(capId, 'PERMITS', 'Permit Desc', permitDesc, 'Fee Item Seq', feeItemSeq.toString(), false);
			}

		}
		//end replaced branch: FD:EMSE:SITEINFO_ASSESS_PERMIT_FEES_LOOP;
	}

	if (typeof(INSPECTIONTYPES) == 'object') {
		for (x in INSPECTIONTYPES)
			//start replaced branch: FD:EMSE:SITEINFO_ASSESS_INSP_FEES_LOOP
		{
			inspType = INSPECTIONTYPES[x]['Inspection Type'].toString();
			qty = INSPECTIONTYPES[x]['Quantity'];
			if (!feeExists(lookup('FD_FLDINSPTYPE', INSPECTIONTYPES[x]['Inspection Type'], 'NEW', 'INVOICED'))) {
				feeItemSeq = addFee(lookup('FD_FLDINSPTYPE', INSPECTIONTYPES[x]['Inspection Type']), 'FD_FLDINSP', 'FINAL', qty, 'N');
				if (feeItemSeq)
					editFirePermitsASITableRow(capId, 'INSPECTION TYPES', 'Inspection Type', inspType.toString(), 'Fee Item Seq', feeItemSeq.toString(), false);
			}

		}
		//end replaced branch: FD:EMSE:SITEINFO_ASSESS_INSP_FEES_LOOP;
	}

	if (typeof(REDUCTIONS) == 'object') {

		//start replaced branch: FD:EMSE:SITEINFO_APPLY_FEE_REDUCTIONS
		{
			var feeRecTotalNew = 0;
			var isFeeWaived = false;
			var isNonProfit = false;
			for (x in PERMITS)
				feeRecTotalNew += feeAmount(lookup('FD Permit', PERMITS[x]['Permit Desc']), 'NEW');
			comment('What is Fee Record Total for NEW $ ' + feeRecTotalNew);
			for (x in INSPECTIONTYPES)
				feeRecTotalNew += feeAmount(lookup('FD_FLDINSPTYPE', INSPECTIONTYPES[x]['Inspection Type']), 'NEW');
			comment('What is Fee Record Total for NEW $ ' + feeRecTotalNew);
			if (feeRecTotalNew > 0) {
				for (x in REDUCTIONS)
					if (matches(REDUCTIONS[x]['Description'], 'Fee Waived per District Policy'))
						isFeeWaived = true;
			}

			if (feeRecTotalNew > 0) {
				for (x in REDUCTIONS)
					if (matches(REDUCTIONS[x]['Description'], 'Non-Profit Organization Fee Reduction'))
						isNonProfit = true;
			}

			if (isFeeWaived && !isNonProfit && feeExists('FDROP1020', 'NEW')) {
				feeItemSeq = getFeeSeqNbr('FDROP1020', 'NEW');
				updateFee('FDROP1020', 'FD_OPERATING', 'FINAL', feeRecTotalNew, 'N', feeItemSeq.toString());
			}

			if (isFeeWaived && !isNonProfit && !feeExists('FDROP1020', 'NEW')) {
				feeItemSeq = addFee('FDROP1020', 'FD_OPERATING', 'FINAL', feeRecTotalNew, 'N');
			}

			if (isNonProfit && feeExists('FDROP1030', 'NEW')) {
				feeItemSeq = getFeeSeqNbr('FDROP1030', 'NEW');
				updateFee('FDROP1030', 'FD_OPERATING', 'FINAL', feeRecTotalNew * .5, 'N', feeItemSeq.toString());
			}

			if (isNonProfit && !feeExists('FDROP1030', 'NEW')) {
				feeItemSeq = addFee('FDROP1030', 'FD_OPERATING', 'FINAL', feeRecTotalNew * .5, 'N');
			}

			if (isNonProfit && isFeeWaived && feeExists('FDROP1020', 'NEW')) {
				feeItemSeq = getFeeSeqNbr('FDROP1020', 'NEW');
				updateFee('FDROP1030', 'FD_OPERATING', 'FINAL', feeRecTotalNew * .5, 'N', feeItemSeq.toString());
			}

			if (isNonProfit && isFeeWaived && !feeExists('FDROP1020', 'NEW')) {
				feeItemSeq = addFee('FDROP1020', 'FD_OPERATING', 'FINAL', feeRecTotalNew * .5, 'N');
			}

		}
		//end replaced branch: FD:EMSE:SITEINFO_APPLY_FEE_REDUCTIONS;
	}

	if (typeof(FEESANDCHARGES) == 'object') {
		for (x in FEESANDCHARGES)
			//start replaced branch: FD:EMSE:SITEINFO_ASSESS_FEES_CHARGES_FEES_LOOP
		{
			charge = FEESANDCHARGES[x]['Charge'].toString();
			qty = FEESANDCHARGES[x]['Quantity'];
			if (!feeExists(lookup('FD_FEESANDCHARGES', FEESANDCHARGES[x]['Charge'], 'NEW', 'INVOICED'))) {
				feeItemSeq = addFee(lookup('FD_FEESANDCHARGES', FEESANDCHARGES[x]['Charge']), 'FD_FLDINSP', 'FINAL', qty, 'N');
				if (feeItemSeq)
					editFirePermitsASITableRow(capId, 'FEES AND CHARGES', 'Charge', charge.toString(), 'Fee Item Seq', feeItemSeq.toString(), false);
			}

		}
		//end replaced branch: FD:EMSE:SITEINFO_ASSESS_FEES_CHARGES_FEES_LOOP;
	}

	comment('What is Invoice Fees= ' + AInfo['Invoice Fees']);
	if (AInfo['INTERNAL USE ONLY.Invoice Fees'] == 'Yes') {
		invoiceFees = loadFees();
		for (ii in invoiceFees)
			//start replaced branch: FD:EMSE:SITEINFO_INVOICE_FEES_LOOP
		{
			thisFee = aa.fee.getFeeItemByPK(capId, invoiceFees[ii].sequence).getOutput();
			feeSchedule = thisFee.getFeeSchudle();
			//logDebug('schedule: ' + feeSchedule);
			if (invoiceFees[ii].status == 'NEW' && feeSchedule == 'FD_OPERATING' && !matches(invoiceFees[ii].code, 'FDROP1020', 'FDROP1030')) {
				feeItemSeq = invoiceFees[ii].sequence;
				invoiceFee(invoiceFees[ii].code, invoiceFees[ii].period);
				editFirePermitsASITableRow(capId, 'PERMITS', 'Fee Item Seq', feeItemSeq.toString(), 'Fee Item Seq', feeItemSeq.toString(), true);
			}

			if (invoiceFees[ii].status == 'NEW' && feeSchedule == 'FD_FLDINSP') {
				feeItemSeq = invoiceFees[ii].sequence;
				invoiceFee(invoiceFees[ii].code, invoiceFees[ii].period);
				editFirePermitsASITableRow(capId, 'INSPECTION TYPES', 'Fee Item Seq', feeItemSeq.toString(), 'Fee Item Seq', feeItemSeq.toString(), true);
				editFirePermitsASITableRow(capId, 'FEES AND CHARGES', 'Fee Item Seq', feeItemSeq.toString(), 'Fee Item Seq', feeItemSeq.toString(), true);
			}

			if (invoiceFees[ii].status == 'NEW' && matches(invoiceFees[ii].code, 'FDROP1020', 'FDROP1030')) {
				feeItemSeq = invoiceFees[ii].sequence;
				invoiceFee(invoiceFees[ii].code, invoiceFees[ii].period);
			}

		}
		//end replaced branch: FD:EMSE:SITEINFO_INVOICE_FEES_LOOP;
	}

}
//end replaced branch: FD:EMSE:SITEINFO_PROCESS_FEES;
//replaced branch(EMSE:Fire:WorkflowTaskAssignment)
fireWorkflowTaskAssignment();
if (AInfo['NEW Business Name'] != '') {
	var asiFieldValue = getAppSpecific('BUSINESS NAME.NEW Business Name');
	editAppName(asiFieldValue);
}

// DISABLED: ASIUA:Fire/Site Info/NA/NA:z30
// var rcFireInspArea = getGISInfoArray2('CITYOFRC','Fire Inspection Areas','Id',-5,'Feet');
// var rcVHFHSZ = getGISInfoArray2('CITYOFRC','VHFSZ','HAZ_CLASS',-5,'Feet');
// var rcFirstDueBoundary = getGISInfoArray2('CITYOFRC','First Due Boundary','FIRSTDUE_',-5,'Feet');
// var rcIsVacant = getGISInfo2('CITYOFRC','Parcels','VACANT', -5, 'Feet');
// DISABLED: ASIUA:Fire/Site Info/NA/NA:z40
// if (rcFireInspArea.length == 0) {
// 	editAppSpecific('GIS INFO.Inspection Area','N/A');
//	} else {
// 	editAppSpecific('GIS INFO.Inspection Area',rcFireInspArea.toString());
// 	}

// DISABLED: ASIUA:Fire/Site Info/NA/NA:z50
// if (!rcVHFHSZ || rcVHFHSZ.length == 0) {
// 	editAppSpecific('GIS INFO.VHFHSZ','N/A');
//	} else {
// 	editAppSpecific('GIS INFO.VHFHSZ',rcVHFHSZ.toString());
// 	}

// DISABLED: ASIUA:Fire/Site Info/NA/NA:z60
// if (rcFirstDueBoundary.length == 0 || !rcFirstDueBoundary) {

// 	editAppSpecific('GIS INFO.Fire Station','N/A');
//	} else {
// 	editAppSpecific('GIS INFO.Fire Station',rcFirstDueBoundary.toString());
// 	}

// DISABLED: ASIUA:Fire/Site Info/NA/NA:z70
// if (rcIsVacant == 'YES') {
// 	editAppSpecific('GIS INFO.Weed Abatement Area',rcIsVacant.toString());
//	} else {
// 	editAppSpecific('GIS INFO.Weed Abatement Area','NO');
// 	}

// DISABLED: ASIUA:Fire/Site Info/NA/NA:z90
// email( 'awilliams@accela.com', 'tst_awilliams@accela.com','ASIUA from Rancho for: ' + capId.getCustomID(), debug);
