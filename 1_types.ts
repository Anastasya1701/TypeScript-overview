const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string ='Hello Typescript'

// Array это структура данных которая в себе содержит другие структуры данных
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
// 2 вариант
const  numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13] // Djeneric типы. Указывает в треугольных скобках из чего состоить данный класс или объекты
const wordsArray: string[] = ['Hello', 'Word']

// Tuple (тип данных)  когда нужно несколько типов данных собрать
const contact: [string, number] = ['anastaiya', 25]

// Any когда нужно поменять все-таки тип
let variable: any = 42
//...
variable = 'New String'

//-----------
function sayMyName(name: string) : void { // пишем void потому что функция ничего не возвращаем
   console.log(name)
}
sayMyName('Настя')


// Never - тип данных, когда функция возвращает ошибку или постоянно что-то делает

function throwError(message: string):never {
   throw new Error(message)
}

function infinite():never {
   while (true) {}
}

//----------------------------------------------------------------------------------------------------------------------

// Type alias
// конструкция в ts которая позволяет создавать свои типы
type Login = string // сделали свой тип и пользуемся им

const login: Login = 'Nastya'

type ID = string | number // если нам нужно чтобы было два типа
const id1: ID = 'MY ID'
const id2: ID = 23232323


type SOMETYPE = string | null | undefined


