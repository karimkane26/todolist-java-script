// initialisation des données 
let data = [
    {name: "kane", email: "dev@gmail.com", id: 1},
]

document.addEventListener("DOMContentLoaded", readAll);

// Function permettant de lister tout les données

function readAll(){
    // etape1 :définir le localstorage en le convertissant en chaine de caractère
    // recuperer
    // recuperation par localstorage et converit en tableau
    var tabledata = document.querySelector('.data_table')
    var object = localStorage.getItem('objet')
    if(object){
        // si l'objet existe dans le localstorage on le convertit en tableau mais faut parser en JSON pour le convertir en objet javascript car le localstorage stocke les données sous forme de chaine de caractère
    var data = JSON.parse(object) || []
    }
    else{
    localStorage.setItem("objet",JSON.stringify(data))

    }
    // recuperation par methode
    document.querySelector('.create_form').style.display = "none"
    document.querySelector('.update_form').style.display = "none"
    var elements =""
     data.map(record => {
        elements+= `
        <tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td><button class="btn btn-primary"onclick={edit(${record.id})} >Edit</button></td>
        <td><button class="btn btn-danger"onclick={delet(${record.id})}>Delete</button></td>

        </tr>
        `
    })

    tabledata.innerHTML = elements;
}

function create() {
    document.querySelector('.create_form').style.display = "block"
    // document.querySelector('.add_div').style.display = "none"
  
}

function add(
) {
    var name = document.querySelector('.name').value
    var email = document.querySelector('.email').value
    let data  = JSON.parse(localStorage.getItem("objet"))
    var id = data.length + 1
    data.push({id: id, name: name, email: email})
    localStorage.setItem("objet",JSON.stringify(data))

    readAll()
}

// Recuperation des données pour la modification
function edit(id) {
    document.querySelector('.update_form').style.display = "block"
    document.querySelector('.create_form').style.display = "none"
    let data = JSON.parse(localStorage.getItem("objet"))
   var object = data.find(obj => obj.id === Number(id))
   
   document.querySelector('.update_name').value = object.name
   document.querySelector('.update_email').value = object.email
   document.querySelector('.update_id').value = object.id
}

function update() {
    var id = parseInt( document.querySelector('.update_id').value)
    var name = document.querySelector('.update_name').value
    var email = document.querySelector('.update_email').value
    let data = JSON.parse(localStorage.getItem("objet"))
    var index = data.findIndex(obj => obj.id === id)
   data[index] = {id: id, name: name, email: email}
    localStorage.setItem("objet",JSON.stringify(data))
    readAll()
}

function delet(id) {
    let data = JSON.parse(localStorage.getItem("objet"))
    data = data.filter(obj => obj.id !== id)  
     localStorage.setItem("objet",JSON.stringify(data))
    readAll()
}