const url =  'https://api.openweathermap.org/data/2.5'
const key = '64f1270ad6f5b86fec7fd08f0b4fb4e1'

const setQuery = (e)=>{

    if(e.keyCode == '13' ){ // endet e tıklarsan getResult fonksiyonunu çalıştır 
        getResult(searchBar.value) // searchBar ın içindeki değeri parametreye al
    }

}


const getResult = (cityName)=>{ // parametrede alınana değeri konsola bastır 
    let query = `${url}/weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)       
}

const displayResult = (result)=>{
    let city = document.querySelector('.city') // şehirin girildiği inputu yakala
    city.innerText = `${result.name},${result.sys.country}` // ve içeriğine api den gelen verileri yolla
    let temp = document.querySelector('.temp') // sıcaklık verilerinin bulunduğu input u yakala
    temp.innerText = `${Math.round(result.main.temp)}°C` // apı den aldığımız temp i sıcaklık inputunun içeriğine ekleyelim
    let desc = document.querySelector('.desc')
    desc.innerText = `${result.weather[0].description}`

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}

const searchBar = document.getElementById('searchBar')   // seatch bar ı seç
searchBar.addEventListener('keypress',setQuery)// klavyede enter basınca setquery çalıştır