function addList(text) {
    let unOrd = document.querySelector('#ul');
    let listItem = document.createElement('li');
    listItem.append(text);
    unOrd.append(listItem);
    
    
}

addList('Strawberry');