
function timer(){
    let birthdate = new Date('15 nov 2023 00:00 AM');

let today = new Date();
let difference = (birthdate - today)/1000;

let input = document.querySelectorAll('input');
   if(difference>0){
    input[0].value = Math.floor(difference/3600/24)
    input[1].value = Math.floor(difference/3600%24)
    input[2].value = Math.floor(difference/60%60)
    input[3].value = Math.floor(difference%60)
   }else{
  let h =   document.querySelectorAll('h1');
    h[0].innerText='Happy Birthday Abdur Rahaman';
    h[1].innerText = '';
    h[2].innerText = '';
    h[3].innerText = '';
    document.getElementById('container').innerText = ''

   }
}

setInterval(() => {
    timer()
}, 1000);

