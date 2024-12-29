export const comparedWithNowTimeAndPreviousTime = (timeStamp: string) => {
  const previousTime = new Date(timeStamp).getTime();
  const nowTime = Date.now();
  if (nowTime - previousTime > 0) {
    return true;
  }
  return false;
};
