# My HackerRank Solutions

The purpose of this repository is to backup my solutions to the challenges I've solved in [HackerRank](https://www.hackerrank.com/).

## Problems

* [By Domain](docs/domains.md)
* [By Interview Kit](docs/interview-kit.md)

## How to use this repo

Clone the repository:

```sh
$ git clone https://github.com/iramirezc-learning/my-hacker-rank-solutions.git
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

## Create the files for a new challenge

Run the `challenge` script with the new path for the challenge.

__Syntax__

```sh
./scripts/challenge <new-path>
```

__Example__

_Note: Change `new-challenge` with the actual name of the problem._

```sh
$ ./scripts/challenge src/problems/algorithms/new-challenge
# Created 'src/problems/algorithms/new-challenge'
# Created 'src/problems/algorithms/new-challenge/README.md'
# Created 'src/problems/algorithms/new-challenge/new-challenge.js'
# Created 'src/problems/algorithms/new-challenge/index.js'
# Created 'src/problems/algorithms/new-challenge/specs'
# Created 'src/problems/algorithms/new-challenge/specs/new-challenge.spec.js'
# Created 'src/problems/algorithms/new-challenge/specs/input'
# Created 'src/problems/algorithms/new-challenge/specs/output'
```

Finally, add the test cases files to the `input` and `output` directories. _Note: Make sure to use the same name for each test case_:

```sh
# example of the file tree created
.
├─ src
│  ├─ problems
│  │  ├─ algorithms
│  │  │  ├─ new-challenge
│  │  │  │  ├─ specs
│  │  │  │  │  ├─ input
│  │  │  │  │  │  └─ 00.txt # add input test case file
│  │  │  │  │  ├─ output
│  │  │  │  │  │  └─ 00.txt # add output test case file
│  │  │  │  │  ├─ new-challenge.spec.js
│  │  │  │  ├─ index.js
│  │  │  │  ├─ new-challenge.js
│  │  │  │  └─ README.md

```