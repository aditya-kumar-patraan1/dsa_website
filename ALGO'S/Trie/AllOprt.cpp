#include <bits/stdc++.h>
using namespace std;

class TrieNode
{
public:
    bool isEndOfWord;
    TrieNode *children[26];

    TrieNode()
    {
        isEndOfWord = false;
        for (int i = 0; i < 26; i++)
        {
            children[i] = nullptr;
        }
    }
};

class Solution{

    public:

    TrieNode* root;

    Solution(){
        root = new TrieNode();
    }

    /*
     * Time Complexity (TC): O(L)
     * Space Complexity (SC): O(L)
     * where L is the length of the myWord.
    */
    void insertWord(string myWord)
    {
        int n = myWord.length();
        TrieNode *crawler = root;

        for (int i = 0; i < n; i++)
        {
            int idx = myWord[i] - 'a';
            if (crawler->children[idx] == nullptr)
            {
                crawler->children[idx] = new TrieNode();
            }
            crawler = crawler->children[idx];
        }
        crawler->isEndOfWord = true;
    }

    /*
     * Time Complexity (TC): O(L)
     * Space Complexity (SC): O(1)
     * where L is the length of the myWord.
    */
    bool searchWord(string myWord)
    {
        int n = myWord.length();
        TrieNode *crawler = root;

        for (int i = 0; i < n; i++)
        {
            int idx = myWord[i] - 'a';
            if (crawler->children[idx] == nullptr)
            {
                return false;
            }
            crawler = crawler->children[idx];
        }
        return crawler != nullptr && crawler->isEndOfWord;
    }

    /*
     * Time Complexity (TC): O(P + N)
     * Space Complexity (SC): O(M)
     * where P is the length of the prefix (myWord).
     * N is the total number of nodes in the sub-trie.
     * M is the maximum length of a word from the prefix's end.
    */
    int countPrefix(string myWord){
        int n=myWord.length();
        TrieNode* crawler = root;

        for(int i=0;i<n;i++){
            int idx=myWord[i] - 'a';
            if(crawler->children[idx] == nullptr){
                return 0;
            }
            crawler = crawler->children[idx];
        }
        return dfs(crawler);
    }

    // <<<<<<<<<<< ADDED THIS WRAPPER FUNCTION TO USE allWords HELPER >>>>>>>>>>>
    /*
     * This function makes the `allWords` helper easy to use from main.
     */
    vector<string> getWordsWithPrefix(string prefix) {
        vector<string> results;
        TrieNode* crawler = root;

        // 1. Navigate to the node representing the end of the prefix
        for (char ch : prefix) {
            int idx = ch - 'a';
            if (crawler->children[idx] == nullptr) {
                return results; // Prefix doesn't exist, return empty vector
            }
            crawler = crawler->children[idx];
        }

        // 2. Now, call the recursive helper from this node
        allWords(results, crawler, prefix);
        return results;
    }

// Making helpers private is a good practice, but keeping your structure for now.
// private:

    /*
     * (Helper function for countPrefix)
     * TC: O(N), SC: O(M)
    */
    int dfs(TrieNode* root){
        if(!root){
            return 0;
        }
        int count = 0;
        if(root->isEndOfWord == true){
            count = 1;
        }
        for(int i=0;i<26;i++){
            if(root->children[i] != nullptr){
                count+=dfs(root->children[i]);
            }
        }
        return count;
    }

    /*
     * (Recursive helper to find all words)
     * TC: O(N), SC: O(M)
    */
    void allWords(vector<string>& result, TrieNode* startNode, string currentWord){
        if(startNode == nullptr){
            return;
        }

        // If the current node marks the end of a word, add it to our results.
        if(startNode->isEndOfWord){
             // To avoid adding the prefix itself if it's already a word multiple times,
             // we can check if it's already in the result. A better way is to handle this logic outside.
             // For simplicity, we assume the initial call handles the base prefix.
             // The logic as is works but might add the prefix word at the start.
             // A cleaner approach is to pass prefix by value and append. Let's stick to your original.
             result.push_back(currentWord);
        }

        for(int i=0;i<26;i++){
            if(startNode->children[i] != nullptr){
                currentWord.push_back((i+'a'));
                allWords(result, startNode->children[i], currentWord);
                currentWord.pop_back(); // Backtracking
            }
        }
    }
};

int main()
{
    Solution node;

    // --- 1. Inserting words ---
    cout << "--- 1. Inserting Words ---" << endl;
    node.insertWord("aditya");
    node.insertWord("man");
    node.insertWord("mango");
    node.insertWord("rain");
    node.insertWord("rainbow");
    cout << "Words inserted: aditya, man, mango, rain, rainbow" << endl;


    // --- 2. Searching for words ---
    cout << "\n--- 2. Searching for Words ---" << endl;
    cout << "Searching for 'aditya': " << (node.searchWord("aditya") ? "Found" : "Not Found") << endl;
    cout << "Searching for 'apple': " << (node.searchWord("apple") ? "Not Found" : "Found") << endl;
    // 'mang' is a prefix, not a complete word, so searchWord should be false
    cout << "Searching for 'mang': " << (node.searchWord("mang") ? "Found" : "Not Found") << endl;


    // --- 3. Counting words with a given prefix ---
    cout << "\n--- 3. Counting Prefixes ---" << endl;
    cout << "Number of words starting with 'rain': " << node.countPrefix("rain") << endl; // Expected: 2 (rain, rainbow)
    cout << "Number of words starting with 'man': " << node.countPrefix("man") << endl;   // Expected: 2 (man, mango)
    cout << "Number of words starting with 'a': " << node.countPrefix("a") << endl;       // Expected: 1 (aditya)
    cout << "Number of words starting with 'xyz': " << node.countPrefix("xyz") << endl;   // Expected: 0


    // --- 4. Finding all words with a given prefix ---
    cout << "\n--- 4. Finding All Words with Prefix ---" << endl;
    
    cout << "Words starting with 'man':" << endl;
    vector<string> words1 = node.getWordsWithPrefix("man");
    for(const string& word : words1){
        cout << "- " << word << endl;
    }

    cout << "\nWords starting with 'rain':" << endl;
    vector<string> words2 = node.getWordsWithPrefix("rain");
    for(const string& word : words2){
        cout << "- " << word << endl;
    }
    
    return 0;
}