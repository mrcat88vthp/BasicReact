function Header(text){
    let h1 = document.createElement('h1');
    h1.textContent = text;
    document.body.appendChild(h1);
}

Header('Mr cat');