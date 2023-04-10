`use strict`
// Buscar cursos atráves da API

const searchCourse = async() => {
    // const url = `https://api-projeto-integrado.netlify.app/.netlify/functions/api/cursos`
    const url = 'http://localhost:8080/v1/lion-school/cursos'
    const response = await fetch(url)
    const courseList = await response.json()
    return {...courseList}
}

export {
    searchCourse
}