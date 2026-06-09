import React, { useState } from 'react';
import logo from './image.png';
import './App.css';
import CalcItem from './CalcItem';

function App() {
  const [counts, setCounts] = useState({
    enkU: 0,
    enkM: 0,
    dubU: 0,
    dubM: 0,
    stort: 0
  });

  const [hasBleck, setHasBleck] = useState(null); // null = not selected, true/false = selected

  const prices = {
    enkU: 38,
    enkM: 56,
    dubU: 68,
    dubM: 86,
    stort: 76,
    bleck: 30
  };

  const handleCalcChange = (type, value) => {
    const val = parseInt(value) || 0;
    setCounts(prev => ({ ...prev, [type]: Math.max(0, val) }));
  };

  const adjustCount = (type, delta) => {
    setCounts(prev => ({ ...prev, [type]: Math.max(0, prev[type] + delta) }));
  };

  const totalCount = Object.values(counts).reduce((sum, count) => sum + count, 0);

  const totalPrice = 
    counts.enkU * prices.enkU +
    counts.enkM * prices.enkM +
    counts.dubU * prices.dubU +
    counts.dubM * prices.dubM +
    counts.stort * prices.stort +
    (hasBleck ? totalCount * prices.bleck : 0); // Add 30 kr per window if bleck is selected;

  const priceWithoutRut = totalPrice * 2;

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="Navbar">
        <div className="Navbar-brand">
          <img src={logo} alt="Albins Fönsterputs Logo" className="Brand-logo" />
          <h1 className="Header-title">Albins Fönsterputs</h1>
        </div>
        <div className="Navbar-actions">
          <a href="#contact" className="Button">Boka nu</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="Hero">
        <img src={logo} alt="Albins Fönsterputs Logo" className="Brand-logo-big" />
        <h1>Hej!</h1>
        <p>
          Jag heter Albin, är 24 år och driver Albins Fönsterputs. 
          Jag erbjuder professionell, noggrann och personlig fönsterputsning 
          för privatpersoner och företag i Stockholmsområdet & Söderort.
        </p>
        <a href="#calculator" className="Button">Prisberäkning</a>
      </header>

      {/* Services Section */}
      <section className="Services" id="services">
        <h2>Mina Tjänster</h2>
        <div className="Service-cards">
          <div className="Card">
            <h3>Fönsterputsning (Privat)</h3>
            <p>Kristallklara fönster för din villa eller lägenhet. Nyttja RUT-avdraget och få 50% rabatt på arbetskostnaden.</p>
          </div>
          <div className="Card">
            <h3>Fönsterputsning (Företag)</h3>
            <p>Ett rent första intryck för dina kunder eller på kontoret. Hör av dig för ett skräddarsytt upplägg.</p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="Calculator" id="calculator">
        <h2>Prisberäkning</h2>
        <p className="Calculator-desc">Räkna ut ditt pris direkt. Ange antal fönster av varje typ nedan.</p>
        
        <div className="Calc-box">
          <CalcItem name="Enkelsidigt (utan spröjs)" price={prices.enkU} count={counts.enkU} itemKey="enkU" onAdjust={adjustCount} onChange={handleCalcChange} />
          <CalcItem name="Enkelsidigt (med spröjs)" price={prices.enkM} count={counts.enkM} itemKey="enkM" onAdjust={adjustCount} onChange={handleCalcChange} />
          <CalcItem name="Dubbelsidigt (utan spröjs)" price={prices.dubU} count={counts.dubU} itemKey="dubU" onAdjust={adjustCount} onChange={handleCalcChange} />
          <CalcItem name="Dubbelsidigt (med spröjs)" price={prices.dubM} count={counts.dubM} itemKey="dubM" onAdjust={adjustCount} onChange={handleCalcChange} />
          <CalcItem name="Stort fönster" price={prices.stort} count={counts.stort} itemKey="stort" onAdjust={adjustCount} onChange={handleCalcChange} />

          {/* Yes/No for Fönsterbleck*/}
          <div className="Calc-item">
            <div className="Calc-label">
              <span className="Calc-name">Fönsterbleck & Fönsterkarmar</span>
              <p className="Calc-price">+30 kr/st (efter RUT)</p>
            </div>
            <div className="Calc-controls">
              <button 
                className={`Calc-btn-bool ${hasBleck === true ? 'active' : 'inactive'}`} 
                onClick={() => setHasBleck(true)}
              >
                Ja
              </button>
              <button 
                className={`Calc-btn-bool ${hasBleck === false ? 'active' : 'inactive'}`} 
                onClick={() => setHasBleck(false)}
              >
                Nej
              </button>
            </div>
          </div>

          <div className="Calc-total">
            <p className="Calc-total-amount">{totalPrice} kr</p>
            <p className="Calc-total-before-rut">Totalt innan RUT: {priceWithoutRut} kr</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="About" id="about">
        <h2>Varför välja mig?</h2>
        <p className="About-desc">
          Som en lokal enmansföretagare värdesätter jag personlig service och hög kvalitet i allt jag gör. 
          När du anlitar Albins Fönsterputs vet du exakt vem som kommer till ditt hem. 
          Jag är i tid, noggrann och lämnar alltid efter mig ett strålande resultat!
        </p>
      </section>

      {/* Contact Section */}
      <section className="Contact" id="contact">
        <h2>Kontakta mig för tidsbokning eller frågor!</h2>
        
        <div className="Contact-info">
          <p>
            <span>📞 Telefon:</span> 
            <a href="tel:0720228998">072-022 89 98</a>
          </p>
          <p>
            <span>✉️ E-post:</span> 
            <a href="mailto:albinsfonsterputs@gmail.com">albinsfonsterputs@gmail.com</a>
          </p>
          <p>
            <span>📍 Omfattning:</span> 
            <span>Stockholmsområdet & Söderort</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="Footer">
        <p>&copy; {new Date().getFullYear()} Albins Fönsterputs. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  );
}

export default App;
