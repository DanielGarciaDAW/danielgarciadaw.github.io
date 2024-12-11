import './App.css'
import { HeaderComponent } from './components/HeaderComponent'
import { PresentationComponent } from './components/PresentationComponent'
import { ProyectsComponent } from './components/ProyectsComponent'
import { SkillComponent } from './components/SkillComponent'
import React, { useState } from 'react';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null); // Estado compartido

  return (
    <>
      <main className="main-content">
        <HeaderComponent />
        <hr className="demomento"/>
        <PresentationComponent />
        <hr className="demomento"/>
        <SkillComponent onLanguageSelect={setSelectedLanguage} />
        <hr className="demomento"/>
        <ProyectsComponent selectedLanguage={selectedLanguage} />
      </main>
    </>
  )
}

export default App;
