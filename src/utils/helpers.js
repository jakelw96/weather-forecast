export function createIcon(icon) {
    let iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    let iconImg = document.createElement('img');
    iconImg.setAttribute("src", iconUrl);
    iconImg.setAttribute("alt", "Weather Icon");

    return iconImg;
};

export function getDayOfWeek(utcTime) {
    const dayOfWeekArr = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date = new Date();
    let dayOfWeek = dayOfWeekArr[date.getUTCDay(utcTime)];
    
    return dayOfWeek
};