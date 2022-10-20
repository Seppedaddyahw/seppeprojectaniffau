input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 D C5 B E B F E ", 500)
    led.plot(2, 3)
    basic.showLeds(`
        . # # # #
        # # . # .
        # # # . .
        # # # # .
        . # # # #
        `)
    basic.showIcon(IconNames.Ghost)
})
basic.forever(function () {
	
})
