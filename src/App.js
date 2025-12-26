import './App.css';
import SkillsSlider from './components/slider';
import Cal from '@calcom/embed-react';

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <h1 className="jaini-font">•श्री•</h1>
        <h1 className="kaisei-font">Numero-Astro</h1>
        <h3 className="julius-font" style={{ "padding": "4rem", "wordSpacing": "0.25rem" }}>Vedic Astrology | Numerology | Graphology | Vaastu </h3>
      </header>
      <section className='slider-body'>
        <div style={{"width": "50%", "display": "flex", "flex-direction": "column", "justify-content": "start" }}>
          <div style={{ "height": "20%" }}>
            <h2 className="kaisei-font" style={{ "font-size": "1.5rem" }}>Schedule your appointment</h2>
          </div>
          <div className='slider' style={{ "height": "80%" }}>
            <SkillsSlider
            />
          </div>
        </div>
        <div style={{"width": "50%"}}>
          <Cal calLink="sonieya-rcckxe/30min" config={{ theme: "light" }}></Cal>
        </div>
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
