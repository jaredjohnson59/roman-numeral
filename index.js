var chai = require('chai');
var should = chai.should();
var expect = chai.expect;



var testNumbers = [0, 1, 3, 4, 1968, 2999, 3000, 10000];
var testChars = [null, '', "I", "III", "IIII", "IV", "V", 'CDXXIX', 'CD1X', 'error', 'MCDLXXXII', 'MMMMCMXCIX', 'MMMMDMXCIX', '1493'];


describe('Number', function(){
  it('should return number', function()
  {
    /*
    var number = RomanNumber(20);
    expect(number.toInt()).not.to.be.NaN;
    */
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

  it('should test multiple numbers', function()
  {
    testNumbers.forEach(function(number)
    {
      var testValue = function(){new RomanNumber(number)};
      if(number >=1 && number <= 3999)
      {
        expect(testValue).not.to.throw(Error);
      }
      else
      {
        expect(testValue).to.throw(Error);
      }
    });
  });
});

describe('Roman Numeral', function(){
  it('should validate to ensure a valid roman numeral was entered', function()
  {

  });
  it('should throw error if roman numeral is not valid', function()
  {
    var number = function(){new RomanNumber("JARED")}
    expect(number).to.throw(Error);
  });

  it('should return roman numeral', function()
  {
    var number = RomanNumber(21);
    expect(number.toString()).to.equal("XXI");
  });

  it('should be between 1 and 3999');
  it('should not be null', function()
  {
    var number = function(){new RomanNumber(null)}
    expect(number).to.throw(Error);
  });
  it('should not return an error', function()
  {
    var number = function(){new RomanNumber("XX")}
    expect(number).to.not.throw(Error);
  });
});

function RomanNumber(pNumber)
{
	if (!(this instanceof RomanNumber)){
        return new RomanNumber(pNumber);
   }

var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};

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
      return this.interger;
	};

	this.toString = function()
	{
    var roman = '';

    for ( var i in lookup ) {
      while ( this.integer >= lookup[i] ) {
        roman += i;
        this.integer -= lookup[i];
      }
    }
    return roman;
	};





}
