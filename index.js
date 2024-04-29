let day = new Date()
let nextDay = new Date(day);
nextDay.setDate(day.getDate() + 1); 

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const scheduleData = [
    { day: "Mon", class1: "Eng", class2: "CP Lab", class3: "CP Lab", class4: "CP Lab", class5: "BCME", class6: "Math", class7: "Math"},
    { day: "Tue", class1: "Math", class2: "Phy", class3: "EP/EWS Lab", class4: "EP/EWS Lab", class5: "Eng", class6: "IP", class7: "IP"},
    { day: "Wed", class1: "Phy", class2: "Math", class3: "IP", class4: "Eng", class5: "BCME", class6: "BCME", class7: "BCME"},
    { day: "Thu", class1: "Phy", class2: "BCME", class3: "LIB", class4: "IP", class5: "EP/EWS Lab", class6: "EP/EWS Lab", class7: "EP/EWS Lab"},
    { day: "Fir", class1: "Eng", class2: "Phy", class3: "IP", class4: "PD", class5: "IP", class6: "Phy", class7: "Phy"},
    { day: "Sat", class1: "Math", class2: "IP", class3: "Math", class4: "Phy", class5: "Eng", class6: "Eng Lab", class7: "Eng Lab"},
    
    // Add more entries as needed
  ];

let refresh = function(){
    // day = new Date();
    document.getElementById("day").innerHTML = week[day.getDay()];
    document.getElementById("date").innerHTML = day.getDate();
    document.getElementById("month").innerHTML = month[day.getMonth()];
    //document.getElementById("nextDate").innerHTML = nextDay.getDate();
}

refresh();
// setInterval(refresh,1000);


function populateSchedule() {
    
    const scheduleTable = document.getElementById('schedule');
    const tbody = scheduleTable.querySelector('tbody');
    tbody.innerHTML = '';
    // const currentDate = new Date();
    const currentDayIndex = day.getDay();

    scheduleData.forEach((entry, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${entry.day}</td>
        <td>${entry.class1}</td>
        <td>${entry.class2}</td>
        <td>${entry.class3}</td>
        <td>${entry.class4}</td>
        <td>${entry.class5}</td>
        <td>${entry.class6}</td>
        <td>${entry.class7}</td>
      `;

      if(index === currentDayIndex-1){
        row.classList.add('current-day');
      }

      tbody.appendChild(row);
    });

}

function nextPage(){
    day.setDate(day.getDate() + 1);
    nextDay.setDate(nextDay.getDate() + 1);
    refresh();
    populateSchedule();
}

function prevPage(){
    day.setDate(day.getDate() - 1);
    nextDay.setDate(nextDay.getDate() - 1);
    refresh();
    populateSchedule();
}

const nextButton = document.getElementById('nextDate');
nextButton.addEventListener('click', nextPage);

const prevButton = document.getElementById('date');
prevButton.addEventListener('click', prevPage);

window.onload = populateSchedule;
