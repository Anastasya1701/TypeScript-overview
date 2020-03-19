// Гуарды - вспомогательные конструкции которые позволяют работать так же с типами

function stip(x: string | number) {
    if(typeof x === 'number') {
        return x.toFixed(2)
    }

    return x.toLowerCase()
}

 class MyResponse {
    header =  'This is response header'
    result = 'response result'
 }

 class ErrorMy {
    header =  'This is error header'
    error = 'error result'
 }

 function hendler(res: MyResponse | ErrorMy) { // res - это объект
    if (res instanceof MyResponse) {// проверяю произошёл ли res от MyResponse
        return {
            info: res.header + res.result
        }
    }

    return {
        info: res.header + res.error
    }
 }

 //-------------------------------------------------------------


type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    //...
}

setAlertType('success')
// setAlertType('default') // будет ошидка , потому что нет такого типа в AlertType






















