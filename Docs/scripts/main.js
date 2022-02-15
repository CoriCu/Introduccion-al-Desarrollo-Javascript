FiltroRepublicano.addEventListener('click', filtros)
FiltroDemocrata.addEventListener('click', filtros)
FiltroInd.addEventListener('click', filtros)
inputGroupSelect03.addEventListener('change', filtros)

// armarTabla(data.results[0].members);

function armarTabla(arrayAImprimir) {

    document.getElementById("congress").innerHTML = "" ;

    let members = arrayAImprimir
    for (let x = 0; x < members.length; x++) {
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td> <a href="${members[x].url}"> ${members[x].first_name} ${members[x].middle_name || ""} ${members[x].last_name} </a> </td>
        <td> ${members[x].party} </td>
        <td> ${members[x].state} </td>
        <td> ${members[x].seniority} </td>
        <td> ${members[x].votes_with_party_pct} % </td>

        `
        document.getElementById(`congress`).appendChild(tr);

    }
}




function partidosFiltrados(filtrosPartidos){
    var states = []

   filtrosPartidos.forEach(member => {
        states.push(member.state)
    });
    
    
    var statesarray = new Set(states) //Set agarra valores únicos (Lo uso para sacar los repetidos)
    
    statesarray.forEach(state => { //Me meto en el array de data results, después en el de member e indico con un forEach que recorra miembro por miembro
    
        document.getElementById("inputGroupSelect03").innerHTML += //Document (HTML), agarro el elemento por ID, en este caso State-Filter (Que es un checkbox en mi HTML) y le indico que me meta lo que le voy a indicar a continuación adentro de ese checkbox
    
    
            `<option value="` + state + `">` + state + `</option> `//El <option value> queda para cuando sea devuelto al HTML, que sí puede interpretar esta línea.Adentro del value queda member.state como un string para que el js sepa reconocerlo. Y después queda otro member.state que sería lo que el usuario ve dentro del checkbox.
    });
}





function filtros() {
    var R = document.getElementById("FiltroRepublicano").checked;
    var D = document.getElementById("FiltroDemocrata").checked;
    var ID = document.getElementById("FiltroInd").checked;
    var state = document.getElementById("inputGroupSelect03")

    // var members = data.results[0].members;
    var MiembrosFiltrados = []

    members.forEach(miembro => {
        if (R == true && miembro.party == "R") {
            MiembrosFiltrados.push(miembro)
        }

        if (D == true && miembro.party == "D") {
            MiembrosFiltrados.push(miembro);
        }

        if (ID == true && miembro.party == "ID") {
            MiembrosFiltrados.push(miembro)
        
        }

        
    })
    
    if (MiembrosFiltrados.length == 0 && ID == false){ 
        MiembrosFiltrados=members
    }
    // armarTabla(MiembrosFiltrados)

    if(state.value != "ALL"){  //Si el value del estado NO es igual a ALL, utilizo filter para generar un nuevo array donde se me metan los valores que el usuario seleccionó
        armarTabla(MiembrosFiltrados.filter(members => members.state == state.value))
    } else { //Si no, muestro la tabla entera sin filtrar por estado 
        armarTabla(MiembrosFiltrados)
    }
}

// const urlsenate = "https://api.propublica.org/congress/v1/113/senate/members.json"
// const urlhouse =  "https://api.propublica.org/congress/v1/113/house/members.json"
// const conc = { 
// type: 'GET',
// datatype: 'json',
// headers: {
//     'X-API-Key': 'Q9Eib0KXN0vBcLDpac5VsFUgs1SjUZfpRHg987ft',
// }
// }

// fetch(urlsenate,conc)
// .then(response => response.json() )
// .then(data =>{
//     let authors = data.results;
//     return authors.map(function(authors) {
      
//       console.log(data)  

//     })
// // // .catch(function(error) {
// //     console.log(error)
// })
var members=[]
async function senate(){
    const urlsenate = await fetch ( "https://api.propublica.org/congress/v1/113/senate/members.json",
    {
        
        type: 'GET',
        datatype: 'json',
        headers: {
            'X-API-Key': 'Q9Eib0KXN0vBcLDpac5VsFUgs1SjUZfpRHg987ft',}
        }).then(datos => datos.json())
        return urlsenate

}
console.log(senate())    

async function house(){
    const urlhouse = await fetch ( "https://api.propublica.org/congress/v1/113/house/members.json",
    {
        
        type: 'GET',
        datatype: 'json',
        headers: {
            'X-API-Key': 'Q9Eib0KXN0vBcLDpac5VsFUgs1SjUZfpRHg987ft',}
        }).then(datos => datos.json())
        return urlhouse

}
console.log(house()) 

async function tablaConApi (){
    await senate().then (data=>{members=data.results[0].members})
    armarTabla(members) 
    filtros(members)
    partidosFiltrados(members)

    }
async function tablaConApiHouse (){
    await house().then (data=>{members=data.results[0].members})
    armarTabla(members) 
    filtros(members)
    partidosFiltrados(members)
}
