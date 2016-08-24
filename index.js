var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('Number', function(){
  it('should return number', function()
  {
    var number = RomanNumber(20);
    expect(number.toInt()).not.to.be.NaN;
  });

  it('should be between 1 and 3999', function()
  {
    var number = RomanNumber(4000);
    expect(number.toInt()).to.eql(new Error('Number must be between 1 and 3999'));
  });

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
	if (!(this instanceof RomanNumber)){
        return new RomanNumber(pNumber);
   }

   //Checks if user enter number
	if(pNumber !== undefined && pNumber >=1 && pNumber <= 3999)
	{
	this.number = pNumber;
	}
	else if(pNumber === undefined)
	{
		throw new Error("Please enter number");
	}
  else
  {
      throw new Error("Number must be between 1 and 3999");
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
