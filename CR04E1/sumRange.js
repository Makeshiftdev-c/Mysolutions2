function range(start, end, step)
{
	let a = [], i = 0;

	if (step)
	{
		while (step >= 0 ? start <= end : start >= end)
		{
			a[i++] = start;
			start += step;
		}
		return a;
	}
	while (start <= end)
		a[i++] = start++;
	return a;
}

function sum(array)
{
	let sumTotal = 0;
	for (let element of array)
		sumTotal += element;
	return sumTotal;
}
