let light_level = 0
let max_light = 25
basic.forever(function () {
    light_level = input.lightLevel()
    basic.showNumber(light_level)
    sb.setServoPosition(sb.servo(SBServo.ServoA), Math.map(light_level, 0, max_light, 0, 5))
})
