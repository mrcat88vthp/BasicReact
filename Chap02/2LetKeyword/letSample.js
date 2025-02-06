var topic = 'Javascript';
if (topic){
    let topic = 'React';
    console.log('block', topic);
}

console.log('block', topic);

window.onload = function (){
    alert('Load');
    var div,
        container = document.getElementById('container');
    if(container){
        for(var i = 0; i < 5; i++){
            div = document.createElement('div');
            div.innerText = i;
            div.onclick = function() {
                alert('this is block #' + i);
            }
            container.appendChild(div);
        }

        for(let i = 0; i < 5; i++){
            div = document.createElement('div');
            div.innerText = i;
            div.onclick = function() {
                alert('this is block #' + i);
            }
            container.appendChild(div);
        }
    }
    else{
        console.log('Không tồn tại element Container');
    }
}