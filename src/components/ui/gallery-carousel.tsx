
'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type PropType = {
  images: {
    src: string;
    alt: string;
  }[]
  className?: string
}

export const GalleryCarousel: React.FC<PropType> = ({ images, className }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
  })
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
    <div className={cn("relative w-full", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-4">
            {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-64 h-64 md:flex-[0_0_25%] md:h-auto md:aspect-square relative">
                    <div className="overflow-hidden rounded-lg md:rounded-2xl group w-full h-full border-2 md:border-4 border-white shadow-lg">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            style={{objectFit: 'cover'}}
                            className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        />
                    </div>
                </div>
            ))}
        </div>
      </div>

       <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-2 md:-px-8">
            <Button
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className="rounded-full w-12 h-12 bg-secondary/80 text-secondary-foreground hover:bg-secondary disabled:bg-secondary/50 backdrop-blur-sm"
                size="icon"
                aria-label="Previous image"
            >
                <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className="rounded-full w-12 h-12 bg-secondary/80 text-secondary-foreground hover:bg-secondary disabled:bg-secondary/50 backdrop-blur-sm"
                size="icon"
                aria-label="Next image"
            >
                <ArrowRight className="h-6 w-6" />
            </Button>
        </div>
    </div>
  )
}
