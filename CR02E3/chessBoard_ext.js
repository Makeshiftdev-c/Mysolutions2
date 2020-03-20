let str = "", flip = false;
let width = Number(prompt("Enter width: "));
let height = Number(prompt("Enter height: "));

for (let i = 0; i < height; i++)
{
	for (let j = 0; j < width; j++)
	{
		if (!flip)
			str += " ";
		else
			str += "#";
		flip = !flip;
	}
	if (i < height - 1)
		str += "\n";
	flip = !flip;
}

console.log(str);
