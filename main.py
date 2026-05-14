def on_button_pressed_a():
    global couleur
    couleur = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    if envoi == 0:
        envoie_ordre()
    else:
        basic.show_icon(IconNames.HEART)
        basic.show_string("erreur babazicool")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def envoie_ordre():
    global envoi
    basic.show_leds("""
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        """)
    envoi = 1
    basic.show_string("envoie en cours")
    if 1 == couleur:
        radio.send_string("grok_bleu")
        basic.show_string("bleu")
    elif 2 == couleur:
        radio.send_string("grok_jaune")
        basic.show_string("jaune")
    else:
        basic.show_string("echec envoie")
    basic.show_icon(IconNames.YES)

def on_button_pressed_b():
    global couleur
    couleur = 2
input.on_button_pressed(Button.B, on_button_pressed_b)

couleur = 0
envoi = 0
envoi = 0
couleur = 0
while 0 == couleur:
    basic.show_icon(IconNames.NO)
if 1 == couleur:
    basic.show_leds("""
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        """)
elif 2 == couleur:
    basic.show_leds("""
        # # # # #
        . . # . .
        . . # . .
        # . # . .
        # # # . .
        """)
else:
    while False:
        basic.show_string("error grok")