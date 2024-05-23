function printNumbers(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += i;
        if (i < n) {
            // To avoid adding a space after the last number
            result += " ";
        }
    }
    return result;
}

export default printNumbers;
