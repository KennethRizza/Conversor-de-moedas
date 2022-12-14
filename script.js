const button = document.getElementById('button-convert')
const select = document.getElementById('currency-select')

const dolar = 5.3
const euro = 5.9
const bitcoin = 103235.00

const convertValues = () => {
    const input = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    currencyValueText.innerHTML = input / dolar
    realValueText.innerHTML = new Intl.NumberFormat(`pt-br`,{
        currency: `BRL`,
        style: 'currency',
    }).format(input);

    if(select.value === 'US$ Dolar Americano'){
        currencyValueText.innerHTML = new Intl.NumberFormat(`en-us`, {
            currency: `USD`,
            style: 'currency',
        }).format(input / dolar);
    }

    if(select.value === '€ Euro'){
        currencyValueText.innerHTML = new Intl.NumberFormat(`de-DE`, {
            currency: `EUR`,
            style: 'currency',
        }).format(input / euro);
    }

    if (select.value === "Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', 
            currency: 'BTC' ,
            maximumSignificantDigits: 2           
        }).format(input / bitcoin)
    }               
}

const  changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImgEua = document.getElementById('currency-img-eua')

    if (select.value === "US$ Dolar Americano") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImgEua.src = "./img/estados-unidos (1) 1.png"
    }
   
    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImgEua.src = "./img/europa-img.png"
    }
    if (select.value === "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImgEua.src = "./img/bitcoin.png"
    }
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
