function loadContent(section) {
    var contentDiv = document.getElementById('content');
  
    if (section === 'home') {
      contentDiv.innerHTML = `
        <div id="home">
          <h1>Welkom op de Homepagina</h1>
          <p>Dit is de inhoud van de homepagina.Voeg hier je eigen tekst toe.</p>
        </div>
      `;

        } else if (section === 'Aboutme') {
      contentDiv.innerHTML = `
        <div id="Aboutme">
          <h1>About Me</h1>
          <p>Dit is de inhoud van de sectie over het about me. Ik ben Maarten..</p>
        </div>
      `;
        
    } else if (section === 'binairstelsel') {
      contentDiv.innerHTML = `
        <div id="binairstelsel">
          <h1>Binairstelsel</h1>
          <p>Dit is de inhoud van de sectie over het binairstelsel. Voeg hier je eigen tekst toe.</p>
        </div>
      `;
    } else if (section === 'kleurmodellen') {
      contentDiv.innerHTML = `
        <div id="kleurmodellen">
          <h1>Kleurmodellen</h1>
          <p>Dit is de inhoud van de sectie over kleurmodellen. Voeg hier je eigen tekst toe.</p>
        </div>
      `;

    }
  }
  
