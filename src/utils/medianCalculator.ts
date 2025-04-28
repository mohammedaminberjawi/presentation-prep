export function calculateMedian(numbers: number[]): number {
  const sortedNumbers = numbers.slice().sort((a, b) => a - b);
  const length = sortedNumbers.length;

  if (length % 2 === 0) {
    const midIndex = length / 2;
    return (sortedNumbers[midIndex - 1] + sortedNumbers[midIndex]) / 2;
  } else {
    const midIndex = Math.floor(length / 2);
    return sortedNumbers[midIndex];
  }
}
