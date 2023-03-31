# Divisible Sum Pairs

Given an array of integers and a positive integer _k_, determine the number of
_(i, j)_ pairs where _i < j_ and _arr[i]_ + _arr[j]_ is divisible by _k_.

## Example

```bash
arr = [1, 2, 3, 4, 5, 6]
k = 5
```

Three pairs meet the criteria: _[1, 4], [2 ,3]_ and _[4, 6]_.

## Function Description

Complete the _divisibleSumPairs_ function in the editor below.

_divisibleSumPairs_ has the following parameter(s):

- _int n_: the length of array
- _int arr[n]_: an array of integers
- _int k_: the integer divisor

### Returns

- _int_: the number of pairs

### Input Format

The first line contains _2_ space-separated integers, _n_ and _k_.
The second line contains space-separated integers, each a value of _arr[i]_.

### Constraints

```bash
2 <= n <= 100
1 <= k <= 100
1 <= arr[i] <= 100
```

### Sample Input

|    STDIN    |        Function         |
| :---------: | :---------------------: |
|     6 3     |      n = 6, k = 3       |
| 1 3 2 6 1 2 | ar = [1, 3, 2, 6, 1, 2] |

### Sample Output

´´´bash
5
´´´

### Explanation

Here are the _5_ valid pairs when _k = 3_:

- (0, 2) -> arr[0] + arr[2] = 1 + 2 = 3
- (0, 5) -> arr[0] + arr[5] = 1 + 2 = 3
- (1, 3) -> arr[1] + arr[3] = 3 + 6 = 9
- (2, 4) -> arr[2] + arr[4] = 2 + 1 = 3
- (4, 5) -> arr[4] + arr[5] = 1 + 2 = 3
