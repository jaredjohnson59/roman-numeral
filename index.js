var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('Number', function(){
  it('should return number', function()
  {
    var number = RomanNumber(20);
    expect(number.toInt()).to.equal(20);
  });
  it('should be between 1 and 3999');
  it('should not be null');
  it('should not return an error');
});

describe('Roman Numeral', function(){
  it('should return roman numeral');
  it('should be between 1 and 3999');
  it('should not be null');
  it('should not return an error');
});

function RomanNumber(pNumber)
{

	if(pNumber !== undefined)
	{
	this.number = pNumber;
	}
	else
	{
		throw new Error("Please enter number");
	}


	this.toInt = function()
	{
		if (Number.isInteger(this.number)) {
		return this.number;
		}
		else
		{
			console.log("This is a string");
			return this.number;
		}
	};

	this.toString = function()
	{
		if (Number.isInteger(this.number)) {
		return this.number;
		}

	};
}
