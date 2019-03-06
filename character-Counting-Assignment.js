function countLetters(phrase) {
    var newPhrase = phrase.split(' ').join('')
   
    var output = {}
   
   for (i = 0; i < newPhrase.length; i++) {
    if (!output[newPhrase[i]]) {
      output[newPhrase[i]] = 1
    } else {
      output[newPhrase[i]]++
    }
   }
   return output
   }
   
   
   
   console.log(countLetters('lighthouse in the house'));
