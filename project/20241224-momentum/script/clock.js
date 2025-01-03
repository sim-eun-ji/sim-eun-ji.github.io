const clockStart = document.querySelector(".clock_start");
const dateStart = document.querySelector(".date_start");
const clockNow = document.querySelector(".clock_now")
const dateNow = document.querySelector(".date_now")

const updateClock = () =>{
  const now = new Date();
  const hours = String(now.getHours()).padStart(2,"0");
  const minutes = String(now.getMinutes()).padStart(2,"0");
  const seconds = String(now.getSeconds()).padStart(2,"0");
  clockStart.textContent = `${hours}:${minutes}:${seconds}`;
  clockNow.textContent = `${hours}:${minutes}:${seconds}`;
}
const calcDate = () =>{
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate(); 
  const day = today.getDay(); 
  dateStart.textContent = `${year}-${month}-${date}`;
  dateNow.textContent = `${year}-${month}-${date}`;
}



setInterval( updateClock , 1000 );
calcDate();
updateClock(); 