import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FormEvent, useState } from "react";
import ChartPopup from "@/components/ChartPopup";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Section } from "@/components/ui/section";
import { CardEnhanced, CardEnhancedContent, CardEnhancedHeader, CardEnhancedTitle } from "@/components/ui/card-enhanced";
import { Sparkles, Heart, Users, Compass, ArrowRight, Star } from "lucide-react";
const offers = [{
  title: "Basis Reading",
  desc: "Samen duiken we in je type, strategie, profiel en centra. Zo krijg je direct heldere, praktische inzichten die je helpen meer flow, energie en gemak in je dagelijkse leven te ervaren.",
  duration: "90 min",
  price: "€150",
  location: "(online of in Den Haag)"
}, {
  title: "Verdiepende Reading",
  desc: "In deze sessie gaan we een laag dieper: we verkennen de dynamiek van jouw design en vertalen dit naar concrete stappen voor jouw dagelijkse leven. Daarnaast kunnen we ook jouw business blauwdruk bekijken, zodat je meer inzicht krijgt in werk, ondernemen en hoe jij je talenten optimaal kunt gebruiken.",
  duration: "120 min",
  price: "€195",
  location: "(online of in Den Haag)"
}, {
  title: "Koppel Reading",
  desc: "Ontdek samen hoe jullie designs elkaar aanvullen en beïnvloeden. We kijken naar jullie energie, dynamiek en samenwerking. Wat zijn jullie sterke punten en waar liggen de eventuele uitdagingen. Creëer meer verbinding, begrip en harmonie in je relatie.",
  duration: "135 min",
  price: "€295",
  location: "(online of in Den Haag)"
}];
const testimonials = [{
  quote: `Ik wist van tevoren niet precies wat ik kon verwachten van een Human Design reading, maar wát super was dit! Vanaf het eerste moment voelde het heel relaxed, alsof ik met een vriendin zat te kletsen die toevallig ook precies weet hoe ik in elkaar zit. Lizzy legt alles superduidelijk uit, wat ik persoonlijk fijn vond is dat zij het uitlegt met voorbeelden, zodat het allemaal makkelijker te begrijpen is.
Wat ik vooral fijn vond, is dat ze dingen vertelde die ik zelf al voelde, maar die ik zelf nooit echt onder woorden kon brengen. Je krijgt de bevestiging dat het helemaal oké is om gewoon mezelf te zijn. Alles valt eigenlijk op z'n plek. Een perfect cadeau voor een ander, maar zéker ook een cadeautje aan jezelf.
💛Thanks Lizzy💛`,
  author: "Mireille Huisman 5/1 Emotionele Generator"
}, {
  quote: `De Human Design sessie met Lizzy was voor mij erg waardevol. Ik ging er heen zonder verwachting. Ik was op zoek naar iets om mijzelf weer iets beter te leren te begrijpen. Voor mij was snappen hoe mijn hoofd werkt soms erg moeilijk te begrijpen.
Lizzy nam mij mee in een gesprek over mijzelf. Ze kende mij niet, maar wist eigenlijk meteen al alles over mij en vertelde hoe ik keuzes maak, hoe ik omga met tegenslagen en emoties. Het was een fijn gesprek en het is fijn dat zij stap voor stap kan vertellen hoe jij werkt met dit soort dingen. Ook geeft zij voorbeelden van zichzelf, wanneer je iets niet begrijpt en het is fijn dat je alles kan vragen aan haar.
Ik zal dit zeker iedereen aanraden dit te doen. Het was namelijk heel waardevol en bijzonder voor mij.`,
  author: "Sven Boerema 2/4 Emotionele Manifesting Generator"
}, {
  quote: `Our family recently had a Human Design reading done by Lizzy, and the experience really stuck with us — in the best way!

She created a unique chart for each of us — me, my partner, and our two kids — and then walked us through what it all meant. It was fascinating to see how each of us is wired differently: how we make decisions, where we get our energy, how we interact, and what drives us underneath it all. But what really made it valuable was how Lizzy tied everything together in a way that made sense for our everyday lives.

She didn't just explain our designs — she showed us how to use what we learned. We came away with real tools and ideas for understanding ourselves better, handling conflict with more grace, and appreciating each other's differences instead of clashing over them. It gave us a new way to look at how we work as a family and where we can support each other more intentionally.

If you're curious about what makes you tick, or want to deepen your relationships — whether that's with a partner, kids, or even coworkers — this is absolutely worth exploring. Lizzy has a way of making something that could feel a bit "out there" totally relatable and useful.

We're really glad we did it, and we wholeheartedly recommend giving it a try.`,
  author: "Rettaliata Family"
}, {
  quote: `I have to say that I was more than a little hesitant to allow Lizzy to do my reading. I feared that the whole thing would be too far from my reality or my comfort zone. It turned out to be quite the opposite. It helped me realise that I generate my own energy in a way that may be a little different from the norm. I'm more than happy to recommend Lizzy.`,
  author: "Tomas Fehrling, 3/5 Emotionele Projector"
}, {
  quote: `Ik vond het echt verrassend hoeveel uit de Human Design-sessie met Lizzy bij mij resoneerde.

Het gaf me inzichten die ik niet eerder zo scherp had, en ik voel nu dat ik beter kan afstemmen op mezelf, mijn signalen sneller herken en helderder heb wat mijn behoeftes zijn.

Een mooie en waardevolle ervaring die me nog lang bijblijft.`,
  author: "Nadine Paagman 2/4 Emotionele Manifesting Generator"
}, {
  quote: `Ik ben een erg zwart op wit persoon, en ik was erg sceptisch over dit systeem.

Toch heb ik me hier bij Lizzy aan gewaagd en heeft ze me bijzonder veel over mezelf kunnen vertellen. Ik schrok er van hoe accuraat het allemaal was. Ik heb hier zo veel over mezelf geleerd, dingen waar ik nog nooit over na heb gedacht, maar bij het horen van, het gelijk heb kunnen plaatsen in mijn leven. Het heeft me een totaal ander, maar voornamelijk positiever beeld gegeven over mezelf en mijn lichaam. Ik ben een ander en vrolijker mens geworden met veel meer begrip over mijzelf.

Ik kan dit iedereen aanraden, al ben je zo sceptisch als ik, je zal er geen spijt van hebben!!`,
  author: "Tim Versprille 4/6 emotionele generator"
}, {
  quote: `Ik ben bij Lizzy geweest voor een uitgebreid consult over mijn Human Design. Ik wist nog niet zo goed wat ik kon verwachten maar wat was het een geweldige ervaring! Wat mij het meeste is bijgebleven is hoe ik mijn frequentie kan verhogen om positieve dingen aan te trekken. Onbewust ben ik hier nu elke dag mee bezig en dat merk ik! Ik kan Lizzy mega aanbevelen aan iedereen die zichzelf wat beter wilt leren begrijpen. Alleen al voor haar fijne energie zou ik nog een keer terugkomen.`,
  author: "Coco de Nie 3/5 Generator"
}, {
  quote: `Onlangs heb ik een Human Design reading gehad van Lizzy en ik kan oprecht zeggen dat het een hele fijne ervaring is geweest. Lizzy heeft me op een heldere en fijne manier inzichten gegeven met heel veel voorbeelden.

Dankzij haar uitleg begrijp ik nu veel beter waarom ik op bepaalde manieren reageer, waar mijn kracht ligt, en hoe ik om kan gaan met mijn gedachten, gevoelens en het maken van keuzes. Dingen die voorheen onduidelijk of frustrerend waren, vallen nu op hun plek.

Lizzy creëert een veilige en open sfeer, waarin alles bespreekbaar is en je je echt gezien voelt. Haar kennis van Human Design is indrukwekkend en ze weet het op een toegankelijke manier over te brengen.

Ik raad een reading bij Lizzy van harte aan aan iedereen die zichzelf beter wil leren begrijpen of op zoek is naar richting in het leven. Echt een cadeautje voor jezelf!`,
  author: "Nik Versprille 3/5 Generator"
}];

