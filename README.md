# My HackerRank Solutions

The purpose of this repository is to backup my solutions to the challenges I've solved in [HackerRank](https://www.hackerrank.com/).

## How to use this repo

Clone the repository:

```sh
$ git clone git@github.com:iramirezc-learning/my-hacker-rank-solutions.git
```

Install the dependencies:

```sh
$ cd my-hacker-rank-solutions
$ npm install
```

Run the tests:

```sh
$ npm run test
```

### Create the file tree for a new challenge

Run the `challenge` script with the new path for the challenge.

__Syntax__

```sh
./scripts/challenge <new-path>
```

__Example__

```sh
$ ./scripts/challenge src/domains/algorithms/sorting/big-sorting

# Created 'src/domains/algorithms/sorting/big-sorting'
# Created 'src/domains/algorithms/sorting/big-sorting/index.js'
# Created 'src/domains/algorithms/sorting/big-sorting/__tests__'
# Created 'src/domains/algorithms/sorting/big-sorting/__tests__/index.test.js'
# Created 'src/domains/algorithms/sorting/big-sorting/__tests__/input'
# Created 'src/domains/algorithms/sorting/big-sorting/__tests__/output'
```

Finally, add the test cases files to the `input` and `output` folders. _Make sure to use the same name for both_:

```sh
# example of the tree created
.
├─ src
│  ├─ domains
│  │  ├─ algorithms
│  │  │  ├─ sorting
│  │  │  │  ├─ big-sorting
│  │  │  │  │  ├─ __tests__
│  │  │  │  │  │  ├─ input
│  │  │  │  │  │  │  └─ 00.txt # add test case file
│  │  │  │  │  │  ├─ output
│  │  │  │  │  │  │  └─ 00.txt # add test case file
│  │  │  │  │  │  ├─ index.test.js
│  │  │  │  │  └─ index.js

```

## Problems

* [By Domain](docs/domains.md)
* [By Interview Kit](docs/interview-kit.md)