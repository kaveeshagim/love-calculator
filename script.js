const yname = document.getElementById('yname');
const pname = document.getElementById('pname');
const calculate = document.getElementById('button');
const percentageResult = document.getElementById('percentage');
const resultMessage = document.getElementById('result');
const mainDiv = document.getElementById('main');


calculate.addEventListener('click', async () => {
    const ynameValue = yname.value;
    const pnameValue = pname.value;

    const apiUrl = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${ynameValue}&fname=${pnameValue}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fd5531e22emshc5a7fd2b717fe05p1524e6jsn1564f8537a57',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(apiUrl, options);
        const result = await response.json();
        console.log(result);

        mainDiv.style.height = "400px";
        percentageResult.innerHTML = `Love Percentage: ${result.percentage}%`;
        resultMessage.innerHTML = `Result: ${result.result}`;

    } catch (error) {
        console.error(error);
    }

});
