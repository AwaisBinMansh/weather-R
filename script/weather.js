class Forecast
{
  constructor(){
    this.key = 'pGSC45TKcUyCeRM0cDAUJK6ujHDP8sYG';
    this.CityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    this.WeatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
  }
  async Updatecity(city){
  // console.log(city);
      const citydet = await this.GetCity(city);
      const weather = await this.GetWeather(citydet.Key);
  
      return {citydet,weather}
  }


 async GetCity(city){
  const  query = `?apikey=${this.key}&q=${city}`;  
  const responce = await fetch ( this.CityURI + query );
  const data = await responce.json();
  return data[0];
 }

 async GetWeather(id){

      const query= `${id}?apikey=${this.key}`;

      const responce = await fetch( this.WeatherURI + query );
      const data = await responce.json();

      return data[0];



 }


};

// forecast.GetCity('Lahore')
// .then(data =>{
//     return GetWeather(data.Key)})
// .then(data =>console.log(data))
// .catch(err=>console.log(err));
