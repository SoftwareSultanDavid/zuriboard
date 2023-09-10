const currentDate = new Date();


function getCurrentUTCWithinRange() {
  const currentUTC = new Date(currentDate.toISOString());
  const twoHoursInMilliseconds = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

  const utcTimeMilliseconds = currentUTC.getTime();

  // Get the current time in milliseconds
  const currentTimeMilliseconds = currentDate.getTime();

  // Calculate the difference between current time and UTC time
  const timeDifference = Math.abs(currentTimeMilliseconds - utcTimeMilliseconds);

  // Check if the difference is within a +/- 2-hour range
  if (timeDifference <= twoHoursInMilliseconds) {
    return currentUTC.toISOString();
  } else {
    return "Current time is not within +/- 2 hours of UTC time.";
  }
}
// const currentUTCWithinRange = getCurrentUTCWithinRange();


function getCurrentDay(){
  const days_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayIndex = currentDate.getDay();
  const currentDay = days_week[currentDayIndex];

  return currentDay;

}

module.exports = {getCurrentUTCWithinRange,  getCurrentDay}
