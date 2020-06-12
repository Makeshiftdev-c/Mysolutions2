class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	plus({x, y}) {
		this.x += x;
		this.y += y;
		return this;
	}

	minus({x, y}) {
		this.x -= x;
		this.y -= y;
		return this;
	}

	get length() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
}
