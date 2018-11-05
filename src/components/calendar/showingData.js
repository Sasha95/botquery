export function borderShowCalendar(year, month) {
  const curdate = new Date(`${year}-${month}-1`);
  const prevdate = new Date(`${year}-${month}-1`);
  const nextdate = new Date(`${year}-${month}-1`);
  const showDay = [];
  //кол-во дней в предыдущем месяце
  const countdaycur = new Date(
    curdate.getFullYear(),
    curdate.getMonth() + 1,
    0
  ).getDate();

  //кол-во дней в текущем месяце
  const countdayprev = new Date(
    prevdate.getFullYear(),
    prevdate.getMonth(),
    0
  ).getDate();

  //номер дня недели первого числа текущего месяца
  const dataFirstnameCurMon = new Date(
    `${curdate.getFullYear()}-${curdate.getMonth() + 1}-1`
  ).getDay();

  //номер дня недели последнего числа текущего месяца
  const dataLastnameCurMon = new Date(
    `${curdate.getFullYear()}-${curdate.getMonth() + 1}-${countdaycur}`
  ).getDay();

  //последний день предыдущего месяца минус номер дня недели последнего числа текущего месяца
  const endDataPrevMon = prevdate.setDate(
    prevdate.getDate() - dataFirstnameCurMon + 1
  );
  const endDayPrevMon = new Date(endDataPrevMon).getDate();

  if (Number(endDayPrevMon) !== 1) {
    for (let i = endDayPrevMon; i <= countdayprev; i++) {
      showDay.push({
        day: i,
        month: prevdate.getMonth() + 1,
        year: prevdate.getFullYear()
      });
    }
  }
  for (let i = 1; i <= countdaycur; i++) {
    showDay.push({
      day: i,
      month: curdate.getMonth() + 1,
      year: curdate.getFullYear()
    });
  }
  if (dataLastnameCurMon !== 0) {
    nextdate.setMonth(curdate.getMonth() + 1);
    for (let i = 1; i <= 7 - dataLastnameCurMon; i++) {
      showDay.push({
        day: i,
        month: nextdate.getMonth() + 1,
        year: nextdate.getFullYear()
      });
    }
  }

  const ar = [];
  let obj = [];
  let obj1 = [];
  let obj2 = [];
  let obj3 = [];
  let obj4 = [];
  let obj5 = [];

  for (let j = 0; j < 42; j++) {
    if (j < 7) {
      obj.push(showDay[j]);
    } else if (j >= 7 && j < 14) {
      obj1.push(showDay[j]);
    } else if (j >= 14 && j < 21) {
      obj2.push(showDay[j]);
    } else if (j >= 21 && j < 28) {
      obj3.push(showDay[j]);
    } else if (j >= 28 && j < 35) {
      obj4.push(showDay[j]);
    } else if (j >= 35 && showDay[j] !== undefined) {
      obj5.push(showDay[j]);
    }
  }
  // console.log("prev", curdate.getMonth());
  // console.log("cur", curdate.getMonth() + 1);
  // console.log("next", curdate.getMonth() + 2);
  ar.push(obj, obj1, obj2, obj3, obj4, obj5);

  return ar;
}
