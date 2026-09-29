import { useState, useCallback } from 'react'
import useSEO from '../hooks/useSEO'
import SplitText from '../components/SplitText'
import DarkVeil from '../components/DarkVeil'
// Import PDF brochure
import brochurePdf from '../assets/NextGen Labz Offerings.pdf'

// Carousel image assets (only files that exist in /src/assets/carousel)
import TechCarousel from '../components/TechCarousel';
import ServicesPreview from '../components/ServicesPreview';
import Works from '../components/Works';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

function LandingPage() {
    const [subVisible, setSubVisible] = useState(false)
    const handleAnimationComplete = useCallback(() => {
        // Guard so we don't trigger state twice (which can cause re-renders that might rebuild splits)
        setSubVisible(prev => (prev ? prev : true))
    }, [])

    // Inject page-specific SEO
    useSEO({
        title: 'NextGen Labz | Web Development, UI/UX, Automation & Growth Partner',
        description: 'NextGen Labz is a freelance digital product studio helping startups & brands build fast web apps, modern UI/UX, automation workflows and sustainable growth systems.',
        keywords: 'NextGen Labz, web development agency India, freelance product studio, UI UX design, automation, startup growth, React, Vite',
        canonical: 'https://www.nextgenlabz.studio/',
        image: 'https://www.nextgenlabz.studio/og-cover.png',
        jsonLd: [
            {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                'name': 'NextGen Labz',
                'url': 'https://www.nextgenlabz.studio',
                'potentialAction': {
                    '@type': 'SearchAction',
                    'target': 'https://www.nextgenlabz.studio/?q={search_term_string}',
                    'query-input': 'required name=search_term_string'
                }
            },
            {
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                'name': 'Core Services',
                'itemListElement': [
                    'Web Development',
                    'UI / UX & Design',
                    'Automation & AI',
                    'Digital Marketing',
                    'Digital Maintenance',
                    'Photography',
                    'Video Production',
                    'Consulting',
                    'DevOps'
                ].map((service, index) => ({
                    '@type': 'ListItem',
                    'position': index + 1,
                    'name': service
                }))
            }
        ]
    })

    return (
        <>
    <div className="w-full h-[100svh] sm:h-screen overflow-hidden relative bg-black">
            {/* DarkVeil Background - Full Coverage */}
        <div className="absolute inset-0 w-full h-full z-0">
                {/* Slightly lighter effect on mobile for performance */}
                <DarkVeil 
                    hueShift={260}
                    noiseIntensity={0.015}
                    scanlineIntensity={0.015}
                    speed={0.18}
                    scanlineFrequency={0.25}
                    warpAmount={0.04}
            resolutionScale={undefined}
                />
            </div>
            
            {/* Additional Background Overlays for Better Visual Depth */}
            <div className="absolute inset-0 w-full h-full z-1">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
                <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-purple-900/15 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-purple-900/15 to-transparent" />
            </div>
            
            {/* Hero Content - Perfectly Centered */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
                <div className="px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 text-center max-w-6xl mx-auto w-full">
                    <div className="space-y-6 sm:space-y-8">
                        <SplitText
                            text="Crafting Digital Experiences"
                            className="text-[9vw] pb-5 xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.15] sm:leading-[1.08] lg:leading-[1.05] tracking-tight break-words w-full text-white drop-shadow-2xl px-1"
                            delay={80}
                            duration={0.55}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 60 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.15}
                            rootMargin="-120px"
                            textAlign="center"
                            tag="h1"
                            onLetterAnimationComplete={handleAnimationComplete}
                            highlightWords={[]}
                            highlightClass=""
                            responsive={false}
                        />
                        {/* Reserve exact space for subtitle to avoid layout shift when it appears */}
                        {!subVisible && (
                            <h2
                                aria-hidden="true"
                                className="text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold px-2 opacity-0 pointer-events-none select-none"
                            >
                                Design. Develop. Iterate. Repeat.
                            </h2>
                        )}
                        {subVisible && (
                            <SplitText
                                text="Design. Develop. Iterate. Repeat."
                                className="text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-300 drop-shadow-lg px-2"
                                delay={40}
                                duration={1.15}
                                ease="power2.out"
                                splitType="words"
                                from={{ opacity: 0, y: 24 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.2}
                                rootMargin="-100px"
                                textAlign="center"
                                tag="h2"
                                highlightWords={['Design.', 'Develop.', 'Iterate.', 'Repeat.']}
                                highlightClass="bg-gradient-to-r from-purple-300 via-purple-400 to-pink-300 bg-clip-text text-transparent drop-shadow-lg"
                                stagger={{ each: 0.06, from: 'start' }}
                            />
                        )}
                        
                        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 px-2">
                            <p className="text-base sm:text-xl lg:text-2xl leading-relaxed text-neutral-200 drop-shadow-md">
                                We help <span className="text-purple-300 font-semibold">brands and startups</span> turn <span className="text-pink-300 font-semibold">ambitious ideas</span> into beautiful, performant products. From <span className="text-purple-400 font-semibold">rapid prototypes</span> to <span className="text-pink-400 font-semibold">full-scale platforms</span>, our multidisciplinary team blends strategy, design, and engineering to ship work that matters. <span className="hidden sm:inline">Explore our <a href="/services" className="text-purple-300 underline decoration-dotted hover:text-purple-200 transition-colors">services</a>.</span>
                            </p>
                            <p className="text-sm sm:text-lg text-neutral-400 drop-shadow-sm">
                                Need a partner for your next launch or a fresh iteration of your existing product? Let's <span className="text-purple-300 font-medium">collaborate</span> and build something <span className="text-pink-300 font-medium">users love</span>.
                            </p>
                            <p className="text-[11px] sm:text-xs text-neutral-500">
                                Also referenced as <span className="text-neutral-300">NextGenLabz</span>, <span className="text-neutral-300">Next Gen Labz</span> or <span className="text-neutral-300">NextGen Labs</span>—all names refer to our same freelance digital product studio.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12">
                            <a href="quote" className="inline-flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-500 px-7 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-semibold text-white shadow-xl shadow-purple-700/40 transition-all duration-300 hover:shadow-purple-700/60 hover:scale-105 hover:-translate-y-1">
                                Get a Quote
                            </a>
                            <a 
                                href={brochurePdf} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full border-2 border-neutral-600 hover:border-purple-400 hover:text-white bg-black/30 backdrop-blur-sm px-7 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-semibold text-neutral-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Brochure
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Temporarily commented out Lottie animation */}
            {/* 
            <div className="w-full lg:w-[400px] xl:w-[450px] flex justify-center lg:justify-end mt-10 lg:mt-0 flex-shrink-0">
                <div className="w-56 sm:w-64 md:w-72 lg:w-full aspect-square max-w-full">
                    <DotLottieReact
                        src="https://lottie.host/2bd3b91a-1920-4ca4-9491-3d469030b5cd/FK5Z2r3aZI.lottie"
                        loop
                        autoplay
                        className="w-full h-full"
                        />
                </div>
            </div>
            */}
        </div>

        {/* Why Choose Us Section */}
        <section id="why-us" className="relative py-20 sm:py-24 lg:py-32 w-full overflow-hidden">
            {/* layered background */}
            <div className="absolute inset-0 -z-20 bg-[#131313]" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-900/10 via-transparent to-purple-900/5" />
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:70px_70px]" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] lg:w-[780px] lg:h-[780px] rounded-full bg-purple-600/15 blur-3xl opacity-40" />
            <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative w-full">
                <div className="mb-16 sm:mb-20 max-w-4xl w-full">
                    <span className="inline-block text-[11px] font-medium tracking-[0.35em] uppercase text-purple-300/70 mb-4 sm:mb-6">Our Edge</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight break-words">
                        <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">Why choose us</span>
                    </h2>
                    <p className="mt-4 sm:mt-6 text-neutral-400 text-sm sm:text-base lg:text-lg leading-relaxed">We blend strategy, design craft, and engineering depth into a single velocity layer. Lean squads, senior ownership, and obsessive detail mean you ship faster—with quality that compounds.</p>
                </div>
                <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full">
                    {[
                        {title:'Expert ownership',desc:'No junior pass‑offs or blind spots—just accountable specialists who understand product nuance.'},
                        {title:'Fast iteration cadence',desc:'Prototype → validate → refine. Lean cycles reduce waste and surface signal earlier.'},
                        {title:'Quality as default',desc:'Stable, measurable foundations (accessibility, performance, resilience) before growth layers.'},
                        {title:'Communication that scales',desc:'Async-first updates, clear artifacts, and predictable rhythms that respect your time.'},
                    ].map((f,i)=>(
                        <div key={i} className="group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-neutral-700/30 via-neutral-800/10 to-neutral-900/40 hover:from-purple-500/40 hover:via-neutral-800/10 hover:to-purple-900/20 transition-colors">
                            <div className="relative h-full rounded-2xl bg-neutral-950/70 backdrop-blur-sm p-5 sm:p-6 flex flex-col">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.18),transparent_65%)]" />
                                <div className="relative flex items-start gap-3 sm:gap-4">
                                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-purple-600/25 to-purple-500/10 ring-1 ring-purple-400/30 flex items-center justify-center text-xs sm:text-[13px] font-semibold text-purple-300 shadow-inner shadow-purple-800/40">
                                        {('0'+(i+1)).slice(-2)}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight flex items-center gap-2">
                                            {f.title}
                                            <span className="h-1 w-1 rounded-full bg-purple-400/70 inline-block" />
                                        </h3>
                                    </div>
                                </div>
                                <p className="relative mt-4 sm:mt-5 text-xs sm:text-sm leading-relaxed text-neutral-400 flex-1">{f.desc}</p>
                                <div className="relative mt-5 sm:mt-6">
                                    <div className="inline-flex items-center text-[10px] sm:text-[11px] font-medium tracking-wide text-purple-300/80 group-hover:text-purple-200 transition">
                                        Learn more
                                        <svg className="ml-1.5 h-3 w-3 sm:h-3.5 sm:w-3.5 translate-x-0 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h8M8 4l4 4-4 4"/></svg>
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-[15px] ring-1 ring-white/5 group-hover:ring-purple-400/30 transition" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 sm:mt-20 flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center justify-between w-full">
                    <p className="text-xs sm:text-sm text-neutral-500 max-w-xl">Not just a feature factory. We partner to shape, pressure test, and accelerate what you bring to market.</p>
                    <a href="quote" className="inline-flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-500 px-6 sm:px-7 py-3 text-xs font-medium text-white shadow shadow-purple-700/30 transition focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#131313] self-start lg:self-auto flex-shrink-0">
                        Start a conversation
                        <svg className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </a>
                </div>
            </div>
        </section>
        
        {/* Technologies Carousel */}
        <section className="py-20 w-full overflow-hidden">
            <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mb-12 w-full">
                <div className="text-center w-full">
                    <span className="inline-block text-[11px] font-medium tracking-[0.35em] uppercase text-purple-300/70 mb-3 sm:mb-4">Our Stack</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white break-words">Technologies we love</h2>
                </div>
            </div>
            <TechCarousel speed={55} />
        </section>

        {/* Services Preview */}
        <ServicesPreview />

        {/* Works / Portfolio */}
        <Works />

        {/* Testimonials */}
        <Testimonials />

        {/* Final Call To Action */}
        <FinalCTA />
        </>
    )
}

export default LandingPage;
