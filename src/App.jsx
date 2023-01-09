import React from "react"
import { NavBar, Hero, Article, Subscribe, Footer } from './components'

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar />
      <Hero />
      <Article />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
