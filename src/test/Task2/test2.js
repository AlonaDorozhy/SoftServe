describe("Task 2", function () {

    it(` These envelopes are the same size` ,
        function () {
            assert.equal(envelope([5, 5], [5.5, 1]), '{"status":"Failed","reason":"The argument values are less than 0 or equal to 0."}')
        });

    it(`Not enough arguments`,
        function () {
            assert.equal((envelope(0, 4, "*")), ` These envelopes are the same size `);
        });
    it(`Checkerboard result should be a string`,
        function () {
            assert.equal((typeof (envelope(5, 55, 8, 6))), 'number');
        });

});


