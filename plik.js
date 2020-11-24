
//let zmienna = 2;
//var zmienna2  stary sposób

// komentarz jdnowierszowy

/*
komentarz
wielowierszowy
*/

/* typy danych
typt proste(prymitywne)
typy złożone
proste w JS
Number - przechowuje liczby (całkowite,zmienoprzecinkowe)
String - tekst
boolean - typ logiczny (true albo false)(1 0)
//let zmienna = 2;
// nazwa zmiennej musi zaczynać się od litery lub znaku _
// nazwie zmiennej nie może przyjąć nazwy słów kluczwych 
let nazwa_ziennej = 4; //zmienna która jest widoczna od { do }
nazwa_ziennej = 6;
//document.write(nazwa_ziennej);
// stałe
const stala = 5;
document.write(stala);
// operatory arytmetyczne
+ - operator dodawania oraz operator konkatencji
- - operator odejmowania
* - operator mnożenia
/ - operator dzielenia
% - operator modulo czyli reszta z dzielenia
+=
-=
/=
*=
%=
let a=5;
a+=2 // a=a+2    -> 7
a-=3 // a=a-3	-> 4
a*=2 // a=a*2	->	8
a/=2 // a=a/2  -> 4
document.write(a);
*/

// ++ operator inkrementacji czyli zwiekszenie wartości o 1
// -- operator deinkrementacji czyli zmnijszenie wartości o 1

// a++ -postinkrementacja
// ++a -preinkrementacja

// a-- -postdeinkrementacja
// --a -predeinkrementacja

//let a=5;

//document.write(a++); // najpier wyśwetli wynik a następnie zwiekszy wartość
//document.write(a);

//document.write(++a); // najpier zwieksza wartość o 1 a następnie wyświetla wynik
//document.write(a);

/*
let a=10;
document.write(a++); //10   ->11
document.write(a++); // 11   ->12
document.write(--a); //11   ->11
document.write(a); //11
*/

// okna dialogowe
/*
alert - wyskoaujce okno z komunikatem
prompt - okno do wpisania danych przez użytkownika
confirm - okno pytające (ok, anuluj)
*/

// zadanie 1 . Napisz skrypt który pobiera dwie liczby i wypisuje ich sumę
/*
let liczba1;
let liczba2;
let suma;
liczba1 = prompt("Podaj pierwsza liczbe");// okno prompt zawsze zwraca stringa
liczba2 = prompt("Podaj druga liczbe");// okno prompt zawsze zwraca stringa
//liczba1 = parseInt(liczba1);
//liczba2 = parseInt(liczba2);
liczba1*=1;
liczba2*=1;
suma = liczba1+liczba2;
document.write(suma);
*/
// Zadanie 2. Napisz skrypt który pobierze a oraz b i policzy pole 
// prostokąta o bokach a,b

/*
if(jeżeli warunek jest prawidzyw)
{
	to wykonuj ten kod
}
OPERTORY porównania
> - większe
< - mnijesze
>= - większe równe
<= - mniejsze równe
== równe ( ale mogą być różne typy danych)
=== identyczne ( wartości takie same i typy takie same)
*/
// Pobierz liczbę od użytkownika i napisz SUPER jezeli ta liczba jest
// większa od 0 
/*
let liczba = prompt("Podaj liczbe"); // pobieramy liczbe od uzytkownka
liczba = parseInt(liczba); // zaminimy stringa na int
if(liczba>0)
{
	document.write("SUPER");
}
*/
// Zadanie 2. Napisz skrypt który pobierze a i policzy pole kwadratu 
// Sprawdź czy użytkownik podał liczbę większą od 0 
/*
let zmienna ="2";
if(zmienna===2)
{
	document.write("Dziala");
}
*/
// Jeżeli użytkownik wpiszę liczbę 2 to skrypt wypisze dwa słownie
// w warunku użyj operatora identyczności czyli ===
/*
let liczba = prompt("Podaj liczbe");
//liczba = parseInt(liczba);
if(liczba==="2")
{​
document.write("dziala");
}​​
*/

