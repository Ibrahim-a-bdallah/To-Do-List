
// // // challange 114 finsh
// // // start
let cont = document.querySelector(".container")
let form = document.querySelector(".form")
let inp = document.querySelector(".input")
let inp_add = document.querySelector(".add")
let tasks = document.querySelector(".tasks")
// start style
cont.style.cssText =`
display: flex;
flex-direction: column;
gap: 25px;
width: 80%;
justify-content: center;
align-items: center;
margin: auto;
`
form.style.cssText =`
background-color: #ddd;
padding: 20px;
border-radius: 6px;
width: 100%;
display: flex;
`
inp.style.cssText =`
border: none;
outline: none;
border-radius: 3px;
padding: 10px;
flex: 1;
font-size: 20px;
`
inp_add.style.cssText =`
margin-left: 15px;
background-color: #eb6464;
color: white;
border: none;
padding: 10px;
border-radius: 5px;
cursor: pointer;
`
tasks.style.cssText =`
background-color: #ddd;
width: 100%;
height: auto;
padding: 20px;
border-radius: 6px;
display: flex;
flex-direction: column;
gap: 20px;
`
let styele = `
background-color: white;
padding: 10px;
border-radius: 6px;
font-size: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`
let stybtn = `
background-color: red;
color: white;
border-radius: 3px;
border: none;
cursor: pointer;
`
// END STYLE
 
if(window.localStorage.length>=1){
    const valuesToStore = [];
    let ad = valuesToStore.concat(JSON.parse(localStorage.getItem("Tasks")))
    for(i=0;i<ad.length;i++){
        let ele =document.createElement("div")
        let spn =document.createElement("span")
        let btn =document.createElement("button")
        tasks.append(ele)
        ele.append(spn)
        ele.append(btn)
          ele.style.cssText = styele
          btn.textContent  = "Delete"
          btn.style.cssText = stybtn
          spn.textContent = ad[i] //difcult
        }
          inp_add.addEventListener("click", () =>{
            let ele =document.createElement("div")
            let spn =document.createElement("span")
            let btn =document.createElement("button")
            tasks.append(ele)
            ele.append(spn)
            ele.append(btn)
            spn.textContent = inp.value
              ele.style.cssText = styele
              btn.textContent  = "Delete"
              btn.style.cssText = stybtn
                ad.push(inp.value)
                localStorage.setItem("Tasks", JSON.stringify(ad));
        inp.value = ""
                btn.addEventListener("click",() =>{
                     btn.parentElement.remove()
             const storedValues = JSON.parse(localStorage.getItem("Tasks"));
        for(i=0;i<storedValues.length;i++){
            let pr = btn.parentElement
            let sp = pr.querySelector("span")
             if(storedValues[i] === sp.innerHTML){
               let ind = storedValues.indexOf(storedValues[i])
               let ne = storedValues.slice(0,ind).concat(storedValues.slice(ind+1,storedValues.length))
               localStorage.setItem("Tasks",JSON.stringify(ne))
               ad = JSON.parse(localStorage.getItem("Tasks"))
               if(ne.length === 0 ){
                window.localStorage.clear()
               }
             }
                }})
               })
            
            let btns = document.querySelectorAll ("button")
            for(i=0;i<btns.length;i++){
             btns[i].addEventListener("click",(e) =>{
                 let btnd = e.target
                  btnd.parentElement.remove()
          const storedValues = JSON.parse(localStorage.getItem("Tasks"));
     for(i=0;i<storedValues.length;i++){
         let pr = btnd.parentElement
         let sp = pr.querySelector("span")
          if(storedValues[i] === sp.innerHTML){
            let ind = storedValues.indexOf(storedValues[i])
            let ne = storedValues.slice(0,ind).concat(storedValues.slice(ind+1,storedValues.length))
            localStorage.setItem("Tasks",JSON.stringify(ne))
            ad = JSON.parse(localStorage.getItem("Tasks"))
            if(ne.length === 0 ){
             window.localStorage.clear()
            }
          }
             }})
    
    }}else{
    let v = []
    inp_add.addEventListener("click", () =>{
      if(inp.value.length>=1){
         v.push(inp.value) 
      localStorage.setItem("Tasks", JSON.stringify(v));
      let ele =document.createElement("div")
      let spn =document.createElement("span")
      let btn =document.createElement("button")
    tasks.append(ele)
    ele.append(spn)
    ele.append(btn)
              spn.textContent = inp.value
              ele.style.cssText = styele
              btn.textContent  = "Delete"
              btn.style.cssText = stybtn
         btn.addEventListener("click",() =>{
             btn.parentElement.remove()
             const storedValues = JSON.parse(localStorage.getItem("Tasks"));
             for(i=0;i<storedValues.length;i++){
               let pr = btn.parentElement
               let sp = pr.querySelector("span")
             if(storedValues[i] === sp.innerHTML){
               let ind = storedValues.indexOf(storedValues[i])
               let ne = storedValues.slice(0,ind).concat(storedValues.slice(ind+1,storedValues.length))
               localStorage.setItem("Tasks",JSON.stringify(ne))
               v = JSON.parse(localStorage.getItem("Tasks"))
               if(ne.length === 0 ){
                window.localStorage.clear()
               }
             }}})
             inp.value = ""
    
    }})
    }
// // // // end 