function countChar(ch)
{
	return str => {
		let count = 0;

		for (let i = 0; i < str.length; i++)
			if (str[i] === ch)
				count++;
		return count;
	}
}

const countBs = countChar("B");
