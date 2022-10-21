export const getInsertionSortAnimations = (items: number[]) => {
  const newItems = [...items];
  const animations: number[][] = [];

  for (let i = 1; i < newItems.length; i += 1) {
    // const current = newItems[i];
    // let j = i - 1;

    let j = i;

    // while (j >= 0 && newItems[j] > current) {
    //   animations.push([j, i]);
    //   newItems[j + 1] = newItems[j];

    //   j -= 1;
    // }
    // newItems[j + 1] = current;
    while (j > 0 && newItems[j] < newItems[j - 1]) {
      animations.push([j - 1, j]);

      const temp = newItems[j - 1];

      newItems[j - 1] = newItems[j];

      newItems[j] = temp;

      j -= 1;
    }
  }

  return { animations, newItems };
};
