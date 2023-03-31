# Time Conversion

Given a time in [12-hour AM/PM][12h-clock] format, convert it to military (24-hour)
time.

Note:

- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.

- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

## Example

```bash
s = "12:01:00PM"
```

Return '12:01:00'.

```bash
s = "12:01:00AM"
```

Return '00:01:00'.

## Function Description

Complete the timeConversion function in the editor below. It should return a new
string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

- string s: a time in _12_ hour format

### Returns

- string: the time in _24_ hour format

### Input Format

A single string that represents a time in _12-hour_ clock format (i.e.: or ).

### Constraints

All input times are valid

### Sample Input

```bash
07:05:45PM
```

### Sample Output

```bash
19:05:45
```

[12h-clock]: https://en.wikipedia.org/wiki/12-hour_clock
