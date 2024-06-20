"""
Design a function that determines whether a given string is a pangram. A
pangram is a sentence or phrase containing every letter of the alphabet at
least once. Punctuation and case are typically ignored. For example, the
string "The quick brown fox jumps over the lazy dog" is a pangram, while
"Hello, world!" is not.
"""

import re

def ispangram(string):
	# Remove all non-alphabetic characters from the string and convert to lowercase
	string = re.sub('[^a-z]', '', string.lower())
	# Use set to remove duplicates and count the number of unique letters
	unique_letters = len(set(string))
	# If the number of unique letters is 26, it is a pangram
	return unique_letters == 26

# test case 1
import string
string = "The quick brown fox jumps over the lazy dog"
print(ispangram(string))
#test case 2
string = "Hello world"
print(ispangram(string))