function bldWQMFee() {

newWQMTotal = 0;

//start replaced branch: BuildingWQMFee:Lookup
 {
if (typeof(WQMPINFORMATIONDETAIL) == 'object') {
	for (xxx in WQMPINFORMATIONDETAIL) if (WQMPINFORMATIONDETAIL [xxx]['Type of Use'] == 'WQMP Plan Review' && WQMPINFORMATIONDETAIL [xxx]['Quantity']<=5) newWQMTotal += parseFloat(WQMPINFORMATIONDETAIL [xxx]['Quantity']) * 380.67;
	}

if (typeof(WQMPINFORMATIONDETAIL) == 'object') {
	for (xxx in WQMPINFORMATIONDETAIL) if (WQMPINFORMATIONDETAIL [xxx]['Type of Use'] == 'WQMP Plan Review' && WQMPINFORMATIONDETAIL [xxx]['Quantity']>5) newWQMTotal += Math.ceil(WQMPINFORMATIONDETAIL [xxx]['Quantity']/5) * 126.89;
	}

}
//end replaced branch: BuildingWQMFee:Lookup;
if (newWQMTotal > 0) {
	updateFee('WQM020','BLD_WQMP','FINAL', newWQMTotal*1.019*1.020*1.025*1.024*1.025,'N');
	}

}
