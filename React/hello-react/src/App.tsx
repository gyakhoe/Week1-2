// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { FirstComponent } from './components/first-component'
import { ParentComponent } from './components/parent-component'

// The app.tsx is the root of our app ( at least when it comes ot rendering views on the page)
// Most of the code we write will go elsewhere int hte src folder, but the app.tsx controls what gets rendered
// we will put the component we want to render in the return

function App() {


  return (
    <>
      <h2>Hello React! We'll make great modern UI with you :)</h2>

      <p> We are writing in TSX, which is like HTML for React Typescript</p>

      <h3> React will reload the app with eery saved change to the source code </h3>

      {/* 
        * This is comment in tsx 
        * We will make custom component below
        * */}

      <FirstComponent />
      <ParentComponent />

    </>
  )
}

export default App
