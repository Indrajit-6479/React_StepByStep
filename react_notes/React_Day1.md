#### What is react js ?
- React is javascript library which is initially developed by Meta/Fb.
- React used to make web front-end applications.
- With react we can make single page applications (SPA)

#### What is SPA? (Single Page Applications)
- It is the type of web applications that dynamically updates the content on a single HTML page, rather than loading multiple pages from the server.
- It improves the user experience by reducing the page reloads and delivering faster app like experience.
- Examples: Gmail, Google Maps, X(Twitter)
- Challenges: Initial load time might be longer due to javascript loading.

#### What is difference between library and framework ?
**Library:**
Developer controls the flow 
Highly flexible

**Framework:**
Framework controls the flow
less flexible

#### Feature of React.js
**1) Component Based Architecture**
- It means: react divides UI into reusable, independent pieces called components.
- Benefit: This makes code modular, easier to maintain and reuseable across project.

**2) Virtual DOM**
- It means: React uses a virtual DOM which is a lightweight copy of real DOM.
- It works: Instead of directly updating the real DOM (slow), react updates the virtual DOM and calculates the minimal changes needed to the real DOM.
- Benefit: This improve user performance and ensures faster updates to the user interface.

**3) Declarative UI**
- It means: React allows you to describe what the UI should look like, and react handles the how (rendering and updating)
- Benefit: Easier to read and debug code, making development more efficient.

**4) JSX (Javascript XML)**
- It means: React use JSX, a syntax that allows you to write HTML like code within javascript.
- Benefit: It makes code more readable and allow seamless integration of logic and UI design.

**5) One way Data Binding**
- It means: React follows a unidirectional data flow, meaning data flows from parent to child components.
- Benefit: This simplifies debugging and ensures predicable behavior in the application.

6) Rich Ecosystem and Tools, Community support.

#### NVM, NPM, Node.js and TSC
**1) NVM (Node Version Manager)**
- It is the tool for managing Node.js versions
- It allow installing, switching and managing multiple Node.js versions on the same machine.
- nvm install 16, nvm use 20, nvm list

**2) NPM (Node Package Manager)**
- Package manager bundled with Node.js
- It install, manages and shares javascript libraries and dependencies for projects.
- npm install react, npm install -g typescript, npm update

**3) Node.js**
- It is an open source server environment.
- It allows you to run JavaScript on the server.
- node app.js (to run script) 

**4) TSC (Typescript compiler)**
- It is tool used for compiling typescript to javascript.
- it translates typescript code into plain javascript and checks checks for type errors during development.
- tsc app.ts (compiles Ts to Js)
- npm install -g typescript (install tcs globally)

#### What is vite ?
- Vite is a modern build tool and development server designed to make front-end development faster and more efficient.
- It is widely used in React, Vue and other framework.
- Simple configuration
- Typescript support
- Supports CSS pre-processors, CSS modules
  
#### Commands to Run React Application
```
npm create vite my-react-app
cd my-react-app
npm install
npm run dev
``` 
- It will run the react application on port 5173 which seems equivalent to VITE.

```javascript
import './App.css'

function App() {
  return (
    <>
      <h1>Welcome to first react project</h1>
      <h2>Hello World!!!</h2>
      <h3>Hello React 19</h3>
    </>
  )
}

export default App

```

#### Flow of Execution :
1) First it will load index.html file
2) In index.html file we have main.jsx
3) In main.jsx file we have App.jsx
- So it will execute App.jsx file      

**Note:**
1) All html tags is in lowercase so whatever component we are creating should start the first letter as upper case then only it will recognize as a component.
```javascript
function App() {
  return (
    <>
      <h1>Welcome to first react project</h1>
    </>
  )
}

export default App

```
```javascript
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

2) When we write the component and when we try to return it should takes the wrapper such as <div> </div> or <> </> otherwise it will gives the error
```javascript
function App() {
  return (
    <>
      <h1>Welcome to first react project</h1>
      <h2>Hello World!!!</h2>
      <h3>Hello React 19</h3>
    </>
  )
}

export default App

```
3) In __src__ package we can create new .jsx file or we can create new component.

