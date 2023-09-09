function convertTemperature() {
    const celsius = parseFloat(document.getElementById("temperature").value);

    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;

        document.getElementById("fahrenheitResult").textContent = fahrenheit.toFixed(2);
        document.getElementById("kelvinResult").textContent = kelvin.toFixed(2);
    } else {
        alert("Please enter a valid temperature in Celsius.");
    }
}
