function engSTRFee() 
//start of Engineering Street Tree Removal and Replacement Fees
{
	TRMsmallTotal = 0;	
		if (typeof(WORKITEMS) == 'object') 
		{
			for (xxx in WORKITEMS)
				if (WORKITEMS[xxx]['Type of Work'] == 'Tree Removal – Small 18” and Under')
					TRMsmallTotal += (Math.ceil(WORKITEMS[xxx]['Quantity']) * 625.00);
			comment('What is TreeRemovalSmall = ' + TRMsmallTotal);
			updateFee('STR030', 'BLD_STR', 'FINAL', TRMsmallTotal, 'N');
		}
		
	TRMmediumTotal = 0;	
		if (typeof(WORKITEMS) == 'object') 
		{
			for (xxx in WORKITEMS)
				if (WORKITEMS[xxx]['Type of Work'] == 'Tree Removal – Medium 19"-24"')
					TRMmediumTotal += (Math.ceil(WORKITEMS[xxx]['Quantity']) * 830.00);
			comment('What is TreeRemovalMedium = ' + TRMmediumTotal);
			updateFee('STR040', 'BLD_STR', 'FINAL', TRMmediumTotal, 'N');
		
		}	
		
	TRMLargeTotal = 0;	
		if (typeof(WORKITEMS) == 'object') 
		{
			for (xxx in WORKITEMS)
				if (WORKITEMS[xxx]['Type of Work'] == 'Tree Removal – Large 25"-30"')
					TRMlargeTotal += (Math.ceil(WORKITEMS[xxx]['Quantity']) * 1000.00);
			comment('What is TreeRemovalLarge = ' + TRMlargeTotal);
			updateFee('STR050', 'BLD_STR', 'FINAL', TRMlargeTotal, 'N');
		
		}	
}