interface Person {
    name: string
    age: number
}

type PersonalKey = keyof Person // я хочу чтобы PersonalKey наследовал все свойства от Person

let key: PersonalKey = 'name' // переменная со значением 'name'
key = 'age'

// key = 'job' не может принимать значение 'job' т.к. в интерфейсе этого не прописанно

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}
// если хотим тип такой как User, но без определенных полей
// 1-й метод
type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>

// Exclude - исключить
// keyof User - пробегаемся по всем ключам Юзера
// '_id' | 'createdAt' - вторым аргументом Exclude - это то что мы должны удалить, здесь удаляем два ключа

// 2-й метод 

type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // вторым аргументом показываем только то что должно быть

const user: UserKeysNoMeta = 'name'







