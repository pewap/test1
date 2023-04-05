

const pobierzDane = async () => {
    const wynik = await fetch("https://swapi.dev/api/people");
    const dane = await wynik.json();
    console.log(dane.results[3].name);
    dane.results.forEach((element) => {
        dodajPostac(element);
    });
}

pobierzDane();




// const pobierzDane1 = async () => {
//     const wynik1 = await fetch("http://api.nbp.pl/api/exchangerates/rates/c/usd/2016-04-04/?format=json");
//     const dane1 = await wynik1.json();
//     console.log(dane1);
// }

// pobierzDane1();



{/* <div id="wrapper">
<div class="card">
    <h3>Luke Skywaker</h3>
    <span>płeć: człowiek</span>
    <span>Kolor oczu: niebieski</span>
    <span>Kolor skóry: biała</span>
    <div>
        <span>Wzrost: 172</span>
        <span>waga: 77kg</span>
    </div>
</div>

</div> */}
const sekcjaKarty = document.querySelector("#wrapper");
const dodajPostac = (postac) => {
    console.log(postac);
    const karta = document.createElement("article");
    karta.classList.add("card");

    const nazwaPostaci = document.createElement("h3")
    nazwaPostaci.textContent = postac.name;

    const plecPostaci = document.createElement("span")
    plecPostaci.textContent = "Płeć: " + postac.gender;

    const kolorOczu = document.createElement("span")
    kolorOczu.textContent = "Kolor oczu: " +postac.eye_color;

        const wymiary = document.createElement("div");
       
             const wzrost = document.createElement("span")
             wzrost.textContent = "Wzrost: " + postac.height;

              const waga = document.createElement("span")
             waga.textContent = "Waga: " + postac.mass;
    

     

    karta.append(nazwaPostaci);
    karta.append(plecPostaci);
    karta.append(kolorOczu);

        karta.append(wymiary)
             wymiary.append(wzrost)
             wymiary.append(waga)


    sekcjaKarty.append(karta);
}