function removeFromArray (x, z) {

    for (let i = 1; i < arguments.length; i++) {
        arguments[0].forEach((e) => {
            if (e === arguments[i]) {
                arguments[0].splice(arguments[0].indexOf(e), 1);
            }
        });
    };


    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
