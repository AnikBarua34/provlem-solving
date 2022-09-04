import keyword 

def isKeyword(word):
    keyword_list = keyword.kwlist
    if word in keyword_list:
        return "Yes, this is a keyword"
    else:
        return "No this is not a keyword"

print(isKeyword("Greek"))
print(isKeyword("True"))
print(keyword.kwlist)