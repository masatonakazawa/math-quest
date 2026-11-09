// Problem generation. Pure: takes inputs, returns a problem object.

const randomOperand = (level) => Math.trunc(Math.random() * 11 * level * 0.5);

export function generateProblem(counter, level) {
  const a = randomOperand(level);
  const b = randomOperand(level);
  return {
    a,
    b,
    answer: a * b,
    text: `Q${counter}: What is ${a} x ${b}?`,
  };
}
