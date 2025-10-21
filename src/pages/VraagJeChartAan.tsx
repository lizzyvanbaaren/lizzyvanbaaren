import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent } from "react";

const VraagJeChartAan = () => {
  const { toast } = useToast();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Verzonden",
      description:
        "Bedankt! Je aanvraag is ontvangen. We nemen binnenkort contact met je op.",
    });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <>
      <Helmet>
        <title>Vraag je Chart aan | Start hier</title>
        <meta name="description" content="Vraag jouw Human Design chart aan. Vul je gegevens in en ontvang snel een reactie." />
        <link rel="canonical" href="https://www.lizzyvanbaaren.com/vraag-je-chart-aan" />
      </Helmet>

      {/* Hero Section */}
      <section className="section-sage container-section text-center relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-sage-500/20 to-transparent pointer-events-none"></div>
        <div className="container-content relative pt-8 sm:pt-12 lg:pt-16">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              Vraag je gratis Human Design Chart aan
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Vul je geboortegegevens in en ontvang je persoonlijke Human Design chart. 
              Voor een uitgebreide reading kun je daarna een sessie inplannen.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-white container-section relative">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-sage-500/10 to-transparent pointer-events-none"></div>
        <div className="container-content relative">
          <div className="max-w-2xl mx-auto">
            <div className="card-natural shadow-soft border border-border/30 p-6 sm:p-8">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Voornaam *</label>
                    <Input name="firstName" required placeholder="Je voornaam" className="border-border/30 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Achternaam *</label>
                    <Input name="lastName" required placeholder="Je achternaam" className="border-border/30 focus:border-primary/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">E-mailadres *</label>
                  <Input type="email" name="email" required placeholder="je@email.com" className="border-border/30 focus:border-primary/50" />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Geboortedatum *</label>
                    <Input type="date" name="birthDate" required className="border-border/30 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Geboortetijd</label>
                    <Input type="time" name="birthTime" placeholder="Zo precies mogelijk" className="border-border/30 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Geboorteplaats</label>
                    <Input name="birthPlace" placeholder="Stad, Land" className="border-border/30 focus:border-primary/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Aanvullende opmerking (optioneel)</label>
                  <Textarea 
                    name="notes" 
                    rows={4} 
                    placeholder="Heb je specifieke vragen of zou je graag meer informatie over een reading willen?"
                    className="border-border/30 focus:border-primary/50 resize-none"
                  />
                </div>
                <div className="pt-4 space-y-4">
                  <Button type="submit" variant="coral" size="lg" className="w-full shadow-md hover:shadow-lg transition-shadow">
                    Verstuur aanvraag
                  </Button>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    Na het versturen ontvang je binnen 24 uur je Human Design chart per e-mail. 
                    Voor persoonlijke begeleiding kun je daarna een reading inplannen.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-sage-500/10 pointer-events-none"></div>
      </section>
    </>
  );
};

export default VraagJeChartAan;
