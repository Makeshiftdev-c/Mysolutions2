function reverseArray(array)
{
	let invArray = [], index = 0;
	for (let i = array.length - 1; i >= 0; i--)
		invArray[index++] = array[i];
	return invArray;
}
