let str = "", flip = false, size = 8;
for (let i = 0; i < size; i++)
{
	for (let j = 0; j < size; j++)
	{
		if (!flip)
			str += " ";
		else
			str += "#";
		flip = !flip;
	}
	if (i < size - 1)
		str += "\n";
	flip = !flip;
}

console.log(str);
