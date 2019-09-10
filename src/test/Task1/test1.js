describe("Task 1", function () {

    it(`Failed if incorrectly entered length and / or width. It must be a number`,
        function () {
            assert.equal((chessboard("p", 4, "*")), '{"status":"Failed","reason":"Incorrectly entered length and / or width. It must be a number"}');
        });

    it(`Not enough arguments`,
        function () {
            assert.equal((chessboard(0, 4, "*")), '{"status":"Failed","reason":"Not enough arguments"}');
        });
    it(`Checkerboard result should be a string`,
        function () {
            assert.equal((typeof (chessboard(8, 4, "*"))), 'string');
        });

});


