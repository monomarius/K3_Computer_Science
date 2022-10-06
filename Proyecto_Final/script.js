let characters = JSON.parse(file).results // [{}, {}, {}, ...]
let input_character_name = document.getElementById("input_character_name")
let container = document.getElementById("container")


input_character_name.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    document.getElementById("myBtn").click()
    button.classList.add('active')
  }
})


function search_character_button_click() {
  let results = ""
  console.log("Presionaste Buscar")
  
  //let character = search_character(input_character_name.value)
  //console.log(character)
  
  let res_characters = search_characters(input_character_name.value)
  for(let i = 0; i<res_characters.length; i++) {
    results += `
      <p class="child">
      <br/>
        <span><img src="/Proyecto_Final/img/${res_characters[i].name}.jpg" width="150px" class="image"></span><br/>
        <span>Nombre: ${res_characters[i].name}</span><br/>
        <span>Nacimiento: ${res_characters[i].birth_year}</span><br/>
        <span>Altura: ${res_characters[i].height} cm</span><br/>
        <span>Peso: ${res_characters[i].mass} kg</span><br/>
      <p>
      <br/>
    `
  }
  container.innerHTML = results
  myaudio.innerHTML += `<source src="/Proyecto_Final/media/starwars_theme.m4a">`
}

// Encuentra todos los que coincidan
function search_characters(character_name) {
  let results = []
  let longitud_cadena = character_name.length
  for(let i = 0;i<characters.length;i++) {
    // if(characters[i].name.substring(0,longitud_cadena).toLowerCase() == character_name.toLowerCase())
    if(characters[i].name.toLowerCase().includes(character_name.toLowerCase()))
    {
      results.push(characters[i])
    }
  }
  return results
}

class Character {
  constructor(name, gender) {
  }
  obtener_iniciales() { 
  }
  
}