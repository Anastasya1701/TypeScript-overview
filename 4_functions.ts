function sum(a: number, b: number): number { // принимает числа и должна вернуть число
    return a = b
}

function toUpperCase(str: string):string {
    return str.toLowerCase()
}

//  у функции есть функционал перегружать определенные параметры и перегружать функцию
// т.е вызывать функцию с разными параметрами и возвращать разные параметры


interface Myposition {
    x:number | undefined
    y:number | undefined
}

interface MypositionWithDefault extends Myposition {
    default: string
}

function position(): Myposition // перегрузка функции
function position(a: number): MypositionWithDefault
function position(a:number, b:number): MyPosition

// итого получится одна функция

function position (a?: number, b?: number) {
    if(!a && !b ) {
        return {x: undefined, y: undefined}
    }
    if (a && !b) {
        return {x: a, b: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}