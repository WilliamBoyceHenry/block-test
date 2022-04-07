let T = 0
let D = 0
input.onButtonPressed(Button.A, function () {
    if (input.buttonIsPressed(Button.B)) {
        T = 0
    }
})
input.onButtonPressed(Button.B, function () {
    D = T * 3400
    basic.showNumber(D)
})
