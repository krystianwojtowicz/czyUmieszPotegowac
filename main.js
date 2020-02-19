const howMany = prompt('how many cases?');
for (i = 0; i < howMany; i++) {
    let a = prompt('a');
    let b = prompt('b');
    a %= 10;
    b %= 4 + 4;
    let score = 1;
    for (i = 0; i < b; i++) {
        score *= a;
    }
    score %= 10;
    console.log(score)
}

