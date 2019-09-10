function chessboard(len, wid, sym) {
    let rows = ""
    if (!checkValid(len, wid, sym)) {
        for (i = 0; i < wid; i++) {
            for (j = 0; j < len; j++) {
                if ((j + i) % 2 == 0) {
                    rows += sym
                }
                else {
                    rows += `&nbsp;` + `&nbsp;`
                }
            }
            rows += '<br>'
        }
    }
    else {
        let err = checkValid(len, wid, sym)
        rows = JSON.stringify(err)

    }
    document.getElementById('result').innerHTML = rows
    return rows;
} chessboard(16, 7, "+")

function checkValid(l, w, s) {
    let message = ""
    if (!l || !w || !s) {
        message = {
            status: 'Failed',
            reason: 'Not enough arguments',
        };
    } else if (typeof l !== 'number' || typeof w !== 'number') {
        message = {
            status: 'Failed',
            reason: 'Incorrectly entered length and / or width. It must be a number',
        };
    } else if (typeof s !== 'string') {
        message = {
            status: 'Failed',
            reason: 'Symbol should be a string',
        };
    }
    // console.log(message)
    return message;

}