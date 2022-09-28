function getLengthOfTwoWords(word1, word2) {
  // your code here
  count1 = 0
  count2 = 0
  for (i in word1) {
    count1 += 1
  }
  for (i in word2) {
    count2 += 1
  }
  return count1 + count2
}