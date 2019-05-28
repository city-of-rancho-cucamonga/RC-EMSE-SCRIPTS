
if (AInfo['Gross Annual Receipts'] < 40000) {
	feeCode = 'LIC_BUS_GEN';
} else {
	feeCode = 'LIC_BUS_GENM';
}

updateFee(feeCode, 'LIC_BUSINESS_GENERAL', 'FINAL', 1, 'Y');
if (!feeEstimate) {

	//start replaced branch: LIC Create Public User and Link
	{
		if (AInfo['Create Public User Account?'] == 'Yes') {
			onlineUser = createPublicUserFromContact();
		} else {
			onlineUser = null;
		}

		if (onlineUser) {
			attachResult = aa.cap.updateCreatedAccessBy4ACA(capId, 'PUBLICUSER' + onlineUser.getUserSeqNum(), 'Y', 'Y');
		}

	}
	//end replaced branch: LIC Create Public User and Link;
}
