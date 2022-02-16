function turnpurple(){
    document.getElementById("specs").style.color="#846DCF";
}
function turnpurple1(){
    document.getElementById("specs1").style.color="#846DCF";
}
function turnpurple2(){
    document.getElementById("specs2").style.color="#846DCF";
}

console.log("why u looking at console")
alert(">welcome to my website<")

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})
