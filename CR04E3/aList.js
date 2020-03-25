function arrayToList(array)
{
	let i = array.length - 1;
	let list = {value: array[i--], rest: null};
	while (i >= 0)
	{
		let next = {value: array[i--], rest: {}};
		next.rest = list;
		list = next;
	}
	return list;
}

function listToArray(list)
{
	let array = [];
	for (let cur = list; cur != null; cur = cur.rest)
		array.push(cur.value);
	return array;
}

function prepend(element, list)
{
	let newList = {value: element, rest: {}};
	newList.rest = list;
	return newList;
}

/* Non-recursive nth */
function nth(list, position)
{
	let node = list, nodeNum = 0;
	while (nodeNum <= position)
	{
		if (node == null)
			return undefined;
		if (nodeNum == position)
			return node.value;
		node = node.rest;
		nodeNum++;
	}
}

/* Recursive nth */
function nth(list, position)
{
	if (list == null)
		return undefined;
	else if (position == 0)
		return list.value;
	else
		return nth(list.rest, --position);
}
