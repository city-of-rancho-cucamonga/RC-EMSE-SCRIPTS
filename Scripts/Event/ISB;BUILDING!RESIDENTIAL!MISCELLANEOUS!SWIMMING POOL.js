
if (matches(inspType, 'Excavation, Setbacks, Bonding (Pre-Gunite)', 'Foundation, Footings, Setbacks', 'Masonry Steel, Rebar, Grout', 'Bond Beam', 'Bonding Grid (Pre-Deck)', 'Underground', 'Gas Line, Gas Test', 'Enclosure (Fence and Gates)', 'Rough Electrical', 'Final Inspection', 'Partial Inspection') && matches(capStatus, 'Pre-Inspection')) {
	cancel = true;
	showMessage = true;
	comment('The inspection cannot be scheduled until fees are paid and a permit is issued. Please contact City staff to discuss your permit application at (909) 477-2700.');
}