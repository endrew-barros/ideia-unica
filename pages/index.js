import { useState } from "react"
function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Contador />
        </div>
    )
}
function Contador() {
    const [contador, setContador] = useState(1)
    function adicionarContador() {
        setContador(contador + 1)
    }

    //Visual do componente
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
export default Home