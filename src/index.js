import './sass/main.scss';

import {testAry} from "/js/testary";


const inputConteiner = document.querySelector('.Linux-testers');


const createInput = () => {
   const inputListElements = testAry.map(
       ({ name, a, b, c, d, i, }) =>
         `
         <p class="question">${name}</p>
         <div class="test">
      
         <input class="input" name="${a.id}" value="${a.id}" id="${a.id}" type="checkbox"><label class="label" for="${a.id}">${a.answer}</label>
      
         <input class="input" name="${b.id}" value="${b.id}" id="${b.id}" type="checkbox"><label class="label" for="${b.id}">${b.answer}</label>
      
         <input class="input" name="${c.id}" value="${c.id}" id="${c.id}" type="checkbox"><label class="label" for="${c.id}">${c.answer}</label>
      
          <input class="input" name="${d.id}" value="${d.id}" id="${d.id}" type="checkbox"><label class="label" for="${d.id}">${d.answer}</label>
      
          <input class="input" name="${i.id}" value="${i.id}" id="${i.id}" type="checkbox"><label class="label" for="${i.id}">${i.answer}</label>

         </div>`
     )
     .join("");
 
     inputConteiner.insertAdjacentHTML("afterbegin", inputListElements);
 };
 createInput();
