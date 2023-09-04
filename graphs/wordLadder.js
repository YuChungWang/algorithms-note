// https://leetcode.com/problems/word-ladder/description/

// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words
// beginWord -> s1 -> s2 -> ... -> sk such that:

//   1. Every adjacent pair of words differs by a single letter.
//   2. Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
//   3. sk == endWord

// Given two words, beginWord and endWord, and a dictionary wordList,
// return the number of words in the shortest transformation sequence from beginWord to endWord,
// or 0 if no such sequence exists.

// ---------------------------------------------------------------------------
// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

// ---------------------------------------------------------------------------
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 
// ---------------------------------------------------------------------------
// Constraints:

// 1 <= beginWord.length <= 10
// endWord.length == beginWord.length
// 1 <= wordList.length <= 5000
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.

const ladderLength = (beginWord, endWord, wordList) => {
  let wordSet = new Set(wordList);
  let queue = [beginWord];
  let steps = 1;

  while (queue.length > 0) {
    let next = [];

    for (let word of queue) {
      if (word === endWord) {
        return steps;
      }

      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
          const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);

          if (wordSet.has(newWord)) {
            next.push(newWord);
            wordSet.delete(newWord);
          }
        }
      }
    }

    queue = next;
    steps += 1;
  }

  return 0;
}

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]));
console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log"]));
