function getFromLocalStorage(key) {
    let objFromLocal = localStorage.getItem(key);
    return JSON.parse(objFromLocal);
}

const car = {
    type:'four wheel',
    color:'red',
    engine:'300cc',
    runningTotalKm: 80000
}

let carStringified = JSON.stringify(car);

localStorage.setItem('vehicle',carStringified);
let printObj = getFromLocalStorage('vehicle');
console.log(printObj);