/* Loop implementation */

function every(array, predicate)
{
	for (let element of array)
		if (!predicate(element))
			return false;
	return true;
}

/* some-method implementation */

function every(array, predicate)
{
	if (array.some(element => !predicate(element)))
		return false;
	return true;
}

/* filter-method implementation */

function every(array, predicate)
{
	let filtered = array.filter(element => predicate(element));
	if (filtered.length != array.length)
		return false;
	return true;
}
