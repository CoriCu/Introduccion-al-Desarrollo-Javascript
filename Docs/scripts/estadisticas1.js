async function fetched(proyect) {
    const dataj = await proyect;
    const datar = await dataj.json()
    return datar
}
var app
var miembros = []
var app3
var appS
var state
async function containerTotal() {
    app = new Vue({
        el: "#tableSena",
        data: { miembros: [] }
    })
    await Slounchertotal().then(data => { miembros = data.results[0].members })
    app.miembros = miembros
    input(miembros)
}
async function containerTotalH() {
    await HlouncherTotal().then(data => { miembros = data.results[0].members })
    app = new Vue({
        el: "#senate-table",
        data: { miembros: [] }
    })
    app.miembros = miembros
    input(miembros)
}
function filtros() {
    inputGroupSelect03.addEventListener('change', filtros)
    var R = document.getElementById("FiltroRepublicano").checked;
    var D = document.getElementById("FiltroDemocrata").checked;
    var ID = document.getElementById("FiltroInd").checked;
    state = document.getElementById("inputGroupSelect03")
    var MiembrosFiltrados = []
    miembros.forEach(miembro => {
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
    if (MiembrosFiltrados.length == 0 && ID == false) {
        MiembrosFiltrados = miembros
    }
    if (state.value != "ALL") {
        app.miembros = MiembrosFiltrados.filter(members => members.state == state.value)
    } else {
        app.miembros = MiembrosFiltrados
    }
}
function input(valor) {
    var arr = []
    valor.forEach(state => {
        arr.push(state.state)
    })
    const states_ar = new Set(arr);
    arr = [...states_ar]
    for (var i = 0; i < arr.length; i++) {
        var option;
        option = `<option value="${arr[i]}">${arr[i]}</option>`;
        document.getElementById("inputGroupSelect03").innerHTML += option;
    }
}

function change(el) {
    if (el.value === "Read More")
        el.value = "Read Less";
    else
        el.value = "Read More";
}

function lounchAtt() {
    tablaAttendance(miembrosXordenLeastE, le)
    tablaAttendance(miembrosXordenMostE, me)
    tabla(id)
}
async function containerAttenS() {
    await Slounchertotal().then(data => { miembros = data.results[0].members })
    app3 = new Vue({
        el: "#table",
        data: {
            cantDemocrats: [],
            promDemocrats: [],
            cantRepublicans: [],
            promRepublicans: [],
            cantindependists: [],
            promindependists: []
        }
    })
    datos(miembros)
    var filtroVotos = miembros.filter(algo => algo.total_votes != 0);
    app = new Vue({
        el: "#LeastEng",
        data: { miembros: [] }
    })
    cuenta = miembros.length *0.1
    app.miembros = filtroVotos.sort(((a, b) => b.missed_votes_pct - a.missed_votes_pct)).slice(0, cuenta)
    appS = new Vue({
        el: "#MostEng" ,
        data: { miembros: [] }
    })
    await HlouncherTotal().then(data => { miembros2 = data.results[0].members })
    appS.miembros = filtroVotos.sort(((a, b) => a.missed_votes_pct - b.missed_votes_pct)).slice(0, cuenta)
}
async function containerAttenH() {
    await HlouncherTotal().then(data => { miembros = data.results[0].members })
    app3 = new Vue({
        el: "#table",
        data: {
            cantDemocrats: [],
            promDemocrats: [],
            cantRepublicans: [],
            promRepublicans: [],
            cantindependists: [],
            promindependists: []
        }
    }) 
    datos(miembros)
    var filtroVotos = miembros.filter(algo => algo.total_votes != 0);
    app = new Vue({
        el: "#LeastEng",
        data: { miembros: [] }
    })
    cuenta = miembros.length *0.1
    app.miembros = filtroVotos.sort(((a, b) => b.missed_votes_pct - a.missed_votes_pct)).slice(0, cuenta)
    appS = new Vue({
        el: "#MostEng" ,
        data: { miembros: [] }
    })
    await HlouncherTotal().then(data => { miembros2 = data.results[0].members })
    appS.miembros = filtroVotos.sort(((a, b) => a.missed_votes_pct - b.missed_votes_pct)).slice(0, cuenta)
}
async function containerLoyalS() {
    await Slounchertotal().then(data => { miembros = data.results[0].members })
    app3 = new Vue({
        el: "#table",
        data: {
            cantDemocrats: [],
            promDemocrats: [],
            cantRepublicans: [],
            promRepublicans: [],
            cantindependists: [],
            promindependists: []
        }
    })
    datos(miembros)
    cuenta = miembros.length* 0.1
    var filtroVotos = miembros.filter(algo => algo.total_votes != 0);
    app = new Vue({
        el: "#LeastLo",
        data: { miembros: [] }
    })
    app.miembros = filtroVotos.sort(((a, b) => a.votes_with_party_pct - b.votes_with_party_pct)).slice(0, cuenta)
    appS = new Vue({
        el: "#MostLo" ,
        data: { miembros: [] }
    })
    await Slounchertotal().then(data => { miembros2 = data.results[0].members })
    appS.miembros = filtroVotos.sort(((a, b) => b.votes_with_party_pct - a.votes_with_party_pct)).slice(0, cuenta)
}
async function containerLoyalH() {
    await HlouncherTotal().then(data => { miembros = data.results[0].members })
    app3 = new Vue({
        el: "#table",
        data: {
            cantDemocrats: [],
            promDemocrats: [],
            cantRepublicans: [],
            promRepublicans: [],
            cantindependists: [],
            promindependists: []
        }
    })
    datos(miembros)
    var filtroVotos = miembros.filter(algo => algo.total_votes != 0);
    cuenta = miembros.length* 0.1
    app = new Vue({
        el: "#LeastLo",
        data: { miembros: [] }
    })
    app.miembros = filtroVotos.sort(((a, b) => a.votes_with_party_pct - b.votes_with_party_pct)).slice(0, cuenta)
    appS = new Vue({
        el: "#MostLo" ,
        data: { miembros: [] }
    })
    await HlouncherTotal().then(data => { miembros2 = data.results[0].members })
    appS.miembros = filtroVotos.sort(((a, b) => b.votes_with_party_pct - a.votes_with_party_pct)).slice(0, cuenta)
}
function datos(arraycomp) {
    app3.cantDemocrats = nDemocrats(arraycomp)
    app3.promDemocrats = nDemocratspct(arraycomp)
    app3.cantRepublicans = nrepublicans(arraycomp)
    app3.promRepublicans = nrepublicanspct(arraycomp)
    app3.cantindependists = nindependists(arraycomp)
    app3.promindependists = nindependistspct(arraycomp)
}
function nDemocrats() {
    var democratsArray = [];
    miembros.forEach(obj => {
        if (obj.party === "D") {
            democratsArray.push(obj);
        }
    })
    return democratsArray.length
};
function nDemocratspct() {
    var democratspctArray = 0
    miembros.forEach(obj => {
        if (obj.party === "D") {
            democratspctArray += obj.votes_with_party_pct;
        }
    })
    var pct_votes = Number((democratspctArray / nDemocrats(miembros)).toFixed(2))
    return pct_votes
};
function nrepublicans() {
    var republicansArray = [];
    miembros.forEach(obj => {
        if (obj.party === "R") {
            republicansArray.push(obj);
        }
    })
    return republicansArray.length
}
function nrepublicanspct() {
    var republicanspctArray = 0
    miembros.forEach(obj => {
        if (obj.party === "R") {
            republicanspctArray += obj.votes_with_party_pct;
        }
    })
    var pct_votes = Number((republicanspctArray / nrepublicans()).toFixed(2))
    return pct_votes
}
function nindependists() {
    var independistsArray = [];
    miembros.forEach(obj => {
        if (obj.party === "ID") {
            independistsArray.push(obj);
        }
    })
    return independistsArray.length
}
function nindependistspct() {
    var independistspctArray = 0
    miembros.forEach(obj => {
        if (obj.party === "ID") {
            independistspctArray += obj.votes_with_party_pct;
        }
    })
    var pct_votes = Number((independistspctArray / nindependists()).toFixed(2))
    return pct_votes
}
async function Slounchertotal() {
    const api_senate = await fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
        type: 'GET',
        datatype: 'json',
        headers: {
            'X-API-Key': 'Q9Eib0KXN0vBcLDpac5VsFUgs1SjUZfpRHg987ft',
        }
    }).then((datos) => datos.json())
    return api_senate
}
async function HlouncherTotal() {
    const api_house = await fetch("https://api.propublica.org/congress/v1/113/house/members.json", {
        type: 'GET',
        datatype: 'json',
        headers: {
            'X-API-Key': 'Q9Eib0KXN0vBcLDpac5VsFUgs1SjUZfpRHg987ft',
        }
    }).then(datos => datos.json())
    return api_house
}
