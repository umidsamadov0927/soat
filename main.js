let a = document.getElementById("main_box")
let data = [
    {
        color: '#014E56',
        text: "Midnight Green",
        p: "HEX : #014E56 RGB : rgb(1, 78, 86) HSL : hsl(186°, 98%, 17%)"
    },
    {
        color: '#F67E7E',
        text: "Light Coral",
        p: 'HEX : #F67E7E RGB : rgb(246, 126, 126) HSL : hsl(0°, 87%, 73%)'
    },
    {
        color: '#004047',
        text: "White",
        p: 'HEX : #F67E7E RGB : rgb(246, 126, 126) HSL : hsl(0°, 87%, 73%)'
    },
    {
        color: '#79C8C7',
        text: "Rapture Blue",
        p: 'HEX : #F67E7E RGB : rgb(246, 126, 126) HSL : hsl(0°, 87%, 73%)'
    },
    {
        color: '#2C6269',
        text: "Police Blue",
        p: 'HEX : #F67E7E RGB : rgb(246, 126, 126) HSL : hsl(0°, 87%, 73%)'
    },
    {
        color: '#012F34',
        text: "Deep Jungle Green",
        p: 'HEX : #F67E7E RGB : rgb(246, 126, 126) HSL : hsl(0°, 87%, 73%)'
    },
    {
        color: '#022F28',
        text: "Sacramento State Green",
        p: 'HEX : #F67E7E RGB : rgb(246, 126, 126) HSL : hsl(0°, 87%, 73%)'
    },
    {
        color: '#002529',
        text: "Dark Green",
        p: 'HEX : #F67E7E RGB : rgb(246, 126, 126) HSL : hsl(0°, 87%, 73%)'
    }
]
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