// Reusable quote card with Read more/less
interface QuoteCardProps {
  quote: string;
  author?: string;
  maxChars?: number;
}
const QuoteCard = ({
  quote,
  author,
  maxChars = 320
}: QuoteCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = quote.length > maxChars;
  const display = expanded || !isLong ? quote : `${quote.slice(0, maxChars).trimEnd()}…`;
  return <div className="h-full flex flex-col">
      <blockquote className="flex-1">
        <p className="font-body italic text-base leading-relaxed mb-4 text-white/90">{display}</p>
        {author ? <footer className="mt-3 text-sm text-white/70">— {author}</footer> : null}
      </blockquote>
      {isLong ? <div className="mt-4">
          <Button variant="link" size="sm" onClick={() => setExpanded(v => !v)} aria-expanded={expanded} className="p-0 h-auto text-white/80 hover:text-white">
            {expanded ? "Minder" : "Lees meer"}
          </Button>
        </div> : null}
    </div>;
};
const Index = () => {
  const {
    toast
  } = useToast();
  const onContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Bericht verzonden",
      description: "Bedankt voor je bericht. We antwoorden zo snel mogelijk via e-mail."
    });
    (e.currentTarget as HTMLFormElement).reset();
  };
  return <>
      <Helmet>
        <title>Home | Lizzy van Baaren — Human Design Specialist</title>
        <meta name="description" content="Nuchtere Human Design readings en begeleiding. Ontdek wat Human Design voor jou kan betekenen en vraag je chart aan." />
        <link rel="canonical" href="https://www.lizzyvanbaaren.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Lizzy van Baaren',
          jobTitle: 'Human Design Specialist',
          url: 'https://www.lizzyvanbaaren.com/'
        })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Human Design Chart Reading',
          description: 'Personalized Human Design chart and guidance based on your birth details to understand your energetic blueprint and decision-making strategy.',
          provider: {
            '@type': 'Person',
            name: 'Lizzy van Baaren'
          },
          areaServed: 'Global',
          serviceType: 'Human Design Reading',
          url: 'https://www.lizzyvanbaaren.com/#chart-reading'
        })}
        </script>
      </Helmet>

      {/* Hero Section - Mystical & Therapeutic */}
      <Section variant="primary" size="none">
        <div className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-gradient-to-br from-[hsl(25_35%_72%)] via-[hsl(25_35%_70%)] to-[hsl(25_35%_68%)] pt-20">
          {/* Mystical background elements */}
          <div className="absolute inset-0">
            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/5 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-white/15 rounded-full blur-xl animate-pulse-soft"></div>
            <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float" style={{
            animationDelay: '2s'
          }}></div>
            
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              
              {/* Portrait side - enhanced with glow */}
              <div className="order-2 md:order-1 animate-fade-in">
                <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                  {/* Magical portrait container */}
                  <div className="relative">
                    {/* Soft glow behind image */}
                    <div className="absolute inset-0 bg-white/20 rounded-3xl blur-lg transform scale-105"></div>
                    
                    {/* White frame matching Over mij section */}
                    <div className="relative bg-white rounded-2xl p-3 shadow-2xl">
                      <div className="rounded-xl overflow-hidden shadow-elegant max-h-[50vh] md:max-h-[60vh]">
                        <img src="/lovable-uploads/hero.png" alt="Lizzy van Baaren - Human Design Specialist die je helpt jouw authentieke zelf te ontdekken" className="w-full h-full object-cover object-center" loading="eager" decoding="async" fetchPriority="high" sizes="(min-width: 1024px) 50vw, (min-width: 768px) 60vw, (min-width: 640px) 70vw, 85vw" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text content side - mystical and inspiring */}
              <div className="order-1 md:order-2 space-y-4 sm:space-y-5 md:space-y-6 animate-fade-in-up">
                
                {/* Powerful headline - slightly smaller */}
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
                    Live your{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10">True Self</span>
                    </span>
                  </h2>
                  
                  {/* Inspiring subtitle */}
                  <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-black/80 leading-relaxed max-w-2xl">
                    Ontdek jouw unieke design en leer leven vanuit flow, energie en vertrouwen. Ik help je met duidelijke uitleg en praktische inzichten, zodat je dichter bij je authentieke zelf komt en keuzes kunt maken die echt bij jou passen.
                  </p>
                </div>
                
                {/* Call to action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button asChild size="default" className="bg-[hsl(155_8%_72%)] text-white hover:bg-[hsl(155_8%_68%)] font-semibold text-sm shadow-2xl px-6 rounded-full group">
                    <NavLink to="/vraag-je-chart-aan" className="flex items-center gap-2">
                      Start je reis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </NavLink>
                  </Button>
                  <Button asChild size="default" variant="outline" className="border-2 border-black/40 text-black hover:bg-black/10 backdrop-blur-sm font-medium text-sm px-6 rounded-full">
                    <a href="#contact" className="flex items-center gap-2">
                      <Users className="w-4 h-4" /> Laten we praten
                    </a>
                  </Button>
                </div>
                
                {/* Trust indicator */}
                
              </div>
            </div>
          </div>
          
          {/* Smooth gradient transition */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[hsl(25_35%_72%)]/10 pointer-events-none"></div>
        </div>
      </Section>

      {/* Wat is Human Design - The foundation of our story */}
      <Section variant="sage" size="default" className="relative">
        {/* Transition from previous section */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[hsl(25_35%_72%)]/10 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 animate-fade-in text-white">
                Waarom Human Design?
              </h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-2xl text-white/80">∞</div>
                  </div>
                  <p className="font-serif text-base sm:text-lg leading-relaxed text-white">
                    Ik geloof dat alles wat je nodig hebt al in je zit. Human Design is perfect om te ontdekken hoe jij van nature werkt, hoe jouw energie stroomt en hoe je de keuzes maakt die écht bij jou passen.
                  </p>
                  
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-2xl text-white/80">∞</div>
                  </div>
                  <p className="font-serif text-base sm:text-lg leading-relaxed text-white">
                    We dragen allemaal overtuigingen en patronen met ons mee, vaak overgenomen van onze omgeving: hoe we "horen" te zijn, wat we "moeten" doen. Dat noemen we conditionering. Human Design helpt je stap voor stap te deconditioneren, loslaten wat niet van jou is, zodat je dichter bij je eigen essentie komt.
                  </p>
                  
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-2xl text-white/80">∞</div>
                  </div>
                  <p className="font-serif text-base sm:text-lg leading-relaxed text-white">
                    Het gaat niet om wat je "zou moeten doen", maar om wie je al bent. En dat is precies genoeg. Leven vanuit je eigen design maakt het leven lichter, vloeiender en natuurlijker.
                  </p>
                </div>
                
                {/* Personal note in handwritten style */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-natural animate-fade-in">
                  <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 text-3xl sm:text-4xl opacity-30 text-white">❝</div>
                  <p className="font-serif text-sm sm:text-base italic leading-relaxed text-white font-normal">
                    "Als 2/4 Projector - de easy breezy genius - ontdekte ik dat mijn kracht niet in meer doen zit, maar in hoe ik mijn energie inzet."
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center gap-3">
                    <span className="text-xs sm:text-sm font-medium text-white/80">Lizzy</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 sm:mt-16 flex justify-center animate-fade-in">
              <div className="w-20 sm:w-24 h-px bg-white/60 transition-all duration-700 hover:w-28 sm:hover:w-32"></div>
            </div>
          </div>
        </div>
        
        {/* Smooth transition gradient to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white/10 pointer-events-none"></div>
      </Section>

      {/* Over Mij - Personal connection in the story */}
      <Section variant="primary" size="default" id="over-mij" className="relative">
        {/* Transition from previous section */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            <div className="order-2 lg:order-1 animate-fade-in space-y-6">
              <div className="relative">
                {/* Enhanced portrait container with white frame */}
                <div className="relative bg-white rounded-2xl p-3 shadow-2xl">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-white shadow-elegant transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                    <img src="/lovable-uploads/beab9120-ae5c-43b8-b79d-cf419e4594ee.png" alt="Lizzy van Baaren - Human Design Specialist portret" className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" loading="lazy" decoding="async" sizes="(min-width: 1024px) 50vw, 100vw" />
                  </div>
                </div>
              </div>
              
              {/* Certification note */}
              <div className="text-sm text-black/60 italic">
                De Human Design opleiding bij Sarah Leers succesvol afgerond; momenteel in opleiding aan de International Human Design School (IHDS) tot Professional Analyst
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-black leading-tight">
                  Over mij
                </h2>
              </div>
              
              <div className="space-y-6 font-serif text-lg leading-relaxed text-black/90">
                <p>
                  Na 17 jaar in de bruisende evenementenwereld te hebben gewerkt, bracht een wereldreis een onverwachte wending in mijn leven. Tijdens die reis kwam ik in aanraking met Human Design en vanaf dat moment begon alles te verschuiven. Toen ik ontdekte dat ik een Projector ben, voelde dat als een bevrijding. Ik realiseerde me: 'ik hoef niet iedereen bij te houden. Ik mag mijn eigen ritme volgen'.
                </p>
                
                <p>
                  Als 2/4 emotionele Projector heb ik een sterke behoefte aan verbinding, maar ook aan tijd voor mezelf, iets wat ik vroeger niet vanzelfsprekend vond. Sinds ik mijn design beter begrijp, leef ik met veel meer rust, helderheid en vertrouwen. Human Design liet me zien dat het niet draait om meer doen, maar om de kwaliteit van wat je doet – en of het echt bij je past. Dat inzicht gaf me de vrijheid om mijn eigen ritme te volgen en trouw te blijven aan mijzelf.
                </p>
                
                <p>
                  Ben jij ook nieuwsgierig naar jouw unieke design? Ik leg je graag in heldere en begrijpelijke taal uit wat jouw chart betekent.
                </p>
              </div>
              
              <div className="pt-4">
                <Button asChild size="lg" variant="outline" className="border-2 border-black/40 text-black hover:bg-black/10 backdrop-blur-sm">
                  <NavLink to="/vraag-je-chart-aan">Laten we praten</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Ra Uru Hu Quote Section */}
      <Section variant="white" size="default" className="-mt-8 mb-8">
        <div className="container mx-auto px-6 text-center py-12">
          <div className="max-w-2xl mx-auto">
            <p className="font-serif text-lg lg:text-xl italic leading-relaxed text-foreground">
              "To be correct is to appreciate your own magic, your own beauty. So I continue to remind you, love yourself."
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">Ra Uru Hu</footer>
          </div>
        </div>
      </Section>

      {/* Aanbod - Natural flowing sections instead of cards */}
      <Section variant="primary" size="default" id="aanbod">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 py-20">
          <div className="max-w-6xl mx-auto space-y-16">
            
            <div className="text-center space-y-6 animate-fade-in-up">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-black">
                Hoe kan ik je helpen
              </h2>
              <div className="organic-divider"></div>
            </div>
            
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {offers.map((offer, idx) => <div key={idx} className="animate-fade-in-up" style={{
              animationDelay: `${idx * 0.1}s`
            }}>
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[hsl(25_35%_65%)]/40 shadow-soft h-full flex flex-col relative overflow-hidden">
                    {/* Enhanced decorative element */}
                    <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-[hsl(155_8%_72%)]/20 rounded-full -translate-y-8 sm:-translate-y-10 translate-x-8 sm:translate-x-10"></div>
                    
                    <div className="relative flex-1 space-y-3 sm:space-y-4">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold !text-black mb-3">{offer.title}</h3>
                      
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-[hsl(155_8%_72%)] flex items-center justify-center shadow-sm">
                          <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white" />
                        </div>
                      </div>
                      <p className="font-body leading-relaxed text-sm sm:text-base !text-black/80">{offer.desc}</p>
                      
                      {/* Pricing and duration info - aligned on one line */}
                      <div className="space-y-2 pt-2">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-black/70">Duur:</span>
                              <span className="font-medium text-sm text-black">{offer.duration}</span>
                            </div>
                            {offer.location && (
                              <span className="text-xs text-black/60 italic">{offer.location}</span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-black/70">Prijs:</span>
                            <span className="font-semibold text-[hsl(155_8%_50%)] text-base">{offer.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 sm:mt-6 relative">
                      <Button asChild variant="outline" size="default" className="w-full border-2 border-[hsl(155_8%_72%)] text-[hsl(155_8%_50%)] hover:bg-[hsl(155_8%_72%)]/20 text-sm sm:text-base">
                        <a href="#contact">Klinkt interessant!</a>
                      </Button>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials - Flowing narrative style instead of cards */}
      <Section variant="sage" size="default" id="reviews">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 py-20">
          
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              REVIEWS
            </h2>
            <div className="organic-divider mt-6"></div>
          </div>
          
          {/* 3 Reviews horizontally with original styling */}
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {testimonials.slice(0, 3).map((testimonial, index) => <div key={index} className="animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <blockquote className="space-y-6">
                  <div className="text-4xl text-white/30 leading-none">"</div>
                  <div className="pl-6 border-l-2 border-white/20">
                    <QuoteCard quote={testimonial.quote} author={testimonial.author} maxChars={200} />
                  </div>
                </blockquote>
              </div>)}
          </div>
          
          <div className="text-center mt-16 animate-fade-in">
            <Button asChild variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105">
              <a href="#reviews" onClick={e => {
              e.preventDefault();
              // Show all testimonials functionality could be added here
              alert('Meer verhalen komen binnenkort!');
            }}>
                Lees meer verhalen
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Ra Uru Hu Quote Section */}
      <Section variant="white" size="default" className="-mt-4 mb-12">
        <div className="container mx-auto px-6 text-center py-12">
          <div className="max-w-2xl mx-auto">
            <p className="font-serif text-lg lg:text-xl italic leading-relaxed text-foreground">
              "If you allow someone to be who they are and they allow you to be who you are, then that's love. Anything else is torture."
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">Ra Uru Hu</footer>
          </div>
        </div>
      </Section>

      {/* Chart Request - Natural flow - section removed per feedback */}

      {/* Contact - Natural conclusion */}
      <Section variant="primary" size="default" id="contact">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 py-20">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center space-y-6 mb-12 animate-fade-in-up">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-black">
                Stuur me een berichtje
              </h2>
              <p className="font-body text-black/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Vragen over Human Design of interesse in een sessie? Ik hoor graag van je.
              </p>
              <div className="w-16 h-0.5 bg-black/50 mx-auto"></div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-elegant animate-scale-in">
              <form onSubmit={onContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="naam" className="text-sm font-medium text-foreground">
                      Naam *
                    </label>
                    <Input id="naam" name="naam" type="text" required placeholder="Je naam" className="bg-background border-muted/30 text-foreground rounded-2xl h-12 transition-all duration-300 focus:scale-[1.02] focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      E-mail *
                    </label>
                    <Input id="email" name="email" type="email" required placeholder="je@email.com" className="bg-background border-muted/30 text-foreground rounded-2xl h-12 transition-all duration-300 focus:scale-[1.02] focus:border-primary/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="bericht" className="text-sm font-medium text-foreground">
                    Bericht *
                  </label>
                  <Textarea id="bericht" name="bericht" required rows={5} placeholder="Waar kan ik je mee helpen?" className="bg-background border-muted/30 text-foreground rounded-2xl resize-none transition-all duration-300 focus:scale-[1.01] focus:border-primary/50" />
                </div>
                <Button type="submit" size="lg" variant="default" className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Verstuur bericht
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>;
};
export default Index;