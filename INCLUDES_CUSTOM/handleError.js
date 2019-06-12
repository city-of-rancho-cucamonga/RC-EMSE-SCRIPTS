function handleError(err, context) {
	var rollBack = true;
	var showError = true;

	if (showError)
		showDebug = true;
	logDebug((rollBack ? "**ERROR** " : "ERROR: ") + err.message + " In " + context + " Line " + err.lineNumber);
	logDebug(" Stack: " + err.stack);

	var headers = aa.util.newHashMap();

	headers.put("Content-Type", "application/json");

	var body = {};
	body.text = aa.getServiceProviderCode() + ":" + ENVIRON + ":" + err.message + " In " + context + " Line " + err.lineNumber + " Stack: " + err.stack;
	body.attachments = [{"fallback": "Full Debug Output"}];
	body.attachments[0].text = debug;

	var result = aa.httpClient.post(SLACKURL, headers, JSON.stringify(body));
	if (!result.getSuccess()) {
		logDebug("Slack get anonymous token error: " + result.getErrorMessage());
	} else {
		aa.print("Slack Results: " + result.getOutput());
	}
}
