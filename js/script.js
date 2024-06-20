document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    let convertedTemp, explanation;

    if (unit === 'Celsius') {
        convertedTemp = (temperature * 9/5) + 32;
        explanation = `${temperature}° Celsius sama dengan ${convertedTemp.toFixed(2)}° Fahrenheit.`;
    } else {
        convertedTemp = (temperature - 32) * 5/9;
        explanation = `${temperature}° Fahrenheit sama dengan ${convertedTemp.toFixed(2)}° Celsius.`;
    }

    document.getElementById('convertedTemp').textContent = convertedTemp.toFixed(2);
    document.getElementById('explanation').textContent = explanation;
});
