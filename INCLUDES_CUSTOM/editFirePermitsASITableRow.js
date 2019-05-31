function editFirePermitsASITableRow(tableCapId, tableName, keyName, keyValue, editName, editValue, readOnly) {
	var tableArr = loadASITable(tableName, tableCapId);
	var tssmResult = aa.appSpecificTableScript.removeAppSpecificTableInfos(tableName, tableCapId, "ADMIN");
	if (tableArr) {
		for (var r in tableArr) {

			var keyVal = new String(keyValue.toString());
			var sourceVal = new String(tableArr[r][keyName].toString());
			if (sourceVal && sourceVal == "")
				continue;

			if (sourceVal && sourceVal.trim() != keyValue.trim()) {
				var rowArr = new Array();
				var tempArr = new Array();

				for (var col in tableArr[r]) {
					var tVal = new asiTableValObj(tableArr[r][col].columnName, tableArr[r][col].fieldValue, tableArr[r][col].readOnly);

					//logDebug("tableArr[r][col].readOnly: " + tableArr[r][col].readOnly);

					var tVal = tableArr[r][col];
					//bizarre string conversion - just go with it
					var colName = new String(tableArr[r][col].columnName.toString());
					colName = colName.toString();
					tempArr[colName] = tVal;
				}
				rowArr.push(tempArr);
				//for (var val in rowArr) for (var c in rowArr[val]) aa.print("Value " + c + ": " + rowArr[val][c]);
				addASITable(tableName, rowArr, tableCapId);
			} else {
				logDebug(" Editing row " + r);
				var rowArr = new Array();
				var tempArr = new Array();
				for (var col in tableArr[r]) {
					if (tableArr[r][col].columnName.toString() == editName) {
						var tVal = tableArr[r][col];
						tVal.fieldValue = editValue;

						if (readOnly)
							tVal.readOnly = "Y";
					} else {
						var tVal = tableArr[r][col];
					}

					if (matches(tableArr[r][col].columnName.toString(), "Permit Desc", "Inspection Type", "Charge", "Quantity") && readOnly) {
						tVal.readOnly = "Y";
					}

					if (tableArr[r][col].columnName.toString() == "Fee Item Seq")
						tVal.readOnly = "Y";

					//bizarre string conversion - just go with it
					var colName = new String(tableArr[r][col].columnName.toString());
					colName = colName.toString();
					tempArr[colName] = tVal;
				}
				rowArr.push(tempArr);
				//for (var val in rowArr) for (var c in rowArr[val]) aa.print("Value " + c + ": " + rowArr[val][c]);
				addASITable(tableName, rowArr, tableCapId);
			}
		}
	} //end loop
}
