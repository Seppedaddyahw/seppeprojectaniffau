basic.showLeds(`
    . # # # #
    # # . # .
    # # # . .
    # # # # .
    . # # # #
    `)
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    music.playMelody("C5 D C5 B E B F E ", 500)
})
