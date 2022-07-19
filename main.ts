function 좌회전 () {
    motorbit.freestyle(-50, -50)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        전진()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedNumber == 1) {
        후진()
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (receivedNumber == 2) {
        정지()
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    } else if (receivedNumber == 3) {
        좌회전()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedNumber == 4) {
        우회전()
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
    	
    }
})
function 우회전 () {
    motorbit.freestyle(50, 50)
}
function 정지 () {
    motorbit.brake()
}
function 후진 () {
    motorbit.freestyle(-50, 50)
}
function 전진 () {
    motorbit.freestyle(50, -50)
}
radio.setGroup(55)
basic.showLeds(`
    . # # # .
    . # . # .
    # # # # #
    . # # # .
    . # . # .
    `)
