module.exports = function check(str, bracketsConfig) {
    // your solution
    let newArr = [];

    if (str.length % 2 != 0) {
        return false;

    }
    for (let i = 0; i < bracketsConfig.length; i++) {
        newArr.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }
    for (let i = 0; i < newArr.length; i++) {
        if (str.includes(newArr[i])) {
            str = str.replace(newArr[i], "");
            i = -1;
        }
    }
    if (str.length != 0) {
        return false;
    } else {
        return true;
    }
}