function updateInvoiceLevel(c, iObj, newLevel) {
	var i = iObj.getInvoiceModel()
		editResult = aa.finance.editInvoice(c,
			i.getInvNbr(),
			newLevel,
			i.getInvStatus(),
			i.getInvStatusDate() ? aa.date.parseDate(i.getInvStatusDate()) : null,
			i.getBalanceDue(),
			i.getInvAmount(),
			i.getInvDate() ? aa.date.parseDate(i.getInvDate()) : null,
			i.getInvDueDate() ? aa.date.parseDate(i.getInvDueDate()) : null,
			i.getInvComment(),
			i.getInvBatchNbr(),
			i.getInvBatchDate() ? aa.date.parseDate(i.getInvBatchDate()) : null,
			i.getUdf1(),
			i.getUdf2(),
			i.getUdf3(),
			i.getUdf4(),
			i.getPrintInvNbr(),
			i.getAuditDate() ? aa.date.parseDate(i.getAuditDate()) : null,
			i.getAuditStatus())

		if (editResult.getSuccess())
			logDebug("Updated invoice to level " + newLevel + " successfully.");
		else
			logMessage("ERROR", "ERROR: updating invoice level " + newLevel + " The reason is " + editResult.getErrorType() + ":" + editResult.getErrorMessage());
}
