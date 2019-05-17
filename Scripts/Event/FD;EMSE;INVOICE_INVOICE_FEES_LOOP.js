
thisFee = aa.fee.getFeeItemByPK(capId,invoiceFees[ii].sequence).getOutput();
feeSchedule = thisFee.getFeeSchudle();
//logDebug('schedule: ' + feeSchedule);
if (invoiceFees[ii].status=='NEW' && feeSchedule=='FD_OPERATING' && !matches(invoiceFees[ii].code,'FDROP1020','FDROP1030')) {
	feeItemSeq = invoiceFees[ii].sequence;
	invoiceFee(invoiceFees[ii].code, invoiceFees[ii].period);
	editFirePermitsASITableRow(capId, 'PERMITS', 'Fee Item Seq', feeItemSeq.toString(), 'Fee Item Seq', feeItemSeq.toString(),true);
	}

if (invoiceFees[ii].status=='NEW' && feeSchedule=='FD_FLDINSP') {
	feeItemSeq = invoiceFees[ii].sequence;
	invoiceFee(invoiceFees[ii].code, invoiceFees[ii].period);
	editFirePermitsASITableRow(capId, 'INSPECTION TYPES', 'Fee Item Seq', feeItemSeq.toString(), 'Fee Item Seq', feeItemSeq.toString(),true);
	editFirePermitsASITableRow(capId, 'FEES AND CHARGES', 'Fee Item Seq', feeItemSeq.toString(), 'Fee Item Seq', feeItemSeq.toString(),true);
	}

if (invoiceFees[ii].status=='NEW' && matches(invoiceFees[ii].code,'FDROP1020','FDROP1030')) {
	feeItemSeq = invoiceFees[ii].sequence;
	invoiceFee(invoiceFees[ii].code, invoiceFees[ii].period);
	}

