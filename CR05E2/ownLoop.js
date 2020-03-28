/* Lengthy and Lucid */

function loop(initial, condition, update, body)
{
	let i = initial;
	while (condition(i))
	{
		body(i);
		i = update(i);
	}
}

/* Compact and Concise  */

function loop(intial, condition, update, body) {
	let i = intial - 1; while (condition(i = update(i)))
		body(i);
}
