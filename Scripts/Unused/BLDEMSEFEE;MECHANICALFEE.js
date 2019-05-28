
newMecTotal = 0;

//replaced branch(BuildingMechanicalFee:Lookup)
bldMechFeeLookup();
comment('what is newMecTotal = $' + newMecTotal);
if (newMecTotal > 0) {
	updateFee('MECHRESPLN','BLD_MECH_RES','FINAL',newMecTotal,'N');
	updateFee('MECHRESINSP','BLD_MECH_RES','FINAL',newMecTotal,'N');
	}

