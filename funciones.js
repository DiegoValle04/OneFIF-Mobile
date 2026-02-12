
let lista = [];

//arreglo 
for(let i = 0; i<4;i++){
    let matches = document.getElementById(`match${i}`);
    matches.addEventListener('mouseover', function(){
        this.classList.remove('match') //concatenar igual que arriba
        this.classList.add('match-expanded')
      })
    matches.addEventListener('mouseout', function(){
      this.classList.remove('match-expanded')
      this.classList.add('match')
    })
    lista.push(matches)
}

