# Notes


## Chapter 1 Values, Types and Operators
### Values
Values of waardes kunnen cijfers zijn, tekst of functions.

### Numbers
Cijfers zijn nummerieke waardes. Decimale getallen schrijf je met een punt 9.81. 
Voor grotere waardes kan je <i> e</i> gebruiken voor exponent, 2.998e8 = 2.998 × 108 = 299,800,000.
Hele calculaties met hele cijfer waardes of integers kleiner dan 9 quadriljoen zijn altijd precies en correct. 
Nummers met decimalen niet zo zeer altijd correct. Dit komt door de beschikbare 64 bits.

### Arithemtic
Nummerieke waardes gebruik je in Js arithmetisch oftewel met rekenen. 
100 + 4 * 11 de + en * noemen we operators. 
De rekenvolgorde is wat we gewend zijn, haakjes, keer voor plus etc. 
% = remainder of modulo, zelfde voorrang als keer en gedeeld door. 

### Special numbers
3 speciale nummerieke waardes:

<b> Infinity </b> en <b>-Infinity</b>, positief en negatiev oneindig. Niet te veel vertrouwen in berekeningen. 

<b> NaN </b> betekend Not a Number. Is een nummerieke waarde of cijfer. Krijg je als een berekeningen geen belangrijk resultaat krijgt.

### Strings
Strings representeren tekst. moeten tussen quotes:

`Down on the sea`

"Lie on the ocean"

'Float on the ocean'

\ geeft betekenis aan het character dat er na komt. 
\n geeft een newline of enter, \t geeft een tab. Dit noemen we escaping.

Strings bestaan ook uit bits, hoe Js het doet is gebaseerd op de unicode standard.
Strings kunnen niet gedeeld of vermenigvuldigd worden, maar wel +, dan plakt die stukjes aan elkaar, dit heet concatenates.
Backticks `half of 100 is ${100 / 2}` oftewel template literals kunnen andere waardes in de string zetten,  ${100 / 2}
zet het om in een string en veranderd het naar “half of 100 is 50”.

### Unarary operators
Je hebt ook woorden als operators zoals typeof, console.log(typeof 4.5). // → number. Dit geeft het type van de waarde
die je geeft. 

### Boolean values
Boolean betekend 2 waardes, true of false.
>= (greater than or equal to), <= (less than or equal to), == (equal to), and != (not equal to)

### Logical operators
drie logical operators: and, or en not. 

&& = and, binaire operator en is true als beide waardes true zijn.

console.log(true && false)

// → false

console.log(true && true)

// → true

|| = or, geeft als waarde true als 1 van de gegeven waardes true is. 

console.log(false || true)

// → true

console.log(false || false)

// → false

! = not, dit flipt de waarde, !true produceert false en andersom. 

? is een ternary of conditional operator, en gebruikt dus 3 values:

console.log(true ? 1 : 2);

// → 1

de waarde links van de ? kiest uit de andere twee waardes welke er uit komt. Is het true dan kiest hij de eertse
anders kiest hij de 2e

### Empty values
je hebt null en undefined, dit zijn waardes maar hebben geen informatie. Ze noteren dat er geen belangrijke waarde is gegeven. 

### Automatic type conversion
Type coercion betekend dat Js zelf fouten probeert te halen uit code, strings ipv cijfers. 
Als je geen coercion wilt kan je beter === of !== gebruiken, die vergelijken precies ook echte de waardes.


## Chapter 2 programme structure

###Expressions and statements
een stukje code dat een value maakt noemen we een expression. Waar een expression een deel van een zin is, is een staement de hele zin. 
Als een statement werkelijk iets veranderd, zichtbaar of niet noemen we dat een side effect.

### Bindings
bindings of variabelen kunnen waardes vastpakken en vasthouden. 

let caught = 5 * 5;

Let duidt erop dat de volgende zin een binding wordt, cuaght is de naam van de binding en de = om het meteen een waarde te geven.
Hij houd de waarde vast duit 5 * 5 komt. 


## Chapter 3

## Chapter 4

## Chapter 5

## Chapter 6

## Chapter 8

## Chapter 9

## Chapter 10

## Chapter 11
