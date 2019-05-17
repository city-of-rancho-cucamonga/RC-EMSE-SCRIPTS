function bldPlumbingFee() {

newPlbTotal = 0;

//replaced branch(BuildingPlumbingFee:Lookup)
bldPlumbingFeeLookup();
// DISABLED: BLDEMSEFee:PlumbingFee:z03
// if (newPlbTotal > 0) {
// 	updateFee('PLMRESPLN','BLD_PLM_RES','FINAL',newPlbTotal*1.019*1.020*1.025*1.024*1.025,'N');
// 	updateFee('PLMRESINSP','BLD_PLM_RES','FINAL',newPlbTotal*1.019*1.020*1.025*1.024*1.025,'N');
// 	}

}
