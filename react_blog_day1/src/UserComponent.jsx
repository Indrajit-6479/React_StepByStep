function Login() {
    return (
        <div>
            <h1>Login the user</h1>
        </div>
    )
}

export default Login;

export function Profile() {
    return (
        <div>
            <h2>User Profile</h2>
        </div>
    )
}

export function Setting() {
    return (
        <div>
            <h2>User Setting</h2>
        </div>
    )
}

export const userKey = "123@$hdg%";

export function FunctionForJSX(){
    const userName = "Indrajit";
    let x = 10;
    let y = 20;
    return(
        <div>
            <h3>{userName}</h3>
            <h3>{10+20+30}</h3>
            <h3>{x*y}</h3>
            <button onClick={()=>alert("Hello JSX")}>Click me</button>
        </div>
    )

}