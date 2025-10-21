import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Algemene Voorwaarden - Lizzy van Baaren</title>
        <meta name="description" content="Algemene voorwaarden voor diensten van Lizzy van Baaren - Human Design specialist." />
      </Helmet>
      
      <div className="container py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Algemene Voorwaarden</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Toepasselijkheid</h2>
            <p>
              Deze algemene voorwaarden zijn van toepassing op alle diensten die worden aangeboden door 
              Lizzy van Baaren, gevestigd te Nederland, KvK-nummer: [indien van toepassing].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Diensten</h2>
            <p>
              Lizzy van Baaren biedt Human Design readings, coaching en advies. De dienstverlening wordt 
              uitgevoerd met de grootst mogelijke zorgvuldigheid en op basis van de kennis en ervaring die 
              op dat moment beschikbaar zijn.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Totstandkoming Overeenkomst</h2>
            <p>
              Een overeenkomst komt tot stand na bevestiging van je aanvraag. Na bevestiging ontvang je 
              een bevestigingsmail met daarin de details van de afspraak en betalingsgegevens.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Betaling</h2>
            <p>
              Betaling dient vooraf te geschieden via de aangegeven betaalmethoden. De afspraak wordt 
              pas definitief bevestigd na ontvangst van de betaling.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Annulering</h2>
            <p>
              Annulering kan kosteloos tot 48 uur voor de geplande afspraak. Bij annulering binnen 48 uur 
              wordt 50% van het bedrag in rekening gebracht. Bij annulering op de dag zelf wordt het volledige 
              bedrag in rekening gebracht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Vertrouwelijkheid</h2>
            <p>
              Alle informatie die tijdens de sessies wordt gedeeld, wordt vertrouwelijk behandeld. 
              Lizzy van Baaren zal zonder jouw toestemming geen informatie delen met derden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Aansprakelijkheid</h2>
            <p>
              Lizzy van Baaren kan niet aansprakelijk worden gesteld voor indirecte schade of gevolgschade 
              die voortvloeit uit het gebruik van de diensten. Human Design readings zijn bedoeld als 
              hulpmiddel voor persoonlijke ontwikkeling en zijn geen vervanging voor medisch of psychologisch advies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Intellectueel Eigendom</h2>
            <p>
              Alle rechten met betrekking tot materialen, charts en documenten die tijdens de dienstverlening 
              worden verstrekt, blijven eigendom van Lizzy van Baaren, tenzij anders overeengekomen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Toepasselijk Recht</h2>
            <p>
              Op deze algemene voorwaarden is Nederlands recht van toepassing. Geschillen zullen bij voorkeur 
              in onderling overleg worden opgelost.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>
              Voor vragen over deze voorwaarden kun je contact opnemen via het contactformulier op deze website.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Terms;
