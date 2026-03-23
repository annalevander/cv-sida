async function fetchCV() {
    const response = await fetch("cv.json");

    if (!response.ok){
        console.log("Något gick fel.")
        return;
    }

    const data = await response.json();
    console.log(data)

    renderObj(data.intro)
    renderArr(data.skills, "skills")
    renderArr(data.languages, "languages")
    renderObjArr(data.experience, "experience")
    renderObjArr(data.education, "education")
}

function renderObj(section){
    for(let key in section) {
        const element = document.getElementById(key);

        if(element){
            element.textContent = section[key];
        }
    }
}

function renderArr(array, id){
    const element = document.getElementById(id)

    array.forEach(item => {
        const li = document.createElement("li")
        li.textContent = item

        element.appendChild(li)
    })
}

function renderObjArr(array, id){
    const element = document.getElementById(id)

    array.forEach(item => {
        const article = document.createElement("article")

        const h3 = document.createElement("h3")
        h3.textContent = item.title      

        article.appendChild(h3)

        const p2 = document.createElement("p")
        p2.textContent = item.description
        article.appendChild(p2)

        if (item.location && item.period) {
            const p1 = document.createElement("p")
            p1.textContent = item.location + " - " + item.period
            
            article.appendChild(p1)
        } 

        element.appendChild(article) 
    })
}



fetchCV();