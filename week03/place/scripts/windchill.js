const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("speed").textContent);

const calculateWindChill = (temperature, windSpeed) => {
    if (temperature <= 10 && windSpeed >4.8) {
        return (
            13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * 
            Math.pow(windSpeed, 0.16)).toFixed(1);} else {return "N/A";}
    };

document.getElementById("windchill").textContent = calculateWindChill(temperature, windSpeed);