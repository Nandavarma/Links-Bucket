let linksarr = []
const savatext = document.getElementById("savetext-btn")
const savetab = document.getElementById("savetab-btn")
const inputEl = document.getElementById("linkBox")
const ulEl = document.getElementById("lists")



savatext.addEventListener("click",function() {
    let text = inputEl.value
    inputEl.value = ""
    linksarr.push(text)
    ulEl.innerHTML = `<li>
    ${text}
    </li>`
    render(linksarr)
})

function render(arr) {
    for(let i = 0 ; i < arr.length ; i++) {
        let lists = `<li>
        ${text}
        </li>`
    }
}