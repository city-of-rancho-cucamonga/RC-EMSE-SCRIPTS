function fdFeeInvoiceFireProcessFees() {

	if (typeof(FEE) == 'object') {
		for (x in FEE)
			//start replaced branch: FD:EMSE:INVOICE_ASSESS_FEES_CHARGES_FEES_LOOP
		{
			item = FEE[x]['Item'].toString();
			qty = FEE[x]['Quantity'];
			if (!feeExists(lookup('FD_FEESANDCHARGES', FEE[x]['Item'], 'NEW', 'INVOICED'))) {
				feeItemSeq = addFee(lookup('FD_FEESANDCHARGES', FEE[x]['Item']), 'FD_FLDINSP', 'FINAL', qty, 'N');
				if (feeItemSeq)
					editFirePermitsASITableRow(capId, 'FEE', 'Item', item.toString(), 'Fee Item Seq', feeItemSeq.toString(), false);
			}

			if (!feeExists(lookup('FD_FEESANDCHARGES', FEE[x]['Item'], 'NEW', 'INVOICED'))) {
				feeItemSeq = addFee(lookup('FD_FEESANDCHARGES', FEE[x]['Item']), 'FD_WEEDABATEMENT', 'FINAL', qty, 'N');
				if (feeItemSeq)
					editFirePermitsASITableRow(capId, 'FEE', 'Item', item.toString(), 'Fee Item Seq', feeItemSeq.toString(), false);
			}

		}
		//end replaced branch: FD:EMSE:INVOICE_ASSESS_FEES_CHARGES_FEES_LOOP;
	}

}
