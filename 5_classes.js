var Example = /** @class */ (function () {
    function Example(version) {
        this.exampleVariable = version;
    }
    Example.prototype.info = function (name) {
        return name;
    };
    return Example;
}());
// class Car {
//     readonly model: string // поля которые будут в этом классе
//     readonly numberOfWheels: number // readonly модификатор
//
//     constructor(theModel: string) {
//         this.model: theModel
//     }
// }
// Короткая запись, все тоже самое
var Car = /** @class */ (function () {
    function Car(model) {
    }
    return Car;
}());
