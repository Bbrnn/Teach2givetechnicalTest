"""
Master Yoda, a renowned Jedi Master from the Star Wars universe, is known
for his unique way of speaking. He often reverses the order of words in his
sentences. For example, instead of saying "I am home" he might say "Home
am I" Design a function that takes a sentence as input and returns a new
sentence with the words reversed in the same order that Master Yoda would
use.
"""

def reverse_words(sentence):
    # Split the sentence into words, reverse the list, and join back into a string
    #List Slicing [::-1]:
    reversed_sentence = ' '.join(sentence.split()[::-1])
    return reversed_sentence

#test case
sentence = "I am home"
print("The reversed sentence is:", reverse_words(sentence))
