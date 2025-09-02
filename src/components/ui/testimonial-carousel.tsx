
'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'

type Testimonial = {
    name: string;
    quote: string;
    rating: number;
    hint: string;
};

type PropType = {
  testimonials: Testimonial[]
}

export const TestimonialCarousel: React.FC<PropType> = ({ testimonials }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

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

  return (
    <div className="relative mt-12 md:mt-16">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-4 md:space-x-8 pb-4">
            {testimonials.map(testimonial => (
                <div key={testimonial.name} className="flex-shrink-0 w-full max-w-sm md:w-96">
                    <Card className="bg-background p-6 rounded-2xl shadow-lg text-center border flex flex-col h-full">
                        <Quote className="h-8 w-8 md:h-10 md:w-10 text-primary/30 mx-auto" />
                        <CardContent className="pt-4 flex-grow">
                            <p className="text-foreground/80 italic text-sm md:text-base">"{testimonial.quote}"</p>
                        </CardContent>
                        <CardHeader className="items-center pt-4 mt-auto">
                            <div className="flex items-center gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                                     <Star key={i} className="w-5 h-5 text-gray-300" />
                                ))}
                            </div>
                            <CardTitle className="font-bold text-lg md:text-xl text-primary">{testimonial.name}</CardTitle>
                        </CardHeader>
                    </Card>
                </div>
            ))}
        </div>
      </div>

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
