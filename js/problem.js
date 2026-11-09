// Problem generation. Pure: takes inputs, returns a problem object.

import { operations } from "./operations.js";

// Random integer in [0, maxExclusive)
const randInt = (maxExclusive) => Math.trunc(Math.random() * maxExclusive);

// Operand range grows with level (level 1 -> 0..5).
const maxOperand = (level) => Math.trunc(11 * level * 0.5);

function pickOperands(op, level) {
  const max = maxOperand(level);
  switch (op) {
    case "-": {
      // Keep results non-negative.
      const x = randInt(max);
      const y = randInt(max);
      return [Math.max(x, y), Math.min(x, y)];
    }
    case "÷": {
      // Build the dividend from the divisor so the answer is always a whole number.
      const divisor = 1 + randInt(max);
      const quotient = randInt(max);
      return [divisor * quotient, divisor];
    }
    default:
      return [randInt(max), randInt(max)];
  }
}

export function generateProblem(counter, level, op) {
  const [a, b] = pickOperands(op, level);
  return {
    a,
    b,
    op,
    answer: operations[op](a, b),
    text: `Q${counter}: What is ${a} ${op} ${b}?`,
  };
}
