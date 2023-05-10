import "./OptionList.css"

const OptionsList = () => {

    const equipos = [
        "Programacion",
        "Front-end", 
        "Data-Science",
        "Devops",
        "Ux y diseño",
        "Movil",
        "Innovacion y gestion"
    ]

    return <div className="lista-opciones">
        <label htmlFor="">Equipos</label>
        <select name="" id="">
            {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default OptionsList