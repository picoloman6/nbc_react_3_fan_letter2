export const convertDate = (dateTime: number) => {
  const dateObj = new Date(dateTime);
  const year = dateObj.getFullYear();
  const mon = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const hour = dateObj.getHours();
  const min = dateObj.getMinutes();

  return `${year}년 ${mon}월 ${date}일 ${hour}시 ${min}분`;
};
