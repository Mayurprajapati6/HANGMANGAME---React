{/*
   @param { The word which is given as input and is expected to be guessed } -> originalWord
   @param { Letters which are guessed by the user already } -> guessedLetters
   
   ex: originalWord: HUMBLE
   guessedLetters: ['H','M','E']

   return -> "H _ M _ E"
*/ }

export function getMaskedString(originalWord , guessedLetters) {
    
   guessedLetters = guessedLetters.map(letter => letter.toUpperCase()); // ['h' , 'M' , 'e'] -> ['H' , 'M' , 'E']

   const guessedLetterSet = new Set(guessedLetters);
   // array find also we can use instead of set but set help us for better searching

   const result = originalWord.toUpperCase().split('').map(char => { //   toUpperCase().split('')->s ="XYZ" -> s = ['X' , 'Y' , 'Z']
      if(guessedLetterSet.has(char)) {
         return char;
      }else {
         return "_";
      }
   }); // ['H' , '_' , 'M' , '_' , '_' , 'E']

   //return result.join(''); // "H _ M _ _ E"
   return result;
}  // this function return ->getMaskedString("HUMBEL",['h','M','e']) -> //'H_M_E_'
                           