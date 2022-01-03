let light_level = 0
let max_light = 10
basic.forever(function () {
    light_level = input.lightLevel()
    sb.setServoPosition(sb.servo(SBServo.ServoA), Math.map(light_level, 0, max_light, 0, 3))
    if (light_level > max_light / 2) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
})
