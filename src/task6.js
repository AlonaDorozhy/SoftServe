function sequence(rowLength, square) {
    let result = checkValid(rowLength, square);
    if (checkValid(rowLength, square) == 0) {
        const rowNumbers = [];
        let startNumber = Math.sqrt(square);

        for (startNumber; rowNumbers.length < rowLength; startNumber++) {
            rowNumbers.push(startNumber);
        }
        result = rowNumbers.join(',');
    }
    document.getElementById('result6').innerHTML = result
    return result;
}

function checkValid(rowLength, square) {
    let res = "";
    if (rowLength !== undefined && square !== undefined) {
        if (typeof rowLength !== 'number' &&
            typeof square !== 'number') {
            res = {
                status: 'Failed',
                reason: 'Passed data is not a number',
            };
        }
        else if (rowLength < 0 && square < 0) {
            res = {
                status: 'Failed',
                reason: 'Passed arguments smaller than 0',
            };
        } else if (Number.isInteger(Math.sqrt(square)) == false){
            res = {
                status: 'Failed',
                reason: 'The passed value in arguments cannot be the square of a number.',
            };
        }
    }
    return res;
}

sequence(3, 36);