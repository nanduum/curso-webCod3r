const pessoa = {
    saudacao: 'Bom dia!',
    falar() { // também é possivel criar uma função assim
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()