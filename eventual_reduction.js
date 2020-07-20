const readline = require('readline');
const process = require('process');
(function () {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(`Test Cases?\t`, (test_cases) => {
        while (test_cases--) {
            rl.question(`Enter n?\t`, (value) => {
               let n = Number(value);
                rl.question(`TEnter string?\t`, (s) => {
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
                });
            });
        }
    });
})();