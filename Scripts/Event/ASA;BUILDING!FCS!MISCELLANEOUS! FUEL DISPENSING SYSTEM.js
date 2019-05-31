
// TODO:  this code (and other's like it) are replicated at the individual record type level.  The number of scripts can be drastically removed if this logic is refactored at the module level 
if (validateGisObjects()) {
	//replaced branch(BLD:EMSEUpdateGISObjects)
	bldUpdateGisObjects();
}
