import Item from "./Item"

function Lista(){
    return(
        <>
            <h1>Lista</h1>
            <ul>
                <Item marca="Coca-cola" />
                <Item marca="Pepsi" />
            </ul>
        </>    
    )
}

export default Lista