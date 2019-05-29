function engDevFeeDrainage() {

	var drainageFeeExists = false;
	if (feeExists('DR001', 'NEW')) {
		drainageFeeExists = true;
		removeFee('DR001', 'FINAL');
	}

	if (drainageFeeExists && typeof(DRAINAGEAREA) == 'object') {
		for (xxx in DRAINAGEAREA)
			if (DRAINAGEAREA[xxx]['Drainage Area'] == 'General City Drainage Area' && DRAINAGEAREA[xxx]['Lot Size (Acres)'] != null)
				updateFee('DR001', 'ENG_DEVIMPACT', 'FINAL', DRAINAGEAREA[xxx]['Lot Size (Acres)'], 'N');
	}

	if (feeExists('DR002', 'NEW')) {
		drainageFeeExists = true;
		removeFee('DR002', 'FINAL');
	} else {
		drainageFeeExists = false;
	}

	if (drainageFeeExists && typeof(DRAINAGEAREA) == 'object') {
		for (xxx in DRAINAGEAREA)
			if (DRAINAGEAREA[xxx]['Etiwanda Regional Mainline'] == 'Upper Etiwanda' && DRAINAGEAREA[xxx]['Lot Size (Acres)'] != null)
				updateFee('DR002', 'ENG_DEVIMPACT', 'FINAL', DRAINAGEAREA[xxx]['Lot Size (Acres)'], 'N');
	}

	if (feeExists('DR003', 'NEW')) {
		drainageFeeExists = true;
		removeFee('DR003', 'FINAL');
	} else {
		drainageFeeExists = false;
	}

	if (drainageFeeExists && typeof(DRAINAGEAREA) == 'object') {
		for (xxx in DRAINAGEAREA)
			if (DRAINAGEAREA[xxx]['Etiwanda Regional Mainline'] == 'San Sevaine' && DRAINAGEAREA[xxx]['Lot Size (Acres)'] != null)
				updateFee('DR003', 'ENG_DEVIMPACT', 'FINAL', DRAINAGEAREA[xxx]['Lot Size (Acres)'], 'N');
	}

	if (feeExists('DR005', 'NEW')) {
		drainageFeeExists = true;
		removeFee('DR005', 'FINAL');
	} else {
		drainageFeeExists = false;
	}

	if (drainageFeeExists && typeof(DRAINAGEAREA) == 'object') {
		for (xxx in DRAINAGEAREA)
			if (DRAINAGEAREA[xxx]['Etiwanda Secondary Regional'] == 'Henderson / Wardman' && DRAINAGEAREA[xxx]['Lot Size (Acres)'] != null)
				updateFee('DR005', 'ENG_DEVIMPACT', 'FINAL', DRAINAGEAREA[xxx]['Lot Size (Acres)'], 'N');
	}

	if (feeExists('DR006', 'NEW')) {
		drainageFeeExists = true;
		removeFee('DR006', 'FINAL');
	} else {
		drainageFeeExists = false;
	}

	if (drainageFeeExists && typeof(DRAINAGEAREA) == 'object') {
		for (xxx in DRAINAGEAREA)
			if (DRAINAGEAREA[xxx]['Etiwanda Secondary Regional'] == 'Hawker-Crawford' && DRAINAGEAREA[xxx]['Lot Size (Acres)'] != null)
				updateFee('DR006', 'ENG_DEVIMPACT', 'FINAL', DRAINAGEAREA[xxx]['Lot Size (Acres)'], 'N');
	}

	if (feeExists('DR007', 'NEW')) {
		drainageFeeExists = true;
		removeFee('DR007', 'FINAL');
	} else {
		drainageFeeExists = false;
	}

	if (drainageFeeExists && typeof(DRAINAGEAREA) == 'object') {
		for (xxx in DRAINAGEAREA)
			if (DRAINAGEAREA[xxx]['Etiwanda Secondary Regional'] == 'Victoria Basin' && DRAINAGEAREA[xxx]['Lot Size (Acres)'] != null)
				updateFee('DR007', 'ENG_DEVIMPACT', 'FINAL', DRAINAGEAREA[xxx]['Lot Size (Acres)'], 'N');
	}

	if (feeExists('DR008', 'NEW')) {
		drainageFeeExists = true;
		removeFee('DR008', 'FINAL');
	} else {
		drainageFeeExists = false;
	}

	if (drainageFeeExists && typeof(DRAINAGEAREA) == 'object') {
		for (xxx in DRAINAGEAREA)
			if (DRAINAGEAREA[xxx]['Etiwanda Secondary Regional'] == 'Upper Etiwanda Interceptor' && DRAINAGEAREA[xxx]['Lot Size (Acres)'] != null)
				updateFee('DR008', 'ENG_DEVIMPACT', 'FINAL', DRAINAGEAREA[xxx]['Lot Size (Acres)'], 'N');
	}

	if (feeExists('DR009', 'NEW')) {
		drainageFeeExists = true;
		removeFee('DR009', 'FINAL');
	} else {
		drainageFeeExists = false;
	}

	if (drainageFeeExists && typeof(DRAINAGEAREA) == 'object') {
		for (xxx in DRAINAGEAREA)
			if (DRAINAGEAREA[xxx]['Etiwanda Master Plan'] == 'Upper Etiwanda' && DRAINAGEAREA[xxx]['Lot Size (Acres)'] != null)
				updateFee('DR009', 'ENG_DEVIMPACT', 'FINAL', DRAINAGEAREA[xxx]['Lot Size (Acres)'], 'N');
	}

	if (feeExists('DR010', 'NEW')) {
		drainageFeeExists = true;
		removeFee('DR010', 'FINAL');
	} else {
		drainageFeeExists = false;
	}

	if (drainageFeeExists && typeof(DRAINAGEAREA) == 'object') {
		for (xxx in DRAINAGEAREA)
			if (DRAINAGEAREA[xxx]['Etiwanda Master Plan'] == 'San Sevaine' && DRAINAGEAREA[xxx]['Lot Size (Acres)'] != null)
				updateFee('DR010', 'ENG_DEVIMPACT', 'FINAL', DRAINAGEAREA[xxx]['Lot Size (Acres)'], 'N');
	}

	if (feeExists('DR011', 'NEW')) {
		drainageFeeExists = true;
		removeFee('DR011', 'FINAL');
	} else {
		drainageFeeExists = false;
	}

	if (drainageFeeExists && typeof(DRAINAGEAREA) == 'object') {
		for (xxx in DRAINAGEAREA)
			if (DRAINAGEAREA[xxx]['Etiwanda Master Plan'] == 'Lower Etiwanda' && DRAINAGEAREA[xxx]['Lot Size (Acres)'] != null)
				updateFee('DR011', 'ENG_DEVIMPACT', 'FINAL', DRAINAGEAREA[xxx]['Lot Size (Acres)'], 'N');
	}

	if (feeExists('DR012', 'NEW')) {
		drainageFeeExists = true;
		removeFee('DR012', 'FINAL');
	} else {
		drainageFeeExists = false;
	}

	if (drainageFeeExists && typeof(DRAINAGEAREA) == 'object') {
		for (xxx in DRAINAGEAREA)
			if (DRAINAGEAREA[xxx]['Etiwanda Master Plan'] == 'Middle Etiwanda' && DRAINAGEAREA[xxx]['Lot Size (Acres)'] != null)
				updateFee('DR012', 'ENG_DEVIMPACT', 'FINAL', DRAINAGEAREA[xxx]['Lot Size (Acres)'], 'N');
	}

	if (feeExists('DR004', 'NEW')) {
		drainageFeeExists = true;
		removeFee('DR004', 'FINAL');
	} else {
		drainageFeeExists = false;
	}

}
