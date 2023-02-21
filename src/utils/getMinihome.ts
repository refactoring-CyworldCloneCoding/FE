const getMinihome = (num: number) => {
  return window.open(
    `/minihome/${num}`,
    "미니홈피",
    "width=1300, height=700, resizable=no"
  );
};

export default getMinihome;
