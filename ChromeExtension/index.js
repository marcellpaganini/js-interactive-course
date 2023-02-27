let myLeads = ['www.awesomelead.com', 'www.greatlead.com', 'www.notsocoollead.com'];
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
// saveLead = () => {
//     console.log('Btn clicked from onclick attribute');
// }

const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    console.log(myLeads);
});

for (let index = 0; index < myLeads.length; index++) {
    const element = myLeads[index];
    ulEl.innerHTML += `<li><a href='${element}'>${element}</a></li>`;
}