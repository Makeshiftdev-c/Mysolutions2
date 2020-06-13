class Group {
	constructor() {
		this.content = [];
		this.index = 0;
	}

	add(item) {
		if (this.content.indexOf(item) < 0)
			this.content[this.index++] = item;
	}

	delete(item) {
		let index = this.content.indexOf(item);
		if (index >= 0) {
			this.content.splice(index, 1);
			this.index--;
		}
	}

	has(item) {
		if (this.content.indexOf(item) >= 0)
			return true;
		return false;
	}

	static from(iterableObj) {
		let groupInst = new Group;
		for (let item of iterableObj)
			groupInst.content[groupInst.index++] = item;
		return groupInst;
	}
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.index = 0;
    }

    next() {
        if (this.index == this.group.index)
            return {value: undefined, done: true};
        let value = this.group.content[this.index++];
        return {value: value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}