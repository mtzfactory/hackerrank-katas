# Sparse Arrays

There is a collection of input strings and a collection of query strings. For each
query string, determine how many times it occurs in the list of input strings.
Return an array of the results.

## Example

```bash
strings = ["ab", "ab", "abc"]
queries = ["ab", "abc", "bc"]
```

There are _2_ instances of _"ab"_, _1_ of _"abc"_ and _0_ of _"bc"_. For each query,
add an element to the return array, _results = [2, 1, 0]_.

## Function Description

Complete the function _matchingStrings_ in the editor below. The function must return
an array of integers representing the frequency of occurrence of each query string
in strings.

_matchingStrings_ has the following parameters:

- _string strings[n]_ - an array of strings to search
- _string queries[q]_ - an array of query strings

### Returns

- _int[q]_: an array of results for each query

### Input Format

The first line contains and integer _n_, the size of _strings[]_.

Each of the next _n_ lines contains a string _strings[i]_.

The next line contains _q_, the size of _queries[]_.

Each of the next _q_ lines contains a string _queries[i]_.

### Constraints

```bash
1 <= n <= 1000
1 <= q <= 1000
1 <= |strings[i]|, |queries[i]| <= 20
```

### Smple Input 1

```bash
4
aba
baba
aba
xzxb
3
aba
xzxb
ab
```

### Sample Output 1

```bash
2
1
0
```

### Sample Input 2

```bash
3
def
de
fgh
3
de
lmn
fgh
```

### Sample Output 2

```bash
1
0
1
```

### Sample Input 3

```bash
13
abcde
sdaklfj
asdjf
na
basdn
sdaklfj
asdjf
na
asdjf
na
basdn
sdaklfj
asdjf
5
abcde
sdaklfj
asdjf
na
basdn
```

### Sample Output 3

```bash
1
3
4
3
2
```
