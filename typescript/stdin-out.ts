process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let inputLines: string[];
process.stdin.on('data', (inp: string) => {
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
function readLine(): string {
	return inputLines[currentLine++];
}

function write(s: string) {
	// no auto new line
	process.stdout.write(s);
}

// Actual code below
function main() {
	let t = parseInt(readLine());
	while (t--) {
		const [n, a, b] = readLine()
			.split(' ')
			.map(s => parseInt(s));
		const x = Math.round((b * n) / (a + b));
		const ans = a * x * x + b * (n - x) * (n - x);
		write(ans.toString() + '\n');
	}
}
