import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="mx-auto max-w-7xl pt-20 pb-16 text-center sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40 lg:px-8 lg:pt-32 ">
      <div className="px-6 lg:px-0 lg:pt-4 ">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Find{' '}
          <span className="relative whitespace-nowrap text-primary-500">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-primary-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">the perfect</span>
          </span>{' '}
          broker for you.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          {/* Most bookkeeping software is accurate, but hard to use. We make the
          opposite trade-off, and hope you don’t get audited. */}
          We match you with the best broker for your needs. From beginner to
          expert, our personalized approach ensures that you find a broker that
          aligns with what matters to you most.
        </p>
      </div>
      <div className="displ mt-20 justify-end sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
          aria-hidden="true"
        />
        <div className="shadow-lg md:rounded-3xl lg:mr-0 lg:ml-auto lg:max-w-md">
          <div className="bg-slate-50 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
            <div className="relative h-80 px-6 pt-8 sm:pt-16">
              <h2>Broker quiz will go here.</h2>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
