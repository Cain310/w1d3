function countcharPositioning(phrase) {
    var newPhrase = phrase.split(' ').join('')
   
    var output = {}

    // arr.indexOf(searchElement[, fromIndex])
    // console.log(beasts.indexOf('bison'));
   
   for (i = 0; i < newPhrase.length; i++) {
    if (!output[newPhrase[i]]) {
      output[newPhrase[i]] = [i]
    } else {
      output[newPhrase[i]].push([i]);
    }
   }
   return output
   }


   
   
   
   console.log(('lighthouse in the house'));