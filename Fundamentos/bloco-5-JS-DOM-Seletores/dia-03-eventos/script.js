function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

let dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// EXERCICIO 1 - Desenvolve uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days".
function createDaysOfTheMonth() {
  const monthDayslist = document.querySelector("#days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItemList = document.createElement("li");

    if (day === 24 || day === 31) {
      dayItemList.className = "holiday";
      dayItemList.innerHTML = day;
      monthDayslist.appendChild(dayItemList);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItemList.className = "friday";
      dayItemList.innerHTML = day;
      monthDayslist.appendChild(dayItemList);
    } else if (day === 25) {
      dayItemList.className = "day holiday friday";
      dayItemList.innerHTML = day;
      monthDayslist.appendChild(dayItemList);
    } else {
      dayItemList.className = "day";
      dayItemList.innerHTML = day;
      monthDayslist.appendChild(dayItemList);
    }
  }
}
createDaysOfTheMonth();

// EXERCÍCIO 2 - IMPLEMENTA UMA FUNÇÃO QUE RECEBE COMO PARAMETRO A STRING "HOLIDAYS". E CRIA DINAMICAMENTE UM BOTÃO COM O NOME "FERIADO"
function createholidayButton(holidays) {
  let holidayContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");
  let idButton = "btn-holiday";

  newButton.innerHTML = holidays;
  newButton.id = idButton;
  holidayContainer.appendChild(newButton);
}
createholidayButton("Feriados");

// EXERCÍCIO 3 - IMPLEMENTA UMA FUNÇÃO QUE ADD AO BOTÃO FERIADO UM EVENTO DE CLICK QUE MUDA A COR DE FUNDO DOS DIAS QUE TEM A CLASS "HOLIDAY"
function holidayClick() {
  let createHolidayClick = document.querySelector("#btn-holiday");
  let HolidayClickCreate = document.querySelectorAll(".holiday");
  console.log(HolidayClickCreate);
  let cor = "rgb(238, 238, 238)";
  let corDays = "rgb(231, 208, 208)";

  createHolidayClick.addEventListener("click", function () {
    for (let index = 0; index < HolidayClickCreate.length; index += 1) {
      if (HolidayClickCreate[index].style.backgroundColor === cor) {
        HolidayClickCreate[index].style.backgroundColor = corDays;
      } else {
        HolidayClickCreate[index].style.backgroundColor = cor;
      }
    }
  });
}
holidayClick();

//EXERCÍCIO 4 - IMPLEMENTA UMA FUNÇÃO QUE RECEBE COMO PARAMETRO A STRING "FRIDAY". E CRIA DINAMICAMENTE UM BOTÃO COM O NOME "SEXTA-FEITA"
function createFridayButton(friday) {
  const fridayContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");
  let idButton = "btn-friday";

  newButton.innerHTML = friday;
  newButton.id = idButton;
  fridayContainer.appendChild(newButton);
}
createFridayButton("Sexta-Feira");

// EXERCÍCIO 5 - IMPLEMENTA UMA FUNÇÃO QUE ADD AO BOTÃO "SEXTA-FEITA" UM EVENTO DE CLICK QUE MODIFICA O TEXTO EXIBIDO NOS DIAS QUE TEM A CLASS "FRIDAY"
function fridayClick(dezFridays) {
  let createFridayClick = document.querySelector("#btn-friday"); // id do button que foi criado acima
  let daysMonth = document.querySelectorAll(".friday"); // class dos dias de sexta
  let weekDays = document.querySelectorAll(".week-days"); // dias da semana
  let sextou = "Cervejada!";

  createFridayClick.addEventListener("click", function () {
    for (let index = 0; index < daysMonth.length; index += 1) {
      if (daysMonth[index].innerHTML !== sextou) {
        daysMonth[index].innerHTML = sextou;
      } else {
        daysMonth[index].innerHTML = dezFridays[index];
      }
    }
  });
}
let dezFridays = [4, 11, 18, 25];
fridayClick(dezFridays);

// EXERCÍCIO 6 - IMPLEMENTA DUAS FUNÇÕES QUE CRIAM UM EFEITO DE ZOOM AO PASSAR COM O MOUSE EM UM DIA DO MÊS NO CALENDÁRIO.
/*function dayMouseOver(){
      let day = document.querySelector('#days');

      day.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '600';
      })
    }*/
const dayMouseOver = () => {
  let day = document.querySelector("#days");
  day.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "600";
  });
};
/*function dayMouseOut(){
    let day = document.querySelector('#days');

    day.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
    }*/
