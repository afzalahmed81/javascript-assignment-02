function setGetFunc(obj1) {
    const allKeys = Object.keys(obj1);
    const allValues = Object.values(obj1);
    for (let i=0 ; i< allKeys.length ; i++){     // saving to locala storage
    localStorage.setItem(allKeys[i],allValues[i]);
    
}
    let house2 =[];
    let keys = Object.keys(localStorage);
    for(let key of keys) {
    //console.log(`${key}: ${localStorage.getItem(key)}`);
    house2.push(`${key}: ${localStorage.getItem(key)}`);     // retreiving from local storage into an array
}
            //return Object.assign({}, house2);   // method 01 converting array to object
            // const obj2 = {};                     // method 02    converting array to object
            // house2.forEach((element,index)=> {
            //     obj2[`key${index}`] = element;
            // });
            // return obj2

            //method 03             converting array to object
            const obj2 = {...house2};
            return obj2;
    
}

const house = {
    stories: 4,
    color:'white',
    area: '500 sq yard'
}


let retObj = setGetFunc(house);
console.log(retObj);