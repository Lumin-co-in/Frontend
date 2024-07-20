    const yearSelect = document.getElementById('dob-year');
    const monthSelect = document.getElementById('dob-month');
    const daySelect = document.getElementById('dob-day');

    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1; 
        option.textContent = month;
        monthSelect.appendChild(option);
    });

    function populateDays() {
        const year = parseInt(yearSelect.value);
        const month = parseInt(monthSelect.value);

        if (!year || !month) {
            return;
        }

        const daysInMonth = new Date(year, month, 0).getDate();
        daySelect.innerHTML = ''; 

        for (let day = 1; day <= daysInMonth; day++) {
            const option = document.createElement('option');
            option.value = day;
            option.textContent = day;
            daySelect.appendChild(option);
        }
    }

    yearSelect.addEventListener('change', populateDays);
    monthSelect.addEventListener('change', populateDays);


var divs=document.querySelectorAll(".gen-val");
divs.forEach(div=>{
    div.addEventListener("click",()=>{
        divs.forEach(a=> a.classList.remove("selected"));
        div.classList.add("selected");
    });
});