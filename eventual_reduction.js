const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Promisify Readline.Question
async function ask(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, resolve);
    });
}

// Enclose in a function to use async await
async function testCases() {
    let cases = await ask('Test cases: ');
    while (cases--) {
        let n = await ask('N: ');
        n = Number(n);

        let s = await ask('String: ');

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
        if (d == 0) console.log('YES');
        else console.log('NO');
    }
    // close rl to exit program
    rl.close();
}

testCases();
