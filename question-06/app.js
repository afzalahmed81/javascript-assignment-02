function storeLocal(key,obj1) {
    localStorage.setItem(key,obj1);

}

const player = {
    type: 'batsman',
    hand:'right hander',
    position:'opener',
    age: 23,
    canBowl: true
}
let playerModified = JSON.stringify(player);
storeLocal('sportsman',playerModified);