'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const images = [
    { src: "/gallery/cow-herd.jpg", alt: "A herd of cows in a sunlit field", hint: "cows pasture" },
    { src: "/gallery/cow-face.jpg", alt: "A calm cow with gentle eyes", hint: "cow portrait" },
    { src: "/gallery/cow-2.jpg", alt: "A grazing cow", hint: "cow grazing" },
    { src: "/gallery/cow-4.jpg", alt: "A herd of cows", hint: "cows herd" },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])
  const [opacity, setOpacity] = React.useState(1)

  React.useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setOpacity(0)
      setTimeout(() => setOpacity(1), 500) // Fade-in duration
    }

    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((img, index) => (
          <div className="relative flex-[0_0_100%] h-full" key={index}>
            <Image
              src={img.src}
              alt={img.alt}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500"
              style={{ opacity }}
              data-ai-hint={img.hint}
            />
          </div>
        ))}
      </div>
       <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
    </div>
  )
}
