# Mini-Max Sum

Given five positive integers, find the minimum and maximum values that can be calculated
by summing exactly four of the five integers. Then print the respective minimum and
maximum values as a single line of two space-separated long integers.

## Example

```bash
arr = [1, 3 ,5 ,7 ,9]
```

The minimum sum is `1 + 3 + 5 + 7 = 16` and the maximum sum is `3 + 5 + 7 + 9 = 24`.
The function prints

```bash
16 24
```

## Function Description

Complete the _miniMaxSum_ function in the editor below.

_miniMaxSum_ has the following parameter(s):

- _arr_: an array of _5_ integers

### Print

Print two space-separated integers on one line: the minimum sum and the maximum
sum of _4_ of _5_ elements.

### Input Format

A single line of five space-separated integers.

### Constraints

```bash
1 < arr[i] < 10^9
```

### Output Format

Print two space-separated long integers denoting the respective minimum and maximum
values that can be calculated by summing exactly four of the five integers.
(The output can be greater than a 32 bit integer.)

### Sample Input

```bash
1 2 3 4 5
```

### Sample Output

```bash
10 14
```

### Explanation

The numbers are _1, 2, 3, 4, and 5_. Calculate the following sums using four of the five integers:

1. Sum everything except _1_, the sum is _2 + 3 + 4 + 5 = 14_.
2. Sum everything except _2_, the sum is _1 + 3 + 4 + 5 = 13_
3. Sum everything except _3_, the sum is _1 + 2 + 4 + 5 = 12_.
4. Sum everything except _4_, the sum is _1 + 2 + 3 + 5 = 11_.
5. Sum everything except _5_, the sum is _1 + 2 + 3 + 4 = 10_.

_Hints_: Beware of integer overflow! Use 64-bit Integer.
