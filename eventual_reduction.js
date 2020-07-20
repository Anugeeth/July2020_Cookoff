const readline = require('readline');
const process = require('process');
(async function main() {
    var test_cases;
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    await rl.question(`Test Cases?\t`, (value) => test_cases = Number(value));
    while (test_cases--) {
        var n, s;
        rl.question(`Enter n?\t`, (value) => {
            n = Number(value);
            rl.question(`TEnter string?\t`, (data) => s = data);
        });    
        for (let j = 'a'; j <= 'z'; j++) {
            let c = 0;
            for (k = 0; k < n; k++) {
                if (j == s[k]) c++;
            }
            if (c % 2 == 0) d = 0;
            else {
                d = 1;
                break;
            }
        }
        if (d == 0) console.log('YES')
        else console.log('NO');
    }
})();