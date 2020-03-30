function dominantDirection(text)
{
	let scripts = countBy(text, ch => {
                let script = characterScript(ch.codePointAt(0));
                return script ? script.direction : "none";
        }).filter(({direction}) => direction != "none");

        let dominant = Math.max.apply(Math, scripts.map(direction =>direction.count));
        let dominantDir = scripts.filter(direction => direction.count == dominant);
	dominantDir = dominantDir.map(direction => direction.name);
	dominantDir = dominantDir.map(direction => {
		if (direction == "ltr")
			return "left to right";
		else if (direction == "rtl")
			return "right to left";
		else if (direction == "ttb")
			return "top to bottom";
		else
			return "special characters dominate input text";
	})
  	if (dominantDir.length > 1)
        {
		return dominantDir.join(", and ") + " are equally dominant";
        }
        return dominantDir[0];
}
