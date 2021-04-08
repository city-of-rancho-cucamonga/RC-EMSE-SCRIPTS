var SLACKURL = "https://hooks.slack.com/services/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";  // from globals
var ENVIRON = lookup("EMSEToolConfig","Environment");
	
useAppSpecificGroupName = true;
// load ASI again using group name for backward compatibility.   Have to put this
// in custom area since we can't edit the new INCLUDES_ACCELA_GLOBALS
loadAppSpecific(AInfo); 
eval(getScriptText("INCLUDES_CSLB"));

if (matches(currentUserID,'SID.SIPHOMSAY','JENNIFER.QUAN','MICHELLE.FERNANDES','KYLE.WINGSON','LIZA.TUNURI')) {
	showDebug = true;
	}

	
