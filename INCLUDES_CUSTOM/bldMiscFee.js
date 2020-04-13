function bldMiscFee() {

	newMiscTotal = 0;
	newMisc100Total = 0;
	removeFee('MI001', 'FINAL');
	removeFee('MI001.01', 'FINAL');

	//start replaced branch: BuildingMiscFee:Lookup
	{
		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Antenna')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 587;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'New Cell tower w/equipment shelter')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 1839;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Cell Site modification')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 469;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Tent or awning w/sides 200-400 sqft')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 190;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Tent/awning 401+ sqft')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 250;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Demolition multi family/commercial')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 394;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Dock levelers')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 460;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Light Standards')
					newMiscTotal += 626;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Light Standards' && (TYPESOFWORK[xxx]['Quantity'] * 1) > 5)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Quantity'] * 1) - 5) / 5) * 46;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Demising wall')
					newMiscTotal += 718;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Demising wall' && (TYPESOFWORK[xxx]['Quantity'] * 1) > 100)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Quantity'] * 1) - 100) / 100) * 157;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Storage racks and catwalks' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 501)
					newMiscTotal += 630;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Storage racks and catwalks' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 250001)
					newMiscTotal += 1260;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Storage racks and catwalks' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 250000)
					newMiscTotal += 1899;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Mezzanines and Equipment Platforms' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 501)
					newMiscTotal += 849;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Mezzanines and Equipment Platforms' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 5001)
					newMiscTotal += 1142;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Mezzanines and Equipment Platforms' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 5000)
					newMiscTotal += 1391;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Re-roofing - Commercial' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMisc100Total += 364;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Re-roofing - Commercial' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 50000)
					newMisc100Total += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 50000) / 50000) * 138;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Roof coating-Commercial')
					newMiscTotal += 521;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Solar/photovoltaic' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 498;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Solar/photovoltaic' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 250)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 250)) * 5.00;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Solar power storage system Commercial')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 1020;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'ADA or Seismic review')
					newMisc100Total += (TYPESOFWORK[xxx]['Quantity'] * 1) * 184;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Fuel dispensing system')
					newMiscTotal += 1331;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Above ground tanks')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 1331;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Shoring')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 210;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Wall opening (windows/doors) new/altered')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 390;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Block walls 3-6 ft high' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 350;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Block Walls 3-6 ft high' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 100)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 100) / 50) * 92;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Masonry pilasters')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 157;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == "Fence(wood, wrought iron, chain link) over 6' high")
					newMiscTotal += (TYPESOFWORK[xxx]['Square Footage'] * 1) * 350;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == "Flagpole over 20' high")
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 368;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Patio cover' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 364;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Patio cover' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 500) / 500) * 184;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Patio cover - pre-engineered' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 407;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Patio cover - pre-engineered' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 500) / 500) * 249;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Septic pre-inspection')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 184;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Retaining Wall' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMisc100Total += 350;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Retaining Wall' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 50)
					newMisc100Total += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 50) / 50) * 66;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == "Retaining wall over 6' high" && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMisc100Total += 456;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Barn/storage shed' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 679;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Barn/storage shed' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 500) / 500) * 249;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Partition Walls - Commercial' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 429;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Partition Walls - Commercial' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 50)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 50) / 50) * 157;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Skylights / Smoke Hatches')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 499;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Pre fab spa/hot tub')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 394;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Stairs-each flight / story')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 429;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Utility Connection' && (TYPESOFWORK[xxx]['Quantity'] * 1) > 0)
					newMiscTotal += 138;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Spray Booth' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 1112;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Spray Booth' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500)
					newMiscTotal += 446;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Sauna pre-fabricated')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 348;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Siding,stucco,brick or stone veneer' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 350;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Siding,stucco,brick or stone veneer' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 500) / 500) * 249;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Insulation/drywall' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 350;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Insulation/drywall' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 500) / 500) * 150;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Carports' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 450;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Carports' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 500) / 500) * 250;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Temporary Building/Trailer' && (TYPESOFWORK[xxx]['Quantity'] * 1) > 0)
					newMiscTotal += 626;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Balcony/Deck' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 587;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Balcony/Deck' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 500) / 500) * 403;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Demolition Residential')
					newMiscTotal += 578;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Fire place- masonry')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 643;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Fire place pre fab metal')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 447;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Garage' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 771;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Garage' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 500) / 500) * 282;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Patio enclosure' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 521;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Patio enclosure' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 500) / 500) * 249;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Patio enclosure- pre-engineered' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 433;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Patio enclosure- pre-engineered' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 500) / 500) * 249;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Relocate building')
					newMiscTotal += 981;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Interior remodel (residential)' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 450;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Interior remodel (residential)' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 500) / 500) * 315;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Mobile home- Not in MH Park')
					newMiscTotal += 983;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Vinyl lined or fiberglass swimming pool- Residential')
					newMiscTotal += 670;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Gunite swimming pool/spa - residential')
					newMiscTotal += 919;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Tile Lift and Re-lay' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMisc100Total += 457;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Tile Lift and Re-lay' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 2000)
					newMisc100Total += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 2000) / 1000) * 198;
		}

		// Rename this fee to "Residential Composition Roof"
		//if (typeof(TYPESOFWORK) == 'object') {
		//	for (xxx in TYPESOFWORK)
		//		if (TYPESOFWORK[xxx]['Type'] == 'Re-roofing - Residential' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
		//			newMisc100Total += 456;
		//}

		//if (typeof(TYPESOFWORK) == 'object') {
		//	for (xxx in TYPESOFWORK)
		//		if (TYPESOFWORK[xxx]['Type'] == 'Re-roofing - Residential' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 3500)
		//			newMisc100Total += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 3500) / 3500) * 184;
		//}

		
		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Residential Composition Roof' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMisc100Total += 276;
		}


		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Residential Composition Roof' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 2000)
					newMisc100Total += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 2000) / 1000) * 133;
		}



		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Roof framing (replacement) - residential' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMiscTotal += 341;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Roof framing (replacement) - residential' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 1000)
					newMiscTotal += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 1000) / 500) * 338;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Roof coating- Residential')
					newMiscTotal += 272;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Cabana - outdoor living area with walls')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 600;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R1 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 501)
					newMiscTotal += 1427;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R1 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 2500)
					newMiscTotal += 1427 + (Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 500) / 100) * 51.17);
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R1 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) == 2500)
					newMiscTotal += 2450;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R1 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 2500 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 10000)
					newMiscTotal += 2450 + (Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 2500) / 100) * 13.65);
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R1 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) == 10000)
					newMiscTotal += 3473;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R1 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 10000 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 50000)
					newMiscTotal += 3473 + (Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 10000) / 100) * 4.2);
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R1 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) == 50000)
					newMiscTotal += 5153;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R1 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 50000 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 100000)
					newMiscTotal += 5153 + (Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 50000) / 100) * 5.15);
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R1 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) == 100000)
					newMiscTotal += 7462;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R1 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 100000)
					newMiscTotal += 7462 + (Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 100000) / 100) * 7.46);
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R2 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 501)
					newMiscTotal += 1427;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R2 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 2500)
					newMiscTotal += 1427 + (Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 500) / 100) * 51.17);
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R2 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) == 2500)
					newMiscTotal += 2450;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R2 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 2500 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 10000)
					newMiscTotal += 2450 + (Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 2500) / 100) * 13.65);
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R2 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) == 10000)
					newMiscTotal += 3473;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R2 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 10000 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 50000)
					newMiscTotal += 3473 + (Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 10000) / 100) * 4.2);
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R2 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) == 50000)
					newMiscTotal += 5153;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R2 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 50000 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 100000)
					newMiscTotal += 5153 + (Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 50000) / 100) * 5.15);
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R2 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) == 100000)
					newMiscTotal += 7462;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R2 Major Remodels' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 100000)
					newMiscTotal += 7462 + (Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 100000) / 100) * 7.46);
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R3.1 Change of Occupancy (Build-Out Only) 24 hour care facility' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 501)
					newMiscTotal += 1295;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R3.1 Change of Occupancy (Build-Out Only) 24 hour care facility' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 500 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 2500)
					newMiscTotal += 1295 + (Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 500) / 100) * 22.31);
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R3.1 Change of Occupancy (Build-Out Only) 24 hour care facility' && (TYPESOFWORK[xxx]['Square Footage'] * 1) == 2500)
					newMiscTotal += 1742;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R3.1 Change of Occupancy (Build-Out Only) 24 hour care facility' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 2500 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 5000)
					newMiscTotal += 1742 + (Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 2500) / 100) * 28.34);
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R3.1 Change of Occupancy (Build-Out Only) 24 hour care facility' && (TYPESOFWORK[xxx]['Square Footage'] * 1) == 5000)
					newMiscTotal += 2450;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R3.1 Change of Occupancy (Build-Out Only) 24 hour care facility' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 5000 && (TYPESOFWORK[xxx]['Square Footage'] * 1) < 10000)
					newMiscTotal += 2450 + (Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 5000) / 100) * 3.67);
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'R3.1 Change of Occupancy (Build-Out Only) 24 hour care facility' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 9999)
					newMiscTotal += 2634;
		}

