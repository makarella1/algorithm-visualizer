/* 
I fully agree that such a solution is a bit hacky and I probably shouldn't do something like this, 
but all these timeouts just pushed me to do so and, unfortunately, I can't avoid it (as for now at least).
Anyways, it helps me to create an amazing user experience when you can just toggle array's length, change the
delay for sorting and just fool around without seeing weird bugs with sorting. I hope it's worth it. However,
it took me a while and I don't feel like breaking my head and thinking of something smarter
*/

export const clearTimeouts = () => {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  const highestTimeoutId = setTimeout(';');
  for (let i = 0; i < highestTimeoutId; i += 1) {
    clearTimeout(i);
  }
};
