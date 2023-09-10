function getCurrentUTC() {
  const currentDate = new Date();
  const formattedUTC = currentDate.toISOString().split('.')[0] + 'Z';
  return formattedUTC;
}


function getCurrentDay(){
  const currentDate = new Date();
  const days_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayIndex = currentDate.getDay();
  const currentDay = days_week[currentDayIndex];

  return currentDay;

}

module.exports = {getCurrentUTC,  getCurrentDay}