/*
Zapytaj się użytkownika o wiek jeżeli ma 18 lub więcej lat to napisz 
witay na stronie
okienko confirm(tresc);
let zmienna = confirm("Czy masz 18 lat lub wiecej?");
if(zmienna==true)
{
	document.write("Witamy na stronie");
}
if(zmienna==false)
{
	document.write("Ta strona jest dla pelnoletnich hahaha");
}
if(!zmienna)
{
	document.write("Ta strona jest dla pelnoletnich hahaha");
}
*/

/*
if(warunek)
{
	instrukcje
}
else  -> w przeciwnym wypadku
{
	instrukcje
}
*/

// Wypisz czy liczba jest parzysta czy nieparzysta
/*
let zmienna = prompt("Podaj liczbe");
zmienna = parseInt(zmienna);
if(zmienna%2==0)
{
document.write("parzysta");
}
else
{
	document.write("Nieparzysta");
}
*/
// Napisz skrypt który policzy pole kwadratu 
// jezeli użytkoniwk wpisał liczbę mniejszą od 0 lub 0
// to program wypisze "błedne dane" w przecinym wypadku
// wypisze wartość pola
/*
let zmienna = prompt("Podaj liczbe");
zmienna = parseInt(zmienna);
if(zmienna>0)
{
	document.write(zmienna*zmienna)
}else{
	document.write("Bledne dane");
}
*/

// operatory logiczne AND-> && OR-> || NOT-> !

// skrypt który liczy pole prostokątka. Sprawdzamy długości boków 

/*
let a = prompt("Podaj liczbe");
a = parseInt(a);
let b = prompt("Podaj liczbe");
b = parseInt(b);
if(a>0 && b>0)
{
	document.write(a*b);
}else{
	document.write("Bledne dane");
}
if(warunek)
{
	
}else if(warunek)
{
	
}else{
	
}
let a,b,c;
if((a>0 && a<=20)&&(a>b) && (b>10 || c==0))
{
	
}
*/


/*
switch(zmienna)
{
	case wartość:
		instrukcje;
		break;
	case wartość:
		instrukcje;
		braek;
		.
		.
		.
}
let zmienna = 1;
switch(zmienna)
{
	case 1:
		document.write("jeden");
		break;
	case 2:
		document.write("dwa");
		break;
	case 3:
		document.write("trzy");
		break;
	default:
		document.write("Poza zakresem");	
}
*/

/* Zadanie, Użytkownik podaje numer dnia tygodnia gdzie 1 to poniedziałek a 7 to niedzila
Napisz skrypt który napisze dzień tygodnia słownie. Użyj instrukcji switch case
*/



/*
Zadanie. Napisz skrypt który obilcz miejsca zerowe fuknkcji kwadragtowej o postaci ax^2+bx+c=0
policz delta = b^2-4*a*c
Jeżeli delta jest mnijesza od zera to brak rozwiazań
jeżeli delta jest równa zero to mamy jedno rozwiązanie x=wzór na tablicy
jeżeli delta jest więszka od zera to mamy dwa rozwiązania 
x1 = 
x2 = 
pierwiastek w JS Math.sqrt(liczba)
let a,b,c;
a=parseFloat(prompt("Podaj wspolczynnik a"));
b=parseFloat(prompt("Podaj wspolczynnik b"));
c=parseFloat(prompt("Podaj wspolczynnik c"));
let delta = b*b-4*a*c;
if(delta>0)
{
	let x1 = (-b-Math.sqrt(delta))/(2*a);
	let x2= (-b+Math.sqrt(delta))/(2*a);
	
	document.write("miejsca zerowe fuknkcji to x1:"+x1+" x2:"+x2);
	
}else if(delta==0)
{
	let x = -b/(2*a);
	document.write("miejsca zerowe fuknkcji to x:"+x);
}else
{
	document.write("Brak miejsc zerowych");
	
}
*/

// Wczytaj 3 liczby i wypisz je w kolejności od najmnijeszej do największej





