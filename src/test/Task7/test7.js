describe("Task 7", function () {

    it(`Passed data in object`,
        function () {
            let obj = { min: 1, max: 30 }
            assert.equal(typeof (fibonacci(obj)), 'object');
        });
    it(`Passed data is not a number`,
        function () {

            expect(fibonacci({ min: "p", max: 30 })).to.eql(res = {
                status: "Failed",
                reason: 'Passed data is not a number'
            })
        });
    it(`The maximum value must be greater than the minimum`,
        function () {

            expect(fibonacci({ min: 30, max: 22 })), (res = {
                status: "Failed",
                reason: 'The maximum value must be greater than the minimum'
            })
        });
    it(`Passed numbers smaller then 0`,
        function () {

            expect(fibonacci({ min: -5, max: -14 })), (res = {
                status: "Failed",
                reason: 'Passed numbers smaller then 0'
            })
        });

 
});


