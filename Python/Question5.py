"""
Design a function that takes a list of integers as input. The function should
return True if the list contains two consecutive threes (3 next to a 3) anywhere
within the list. Otherwise, it should return False. For example, the function
should return True for [1, 3, 3] and False for [1, 3, 1, 3].
"""
def two_consecutive_threes(integer_list):
    # Traverse the list of integers
    for i in range(len(integer_list) - 1):
        # Check if the current element and the next element are both three
        if integer_list[i] == 3 and integer_list[i + 1] == 3:
            return True
    return False

# First test case without consecutive threes
integer_list = [2, 3, 4, 6, 5, 3]
print(two_consecutive_threes(integer_list))

# Second test case with consecutive threes
integer_list = [3, 3, 5, 4, 3, 789]
print(two_consecutive_threes(integer_list))
