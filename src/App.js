import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="Navbar">
        <div className="Navbar-brand">
          <div className="Logo-placeholder">
            Logo<br/>Here
          </div>
          <h1 className="Header-title">Albins Fönstertvätt</h1>
        </div>
        <div className="Navbar-actions">
          <a href="#contact" className="Button">Boka nu</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="Hero">
        <h1>Skinande rena fönster i Tullinge & Stockholm</h1>
        <p>
          Hej! Jag heter Albin, är 23 år och driver Albins Fönstertvätt. 
          Jag erbjuder professionell, noggrann och personlig fönsterputsning 
          för privatpersoner och företag i Tullinge med omnejd.
        </p>
        <a href="#contact" className="Button">Få en gratis offert</a>
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
          <div className="Card">
            <h3>Tillval</h3>
            <p>Karmtvätt, rengöring av spröjs och avtorkning av fönsterbleck ordnas självklart om så önskas.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="About" id="about">
        <h2>Varför välja mig?</h2>
        <p style={{textAlign: 'center', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6'}}>
          Som en lokal enmansföretagare värdesätter jag personlig service och hög kvalitet i allt jag gör. 
          När du anlitar Albins Fönstertvätt vet du exakt vem som kommer till ditt hem. 
          Jag är i tid, noggrann och lämnar alltid efter mig ett strålande resultat!
        </p>
      </section>

      {/* Contact Section */}
      <section className="Contact" id="contact">
        <h2>Redo för renare fönster?</h2>
        <p>Hör av dig till mig för tidsbokning eller prisförfrågan.</p>
        
        <div className="Contact-info">
          <p>
            <span>📞 Telefon:</span> 
            <a href="tel:0700000000">070-000 00 00</a>
          </p>
          <p>
            <span>✉️ E-post:</span> 
            <a href="mailto:info@albinsfonstertvatt.se">info@albinsfonstertvatt.se</a>
          </p>
          <p>
            <span>📍 Omfattning:</span> 
            <span>Tullinge & Södra Stockholm</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="Footer">
        <p>&copy; {new Date().getFullYear()} Albins Fönstertvätt. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  );
}

export default App;
