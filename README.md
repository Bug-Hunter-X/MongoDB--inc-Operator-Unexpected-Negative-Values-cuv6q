# MongoDB $inc Operator Unexpected Negative Values

This repository demonstrates a potential issue with the MongoDB `$inc` operator when decrementing values. If not handled correctly, the operator can generate negative numbers, resulting in unexpected program behavior.

The `bug.js` file illustrates the incorrect usage.  The `bugSolution.js` file provides a solution to avoid negative values.

## How to Reproduce

1. Clone this repository.
2. Install MongoDB and start a local instance.
3. Run the `bug.js` script. Observe that the `sequence` value becomes negative.
4. Run the `bugSolution.js` script for a correct implementation.

## Solution

The solution involves adding a check to ensure that the value does not fall below zero.