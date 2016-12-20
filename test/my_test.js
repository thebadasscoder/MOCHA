const expect = require('chai').expect; //Chai is an assertion library that I we will use

//In this test case I am describing what my function should do.
//I am expecting 3 to equal 2; (This is an expectation in Chai)
describe('my test suite', function(){
	it('passes successfully', function(){
		expect(3).to.eql(3);
	});
});

//