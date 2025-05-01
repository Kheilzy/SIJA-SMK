document.addEventListener('DOMContentLoaded', function () {
    const monthYear = document.getElementById('month-year');
    const daysContainer = document.getElementById('days');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
    ];
    let currentDate = new Date();
    let today = new Date();
    function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();
    monthYear.textContent = `${months[month]} ${year}`;
    daysContainer.innerHTML = '';
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = firstDay; i > 0; i--) {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = prevMonthLastDay - i + 1;
    dayDiv.classList.add('fade');
    daysContainer.appendChild(dayDiv);
    }
    for (let i = 1; i <= lastDay; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = i;
    if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
    dayDiv.classList.add('today');
    }
    daysContainer.appendChild(dayDiv);
    }
    const nextMonthStartDay = 7 - new Date(year, month + 1, 0).getDay() - 1;
    for (let i = 1; i <= nextMonthStartDay; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = i;
    dayDiv.classList.add('fade');
    daysContainer.appendChild(dayDiv);
    }
    }
    prevButton.addEventListener('click', function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
    });
    nextButton.addEventListener('click', function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
    });
    renderCalendar(currentDate);

    const profilePic = document.getElementById('profile-pic');

    profilePic.addEventListener('click', function () {
        // Change the image source permanently
        profilePic.src = 'Images/profile2.jpg'; // Replace with the new image path

        // Add the zoom effect
        profilePic.classList.add('zoomed');

        // Keep the zoom effect for a short duration
        setTimeout(() => {
            profilePic.classList.remove('zoomed'); // Remove zoom after 300ms
        }, 300);
    });
    });

    function updateClock() {
      const clockElement = document.getElementById('clock');
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  setInterval(updateClock, 1000);
  
  updateClock();