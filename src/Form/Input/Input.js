
function Input({tipo, nombre,placeholder}) {
    return (
        <input type={tipo} name={nombre} placeholder={placeholder} className="u-full width"></input>
    )
}

export default Input