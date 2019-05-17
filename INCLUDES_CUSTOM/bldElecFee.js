function bldElecFee() {

newEleTotal = 0;

//replaced branch(BuildingElectricalFee:Lookup)
bldElecFeeLookup();
// DISABLED: BLDEMSEFee:ElectricalFee:z09
// if (newEleTotal > 0) {
// 	updateFee('ELERESPLN','BLD_ELE_RES','FINAL',newEleTotal*1.019*1.020*1.025*1.024*1.025,'N');
// 	updateFee('ELERESINSP','BLD_ELE_RES','FINAL',newEleTotal*1.019*1.020*1.025*1.024*1.025,'N');
// 	}

}
