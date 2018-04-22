var expect = chai.expect;

describe('arrayToString()', function() {
  it('should be a function', function() {
    return expect(arrayToString).to.be.a('function');
  });

  it('should return "Hellohowareyou" for ["Hello", "how", "are", "you"]', function() {
    return expect(arrayToString(["Hello", "how", "are", "you"])).to.equal('Hellohowareyou');
  });

  it('should return "coolgreatniceawesomesweet" for ["cool", "great", "nice", "awesome", "sweet"]', function() {
    return expect(arrayToString(["cool", "great", "nice", "awesome", "sweet"])).to.equal('coolgreatniceawesomesweet');
  });
});

describe('simpOrSamp()', function() {
  before(function() {
    var simpList = [
      "Homer",
      "OJ",
      "Marge",
      "Jessica",
      "Bart",
      "Maggie"
    ];

    this.modifiedNamesList = simpOrSamp(simpList)
  });

  it('should be a function', function() {
    return expect(simpOrSamp).to.be.a('function');
  });

  it('should return "OJ Sampson" on first element', function() {
    return expect(this.modifiedNamesList[1]).to.equal('OJ Sampson');
  });

  it('should return "Marge Sampson" on second element', function() {
    return expect(this.modifiedNamesList[2]).to.equal('Marge Sampson');
  });

  it('should return "Maggie Simpson" on fifth element', function() {
    return expect(this.modifiedNamesList[5]).to.equal('Maggie Simpson');
  });

  it('should not return "Homer Simpson" on zero element', function() {
    return expect(this.modifiedNamesList[0]).not.to.equal('Homer Simpson');
  });
});

describe('shortiesOnly()', function() {
  before(function() {
    var allNames = [
      "Ed",
      "Tom",
      "Elfrid",
      "Sam",
      "Bartholomeu",
      "Wayne",
      "Theodore",
      "Ingrid",
      "Fred",
      "Yvette"
    ]

    this.shortList = shortiesOnly(allNames)
  });

  it('should be a function', function() {
    return expect(shortiesOnly).to.be.a('function');
  });

  it('should return the length of shortList', function() {
    return expect(this.shortList).to.have.lengthOf(4);
  });

  it('should check if "Sam" is INCLUDED in the output array', function() {
    return expect(this.shortList.indexOf('Sam')).to.be.at.least(0);
  });

  it('should check if "Fred" is INCLUDED in the output array.', function() {
    return expect(this.shortList.indexOf('Fred')).to.be.at.least(0);
  });

  it('should check if "Wayne" is INCLUDED in the output array.', function() {
    return expect(this.shortList.indexOf('Wayne')).to.equal(-1);
  });
});

describe('removeVowels()', function() {

  it('should be a function', function() {
    return expect(removeVowels).to.be.a('function');
  });

  it('should return "mlk" for "milk"', function() {
    return expect(removeVowels('milk')).to.equal('mlk');
  });

  it('should return "Chrstms" for "Christmas"', function() {
    return expect(removeVowels('Christmas')).to.equal('Chrstms');
  });

  it('should return "m sh prk" for "moo shoo pork"', function() {
    return expect(removeVowels('moo shoo pork')).to.equal('m sh prk');
  });

  it('return "t f rdr" for "Out of Order"; should also remove`x uppercase letters', function() {
    return expect(removeVowels('Out of Order')).to.equal('t f rdr');
  });

  it('return "stds nds" for "Estados Unidos"; should also remove`x uppercase letters', function() {
    return expect(removeVowels('Estados Unidos')).to.equal('stds nds');
  });

});

describe('wordMatchInArray()', function() {

  before(function() {
    this.sampleWordsArray = ["because", "girls", "just", "want", "to", "have", "fun"];
    this.sampleWordsArray2 = ["boys", "there", "is", "no", "way", "out", "of", "here"]
  });

  it('should be a function', function() {
    return expect(wordMatchInArray).to.be.a('function');
  });

  it('should return true for "girls"', function() {
    return expect(wordMatchInArray('girls', this.sampleWordsArray)).to.be.true;
  });

  it('should return true for "fun"', function() {
    return expect(wordMatchInArray('fun', this.sampleWordsArray)).to.be.true;
  });

  it('should return false for "boys"', function() {
    return expect(wordMatchInArray('boys', this.sampleWordsArray)).to.be.false;
  });

  it('should return true for "boys"', function() {
    return expect(wordMatchInArray('boys', this.sampleWordsArray2) ).to.be.true;
  });

  it('should return false for "girls"', function() {
    return expect(wordMatchInArray('girls', this.sampleWordsArray2)).to.be.false;
  });
});

