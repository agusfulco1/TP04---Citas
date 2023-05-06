
function Input({tipo, nombre,placeholder}) {
    return (
        <input type={tipo} name={nombre} placeholder={placeholder} class="u-full width"></input>
    )
}

export default Input