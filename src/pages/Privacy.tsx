import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Lizzy van Baaren</title>
        <meta name="description" content="Privacy policy van Lizzy van Baaren. Wij respecteren jouw privacy en gebruiken geen cookies of tracking." />
      </Helmet>
      
      <div className="container py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Privacyverklaring</h2>
            <p>
              Lizzy van Baaren hecht veel waarde aan de bescherming van je persoonsgegevens. 
              In deze privacyverklaring informeren we je over hoe we omgaan met je gegevens.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Geen Cookies of Tracking</h2>
            <p>
              Deze website gebruikt <strong>geen cookies</strong> en verzamelt <strong>geen persoonlijke gegevens</strong>. 
              Er is geen tracking, geen analytics, en geen dataverzameling. Jouw privacy is volledig gewaarborgd.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>
              Wanneer je contact met ons opneemt via het contactformulier, verwerken we alleen de gegevens 
              die je zelf verstrekt (zoals je naam en e-mailadres) om je vraag te kunnen beantwoorden. 
              Deze gegevens worden niet gedeeld met derden en alleen gebruikt voor het doel waarvoor je ze hebt verstrekt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Jouw Rechten</h2>
            <p>
              Je hebt altijd het recht om je persoonsgegevens in te zien, te corrigeren of te laten verwijderen. 
              Neem hiervoor contact met ons op.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Vragen</h2>
            <p>
              Heb je vragen over deze privacyverklaring? Neem gerust contact met ons op via het contactformulier.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Privacy;
