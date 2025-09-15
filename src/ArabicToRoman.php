<?php

namespace App;

define('ROMAN_SYMBOLS', [
    1 => "I",
    5 => "V",
    10 => "X",
    50 => "L",
    100 => "C",
    500 => "D",
    1000 => "M",
]);

class ArabicToRoman
{
    /**
     * Receive an arabic number and return a string with its roman counterpart
     *
     * @param int $arabicNumber Arabic number to be transformed (e.g. 121)
     *
     * @return string The roman number equivalent (e.g. CXXI)
     */
    public static function transform(int $arabicNumber): string | null
    {
        
        $sign = self::getSign($arabicNumber);
        
        if ($sign === -1 || $sign === 0  || $arabicNumber > 3999) {
            return null;
        }

        $romanNumber = '';

        $reversedNumber = str_split(strrev($arabicNumber));

        $romanNumberInArray = [];

        foreach ($reversedNumber as $key=>$val) {
            
            $currentValue = intval($val * (1 * pow(10, $key)));
            
            if ($currentValue > 0 && $currentValue < 10) {

                $romanUnits = '';

                if ($currentValue <= 3) {

                    $romanUnits = self::addEqualsRomanSymbols($currentValue);

                } else {

                    $romanUnits = self::addRomanSymbolsBasedOnReferenceDifference($currentValue);

                }

                if ($currentValue === 9) {
                    
                    $romanUnits = ROMAN_SYMBOLS[1] . ROMAN_SYMBOLS[10];
                 
                }

                array_unshift($romanNumberInArray, $romanUnits);
            }


            if ($currentValue >= 10 && $currentValue < 100) {
                
                $romanTens = '';
                
                if ($currentValue < 40) {

                    $romanTens = self::addEqualsRomanSymbols($currentValue, 10);
                }

                if ($currentValue >= 40 && $currentValue < 90) {

                    $romanTens = self::addRomanSymbolsBasedOnReferenceDifference($currentValue, 10);

                }

                if ($currentValue === 90) {

                    $romanTens = ROMAN_SYMBOLS[10] . ROMAN_SYMBOLS[100];

                }
                
                array_unshift($romanNumberInArray, $romanTens);
            }


            if ($currentValue >= 100 && $currentValue < 1000) {

                $romanHundreds = '';

                if ( $currentValue < 400) {
    
                    $romanHundreds = self::addEqualsRomanSymbols($currentValue, 100);
    
                }

                if ($currentValue >= 400 && $currentValue < 900) {

                    $romanHundreds = self::addRomanSymbolsBasedOnReferenceDifference($currentValue, 100);

                }

                if ($currentValue === 900) {

                    $romanHundreds = ROMAN_SYMBOLS[100] . ROMAN_SYMBOLS[1000];

                }
                
                array_unshift($romanNumberInArray, $romanHundreds);
                
            }

            if ($currentValue >= 1000) {

                $romanMiles = self::addEqualsRomanSymbols($currentValue, 1000);
                
                array_unshift($romanNumberInArray, $romanMiles);

            }

        }

        $romanNumber = join('', $romanNumberInArray);

        return $romanNumber;
    }

    /**
     * Gets the sign of a number.
     *
     * This function returns:
     * -  1 if the number is positive.
     * - -1 if the number is negative.
     * -  0 if the number is zero.
     *
     * @param int|float $number The number to check.
     * @return int The sign of the number (1, -1, or 0).
     */
    public static function getSign( int | float $number): int {

        return ( $number > 0 ) ? 1 : ( ( $number < 0 ) ? -1 : 0 );

    }

    /**
     * Adds Roman numeral symbols based on a difference from a reference value.
     *
     * The function essentially handles the patterns for Roman numerals like 4 (IV),
     * 6 (VI), 9 (IX), 11 (XI), etc., where a base symbol (like V, L, D) is either
     * preceded or followed by other symbols (I, X, C).
     *
     * For example:
     * - If $value is 4 and $powerOfTen is 1, the difference is -1.
     * - It adds one 'I' symbol.
     * - Since the difference is negative, it prepends the 'V' symbol, resulting in 'IV'.
     * - If $value is 6 and $powerOfTen is 1, the difference is 1.
     * - It adds one 'I' symbol.
     * - Since the difference is positive, it appends the 'I' symbol to 'V', resulting in 'VI'.
     *
     * @param int $value The number to convert.
     * @param int $powerOfTen The power of ten for the current place value (e.g., 1, 10, 100).
     * @return string The partial Roman numeral string for the given value (e.g., 'VI').
     */
    public static function addRomanSymbolsBasedOnReferenceDifference (int $value, int $powerOfTen = 1): string {
        
        $result = '';
        
        $difference = $value - (5 * $powerOfTen);

        if (abs($difference) > 0) {

            for ($i = 0; $i < (abs($difference) / $powerOfTen); $i++) {
                $result = $result . ROMAN_SYMBOLS[1 * $powerOfTen];
            }

        }

        if (self::getSign($difference) === -1) {

            $result = $result . ROMAN_SYMBOLS[5 * $powerOfTen];

        } else {

            $result = ROMAN_SYMBOLS[5 * $powerOfTen] . $result;

        }

        return $result;
    }

    /**
     * Adds repeating Roman numeral symbols.
     *
     * The function iterates a number of times equal to the `$value` divided by
     * the `$powerOfTen`, appending the corresponding Roman symbol for that place
     * value in each iteration.
     *
     * For example, if `$value` is 3 and `$powerOfTen` is 1, the loop runs 3 times,
     * appending 'I' each time to produce "III".
     *
     * @param int $value The number to represent (e.g., 1, 2, 3, 10, 20).
     * @param int $powerOfTen The power of ten for the current place value (e.g., 1, 10, 100).
     * @return string The partial Roman numeral string for the given value (e.g., 'XXX').
     */
    public static function addEqualsRomanSymbols (int $value, int $powerOfTen = 1): string {
        
        $result = '';
        
        for ($i = 0; $i < $value / $powerOfTen; $i++) {

            $result = $result . ROMAN_SYMBOLS[1 * $powerOfTen];;

        }

        return $result;
    }

}