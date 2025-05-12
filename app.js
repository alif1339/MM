for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
let size = 5;

for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j < size; j++) {
        line += "* ";
    }
    console.log(line);
}
for (let i = 1; i <= 10; i++) {
    console.log(`${i} ning kvadrati: ${i * i}`);
}