// add new created fees per Michael Frasure
		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Trash enclosure up to 100 l.f.')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 356;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Swimming pool Remodel')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 457;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Swimming pool Replaster')
					newMiscTotal += (TYPESOFWORK[xxx]['Quantity'] * 1) * 360;
		}


		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Residential Tile Roof' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 0)
					newMisc100Total += 332;
		}

		if (typeof(TYPESOFWORK) == 'object') {
			for (xxx in TYPESOFWORK)
				if (TYPESOFWORK[xxx]['Type'] == 'Residential Tile Roof' && (TYPESOFWORK[xxx]['Square Footage'] * 1) > 2000)
					newMisc100Total += Math.ceil(((TYPESOFWORK[xxx]['Square Footage'] * 1) - 2000) / 1000) * 199;
		}









	}
	//end replaced branch: BuildingMiscFee:Lookup;
	if (newMisc100Total > 0) {
		updateFee('MI001', 'BLD_MISC', 'FINAL', newMisc100Total*1.026, 'N');
	}

	if (newMiscTotal > 0) {
		updateFee('MI001', 'BLD_MISC', 'FINAL', (newMiscTotal*1.026 * .50) + newMisc100Total, 'N');
		updateFee('MI001.01', 'BLD_MISC', 'FINAL', newMiscTotal*1.026 * .50, 'N');
		updateFee('MI115', 'BLD_MISC', 'FINAL', newMiscTotal + newMisc100Total, 'N');
		updateFee('MI006', 'BLD_MISC', 'FINAL', newMiscTotal + newMisc100Total, 'N');
	}

}
