/***
 * KEY = eb98539f701af8c32f12dbb0c8be5e61
 */
const place = document.querySelector(".weather > .place")
const temp = document.querySelector(".weather > .temp")
const success = (position) =>{
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_key = `eb98539f701af8c32f12dbb0c8be5e61`
  let URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
  // console.log( URL );
  fetch(URL).then( (response)=>{
    return response.json();
  } ).then( (data)=>{
    // console.log( data );
    // console.log( data.name );
    // console.log( Math.floor(data.main.temp - 273.15) );
    let sunrise = new Date(data.sys.sunrise*1000);
    // console.log(sunrise);
    // console.log(data.coord.cloud)
    place.textContent = `${data.name}`
    temp.textContent = `${Math.floor(data.main.temp - 273.15)}˚C`
  });
}
const error = ()=>{
  console.log( 'error' );
}
const weather_init= () =>{
  if( !navigator.geolocation ){
    console.log("현재 위치를 가져올 수 없습니다.");
    place.textContent = "현재 위치를 가져올 수 없습니다."
    temp.textContent = ""
  }else {
    // console.log("위치 파악중.......");
      navigator.geolocation.getCurrentPosition(success,error);
      place.textContent = "위치 파악중......."
      temp.textContent = ""
    }
  }
weather_init();