# Breaking The Records

Maria plays college basketball and wants to go pro. Each season she maintains a
record of her play. She tabulates the number of times she breaks her season record
for most points and least points in a game. Points scored in the first game establish
her record for the season, and she begins counting from there.

## Example

```bash
scores = [12, 24, 10, 24]
```

Scores are in the same order as the games played. She tabulates her results as follows:

| Game | Score | Minimum | Maximum | Count<br>Min Max |
| :--: | :---: | :-----: | :-----: | :--------------: |
|  0   |  12   |   12    |   12    |       0 0        |
|  1   |  24   |   12    |   24    |       0 1        |
|  2   |  10   |   10    |   24    |       1 1        |
|  3   |  24   |   10    |   24    |       1 1        |

Given the scores for a season, determine the number of times Maria breaks her
records for most and least points scored during the season.

## Function Description

Complete the _breakingRecords_ function in the editor below.

_breakingRecords_ has the following parameter(s):

- _int scores[n]_: points scored per game

### Returns

- _int[2]_: An array with the numbers of times she broke her records. Index is
  for breaking most points records, and index is for breaking least points records.

### Input Format

The first line contains an integer _n_, the number of games.

The second line contains space-separated integers describing the respective values
of _score0, score1, ..., scoreN-1_.

### Constraints

- _1 <= n <= 1000_
- _0 <= scores[i] <= 10^8_
