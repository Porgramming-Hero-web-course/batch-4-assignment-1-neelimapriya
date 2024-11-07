//Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

const countWordOccurrences = (sentence: string, word: string): number => {
    const sentencesToLowerCase = sentence.toLowerCase();
    const WordToLowerCase = word.toLowerCase();
  
    const sentenceToWords = sentencesToLowerCase.split(' ');
  
    return sentenceToWords.filter(i => i === WordToLowerCase).length;
  };


  console.log(countWordOccurrences("I love typescript", "typescript")); 
  