# Plus Minus

Given an array of integers, calculate the ratios of its elements that are positive,
negative, and zero. Print the decimal value of each fraction on a new line with
6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to
six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

## Example

```bash
arr = [1, 1, 0, -1, -1]
```

There are _n = 5_ elements, two positive, two negative and one zero. Their ratios
are _2/5 = 0.400000_, _2/5 = 0.400000_ and _1/5 = 0.200000_.

Results are printed as:

```bash
0.400000
0.400000
0.200000
```

## Function Description

Complete the _plusMinus_ function in the editor below.

_plusMinus_ has the following parameter(s):

- _int arr[n]_: an array of integers

### Print

Print the ratios of positive, negative and zero values in the array. Each value
should be printed on a separate line with _6_ digits after the decimal. The function
should not return a value.

### Input Format

The first line contains an integer, _n_, the size of the array.
The second line contains _n_ space-separated integers that describe _arr[n]_.

### Constraints

```bash
0 < n < 100
-100 < arr[i] <= 100
```

### Output Format

Print the following _3_ lines, each to _6_ decimals:

1. proportion of positive values
2. proportion of negative values
3. proportion of zeros

### Sample Input

| STDIN Function | Function                   |
| -------------- | -------------------------- |
| 6              | arr[] size n = 6           |
| -4 3 -9 0 4 1  | arr = [-4, 3, -9, 0, 4, 1] |

### Sample Output

```
0.500000
0.333333
0.166667
```

### Explanation

There are _3_ positive numbers, _2_ negative numbers, and _1_ zero in the array.
The proportions of occurrence are positive: _3/6 = 0.500000_, negative: _2/6 = 0.333333_
and zeros: _1/6 = 0.166667_.
