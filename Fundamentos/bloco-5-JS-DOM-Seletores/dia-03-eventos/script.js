function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function createDaysOfTheMonth() {
  const monthDayslist = document.querySelector('#days');

  for(let index = 0; index < dezDaysList.length; index += 1){
    let day = dezDaysList[index];
    let dayItemList = document.createElement('li');
    
    if(day === 24 || day === 31 || day === 25 ){
      dayItemList.className = "day-holiday";
      dayItemList.innerHTML = day;
      monthDayslist.appendChild(dayItemList);

    } else if ( day === 4 || day === 11 || day === 18 || day === 25 ) {
      dayItemList.className = 'day-friday';
      dayItemList.innerHTML = day;
      monthDayslist.appendChild(dayItemList);
    } else {
      dayItemList.className = "day";
      dayItemList.innerHTML = day;
      monthDayslist.appendChild(dayItemList);
    };
  };  
};

createDaysOfTheMonth();

function createholidayButton(holidays) {
  let holidayContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let idButton = 'btn-holiday';

  newButton.innerHTML = holidays;
  newButton.id = idButton;
  holidayContainer.appendChild(newButton);
};

createholidayButton('Feriados');


function holidayClick(){
let createHolidayClick = document.querySelector('#btn-holiday');
let HolidayClickCreate = document.querySelectorAll('.day-holiday', '');
console.log(HolidayClickCreate);
let cor = 'rgb(238, 238, 238)';
let corDays = '#777'; 

  createHolidayClick.addEventListener('click', function() {

      for(let index = 0; index < HolidayClickCreate.length; index += 1) {
        if(HolidayClickCreate[index].style.backgroundColor === cor) {
          HolidayClickCreate[index].style.backgroundColor = corDays;

        } else {
          HolidayClickCreate[index].style.backgroundColor = cor;
        }

      }
      console.log("xablau")
    })
};
  
holidayClick();


/* 



// Criando a troca de selected nas paletas de cores
const selectedPalette = document.getElementById('color-palette').children;

function selectedAllColor(event) {
  const selectedRandom = document.querySelector('.selected');
  selectedRandom.classList.remove('selected');
  var test = event.target.getAttribute('id');
  event.target.setAttribute('cor', `${test}-cor`);

  event.target.classList.add('selected');




//Criando a função de selecionar cor e pintar os pixels // tive que fazer muitas buscas na internet, só consegui fazer pq usei como referencia duvidas parecidas no stackoverflow

document.querySelectorAll('.pixel').forEach((item) => {
  item.addEventListener('click', function (e) {
    let pallet = document.querySelector('.selected');
    let cor = pallet.getAttribute('cor');
    this.setAttribute('class', `pixel ${cor}`);
  });
});
*/


