const trigger = document.getElementById("secret-trigger")

if(trigger){
    trigger.addEventListener("click", () => {
        
        if(document.body.style.backgroundColor === "rgb(255, 208, 240)"){
            document.body.style.backgroundColor = ""
        }
        else{
            document.body.style.backgroundColor = "rgb(255, 208, 240)"
        }
    })
}
    
let input = ""
document.addEventListener("keydown", (event) => {
    input = input + event.key
    console.log(input)

    if(input.includes("häst")){
        window.location.hash = "secret-modal"
        input = ""
    }
})