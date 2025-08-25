
'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, LucideProps, Sun, Calendar, CalendarCheck, HeartHandshake, Users, Leaf, MessageCircle, School } from 'lucide-react'
import Link from 'next/link'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog'
import { Separator } from './separator'

const iconMap: { [key: string]: React.FC<LucideProps> } = {
  Sun,
  Calendar,
  CalendarCheck,
  HeartHandshake,
  Users,
  Leaf,
  MessageCircle,
  School,
};

type SevaOption = {
    icon: string;
    title: string;
    description: string;
    price: string;
    link: string;
};

type PropType = {
  sevaOptions: SevaOption[]
}

export const SevaCarousel: React.FC<PropType> = ({ sevaOptions }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedSeva, setSelectedSeva] = useState<SevaOption | null>(null)
  const [isDialogOpen, setDialogOpen] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const handleSevaClick = (seva: SevaOption) => {
    if (seva.price !== "Contact Us") {
      setSelectedSeva(seva);
      setDialogOpen(true);
    } else {
        // existing behavior for contact
        window.location.href = seva.link;
    }
  }

  return (
    <div className="relative mt-12 md:mt-16">
      <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
        <div className="flex space-x-4 md:space-x-8 pb-4">
            {sevaOptions.map((seva, index) => {
                const IconComponent = iconMap[seva.icon];
                const shortDescription = seva.description.split('.')[0] + '.';
                return (
                    <div key={index} className="flex-shrink-0 w-full max-w-xs sm:w-80">
                       <div className="flex flex-col text-center items-center p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 group overflow-hidden bg-background border h-full">
                            <div className="bg-secondary text-primary-foreground h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center mb-4 md:mb-6 transition-transform group-hover:scale-110">
                              {IconComponent && <IconComponent className="h-8 w-8 md:h-10 md:w-10" />}
                            </div>
                            <h4 className="text-lg md:text-xl font-bold text-primary flex-grow">{seva.title}</h4>
                             <p className="text-muted-foreground mt-2 mb-4 text-sm md:text-base">{shortDescription}</p>
                             <p className="text-2xl font-bold text-foreground mb-6">{seva.price}</p>
                             <Button onClick={() => handleSevaClick(seva)} className="mt-auto w-full">
                                {seva.price === "Contact Us" ? "Request Info" : "Learn More"}
                             </Button>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
            {selectedSeva && (
                <>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-3 text-2xl text-primary">
                            {iconMap[selectedSeva.icon] && React.createElement(iconMap[selectedSeva.icon], { className: 'h-6 w-6' })}
                            {selectedSeva.title}
                        </DialogTitle>
                         <Separator />
                    </DialogHeader>
                    <DialogDescription className="text-base text-foreground/80 py-4">
                        {selectedSeva.description}
                    </DialogDescription>
                    <DialogFooter className="sm:justify-between items-center border-t pt-4">
                        <div className="text-2xl font-bold text-primary">{selectedSeva.price}</div>
                        <Button asChild size="lg">
                            <Link href={selectedSeva.link}>Proceed to Pay</Link>
                        </Button>
                    </DialogFooter>
                </>
            )}
        </DialogContent>
      </Dialog>

       <div className="flex justify-center gap-4 mt-6 md:mt-8">
            <Button
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className="rounded-full w-12 h-12 md:w-14 md:h-14 bg-secondary text-secondary-foreground hover:bg-secondary/90 disabled:bg-secondary/50"
                size="icon"
                aria-label="Previous testimonial"
            >
                <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
            <Button
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className="rounded-full w-12 h-12 md:w-14 md:h-14 bg-secondary text-secondary-foreground hover:bg-secondary/90 disabled:bg-secondary/50"
                size="icon"
                aria-label="Next testimonial"
            >
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
        </div>
    </div>
  )
}
