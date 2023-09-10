const currentDate = new Date();


function formatDateToUTC() {
  const year = currentDate.getUTCFullYear();
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getUTCDate()).padStart(2, '0');
  const hours = String(currentDate.getUTCHours()).padStart(2, '0');
  const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
}
// const currentUTCWithinRange = getCurrentUTCWithinRange();


function getCurrentDay(){
  const days_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayIndex = currentDate.getDay();
  const currentDay = days_week[currentDayIndex];

  return currentDay;

}

module.exports = {formatDateToUTC,  getCurrentDay}