const dayMouseOut = () => {
  let day = document.querySelector("#days");
  day.addEventListener("mouseout", function (event) {
    event.target.style.fontWeight = "200";
    event.target.style.fontSize = "20px";
  });
};
dayMouseOver();
dayMouseOut();

// EXERCÍCIO 7 - IMPLEMENTA UMA FUNÇÃO QUE ADD UMA TAREFA AO CALENDÁRIO E CRIA DINAMICAMENTE O ELEMENTO COM A TAG <SPAN>
/*function tarefa(tarefa){
    let tarefaContainer = document.querySelector('.my-tasks');
    let tarefaVai = document.createElement('span');

    tarefaVai.innerHTML = tarefa
    tarefaContainer.appendChild(tarefaVai);

  }

  tarefa('Afazeres:')*/
const taf = (afazeres) => {
  let mytasks = document.querySelector(".my-tasks");
  let tarefa = document.createElement("span");
  tarefa.innerHTML = afazeres;
  mytasks.appendChild(tarefa);
};
taf("Afazeres:");

//EXERCÍCIO 8 - IMPLEMENTA UMA FUNÇÃO QUE ADD UMA MARCAÇÃO COM COR PARA O EXERCÍCIO  ANTERIOR ( EXERCÍCIO -7) E CRIA DINAMICAMENTE O ELEMENTO <DIV> E A CLASS "TASK"
const newColor = (cor) => {
  let mytasks = document.querySelector(".my-tasks");
  let color = document.createElement("div");
  color.className = "task";
  color.style.backgroundColor = cor;
  mytasks.appendChild(color);
};
newColor("red");

// EXERCÍCÍO 9 - IMPLEMENTA UMA FUNÇÃO QUE AO CLICAR NO ELEMENTO COM A TAG <DIV> QUE É REFERENTE A COR DA MINHA TAREFA, ESSE ELEMENTO RECEBE A CLASS 'TASK SELECTED' E AO CLICAR NOVAMENTE NO ELEMENTO ELE VOLTA A TER APENAS A CLASS "TASK"
const taskSelected = () => {
  let taskDiv = document.querySelector(".task");
  let selecTask = document.getElementsByClassName("task selected");
  taskDiv.addEventListener("click", function (event) {
    if (selecTask.length === 0) {
      event.target.className = "task selected";
    } else {
      event.target.className = "task";
    }
  });
};
taskSelected();

// EXERCÍCIO 10 - IMPLEMENTA UMA FUNÇÃO QUE ADD A COR DA TAREFA AO CLICAR EM UM DIA DO MÊS E AO CLICAR NOVAMENTE NO DIA A COR VOLTA AO NORMAL.
const selectDayColor = () => {
  let taskSelected = document.getElementsByClassName("task selected");
  let days = document.querySelector("#days");
  let task = document.querySelector(".task");
  let taskColor = task.style.backgroundColor;

  days.addEventListener("click", function (event) {
    let eventoAlvoCor = event.target.style.color;
    if (taskSelected.length > 0 && eventoAlvoCor !== taskColor) {
      let color = taskSelected[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventoAlvoCor === taskColor && taskSelected.length !== 0) {
      event.target.style.color = "rgb(119,119,119)";
    }
  });
};
selectDayColor();

//EXERCÍCIO 11 - IMPLEMENTA UMA FUNÇÃO QUE ADD UMA TAREFA AO DIGITAR NA CAIXA DE TEXTO " COMPROMISSOS " E ADD O INTEM A LISTA DE " AFAZERES " AO CLICAR NO BOTÃO ADD. E RETORA UM ERRO SE CLICAR EM ADD SEM TER INSERIDO NADA.

const addNewTask = () => {
  let taskInput = document.querySelector("#task-input"); // input
  let buttonInput = document.querySelector("#btn-add"); // button 
  let taskList = document.querySelector(".task-list"); // ul das tarefas

  buttonInput.addEventListener("click", function () {
    if (taskInput.value.length > 0) {
      let novaLi = document.createElement("li");
      novaLi.innerText = taskInput.value;

      taskList.appendChild(novaLi);
      taskInput.value = "";
    } else {
      alert("Erro: Digite ao menos 1 caractere.");
    }
  });

  taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter" && taskInput.value.length > 0) {
      let novaLi = document.createElement("li");
      novaLi.innerText = taskInput.value;

      taskList.appendChild(novaLi);
      taskInput.value = "";
    }
  });
};

addNewTask();


//obgDeus.