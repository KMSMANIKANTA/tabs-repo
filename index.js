var btns=document.querySelectorAll(".btn")
var contents=document.querySelectorAll(".content")
var abouts=document.querySelector(".about")
abouts.addEventListener('click',function(e){
    const id=e.target.dataset.id
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active")
            e.target.classList.add("active")
        })
        contents.forEach(function(con){
            con.classList.remove("active")
        })
        const element=document.getElementById(id)
        element.classList.add("active")
    }
})