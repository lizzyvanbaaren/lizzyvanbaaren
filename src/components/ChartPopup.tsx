import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ChartPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-4">
          Bekijk mijn eigen Human Design chart
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            Lizzy's Human Design Chart
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <div className="bg-muted/30 rounded-lg p-6 text-center">
            <img
              src="/lovable-uploads/fe94c56c-d648-467f-8d27-04ca0f66c777.png"
              alt="Lizzy van Baaren's persoonlijke Human Design chart"
              className="w-full max-w-lg mx-auto rounded-lg shadow-md"
              loading="lazy"
            />
            <div className="mt-6 space-y-3">
              <h3 className="font-display text-lg">Mijn Design</h3>
              <p className="text-muted-foreground">
                Als Emotionele Manifesting Generator met een 2/4 profiel, werk ik het beste 
                vanuit mijn emotionele autoriteit en natuurlijke netwerk. Deze chart helpt mij 
                om authentiek te leven en anderen te begeleiden vanuit eigen ervaring.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChartPopup;