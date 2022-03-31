const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
const articles = document.querySelectorAll('.destination-info')
const images = document.querySelectorAll('picture')


// go through all the tabs, and if clicked activate specific article based on the 'aria-contorols' property of the tab
//before changing 'hidden' proprty of the target article, first hide all articles

const changePanel = (e) => {
        const crew = document.querySelectorAll('.crew-details')
        const tech = document.querySelectorAll('.tech-details')
        const targetTab = e.target;
        const targetPanel = targetTab.getAttribute("aria-controls");
        const targetImage = targetTab.dataset.image
        const selected = document.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false)
        
        targetTab.setAttribute('aria-selected', true)

        tech.forEach(item => {
            item.setAttribute('hidden', true)
        })

        crew.forEach(member => {
            member.setAttribute('hidden', true)
        })        
        articles.forEach(article => {
            article.setAttribute('hidden', true)
        })
        images.forEach(image => {
            image.classList.add('hidden')
        })
        const tabToChange = document.getElementById(targetPanel)
        const imgToChange = document.getElementById(targetImage)
        tabToChange.removeAttribute('hidden')
        imgToChange.classList.remove('hidden') 
}


let tabFocus = 0;
const changeTabFocus = (e) => {
    console.log(e.keyCode)
    const keyDownLeft = 37;
    const keyDownRight = 39;
    if (e.keyCode === keyDownLeft ||e.keyCode === keyDownRight){
        tabs[tabFocus].setAttribute('tabindex', -1)
     }
 
     // if the right key is pushed, move to the next tab on the right
     if (e.keyCode === keyDownRight && tabFocus <= tabs.length -1){
         if (tabFocus === tabs.length -1 ){
             tabFocus =0;
         }
         else {
             tabFocus += 1; 
         }               
     }
     
     // if the left key is pushed, move to the next tab on the left
 
     if (e.keyCode ===keyDownLeft && tabFocus >= 0){
         if (tabFocus === 0){
             tabFocus = tabs.length-1;
         }
         else {
             tabFocus -= 1;  
         }             
     } 
     tabs[tabFocus].setAttribute('tabindex',0)
     tabs[tabFocus].focus()    
    
}

tabs.forEach(tab => {
    tab.addEventListener('click', changePanel)
})

tabList.addEventListener('keydown', changeTabFocus)