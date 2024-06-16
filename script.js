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
          <article> Dit is de inhoud van de sectie over het Aboutme. Hallo mijn naam is Maarten en leuk dat je op mijn website kijkt. Momenteel zit ik op school bij het clv. Mijn hobbies zijn gamen en chillen met vrienden.</article>
        </div>
      `;

 } else if (section === 'portfolio') {
      contentDiv.innerHTML = `
        <div id="portfolio">
          <h1>Portfolio</h1>
          <p>Dit is de inhoud van de sectie over mijn portfolio. Voeg hier je eigen tekst toe.</p>
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
    } else if (section === 'werkingcomputer') {
      contentDiv.innerHTML = `
        <div id="werkingcomputer">
          <h1>Welkom op de Homepagina</h1>
          <p>Dit is de inhoud van de werkingcomputer.Voeg hier je eigen tekst toe.</p>
        </div>
 `;
         } else if (section === 'compressietechnieken') {
      contentDiv.innerHTML = `
        <div id="compressietechnieken">
          <h1>About Me</h1>
          <article> Dit is de inhoud van de werkingcomputer. Voeg hier je eigen tekst toe. </article>
        </div>
       
    }
  }
  
