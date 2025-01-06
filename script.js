function generateRoutine() {
  const syllabus = document.getElementById('syllabus').value.split(',');
  const routineDiv = document.getElementById('routine');
  let routineHTML = '<h3>Your Study Routine:</h3><ul>';
  syllabus.forEach((topic, index) => {
    routineHTML += `<li>Day ${index + 1}: ${topic.trim()}</li>`;
  });
  routineHTML += '</ul>';
  routineDiv.innerHTML = routineHTML;
}

function setAlarm() {
  const alarmTime = document.getElementById('alarm').value;
  if (alarmTime) {
    alert(`Alarm set for ${alarmTime}`);
  } else {
    alert('Please select a time.');
  }
}
