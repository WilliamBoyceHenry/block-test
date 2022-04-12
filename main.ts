let T = 0
let Mid = 0
let Mid2 = 0
let D = 0
input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    T = control.millis()
    Mid = T / 1000
    Mid2 = Mid * 340
    D = Mid2 / 1609
    basic.showNumber(D)
})
