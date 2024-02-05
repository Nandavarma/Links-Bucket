let linksarr = []
const savatext = document.getElementById("savetext-btn")
const savetab = document.getElementById("savetab-btn")
const inputEl = document.getElementById("linkBox")
const deletebtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("lists")
let data = localStorage.getItem("links")

if(data) {
    linksarr = JSON.parse(data)
    render(linksarr)
}
savetab.addEventListener("click",function() {
    chrome.tabs.query({active : true , currentWindow : true},function(tabs){
        linksarr.push(tabs[0].url)
        localStorage.setItem("links",JSON.stringify(linksarr))
        render(linksarr)
    }) 
})
savatext.addEventListener("click",function() {
    linksarr.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("links",JSON.stringify(linksarr))
    render(linksarr)
})
deletebtn.addEventListener("click",function() {
    localStorage.clear()
    linksarr = []
    render(linksarr)
})

function render(arr) {
    let lists = ""
    for(let i = 0 ; i < arr.length ; i++) {
        lists += `<li>
        <a target = '_blank' href = ${arr[i]}>${arr[i]}</a>
    
        </li>`
    }
    ulEl.innerHTML = lists
}