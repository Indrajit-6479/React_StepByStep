import './App.css'

function App() {
    return (
        <>
            <Welcome/>
            <h2>Hello World!!!</h2>
            <h3>Hello React {sum()}</h3>
        </>
    )
}

function Welcome() {
    return (
        <div>
            <h1>Welcome to first react project</h1>
            <h1>Namaste!!!</h1>
        </div>
    )
}

function sum() {
    return 10 + 9;
}

export default App
