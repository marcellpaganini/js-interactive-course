let myLeads = [];
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
// saveLead = () => {
//     console.log('Btn clicked from onclick attribute');
// }

const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    let elements = "";
    for (let index = 0; index < myLeads.length; index++) {
        
        elements += `<li>
                        <a href='${myLeads[index]}'>${myLeads[index]}</a>
                      </li>`;
    }
    ulEl.innerHTML = elements;
});