function Pessoa() {

    const pessoa = this
    this.idade = 0

    setInterval(function () {
        console.log(this.idade++)
    }, 2000);
}

const p1 = new Pessoa()
