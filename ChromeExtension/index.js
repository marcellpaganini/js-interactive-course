let myLeads = [];
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
// saveLead = () => {
//     console.log('Btn clicked from onclick attribute');
// }

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderElements(myLeads);
}

// const tabs = [
//     {url: "https://linkedin.com/in/per-harald-borgen/"}
// ]

tabBtn.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderElements(myLeads);
    })
})

function renderElements(leads) {
    let elements = "";
    for (let index = 0; index < leads.length; index++) {
        
        elements += `<li>
                        <a href='${leads[index]}'>${leads[index]}</a>
                      </li>`;
    }
    ulEl.innerHTML = elements;
}

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    inputEl.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    renderElements(myLeads);
});

deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    renderElements(myLeads);
});
