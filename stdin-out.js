process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let inputLines;
process.stdin.on('data', inp => {
	inputString += inp;
});
process.stdin.on('end', () => {
	inputLines = inputString
		.trim()
		.split('\n')
		.map(s => s.trim());
	main();
	process.exit();
});

let currentLine = 0;
function readLine() {
	return inputLines[currentLine++];
}

function write(s) {
	// no auto new line
	process.stdout.write(s);
}

// Actual code below
function main() {
	let [n, t] = readLine()
		.split(' ')
		.map(s => parseInt(s));
	const fans = [];
	while (n--) {
		const [name, quotientString] = readLine().split(' ');
		fans.push([name, parseInt(quotientString)]);
	}
	fans.sort((fan1, fan2) => {
		if (fan1[1] === fan2[1]) {
			return fan1[0] < fan2[0] ? -1 : 1;
		}
		return fan2[1] - fan1[1];
	});
	for (let i = 0; i < t; i++) {
		write(fans[i][0] + '\n');
	}
}
