export const getInsertionSortAnimations = (items: number[]) => {
  const sorted = [...items];
  const animations: number[][] = [];

  for (let i = 1; i < sorted.length; i += 1) {
    let j = i;
    while (j > 0 && sorted[j] < sorted[j - 1]) {
      animations.push([j - 1, j]);

      const temp = sorted[j - 1];

      sorted[j - 1] = sorted[j];

      sorted[j] = temp;

      j -= 1;
    }
  }

  return { animations, sorted };
};
