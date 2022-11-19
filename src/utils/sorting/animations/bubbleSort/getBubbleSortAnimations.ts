export const getBubbleSortAnimations = (items: number[]) => {
  const sorted = [...items];
  const animations: number[][] = [];

  for (let i = 0; i < items.length - 1; i += 1) {
    for (let j = 0; j < items.length - i - 1; j += 1) {
      if (sorted[j] > sorted[j + 1]) {
        const temp = sorted[j];

        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;

        animations.push([j, j + 1]);
      }
    }
  }

  return { sorted, animations };
};
