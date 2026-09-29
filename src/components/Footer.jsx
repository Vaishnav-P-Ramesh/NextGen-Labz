import React, { useState } from 'react'

function Footer() {
	const [email, setEmail] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState(null)

	const handleEmailSubmit = async (e) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus(null)

		// Simulate API call with a delay
		setTimeout(() => {
			setSubmitStatus('success')
			setEmail('')
			setIsSubmitting(false)
		}, 1500)
	}

	const year = new Date().getFullYear()
	return (
		<footer className="mt-32 border-t border-neutral-800/70 bg-[#141414] text-neutral-400">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-3">
					<div>
						<img src="/Logo-White1.png" alt="NextGen Labz Logo" className="h-8 sm:h-9 w-auto transition-transform group-hover:scale-[1.03]" />
						<p className="mt-4 text-sm leading-relaxed max-w-xs">Crafting reliable, scalable & user‑obsessed digital products. Strategy → design → build → iterate.</p>
						<div className="mt-5 flex gap-3">
							<a href="https://www.instagram.com/nextgen.labz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-300 hover:text-white transition-all duration-200">
								<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
									<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
								</svg>
							</a>
						</div>
					</div>

					<div>
						<h4 className="text-neutral-200 font-medium tracking-wide text-sm">PAGES</h4>
						<ul className="mt-4 space-y-2 text-sm">
							<li><a href="/" className="hover:text-white transition-colors">Home</a></li>
							<li><a href="/about" className="hover:text-white transition-colors">About</a></li>
							<li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
							<li><a href="/#works" className="hover:text-white transition-colors">Works</a></li>
							<li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
							<li><a href="/quote" className="hover:text-white transition-colors">Get Quote</a></li>
						</ul>
					</div>

					<div>
						<h4 className="text-neutral-200 font-medium tracking-wide text-sm">STAY UPDATED</h4>
						<p className="mt-4 text-sm max-w-xs">Join our monthly digest of product insights & release notes. No spam.</p>
						
						{submitStatus === 'success' && (
							<div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-md">
								<div className="flex items-center gap-2 text-green-400">
									<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									<span className="text-sm font-medium">Subscribed successfully!</span>
								</div>
							</div>
						)}

						{submitStatus === 'error' && (
							<div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-md">
								<div className="flex items-center gap-2 text-red-400">
									<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
									</svg>
									<span className="text-sm font-medium">Something went wrong</span>
								</div>
							</div>
						)}

						<form onSubmit={handleEmailSubmit} className="mt-5 flex flex-col sm:flex-row gap-3">
							<input 
								type="email" 
								required 
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email address" 
								disabled={isSubmitting}
								className="flex-1 rounded-md bg-neutral-900/60 border border-neutral-700/70 px-3 py-2 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-neutral-500 disabled:opacity-50" 
							/>
							<button 
								type="submit"
								disabled={isSubmitting}
								className="inline-flex justify-center items-center rounded-md bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed px-5 py-2 text-sm font-medium text-white shadow shadow-purple-700/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#141414] transition"
							>
								{isSubmitting ? (
									<svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
									</svg>
								) : (
									'Subscribe'
								)}
							</button>
						</form>
						<p className="mt-2 text-[11px] text-neutral-500">We respect your privacy. Unsubscribe anytime.</p>
					</div>
				</div>
				<div className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between border-t border-neutral-800/70 pt-8">
					<p className="text-xs">© {year} NextGen Labz. All rights reserved.</p>
					<div className="flex gap-6 text-xs">
						<a href="#" className="hover:text-white transition-colors">Privacy</a>
						<a href="#" className="hover:text-white transition-colors">Terms</a>
						<a href="#" className="hover:text-white transition-colors">Cookies</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
