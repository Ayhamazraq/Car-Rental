'use strict';
let formEl = document.getElementById('myForm');
let divEl = document.getElementById('renderTable');

let tablEl = document.createElement('table');
divEl.appendChild(tablEl);

let trEl = document.createElement('tr');
tablEl.appendChild(trEl);

let thEl1 = document.createElement('th');
trEl.appendChild(thEl1);
thEl1.textContent = 'Customer Name'

let thEl2 = document.createElement('th');
trEl.appendChild(thEl2);
thEl2.textContent = 'Car Model'


let saveData = [];

function Car(Customername, Carmodel) {
    this.Customername = Customername;
    this.Carmodel = Carmodel;
    saveData.push(this);
    SaveInLs();
}

function SaveInLs() {
    let data = JSON.stringify(saveData);
    localStorage.setItem('D', data)
}

function readFromLs() {
    let stringObj = localStorage.getItem('D');
    let normal = JSON.parse(stringObj);
    if (normal) {
        for (let i = 0; i < normal.lenght; i++) {
            let newCar = new Car(normal[i].Customername, normal[i].Carmodel);
        }
    }
}

Car.prototype.render = function ()
{
    let trEl2 =document.createElement('tr');
    tablEl.appendChild(trEl2);

let tdEl1 = document.createElement('td');
trEl2.appendChild(tdEl1);
tdEl1.textContent =`${this.Customername}`

let  tdEl2 = document.createElement('td');
trEl2.appendChild(tdEl2);
tdEl2.textContent =`${this.Carmodel}`





}

readFromLs();

formEl.addEventListener('submit', SaveLS);

function SaveLS (event)
{
    event.preventDefault();
    let usernameName = event.target.Customername.value;
    let cModel = event.target.Carmodel.value;
  

    let newCar= new Car (usernameName, cModel)
    
    newCar.render();
    formEl.reset();

}
