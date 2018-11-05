export const Time = () => {
  const time = new Date();
  time.setHours(7);
  time.setMinutes(45);
  const timeAr = [];

  for (let i = 0; i < 16; i++) {
    time.setMinutes(time.getMinutes() + 15);
    timeAr.push(
      time.getMinutes() === 0
        ? time.getHours() + ":" + "00"
        : time.getHours() + ":" + String(time.getMinutes())
    );
  }
  time.setHours(12);
  time.setMinutes(45);
  for (let i = 0; i < 16; i++) {
    time.setMinutes(time.getMinutes() + 15);

    timeAr.push(
      time.getMinutes() === 0
        ? time.getHours() + ":" + "00"
        : time.getHours() + ":" + String(time.getMinutes())
    );
  }

  return timeAr;
};
