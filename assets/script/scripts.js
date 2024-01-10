const testoScriptato = document.getElementById('todayOffer')

const getCurrentDateTimeString = function (date) { //Stringa una data nel formato da usare
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    return `${day}/${month}/${year} ${hours}:${minutes}`
}

let offerDate = function (date) { //ritorna una data pari alla data parametro + un numero di ore casuali da 5 a 72
    const randomMinutes = Math.floor(Math.random() * (3720 + 1)) + 600
    return new Date(date.getTime() + randomMinutes * 60000)
}

const differenceInSeconds = function (date1, date2) { //ritorna la differenza in secondi 
    const diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime())
    return Math.floor(diffInMilliseconds / 1000)
}
let todayDateObg = new Date()
const offerDateObg = offerDate(todayDateObg)

const coloreTesto = function () {
    if (document.getElementById('crisAnimation')) {
        let scrittaTarget = document.getElementById('crisAnimation')

        let randomNumber = Math.floor(Math.random() * 3) + 1

        switch (randomNumber) {
            case 1:
                scrittaTarget.style.color = "red"
                break
            case 2:
                scrittaTarget.style.color = "black"
                break
            case 3:
                scrittaTarget.style.color = "white"
                break
            default:
        }
    }
}

const aggiornatesto = function () {
    todayDateObg = new Date()
    let timeCrisis = differenceInSeconds(todayDateObg, offerDateObg)
    const stringaDataCorrente = getCurrentDateTimeString(todayDateObg)
    const stringaDataOfferta = getCurrentDateTimeString(offerDateObg)

    testoScriptato.innerHTML = `
        <p class id="dateCapsule">[${stringaDataCorrente}]</p>
        <p>Approfitta ORA di questa occasione!</p>
        <p id='crisAnimation'>Sali su questo aereo tra <i>${timeCrisis}</i> secondi!</p>
        <p>Partenza: [${stringaDataOfferta}]</p>
    `
    testoScriptato.classList.add('p-3')
}
aggiornatesto()
coloreTesto()
let interValAggiornaTesto = setInterval(aggiornatesto, 100)
let interValDiscoteca = setInterval(coloreTesto, 100)

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})