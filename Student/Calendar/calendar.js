const container = document.getElementById('calendarContainer');
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

   function generateCalendar() {
    const year = 2026;

    months.forEach((month, index) => {
        const monthCard = document.createElement('div');
        monthCard.className = 'month-card d-flex flex-column h-100';

        const firstDay = new Date(year, index, 1).getDay();
        const daysInMonth = new Date(year, index + 1, 0).getDate();

        let daysHTML = '';
        for (let i = 0; i < firstDay; i++) {
            daysHTML += `<div class="day empty"></div>`;
        }
        for (let d = 1; d <= daysInMonth; d++) {
            daysHTML += `<div class="day">${d}</div>`;
        }

        monthCard.innerHTML = `
            <div class="month-title">${month}</div>
            <div class="days-header">
                <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
            </div>
            <div class="days-grid mb-3">${daysHTML}</div>
            <button class="btn btn-primary mt-auto fw-semibold" onclick="alert('Viewing activities for ${month}')">
                View Activity
            </button>
        `;
        
        container.appendChild(monthCard);
    });
}

    generateCalendar();