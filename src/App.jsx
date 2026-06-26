import './App.css'
import { useState } from 'react'
import { HeaderComponent } from './components/HeaderComponent'
import { PresentationComponent } from './components/PresentationComponent'
import { ProyectsComponent } from './components/ProyectsComponent'
import { SkillComponent } from './components/SkillComponent'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null)

  return (
    <main className="app-shell">
      <div className="app-shell__accent app-shell__accent--one" aria-hidden="true" />
      <div className="app-shell__accent app-shell__accent--two" aria-hidden="true" />

      <div className="app-shell__content">
        <HeaderComponent />
        <PresentationComponent />
        <div className="app-section-divider" aria-hidden="true" />
        <SkillComponent onLanguageSelect={setSelectedLanguage} />
        <ProyectsComponent selectedLanguage={selectedLanguage} />
      </div>
    </main>
  )
}

export default App;
