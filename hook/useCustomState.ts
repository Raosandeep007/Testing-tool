export const useCustomState = (initialValue: any) => {
  let val = initialValue;
  const state = () => val;
  const setState = (newValue: any) => {
    val = newValue;
  };
  return [state, setState];
};
