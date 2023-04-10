// Funcões dos botões da tela 1

`use strict`
import { searchCourse } from "./courses-fetch.js"

const data = await searchCourse()



const createCardCourse = (json) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.id = 'ds'

    const img = document.createElement('img')
    img.classList.add('card-icon')
    img.src = json.icon

    const div = document.createElement('div')
    div.classList.add('course')
    div.textContent = json.sigla
    card.append(img, div)

    card.addEventListener('click', function(){
        window.open('course.html')

        const title = div.textContent
        localStorage('name', title)
        
    })





    return card

}
const create = async () => {
    const data1 = await searchCourse()
    const courses = document.querySelector('.cards-container')
    const listaB = data1.curso.map(createCardCourse)
    courses.replaceChildren(...listaB)

    console.log(courses);

}
create()