function copyPermitsToPermitHistoryASIT(tableCapId) {
	var tableArr = loadASITable("PERMITS", tableCapId);
	var tssmResult = aa.appSpecificTableScript.removeAppSpecificTableInfos("PERMITS HISTORY", tableCapId, "ADMIN");
	if (tableArr) {
		for (var r in tableArr) {

			var rowArr = new Array();
			var tempArr = new Array();

			for (var col in tableArr[r]) {
				var tVal = new asiTableValObj(tableArr[r][col].columnName, tableArr[r][col].fieldValue, tableArr[r][col].readOnly);

				var tVal = tableArr[r][col];
				//bizarre string conversion - just go with it
				var colName = new String(tableArr[r][col].columnName.toString());
				colName = colName.toString();
				tempArr[colName] = tVal;
			}
			rowArr.push(tempArr);
			//for (var val in rowArr) for (var c in rowArr[val]) aa.print("Value " + c + ": " + rowArr[val][c]);
			addASITable("PERMITS HISTORY", rowArr, tableCapId);

		}
	} //end loop
}
