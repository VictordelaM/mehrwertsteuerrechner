let aufschlag = document.querySelector("#netto")
let abzug = document.querySelector('#brutto')
let calcart = document.querySelector("#ausgabe")
console.log(aufschlag.checked)
console.log(abzug.checked)

function display(){
    if(aufschlag.checked){
        calcart.textContent = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"
    }   else if(abzug.checked) {
        calcart.textContent = "Bruttobetrag (Preis inkl Mehrwertsteuer) in Euro"
    }    
}

function calc(){
    let neunzehn = document.querySelector('#viel')
    let sieben = document.querySelector('#wenig')
    let betragInput = document.querySelector("#betrag").value
    let mehrwertsteuerBetrag = document.querySelector("#mehrwertsteuerBetrag")
    let ergebnis = document.querySelector("#steuerBetrag")
    console.log(aufschlag.checked)
    console.log(abzug.checked)
    if(aufschlag.checked && neunzehn.checked){
        mehrwertsteuerBetrag.innerHTML = betragInput * 0.19
        ergebnis.innerHTML = betragInput * 1.19
    } else if(aufschlag.checked && sieben.checked) {
        mehrwertsteuerBetrag.innerHTML = betragInput * 0.07
        ergebnis.innerHTML = betragInput * 1.07
    } else if(abzug.checked && neunzehn.checked) {
        mehrwertsteuerBetrag.innerHTML = (betragInput /119) * 19
        ergebnis.innerHTML = (betragInput /119) * 100
    } else if(abzug.checked && sieben.checked) {
        mehrwertsteuerBetrag.innerHTML = (betragInput /119) * 7
        ergebnis.innerHTML = (betragInput /107) * 100
    }
}