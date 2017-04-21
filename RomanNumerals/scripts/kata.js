(function() {
  function roman(number) {
    /*
    1 - I, 2 - II, 3 - III, 4 - IV, 5 - V, 6 - VI, 7 - VII, 8 - VIII
    */
    var result = '';
    var ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];

    result += tens[Math.floor(number % 100 / 10)];
    result += createMap('I', 'V')[number % 10];


    return result;
  }

  function createMap(index) {
    var symbols = ['', 'I', 'V', 'X', 'L', 'C'];
    let results = [];
    var first = symbols[index - 1 ];
    var main = symbols[index];
    var last =  symbols[index + 1 ];

    results.push(first);
    results.push(first + first);
    results.push(first + first + first);
    results.push(first + main);
    results.push(main);
    results.push(main+first) ;
    results.push(main+first+first) ;
    results.push(main+first+first+first) ;
    results.push(first + last);
    results.push(last);

    return results;
  }

  /**
   * @desc Ctrl + / to uncomment selection
   * @tutorial http://www.novaroma.org/via_romana/numbers.html
   */
  describe('createStuff', () => {
    it('should correct array when passed one', () => {
      var ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
      expect(createMap(1)).toEqual(ones);
    });
  });
  describe('roman', () => {
    it('should convert 1 to I', () => {
      expect(roman(1)).toBe('I');
    });

    it('should convert 4 to IV', () => {
      expect(roman(4)).toBe('IV');
    });

    it('should convert 5 to V', () => {
      expect(roman(5)).toBe('V');
    });

    it('should convert 10 to X', () => {
      expect(roman(10)).toBe('X');
    });

    it('should convert 11 to XI', () => {
      expect(roman(11)).toBe('XI');
    });



    it('should convert 100 to C', () => {
      expect(roman(100)).toBe('C');
    });

    // it('should convert 500 to D', () => {
    //   expect(roman(500)).toBe('D');
    // });
    //
    // it('should convert 1000 to M', () => {
    //   expect(roman(500)).toBe('M');
    // });
  });
})();
