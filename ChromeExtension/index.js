let myLeads = [];
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
// saveLead = () => {
//     console.log('Btn clicked from onclick attribute');
// }

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderElements();
}

const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    inputEl.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    renderElements();
});

function renderElements() {
    let elements = "";
    for (let index = 0; index < myLeads.length; index++) {
        
        elements += `<li>
                        <a href='${myLeads[index]}'>${myLeads[index]}</a>
                      </li>`;
    }
    ulEl.innerHTML = elements;
}