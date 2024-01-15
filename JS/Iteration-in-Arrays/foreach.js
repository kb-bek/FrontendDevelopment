const score = [5, 32, 43, 65, 2];

for (const [i, el] of score.entries()) {
    console.log(`Element-${i+1}: ${el}`);
}

// forEach 

score.forEach((el, i) => {
    console.log(`Element-${i+1}: ${el}`);
})