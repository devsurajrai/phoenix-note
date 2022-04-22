export const getDate = () => {
  let currentDate = `${new Date().getDate()}/${
    new Date().getMonth() + 1
  }/${new Date().getFullYear()}`;
  return currentDate;
};
