import './App.css'
import { HeaderComponent } from './components/HeaderComponent'
import { PresentationComponent } from './components/PresentationComponent'

function App() {

  return (
    <>
      <main className="main-content">
        <HeaderComponent />
        <hr className="demomento"/>
        <PresentationComponent />
        <hr className="demomento"/>
        
      </main>
    </>
  )
}

export default App
