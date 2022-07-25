const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

    //  User interfce 
const UpdateUI = (data) =>{
    // console.log(data);
    // const citydet = data.citydet;
    // const weather = data.weather;
        const {citydet , weather} = data;
   // update details template

   details.innerHTML = 
   `
    <h5 class="my-3">${citydet.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    </div>
   `;

   const iconSrc = `Images/img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // update // night // day 
    let timeSrc = weather.isDayTime ? "Images/day.svg" : "Images/day.svg";
    time.setAttribute('src', timeSrc);
//     // let timeSrc = null;
//     // if(weather.isDayTime){
//     //     timeSrc = "Images/day.svg";
//     // }else{
//     //     timeSrc = "Images/night.svg";
//     // }
    
//    removeing d-none class if present
   if(card.classList.contains('d-none')){
      card.classList.remove('d-none');
   }


}

const Updatecity= async(city)=>{
// console.log(city);
    const citydet = await GetCity(city);
    const weather = await GetWeather(citydet.Key);

    return {citydet,weather}
}


cityForm.addEventListener('submit', e=>{
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    Updatecity(city)
    .then(data =>UpdateUI(data))
    .catch(err =>console.log(err));
})