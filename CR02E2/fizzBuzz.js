let str;
for (let i = 1; i <= 100; i++)
{
	str = "";
	if (i % 3 == 0)
		str += "Fizz";
	if (i % 5 == 0)
		str += "Buzz";

	i % 3 == 0 || i % 5 == 0?
	console.log(str):
	console.log(i);
}
