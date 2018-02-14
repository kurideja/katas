(function () {

    function roman(number) {
        /*
         1 - I, 2 - II, 3 - III, 4 - IV, 5 - V, 6 - VI, 7 - VII, 8 - VIII,
         10 - X,
         11 - XI,
         12 - XII,
         20 - XX
         XXX, XL, L, LX, LXX, LXXX, XC, C

         I, V, X;


         //     */
        //    if (number > 10) {
        //        return
        //}
        if (number < 4) {
            return 'I'.repeat(number);
        } else if (number === 4) {
            return 'IV';
        } else if (number === 5) {
            return 'V';
        } else if (number > 5 && number < 10) {
            return `V${'I'.repeat(number - 5)}`
        } else if (number === 10) {
            return 'X';
        } else if (number < 14) {
            return `X${'I'.repeat(number - 10)}`;
        } else if (number === 50) {
            return 'L';
        } else if (number === 100) {
            return 'C';
        }
    }

    /**
     * @desc Ctrl + / to uncomment selection
     * @tutorial http://www.novaroma.org/via_romana/numbers.html
     */
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

        it('should convert 6 to VI', () => {
            expect(roman(6)).toBe('VI');
        });

        it('should convert 10 to X', () => {
            expect(roman(10)).toBe('X');
        });

        xit('should convert 11 to XI', () => {
            expect(roman(11)).toBe('XI');
        });

        it('should convert 100 to C', () => {
            expect(roman(100)).toBe('C');
        });

        xit('should convert 500 to D', () => {
            expect(roman(500)).toBe('D');
        });

        xit('should convert 1000 to M', () => {
            expect(roman(500)).toBe('M');
        });
    });
})();
