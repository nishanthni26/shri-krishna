
'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import Image from 'next/image'

type Testimonial = {
    name: string;
    quote: string;
    avatar: string;
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
    <div className="relative mt-16">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-8 pb-4">
            {testimonials.map(testimonial => (
                <div key={testimonial.name} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                    <Card className="flex-shrink-0 w-[400px] bg-background p-8 rounded-2xl shadow-lg text-center border flex flex-col h-full">
                        <Quote className="h-12 w-12 text-primary/30 mx-auto" />
                        <CardContent className="pt-6 flex-grow">
                            <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                        </CardContent>
                        <CardHeader className="items-center pt-4 mt-auto">
                            <Image src={testimonial.avatar} alt={testimonial.name} width={64} height={64} className="rounded-full mb-4 border-2 border-primary/50" data-ai-hint={testimonial.hint} />
                            <CardTitle className="font-bold text-xl text-primary">{testimonial.name}</CardTitle>
                        </CardHeader>
                    </Card>
                </div>
            ))}
        </div>
      </div>

       <div className="flex justify-center gap-4 mt-8">
            <Button
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className="rounded-full w-14 h-14 bg-secondary text-secondary-foreground hover:bg-secondary/90 disabled:bg-secondary/50"
                size="icon"
                aria-label="Previous testimonial"
            >
                <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className="rounded-full w-14 h-14 bg-secondary text-secondary-foreground hover:bg-secondary/90 disabled:bg-secondary/50"
                size="icon"
                aria-label="Next testimonial"
            >
                <ArrowRight className="h-6 w-6" />
            </Button>
        </div>
    </div>
  )
}
