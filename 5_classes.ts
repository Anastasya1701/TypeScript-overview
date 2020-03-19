class Example {
    exampleVariable: string

    constructor (version: string) {
        this.exampleVariable = version
    }

    info(name: string) {
        return name
    }
}


// class Car {
//     readonly model: string // поля которые будут в этом классе
//     readonly numberOfWheels: number // readonly модификатор
//
//     constructor(theModel: string) {
//         this.model: theModel
//     }
// }

// Короткая запись, все тоже самое

class Car {
    readonly numberOfWheels: number

    constructor(readonly model: string) {} // нужно обязательно ставить модификатор readonly, чтобы вернул запись this.model = model
}

//================================

// Модификаторы - бывают 3 видов
// 1. Protected
// 2. Private
// 3. Public

class Animal {
    protected voice: string  // можем использовать в классах которые наследуются от него, yj yt d j,]trnf[

    public color: string = 'green'

    private sayVoice() {  // доступен только в классе гдк был определен
        console.log('Гав')
    }
}

class Cat extends Animal {

    public setVoice(voice: string ) {
        this.voice = voice
    }



}

const cat = new Cat()
cat.setVoice('Мяу') //
console.log(cat.color) // black

//----------------------------------------------------

// Абстрактные классы - они не компилируются, и есть асбстрактные методы
// они нужны чтобы делать шаблон для классов которые от него убдут наследоваться

abstract class Component {
    abstract render(): void
    abstract info(str: string): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component ob render')
    }

    info(str: string): string {
        return str
    }
}



























