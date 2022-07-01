const button = document.getElementById('button')


button.addEventListener('click', async () => {
    const response = await fetch('https://motivational-quote-api.herokuapp.com/quotes/random')

    let data = await response.json()

    loadData(data)

})

const loadData = (data) => {
    const advice = document.getElementById('advice')
    const quote = document.getElementById('quote')
    advice.innerHTML = `advice #${data.id}`
    quote.innerHTML = data.quote
}

button.click()
