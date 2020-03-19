// Интрефейсы нужны для того чтобы делать типы объектам

interface userObj {
    readonly id: string | number // readonly можно только читать , но не менять
    color?: string // ? это означает что свойство может не обязательно там стоять
    size: {
        width: number
        height: number
    }
}

const rect1: userObj = {
    id: '2323',
    size: {
        width: 25,
        height: 45,
    },
    color: '#fff'
}