describe('countWordInArray()', function() {
  before(function() {
    this.sentenceArray = ['i', 'saw', 'my', 'brother', 'who', 'supposedly', 'saw', 'my', 'sister', 'take', 'a', 'saw']
  });

  it('should be a function', function() {
    return expect(countWordInArray).to.be.a('function');
  });

  it('should return 3 for "saw"', function() {
    return expect(countWordInArray('saw', this.sentenceArray)).to.equal(3);
  });

  it('should return 1 for "take"', function() {
    return expect(countWordInArray('take', this.sentenceArray)).to.equal(1);
  });

  it('should return 1 for "brother"', function() {
    return expect(countWordInArray('brother', this.sentenceArray)).to.equal(1);
  });

  it('should return 1 for "sister"', function() {
    return expect(countWordInArray('sister', this.sentenceArray)).to.equal(1);
  });
});

describe('reverseString()', function() {
  it('should be a function', function() {
    return expect(reverseString).to.be.a('function');
  });

  it('should return "skoob" for "books"', function() {
    return expect(reverseString('books')).to.equal('skoob');
  });

  it('should return "ssenlooc" for "coolness"', function() {
    return expect(reverseString('coolness')).to.equal('ssenlooc');
  });

  it('should return "emitdeb" for "bedtime"', function() {
    return expect(reverseString('bedtime')).to.equal('emitdeb');
  });

  it('should return "erus hay" for "yah sure"', function() {
    return expect(reverseString('yah sure')).to.equal('erus hay');
  });
});

describe('getFirstLetters()', function() {
  before(function() {
    this.output = getFirstLetters(['wow', 'milk', 'howdy'])
  });

  it('should be a function', function() {
    return expect(getFirstLetters).to.be.a('function');
  });

  it('should return "w" on first element', function() {
    return expect(this.output[0]).to.equal('w');
  });

  it('should return "m" on second element', function() {
    return expect(this.output[1]).to.equal('m');
  });

  it('should return "h" on third element', function() {
    return expect(this.output[2]).to.equal('h');
  });
});

describe('makeAcronym()', function() {
  it('should be a function', function() {
    return expect(makeAcronym).to.be.a('function');
  });

  it('should return "PDF" for "Portable Document Format"', function() {
    return expect('Portable Document Format').to.equal('PDF');
  });

  it('should return "BRB" for "be right back"', function() {
    return expect('be right back').to.equal('BRB');
  });

  it('should return "NBC" for "National Broadcasting Company"', function() {
    return expect('National Broadcasting Company').to.equal('NBC');
  });

  it('should return "DOD" for "Department of Defense"', function() {
    return expect('Department of Defense').to.equal('DOD');
  });
});

describe('isPalindrome()', function() {
  it('should be a function', function() {
    return expect(isPalindrome).to.be.a('function');
  });

  it('should return true for "wow"', function() {
    return expect(isPalindrome('wow')).to.be.true;
  });

  it('should return false for "milk"', function() {
    return expect(isPalindrome('milk')).to.be.false;
  });

  it('should return false for "howdy"', function() {
    return expect(isPalindrome('howdy')).to.be.false;
  });

  it('should return true for "kayak"', function() {
    return expect(isPalindrome('kayak')).to.be.true;
  });

  it('should return true for "tacocat"', function() {
    return expect(isPalindrome('tacocat')).to.be.true;
  });

  it('should return false for "1201411"', function() {
    return expect(isPalindrome('1201411')).to.be.false;
  });

  it('should return true for "13100131"', function() {
    return expect(isPalindrome('13100131')).to.be.true;
  });
});
