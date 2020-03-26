function deepEqual(a, b)
{
	if (a === b)
		return true;
	if (a == null || b == null)
		return false;
	if (typeof(a) != "object" || typeof(b) != "object")
		return false;
	
	let aprops = Object.keys(a), bprops = Object.keys(b);
	if (aprops.length != bprops.length)
		return false;
	for (let property of aprops)
		if (!bprops.includes(property))
			return false;

	let match = 0;
	for (let property of aprops)
		if (deepEqual(a[property], b[property]))
			match++;
	if (match != aprops.length)
		return false;
	return true
}
