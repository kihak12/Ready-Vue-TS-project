export const debounce = (toDebounce: (...args: any[]) => any, wait: number) => {
  let timeoutID: number | undefined = undefined;

  return function (...args: any[]) {
    const later = () => {
      timeoutID = undefined;
      toDebounce(...args);
    };

    clearTimeout(timeoutID);
    timeoutID = setTimeout(later, wait) as any;
  };
};
