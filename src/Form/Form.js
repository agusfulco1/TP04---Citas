import '../App/App.css'
function Form({nombreLabel, tipo, placeholder}){
    return (
        <div className="form">
                <label>{nombreLabel}</label>
                <input type={tipo} name={nombre} placeholder={placeholder} className="u-full-width"></input>
        </div>
    )
}

export default Form;