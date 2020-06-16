function compareRobots(robot1, memory1, robot2, memory2) {
	let sumSteps1 = 0, sumSteps2 = 0;
	function runRobotTest(state, robot, memory) {
		for (let turn = 0;; turn++) {
			if (state.parcels.length == 0)
				return turn;
			let action = robot(state, memory);
			state = state.move(action.direction);
			memory = action.memory;
		}
	}
	for (let i = 0; i < 100; i++) {
		let state = VillageState.random();
		sumSteps1 += runRobotTest(state, robot1, memory1);
		sumSteps2 += runRobotTest(state, robot2, memory2);
	}
	console.log(`${robot1.name} average steps: ${sumSteps1 / 100}`);
  	console.log(`${robot2.name} average steps: ${sumSteps2 / 100}`);
}
