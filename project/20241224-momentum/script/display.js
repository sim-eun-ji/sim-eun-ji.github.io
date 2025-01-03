const start = document.querySelector('.start');
const loginForm = document.querySelector('#form');
const inputElme = document.querySelector('.input');
const section = document.querySelector('section');
const outElem = document.querySelector('.logout');
const nameElem = document.querySelector('.name');
const LOGIN_KEY = "loginname";



const saveLoginName = (strInput) =>{
  localStorage.setItem(LOGIN_KEY,strInput);
}
const loadLoginName = () =>{
  return localStorage.getItem(LOGIN_KEY);
}
const printLoginName = (strName)=>{
  nameElem.textContent = `안녕하세요. ${strName}님`;
  start.classList.add('display');
  section.classList.remove('display');
}
const handlerSubmit = (event) =>{
  event.preventDefault();
  printLoginName(inputElme.value);
  saveLoginName(inputElme.value);
}

const init = () =>{
  let loginName = loadLoginName();
  if(loginName){
    printLoginName(loginName)
  } else { 
    loginForm.addEventListener("submit", handlerSubmit);
  }
  outElem.addEventListener("click", ()=>{
    localStorage.removeItem(LOGIN_KEY);
    section.classList.add('display');
    start.classList.remove('display'); 
    localStorage.clear();
  })

}
window.onload = init;
