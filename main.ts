input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    couleur = 1
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    if (envoi == 0) {
        envoie_ordre()
    } else {
        basic.showIcon(IconNames.Heart)
        basic.showString("erreur babazicool")
    }
    
})
function envoie_ordre() {
    
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    envoi = 1
    basic.showString("envoie en cours")
    if (1 == couleur) {
        radio.sendString("grok_bleu")
        basic.showString("bleu")
    } else if (2 == couleur) {
        radio.sendString("grok_jaune")
        basic.showString("jaune")
    } else {
        basic.showString("echec envoie")
    }
    
    basic.showIcon(IconNames.Yes)
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    couleur = 2
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

