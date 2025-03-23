function Exercise1() {
    return (<div>
        <Heading/>
        <Photo/>
        <ToDoList/>
        <Button/>
    </div>)
}

export default Exercise1;

function Heading() {
    return (
        <div>
            <h2>Indrajit Rananavare</h2>
        </div>

    )
}

function Photo() {
    return (
        <div>
            <img src="https://picsum.photos/200/300?grayscale" alt="Indrajit Rananavare"
                 className="photo"/>
        </div>
    )
}

function ToDoList() {
    return (
        <div>
            <ul>
                <li>Chicken</li>
                <li>Fish</li>
                <li>Fruits</li>
            </ul>
        </div>
    )
}

function callFun() {
    alert("Function called ...");
}

function Button() {
    return (
        <div>
            <button onClick={callFun}>Click Me</button>
        </div>
    )
}