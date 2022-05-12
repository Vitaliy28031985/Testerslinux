import './sass/main.scss';

import {testAry} from "/js/testary";

//---------------Загальні змінні-----------------
let totalPoints = 0;
const inputConteiner = document.querySelector('.Linux-testers');
const totalPointsText = document.querySelector('.total-points-text');
const totalPointsButton = document.querySelector('.button');


const createInput = () => {
   const inputListElements = testAry.map(
       ({ name, a, b, c, d, i, answerCorrect }) =>
         `
         <p class="question">${name}</p>
         <div class="test">
      
         <input class="input" data-corrects="${answerCorrect}" name="${a.id}" value="${a.answer}" id="${a.id}" type="checkbox"><label class="label" for="${a.id}">${a.answer}</label>
      
         <input class="input" data-corrects="${answerCorrect}" name="${b.id}" value="${b.answer}" id="${b.id}" type="checkbox"><label class="label" for="${b.id}">${b.answer}</label>
      
         <input class="input" data-corrects="${answerCorrect}" name="${c.id}" value="${c.answer}" id="${c.id}" type="checkbox"><label class="label" for="${c.id}">${c.answer}</label>
      
          <input class="input" data-corrects="${answerCorrect}" name="${d.id}" value="${d.answer}" id="${d.id}" type="checkbox"><label class="label" for="${d.id}">${d.answer}</label>
      
          <input class="input" data-corrects="${answerCorrect}" name="${i.id}" value="${i.answer}" id="${i.id}" type="checkbox"><label class="label" for="${i.id}">${i.answer}</label>

         </div>`
     )
     .join("");

     inputConteiner.insertAdjacentHTML("afterbegin", inputListElements);
 };
 createInput();
 
 inputConteiner.addEventListener('change', onChac);

function onChac(e) {
   if (e.target.nodeName !== 'INPUT') {
return
   }
   let chacValue = e.target.value;
   let answerCorrects = e.target.dataset.corrects;
   let checkQuestion = chacValue === answerCorrects;

   if (checkQuestion) {
      totalPoints += 1; 
   }
else {
   totalPoints = totalPoints;
}
}
totalPointsButton.addEventListener('click', onTotalPoints);

function onTotalPoints() {
   totalPointsText.textContent = `Ви набрали: ${totalPoints} бал` 
}


