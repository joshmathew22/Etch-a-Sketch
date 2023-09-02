//create grid
function createGrid(x){
    const container = document.querySelector('#container');
    for(let i = 0; i<x;i++){
        const row = document.createElement('div')
        container.appendChild(row)
        for(let i = 0; i<x; i++){
            const content = document.createElement('div');
            content.setAttribute('id', 'grid');    
            content.style.backgroundColor = 'white';
            row.appendChild(content);
        }    
    }
    for(const grid of document.querySelectorAll('#grid')){
        grid.addEventListener('mouseenter', ()=> grid.style.backgroundColor = 'black');
    }
}

//erase drawing on grid
function erase(){
    const nodeList= document.querySelectorAll("#grid");
    for(let i = 0; i<nodeList.length; i++){
        nodeList[i].style.backgroundColor = 'white';
    }
}

//delete grid
function d(){
    const container = document.querySelector('#container');
    const nodeList= document.querySelectorAll("#grid");
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    
}

//grid sizes
function small(){
    d();
    
    createGrid(10);
    const nodeList= document.querySelectorAll("#grid");
    for(let i = 0; i<nodeList.length; i++){
        nodeList[i].classList.add("small");
    }
}

function med(){
    d();
    createGrid(30);
}

function large(){
    d();
    createGrid(70);
    const nodeList= document.querySelectorAll("#grid");
    for(let i = 0; i<nodeList.length; i++){
        nodeList[i].classList.add("large");
    }
}

function xlarge(){
    d();
    createGrid(100);
    const nodeList= document.querySelectorAll("#grid");
    for(let i = 0; i<nodeList.length; i++){
        nodeList[i].classList.add("xlarge");
    }
}

//colors
function black(){
    for(const grid of document.querySelectorAll('#grid')){
        grid.addEventListener('mouseenter', ()=> grid.style.backgroundColor = 'black');
    }
}

function blue(){
    for(const grid of document.querySelectorAll('#grid')){
        grid.addEventListener('mouseenter', ()=> grid.style.backgroundColor = 'blue');
    }
}

function red(){
    for(const grid of document.querySelectorAll('#grid')){
        grid.addEventListener('mouseenter', ()=> grid.style.backgroundColor = 'red');
    }
}

function random(){
    
    for(const grid of document.querySelectorAll('#grid')){

        let color = '#' + Math.floor(Math.random()* 16777215).toString(16)  //creates random color, formula from https://css-tricks.com/snippets/javascript/random-hex-color/
        grid.addEventListener('mouseenter', ()=> grid.style.backgroundColor = color);
    }
}


//creates original grid
createGrid(30);

