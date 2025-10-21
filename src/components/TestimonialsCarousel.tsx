import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  
  const itemsPerView = 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const truncateText = (text: string, maxLength: number = 180) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trimEnd() + "...";
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-3">
          <Button
            onClick={prevSlide}
            variant="elegant"
            size="icon"
            className="h-12 w-12 text-white border-white/20 hover:bg-white/10"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="elegant"
            size="icon"
            className="h-12 w-12 text-white border-white/20 hover:bg-white/10"
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        <div className="text-sm text-white/80 font-ui">
          {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, testimonials.length)} van {testimonials.length}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {visibleTestimonials.map((testimonial, index) => (
          <blockquote key={currentIndex + index} className="card-testimonial">
            <p className="italic text-base leading-relaxed text-white/95 font-body">
              {truncateText(testimonial.quote)}
            </p>
            <footer className="mt-6 text-sm text-white/80 font-accent">
              — {testimonial.author}
            </footer>
            <div className="mt-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="link" 
                    size="sm" 
                    className="p-0 h-auto text-white/90 hover:text-white font-ui"
                    onClick={() => setSelectedTestimonial(testimonial)}
                  >
                    Lees meer
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto card-elevated">
                  <div className="space-y-6">
                    <blockquote className="text-base leading-relaxed italic font-body">
                      "{testimonial.quote}"
                    </blockquote>
                    <footer className="text-sm text-muted-foreground font-accent">
                      — {testimonial.author}
                    </footer>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </blockquote>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;