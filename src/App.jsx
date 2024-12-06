import './App.css'
import { HeaderComponent } from './components/HeaderComponent'
import { PresentationComponent } from './components/PresentationComponent'
import { ProyectsComponent } from './components/ProyectsComponent'
import { SkillComponent } from './components/SkillComponent'

function App() {

  return (
    <>
      <main className="main-content">
        <HeaderComponent />
        <hr className="demomento"/>
        <PresentationComponent />
        <hr className="demomento"/>
        <SkillComponent />
        <hr className="demomento"/>
        <ProyectsComponent />
      </main>
    </>
  )
}

export default App
