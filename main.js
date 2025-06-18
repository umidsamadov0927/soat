import {data} from './index.js'
let a = document.getElementById("main_box")
data.forEach(malumotlar => {
    let b = document.createElement("div");
    b.innerHTML = `
    <div> 
    <div style="background-color: ${malumotlar.color} " class="w-[90px] h-[90px] rounded-full"></div>
    <p class="js_text">${malumotlar.text}</p>
    <p class="js_p">${malumotlar.p}</p>
    </div>
    
    `
    a.append(b)
})