module.exports = function getZerosCount(number, base) {

    let factorials = [];
    let k = 2;
    while (k < base) {
        while ( base % k == 0 ) {
            factorials.push(k);
            base /= k;
        }
        k++;
    }
    if (base > 1) {
        factorials.push(base);
    }
    factorials.sort((a, b) => a - b);

    let zeros = [];
    let count = 1;
    for (let i = 0; i < factorials.length; i += count) {
        let counter = 0;
        for (let j = i; j < factorials.length; j++) {
            if ( factorials[i] === factorials[j] ) {
                counter++;
            } else {
                count = counter;
                break;
            }
        }
        let result = 0;
        let j = factorials[i];
        while (true) {
            result += (number - number % j) / j;
            j *= factorials[i];
            if (j > number) {
                break;
            }
        }
        zeros.push((result - result % counter) / counter);

    }

    return Math.min.apply(Math, zeros);

};
