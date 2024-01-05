function findLongestWord(str) {
    const strArr = str.split(" ");
    let maxCount = 0;
    let res;
    for (i in strArr) {
        if (strArr[i].length > maxCount) {
            maxCount = strArr[i].length;
            res = strArr[i];
        }
    }

    return res;
}

console.log(findLongestWord("Web Development Tutorial"));

