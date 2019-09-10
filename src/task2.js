function envelope(env1, env2) {
    let a = parseFloat(env1[0])
    let b = parseFloat(env1[1])
    let c = parseFloat(env2[0])
    let d = parseFloat(env2[1])
    let sumSq, p, q, check, result
    if (!checkValid(env1, env2)){
    switch (true) {
        case a == c && b == d:
            result = ` These envelopes are the same size `
            break;
       
        case a < c && b < d:
            result = ` The first envelope will fit in the second`
            break;
        case a > c && b > d:
            result = ` The second envelope will fit in the first`
            break;
        default:
            result = diagonal(a, b, c, d);
    }
    }else{
        let err = checkValid(env1, env2)
        result = JSON.stringify(err)
    }
   
   
    document.getElementById('result2').innerHTML = result
}
function diagonal(a, b, c, d, ) {

    if (a < c && b > d) {
        sumSq = c * c + d * d;
        p = Math.sqrt(sumSq - b * b);
        q = Math.sqrt(sumSq - a * a);
        check = (a * b - p * q >= c * d * 2)
        if (check == true) {
            result = ` The second envelope will fit in the first`
        } else result = ` These envelopes don't fit on top of each other.`
        return result
    }
    else if (a > c && b < d) {
        sumSq = a * a + b * b;
        p = Math.sqrt(sumSq - d * d);
        q = Math.sqrt(sumSq - c * c);
        check = (c * d - p * q >= a * b * 2)
        if (check == true) {
            result = ` The first envelope will fit in the second`
        } else result = ` These envelopes don't fit on top of each other.`
        return result
    }
}

envelope( [5, 5], [5.5, 1]  )

function checkValid([ a, b ], [ c, d ]) {
   
    let res = false;
    if (typeof a !== 'number' && typeof b !== 'number' && typeof c !== 'number' && typeof d !== 'number'){
        res = {
            status: 'Failed',
            reason: 'Passed data is not a numbers',
        };
    } 
    else if (a <= 0 && b <= 0 || c <= 0 && d <= 0  ){
        res = {
            status: 'Failed',
            reason: 'The argument values are less than 0 or equal to 0.',
        };
    }

    return res;
}


