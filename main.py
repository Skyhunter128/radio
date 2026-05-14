def on_button_pressed_a():
    global couleur
    couleur = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def envoie_ordre():
    basic.show_leds("""
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        """)
    if 1 == couleur:
        radio.send_string("grok_bleu")
    elif 2 == couleur:
        radio.send_string("grok_jaune")
    else:
        basic.show_string("echec envoie")
    basic.show_icon(IconNames.YES)

def on_button_pressed_ab():
    envoie_ordre()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global couleur
    couleur = 2
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    envoie_ordre()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

couleur = 0
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