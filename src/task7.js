function fibonacci(context) {
    let result = checkValid(context);
    if (checkValid(context) == 0) {
        result = getFibonacci(context);
    }
document.getElementById('result7').innerHTML = result
    return result;
}


function getFibonacci(context) {
    let max = context.max,
        min = context.min,
        length = context.length;

    let result = [],
        fibNumber = 0;

    if (length !== undefined) {
        let fibonacci = [0, 1];
        for (let i = 2; i < length; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        } return fibonacci;
    } else {
        for (let i = 0; fibNumber < max; ++i) {
            fibNumber = FibBine(i);
            if (fibNumber > max) break;
            fibNumber >= min ? result.push(fibNumber) : 0;
        }
    };
    return result;
}

function FibBine(n) {  //  Bine 
    let sq5 = Math.sqrt(5),
        first = (1 + sq5) / 2,
        second = (1 - sq5) / 2;
    return Math.round((Math.pow(first, n) - Math.pow(second, n)) / sq5);
}
let obj = { min: 2, max: 15 }
fibonacci(obj);


function checkValid(context) {
    let min = context.min,
        max = context.mux,
        length = context.length
    let res = ""
    if (context.max !== undefined && context.min !== undefined) {
        if (context.max > 0) {

            if (typeof min !== 'number' && typeof max !== 'number') {
                res = {
                    status: "Failed",
                    reason: 'Passed data is not a number'
                }
            } else if (min <= 0 && max < 0) {
                res = {
                    status: 'Failed',
                    reason: 'Passed numbers smaller then 0',
                };
            } else if (min > max) {
                res = {
                    status: 'Failed',
                    reason: 'The maximum value must be greater than the minimum',
                };
            }

        } else {
            res = {
                status: 'Failed',
                reason: ' Second argument smaller than 0',
            };
        }
        return res;
    }

    if (length !== undefined) {
        if (typeof length !== 'number') {
            res = {
                status: "Failed",
                reason: 'Passed data is not a number'
            }
        } else if (length < 0) {
            res = {
                status: 'Failed',
                reason: 'Passed numbers smaller then 0',
            };
        }
    }
    return res
}