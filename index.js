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
    var invalidNumber = function(){new RomanNumber(4000)}
    expect(invalidNumber).to.throw(Error);
  });

  it('should not be null', function()
  {
    var invalidNumber = function(){new RomanNumber()}
    expect(invalidNumber).to.throw(Error);
  });
  it('should not return an error');
});

describe('Roman Numeral', function(){
  it('should validate to ensure a valid roman numeral was entered', function()
  {
    var number = RomanNumber("XX");
    expect(number.toString()).to.equal("XX");
  });
  it('should throw error if roman numeral is not valid', function()
  {
    var number = function(){new RomanNumber("JARED")}
    expect(number).to.throw(Error);
  });

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

   //Checks the user value added
   if(typeof pNumber === 'string')
   {
     var validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
     if(validator.test(pNumber))
     {
       this.romanNumeral = pNumber;
     }
     else
     {
        throw new Error("Please enter valid Roman Numeral");
     }
   }
   else
   {
     console.log("This is a integer");
      if(pNumber !== undefined && pNumber >=1 && pNumber <= 3999)
     	{
        this.integer = pNumber;
      }
      else if(pNumber !== undefined)
    	{
    		throw new Error("Please enter number");
    	}
      else
      {
          throw new Error("Number must be between 1 and 3999");
      }
   }

	this.toInt = function()
	{
		if (Number.isInteger(this.integer)) {
		return this.integer;
		}
		else
		{

		}
	};

	this.toString = function()
	{
		return this.romanNumeral;
	};





}
