const key = 'uuW5jTQKZucmx9Fr1V3WKPEOmggeHmSJ';

const GetCity= async (city)=>{
  const  base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const  query = `?apikey=${key}&q=${city}`;
  
  const responce = await fetch ( base + query );
  const data = await responce.json();
  return data[0];
}
 const GetWeather = async (id) =>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query= `${id}?apikey=${key}`;
    
    const responce = await fetch( base + query );
    const data = await responce.json();

    return data[0];
    





};
GetCity('Lahore')
.then(data =>{
    return GetWeather(data.Key)})
.then(data =>console.log(data))
.catch(err=>console.log(err));
