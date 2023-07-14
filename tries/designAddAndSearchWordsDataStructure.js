// https://leetcode.com/problems/design-add-and-search-words-data-structure/description/

// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain
// dots '.' where dots can be matched with any letter.

// ---------------------------------------------------------------------------
// Example:

// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True
 
// ---------------------------------------------------------------------------
// Constraints:

// 1 <= word.length <= 25
// word in addWord consists of lowercase English letters.
// word in search consist of '.' or lowercase English letters.
// There will be at most 2 dots in word for search queries.
// At most 104 calls will be made to addWord and search.

const WordDictionary = () => {
  this.root = {};

  this.traverse = (word, index, node) => {
    if (index === word.length) {
      return !!node.isWord;
    }

    if (word[index] === '.') {
      for (let key in node) {
        if (this.traverse(word, index + 1, node[key])) {
          return true;
        }
      }
    } else {
      if (node[word[index]]) {
        return this.traverse(word, index + 1, node[word[index]]);
      }
    }

    return false;
  }
};

/** 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;

  for (let letter of word) {
    if (!node[letter]) {
      node[letter] = {};
    }

    node = node[letter];
  }

  node.isWord = true;
};

/** 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  const node = this.root;
  return this.traverse(word, 0, node);
};
