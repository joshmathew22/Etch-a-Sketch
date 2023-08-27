const container = document.querySelector('#container');
for(let i = 0; i<16;i++){
    const row = document.createElement('div')
    container.appendChild(row)
    for(let i = 0; i<16; i++){
        const content = document.createElement('div');
        content.setAttribute('id', 'grid'); 
        content.setAttribute('style', 'color: blue; background: black;');    

        row.appendChild(content);
    }    
}

for(const grid of document.querySelectorAll('#grid')){
    grid.addEventListener('mouseenter', ()=> console.log('enter'));
}
