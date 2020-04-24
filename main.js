const favList = document.querySelector ("#favsList")

document.querySelector("#saveFavs").addEventListener("click", event =>{
    const favThing = document.querySelector("#favThing").value
    const location = document.querySelector("#location").value

    favList.innerHTML += `
    <section>
        <div>I can purchase ${favThing} at ${location}.</div>
    </section>
    
    `
})