const reverseString = function(words) {
    let list = [];
    for (let char of words) {
        list.push(char);
    }

    let reversedList = list.reverse();

    let newWords = '';

    for (let i = 0; i < reversedList.length; i++) {
        newWords += reversedList[i];
    }

    return newWords;
};

// Do not edit below this line
module.exports = reverseString;
