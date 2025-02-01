# Unexpected behavior of + operator with undefined and null in JavaScript

This repository demonstrates a common, yet subtle, error in JavaScript related to the behavior of the `+` operator when used with `undefined` and `null` values.

The `bug.js` file contains the problematic code.  The `bugSolution.js` file offers a solution for handling such cases to prevent unexpected results.

## Problem

In JavaScript, adding `undefined` to a number results in `NaN` (Not a Number), while adding `null` is treated as adding 0. This can lead to unexpected behavior if not properly handled.

## Solution

The recommended approach is to explicitly check for `undefined` or `null` values and handle them appropriately.  This might involve using a default value, throwing an error, or using a different logic altogether depending on the context of your application.  The `bugSolution.js` provides an example of checking for null or undefined parameters before performing addition.