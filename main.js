//call the different elements within the webpages
let vodkaAbout = document.getElementById("vodkaAbout")
let cosmo = document.getElementById("cosmopolitan")
let whiskyAbout = document.getElementById("whiskeyAbout")
let rumAbout = document.getElementById("rumAbout")
let daiquiri = document.getElementById("daiquiri")

//call the inputs from the comment sections
let formInput = document.getElementById("inputComments")
let formName = document.getElementById("inputName")


let cont = document.getElementById("container")

//initialise an empty array for each web page
let vodkaArr = [];
let rumArr = [];
let whiskyArr = [];

//check to see if the session storage is empty, if it is initialise the session storage
if (!sessionStorage.getItem('whiskyArr')){
    sessionStorage.setItem('whiskyArr', JSON.stringify(whiskyArr))}

if (!sessionStorage.getItem('vodkaArr')){
    sessionStorage.setItem('vodkaArr', JSON.stringify(whiskyArr))}

if (!sessionStorage.getItem('rumArr')){
    sessionStorage.setItem('rumArr', JSON.stringify(whiskyArr))}

//function to save elements on the web page
const addIt = (clicked_id) =>{
//check to see if the id of the button clicked matches
    if (clicked_id == 'vodkaAboutBtn'){
//push the element associated with the button into the array for that specific web page
    vodkaArr.push(vodkaAbout.innerHTML)
//store the array in session storage
    sessionStorage.setItem('vodkaArr', JSON.stringify(vodkaArr))
}
//check to see if the id of the button clicked matches
    else if (clicked_id == 'cosmoBtn'){
//push the element associated with the button into the array for that specific web page
        vodkaArr.push(cosmo.innerHTML)
//store the array in session storage
        sessionStorage.setItem('vodkaArr', JSON.stringify(vodkaArr))

}
//check to see if the id of the button clicked matches
    else if (clicked_id == 'whiskeyAboutBtn'){
//push the element associated with the button into the array for that specific web page
        whiskyArr.push(whiskyAbout.innerHTML)
//store the array in session storage
        sessionStorage.setItem('whiskyArr', JSON.stringify(whiskyArr))
}
//check to see if the id of the button clicked matches
else if (clicked_id == 'rumAboutBtn'){
//push the element associated with the button into the array for that specific web page
    rumArr.push(rumAbout.innerHTML)
//store the array in session storage
    sessionStorage.setItem('rumArr', JSON.stringify(rumArr))
}
//check to see if the id of the button clicked matches
else if (clicked_id == 'daqBtn'){
//push the element associated with the button into the array for that specific web page
    rumArr.push(daiquiri.innerHTML)
//store the array in session storage
    sessionStorage.setItem('rumArr', JSON.stringify(rumArr))
}

//call the session in storage
let whisk = JSON.parse(sessionStorage.getItem('whiskyArr'))
let vod =JSON.parse(sessionStorage.getItem('vodkaArr'))
let ru = JSON.parse(sessionStorage.getItem('rumArr'))

//alert how many items are stored / saved
alert(`you have: ${vod.length + whisk.length + ru.length} items saved`)
}

//function to reveal items stored in session storage
const reveal = () =>{
//gets all items stored in session storage
    let vodkaReveal = JSON.parse(sessionStorage.getItem('vodkaArr'))
    let whiskyReveal = JSON.parse(sessionStorage.getItem('whiskyArr'))
    let rumReveal = JSON.parse(sessionStorage.getItem('rumArr'))
//create p elements
    let vodkaPara = document.createElement("p")
    let whiskyPara = document.createElement("p")
    let rumPara = document.createElement("p")
//assin the items that were stored in sessions to the innerhtml of the new p elements
    vodkaPara.innerHTML=vodkaReveal
    whiskyPara.innerHTML=whiskyReveal
    rumPara.innerHTML=rumReveal
//append the new p elements to the container element
    document.querySelector("#container").appendChild(vodkaPara)
    document.querySelector("#container").appendChild(whiskyPara)
    document.querySelector("#container").appendChild(rumPara)
}

//function to submit comments
const inputSubmit = (event) =>{
//prevents the page from reloading when submit is clicked
    event.preventDefault()
//alerts that if nothing is in the input field, something should be added
    if(formInput.value == ""){
        alert("Input text into the text field")
    }
    else {
//creates ne div and p elements
        const newRow = document.createElement("div")
        const newPara = document.createElement("p")
//sets the class attributes
        newRow.setAttribute('class', 'col-md-12 newsletterContent')
        newPara.setAttribute('class', 'comments')
//assigns the input values to the innerHTML of the new p elements
        newPara.innerHTML = formInput.value + " " + "by" + " " + formName.value
//appends the new p elements to the new row element
        newRow.appendChild(newPara)
//appends the new row element to the comment display div
        document.querySelector('#commentDisplay').appendChild(newRow)
//sets the input values to a blank string
        formInput.value = ""
        formName.value = ""


    }
    
}

