function maxDate(data) {
	var max = '';
	for (var i = 0; i < data.length; i++)
		if (data[i] > max)
			max = data[i];
	return max;
}; // smallest > Date


