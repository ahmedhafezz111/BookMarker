let siteName = document.getElementById("siteName")
let siteUrl = document.getElementById("siteUrl")
let submitButton = document.getElementById("submit")
let markerContainer ;

if (localStorage.getItem("myMarker") == null) {
    markerContainer = [];
} else {
    markerContainer = JSON.parse(localStorage.getItem("myMarker"))
    displayMarker()
}


function addMarker(){
    bookMarker = {
        name:siteName.value,
        url:siteUrl.value

    }
    if(siteName.value == "" || siteUrl.value == ""){
        alert("please enter site name and site url")
    }else{
    markerContainer.push(bookMarker)
    localStorage.setItem("myMarker", JSON.stringify(markerContainer))
    displayMarker()
    clearInp()
}
}
submitButton.addEventListener("click" ,addMarker)

function displayMarker(){
    let markerList = ""
    for(let i = 0 ; i < markerContainer.length ; i++){
        markerList += `
        <tr>  
        <td>${i+1}</td>
        <td>${markerContainer[i].name}</td>
        <td><button class="btn btn-success"  onclick="visitMarked(${i})"><i class="fa-solid fa-eye"></i>Visit</button></td>
        <td><button class="btn btn-danger" onclick="deleteRow(${i})"><i class="fa-solid fa-trash-can"></i>Delete</button></td>

        </tr>

        `
    }
    document.getElementById("tBody").innerHTML = markerList
}


function deleteRow(i){
    markerContainer.splice(i,1)
    localStorage.setItem("myMarker", JSON.stringify(markerContainer))
    displayMarker() 
}

function clearInp(){
    siteName.value="";
    siteUrl.value="";
}




function visitMarked(index) {
    
    let visitURL = markerContainer[index].url;

    
    window.open(visitURL, '_blank');
}


// function visitMarked(){
//     window.location.assign(siteUrl.value) 
// }

// function visitMarked(){
//     window.location.replace(siteUrl.value)
// }

// function visitMarked(){
    
//     siteUrl=document.getElementById("siteUrl").value
//     window.open(siteUrl, '_blank')


// }






