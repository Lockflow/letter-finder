function letterFinder(word, match) {
  for (var i = 0; i < word.length; i++) {
    var currentLetter = word[i];
    if (currentLetter === match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}
letterFinder("test", "t");
