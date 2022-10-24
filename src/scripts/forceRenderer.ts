const forceRender = (index: Number) => {
  localStorage.index = index;
  componentKey.value += 1;
  console.log("rerender value", componentKey.value);
};
