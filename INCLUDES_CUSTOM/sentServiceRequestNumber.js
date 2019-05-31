logDebug("CIVICA INTERFACE: Inside function sentServiceRequestNumber()");
logDebug("CIVICA INTERFACE: parameter url = " + url);
var num = url.indexOf("/", 8);

logDebug("CIVICA INTERFACE: num=url.indexOf('/',8).  num = " + num + ".  If this value is not -1, will attempt call to Civica service");

if (num != -1) {
	var server = url.slice(0, num + 1)
		var str = getAppSpecific("COMPLAINT INFORMATION.CRM Service Request #");
	var content = "";
	content += '<?xml version="1.0" encoding="utf-8"?>';
	content += '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'
	content += '<soap:Body>';
	content += '<SendClosureNotification xmlns="http://tempuri.org/">'
	content += '<requestId>' + str + '</requestId>'
	content += '</SendClosureNotification>'
	content += '</soap:Body></soap:Envelope>'

	logDebug("CIVICA INTERFACE: SOAP MESSAGE: " + content);

	var result = aa.util.httpPostToSoapWebService(url, content, null, null, "http://tempuri.org/SendClosureNotification")
		var status = String(result.getOutput())

		logDebug("CIVICA INTERFACE: Soap Web Service RESPONSE: " + status);

	var num = status.indexOf("Success")
		if (num != -1) {
			comment("<b>CIVICA INTERFACE:</b> Notification to the Civica CRM system was successful.");
		} else {
			comment("<b>CIVICA INTERFACE: Error message returned from the Civica CRM system.</b>");
			comment("<b>CIVICA INTERFACE: RESPONSE MESSAGE:</b> " + status);
		}

} else {
	comment("CIVICA INTERFACE: ERROR: Civica Service call was not attempted due to url validation.  num = " + num);
}
}
