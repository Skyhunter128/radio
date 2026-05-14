input.onButtonPressed(Button.A, function () {
    couleur = 2
})
input.onButtonPressed(Button.AB, function () {
    envoie_ordre()
})
function envoie_ordre () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    envoi = 1
    if (1 == couleur) {
        radio.sendString("grok_bleu")
        basic.showString("bleu")
    } else if (2 == couleur) {
        radio.sendString("grok_jaune")
        basic.showString("jaune")
    } else {
        basic.showString("2")
    }
    basic.showIcon(IconNames.Yes)
}
input.onButtonPressed(Button.B, function () {
    couleur = 1
})
let couleur = 0
let envoi = 0
envoi = 0
couleur = 0
while (0 == couleur) {
    basic.showIcon(IconNames.No)
}
if (1 == couleur) {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
} else if (2 == couleur) {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        # . # . .
        # # # . .
        `)
} else {
    while (false) {
        basic.showString("error grok")
    }
}
loops.everyInterval(100, function () {
    if (pins.digitalReadPin(DigitalPin.P0) >= 1) {
        envoie_ordre()
        basic.showIcon(IconNames.Heart)
        basic.pause(2000)
        basic.clearScreen()
    } else {
    	
    }
})
