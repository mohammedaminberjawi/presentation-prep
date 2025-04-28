export function calculateMedian(data: (number | string | null)[]): number | null {
    const numbers = data.filter((item) => typeof item === 'number') as number[];
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    const length = sortedNumbers.length;

    if (length === 0) {
        return null;
    }

    if (length % 2 === 0) {
        const midIndex = length / 2;
        return (sortedNumbers[midIndex - 1] + sortedNumbers[midIndex]) / 2;
    } else {
        const midIndex = Math.floor(length / 2);
        return sortedNumbers[midIndex];
    }
}
