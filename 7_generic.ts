// Generic типы


// Указываем тип используя Generic синтаксис
// а именно это Array<number> - здесь указываем что это за объект и <из чего состоит>
const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['1', '1', '2', '3', '5']

function reverse<T>(array: T[]): T[] { // массивы могут быть разных типов
    return array.reverse()
}

// <T> - это дженерик тип, который подстраивается под входные данные















