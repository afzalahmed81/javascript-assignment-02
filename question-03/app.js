function creatPara(text) {
    const paragraph = document.createElement('p');
    paragraph.innerText = text;
    document.body.appendChild(paragraph);
    paragraph.style.color = 'red';
    paragraph.style.fontSize = 'x-large';

}

creatPara('This is the text passed to the paragraph element created by javaScript');