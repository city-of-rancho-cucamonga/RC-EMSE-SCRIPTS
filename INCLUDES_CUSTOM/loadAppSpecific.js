function loadAppSpecific(thisArr) {
	// 
	// Returns an associative array of App Specific Info
	// Optional second parameter, cap ID to load from
  //
  // Custom for CITYOFRC, as useAppSpecificGroupName needs to be true, yet 
  // Accela won't let us customize INCLUDES_ACCELA_GLOBALS.
	useAppSpecificGroupName = true;
  //
  //
	var itemCap = capId;
	if (arguments.length == 2) itemCap = arguments[1]; // use cap ID specified in args

    	var appSpecInfoResult = aa.appSpecificInfo.getByCapID(itemCap);
	if (appSpecInfoResult.getSuccess())
	 	{
		var fAppSpecInfoObj = appSpecInfoResult.getOutput();

		for (loopk in fAppSpecInfoObj)
			{
			if (useAppSpecificGroupName)
				thisArr[fAppSpecInfoObj[loopk].getCheckboxType() + "." + fAppSpecInfoObj[loopk].checkboxDesc] = fAppSpecInfoObj[loopk].checklistComment;
			else
				thisArr[fAppSpecInfoObj[loopk].checkboxDesc] = fAppSpecInfoObj[loopk].checklistComment;
			}
		}
	}

 
