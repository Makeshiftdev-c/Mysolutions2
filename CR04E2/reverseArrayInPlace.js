/* Verobose Version */
function reverseArrayInPlace(array)
{
	for (let i = 0, j = array.length - 1;
	     i < Math.floor(array.length / 2);
	     i++, j--)
	{
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

/* Succinct Version */
function reverseArrayInPlace(array)
{
	let temp = [];
	while (array.length > 0)
		temp.push(array.pop());
	while (temp.length > 0)
		array.push(temp.shift());
}
