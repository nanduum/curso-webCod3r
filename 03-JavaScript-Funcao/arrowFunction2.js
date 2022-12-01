function Pessoa() { // nesse exemplo como pessoa está em uma funçção o this não precisou de bind 
    this.idade = 0 //ou ser armazenado em constantes

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa