const SHOW_DURATION = 10;

// різниця в днях
function diffDays(targetDateStr) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const target = new Date(targetDateStr);
    target.setHours(0, 0, 0, 0);

    const diffTime = target - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// форматування одного фільму
function formatFilm(item) {
    const daysToStart = diffDays(item.date);
    const daysToEnd = daysToStart + SHOW_DURATION - 1;
    const isToday = daysToStart === 0;
    const isLastDay = daysToEnd === 0;
    const hasEnded = daysToEnd < 0;

    let html = `<div class="film-item`;

    if (isToday) html += ` today`;
    else if (isLastDay) html += ` one-day-left`;
    else if (hasEnded) html += ` overdue`;

    html += `">
        <strong>${item.title}</strong> — ${item.cinema}<br>
        <small>Сеанс: ${item.date} | Зал: ${item.hall || '<em>невідомо</em>'}</small><br>`;

    if (hasEnded) {
        html += `Помилка Показ завершено ${-daysToEnd} дн. тому.`;
    } else if (daysToStart > 0) {
        html += `Час До початку: <strong>${daysToStart} дн.</strong> | До кінця: <strong>${daysToEnd} дн.</strong>`;
    } else if (isToday) {
        html += `Фільм <strong>ЙДЕ СЬОГОДНІ!</strong> Залишилося: <strong>${daysToEnd} дн.</strong>`;
    } else if (isLastDay) {
        html += `Останній день <strong><span class="last_day">ОСТАННІЙ ДЕНЬ ПОКАЗУ!</span></strong>`;
    } else {
        html += `Фільм Йде зараз. Залишилося: <strong>${daysToEnd} дн.</strong>`;
    }

    if (!item.hall || item.hall.trim() === "") {
        html += `<br><span class="no-hall">В кінотеатрі лише один зал.</span>`;
    }

    html += `</div>`;
    return html;
}

// Головна функція
function ras() {
    if (!window.films || !Array.isArray(window.films)) {
        document.getElementById("rezult").innerHTML = 
            `<p style="color: red;">Помилка: Дані не завантажені. Перевірте підключення data.js</p>`;
        return;
    }

    let html = "";
    window.films.forEach(film => {
        html += formatFilm(film);
    });
    document.getElementById("rezult").innerHTML = html;
}

document.getElementById("runBtn").addEventListener("click", ras);