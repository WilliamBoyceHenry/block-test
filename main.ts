let T = 0
let Mid = 0
let D = 0
input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    T = control.millis()
    Mid = T / 10
    D = Mid * 340
    basic.showNumber(D)
})
