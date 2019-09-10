
arrOfTriangles = [
    { vertices: 'ABC', a: 10, b: 10, c: 19.55 },
    { vertices: 'DEF', d: 20, e: 22, f: 39.54 },
    { vertices: 'GHI', g: 12, h: 55, i: 66.6 },
    { vertices: 'JKL', j: 40, k: 45, l: 12.1 },
    { vertices: 'MNO', m: 50, n: 40, o: 40.84 }
]

// arrOfTriangles = [
//     { vertices: 'ABC', a: 10, b: 10, c: 19.55 },
//     { vertices: 'DEF', d: 20, e: 22, f: 39.54 },
//     { vertices: 'GHI', g: 12, h: 55, i: 66.6 },
//     { vertices: 'JKL', j: 40, k: 45, l: 12.1 },
//     { vertices: 'MNO', m: 50, n: 40, o: 40.84 },
//     { vertices: 'MNO', m: 2, n: 2, o: 12 }
// ]

function triangles(array) {
    let p, S, result = "", info = []
    let sortArray = []
    if (!checkValid(array)) {
        for (let i = 0; i < array.length; i++) {
            info.push(Object.values(array[i]));
            p = ((info[i][1] + info[i][2] + info[i][3]) * 0.5).toFixed(2);
            S = Math.sqrt(p * (p - info[i][1]) * (p - info[i][2]) * (p - info[i][3])).toFixed(2);
            sortArray.push([parseFloat(S), array[i].vertices])
        }
        sortArray.sort(function (a, b) {
            if (a[0] > b[0]) {
                return -1;
            }
            if (a[0] < b[0]) {
                return 1;
            }
            return 0;
        });

        for (i = 0; i < sortArray.length; i++) {
            result += ` ${sortArray[i][1]} :` + ` ${sortArray[i][0]}` + `<br>`
        }

        document.getElementById('result3').innerHTML = result
return result, sortArray
    } else{
        let err = checkValid(array)
        result = JSON.stringify(err)
    }
    document.getElementById('result3').innerHTML = result
}
triangles(arrOfTriangles)


function checkValid(arr) {
    let res,
      
        a, b, c;

    if (Array.isArray(arr) && arr.length > 0) {

        arr.forEach((triangle) => {
          let  value = Object.values(triangle);
            a = value[1];
            b = value[2];
            c = value[3];
            if (typeof value[0] !== 'string' && typeof a !== 'number' && typeof b !== 'number' && typeof c !== 'number') {
                res = {
                    status: 'Failed',
                    reason: 'Wrong type of the arguments',
                };
            }
            else if (a < 0 && b < 0 && c < 0) {
                res = {
                    status: 'Failed',
                    reason: 'The sides of the triangle must be a positive number',
                };
            }
            else if ((a > b + c) || (b > a + c) || (c > a + b)) {
                res = {
                    status: 'Failed',
                    reason: 'One side of the triangle is greater than the sum of the other two',
                };
            }
        })
    } else {
        res = {
            status: 'Failed',
            reason: "Array not passed or this array doesn't have values",
        };
    }
    return res;
}
// console.log(checkValid(arrOfTriangles))