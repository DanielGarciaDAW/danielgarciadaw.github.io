import './App.css'
import { HeaderComponent } from './components/HeaderComponent'
import { PresentationComponent } from './components/PresentationComponent'
import { ProyectsComponent } from './components/ProyectsComponent'

function App() {
  return (
    <main className="app-shell">
      <div className="app-shell__accent app-shell__accent--one" aria-hidden="true" />
      <div className="app-shell__accent app-shell__accent--two" aria-hidden="true" />

      <div className="app-shell__content">
        <HeaderComponent />
        <PresentationComponent />
        <div className="app-section-divider" aria-hidden="true" />
        <ProyectsComponent />
      </div>
    </main>
  )
}

export default App;
