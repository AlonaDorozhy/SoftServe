function Palindrome(number) {
    let num = number;
    let palindromes = [];
    let longest;
    if (checkValid(number) == 0) {
        while (num.length !== 0) {
            for (let i = 1; i < num.length; i++) {
                if (num.substring(0, i + 1) === num.substring(0, i + 1).split("").reverse("").join("")) {
                    palindromes.push(num.substring(0, i + 1));
                }
            }
            num = num.substring(1);
        }
        palindromes.sort(function (a, b) {
            return a.length - b.length;
        })
        if (palindromes.length === 0) {
            result = `Palindrome not found in this number`
            document.getElementById('result4').innerHTML = result
            return result;
        }
        longest = palindromes[palindromes.length - 1]
        result = `The longest palindrome from this number ${longest}. </br>  All of the found palindromes : ${palindromes} `
    }
    else {
        let err = checkValid(number)
        result = JSON.stringify(err)
    }
    
    document.getElementById('result4').innerHTML = result
    return result

}
console.log(Palindrome("12345654321789"))

function checkValid(number) {
    let result = "";
    if (number !== undefined) {
        if (number.length <= 0) {
            result = {
                status: 'Failed',
                reason: 'The passed value in arguments cannot be smaller  or equal to 0.',
            };

        }
        else if ((number.match(/^[0-9]+$/) != null) == false) {
            result = {
                status: 'Failed',
                reason: 'The passed string must contain only digits',
            };

        }
        return result
    }

}

