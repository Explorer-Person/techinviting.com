import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const detailId = params.get('detail')
    if (detailId) {
      const targetEl = document.getElementById(detailId)
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' })
      } else {
        console.warn(`No element with ID '${detailId}' found.`)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Create digital asset by Tech Inviting — a powerful, fast and strong services for AI, SaaS, and tech innovation startups." />
        <meta property="og:title" content="Tech Inviting – Premium Tech Setup for AI, SaaS and Startups" />
        <meta property="og:image" content="/images/networking.jpg" />
        <meta name="keywords" content="digital asset, marketing, branding, ai, saas, quantum, cyber security, web development, web designing, digital consultancy" />
        <meta property="og:url" content="https://techinviting.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="title" content="Tech Inviting, Premium Tech Service for AI, SaaS & Startups" />
        <meta name="twitter:description" content="Perfect for startups and innovators — secure, brandable, and built for growth." />
        <meta name="twitter:image" content="https://www.rga.eu/images/networking.jpg" />
        <meta name="robots" content="noodp, noydir" />
        <link rel="canonical" href="https://www.techinviting.com" />
        <title>Tech Inviting – Premium Tech Setup for AI, SaaS and Startups</title>
        <link rel="shortcut icon" href="/images/techinviting-logo.png" />
        <link rel="icon" href="/images/favicon.ico" />
        <script defer data-domain="techinviting.com" src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.tagged-events.js"></script>
        <script dangerouslySetInnerHTML={{__html:`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{ \"@context\":\"https://schema.org\", \"@type\":\"Organization\", \"name\":\"TechInviting\", \"url\":\"https://techinviting.com\", \"logo\":\"https://techinviting.com/images/techinviting-logo.png\" }`}} />
      </Head>
      <nav>
        <a href="landing" className="title">
          <div><img src="/images/techinviting-logo.png" alt="Tech Inviting Brand Logo" /></div>
          <h3 id="title-tech">Tech</h3>
          <h3 id="title-inviting">Inviting</h3>
        </a>
        <div className="sub-titles">
          <a href="landing">Home</a>
          <a href="#about-us">About Us</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <section id="landing-container" className="landing-container">
        <section className="image-container">
          <div className="image-content">
            <div className="hero-text">
              <h1><span>Tech Inviting</span> – Your Gateway to Future Technology Trends</h1>
              <p>Your gateway to cutting-edge technology, digital transformation, and future-driven innovation.</p>
              <p>🚀 Empower your brand with a domain that reflects modern tech excellence and trust.</p>
              <p>🌐 Perfect for startups, SaaS solutions, AI tools, and tech-focused blogs and platforms.</p>
              <p>🔒 Secure, keyword-rich, and optimized for high visibility and scalable online growth.</p>
              <a href="#for-sale" aria-label="landing" aria-details="for-sale" className="cta-button button">Explore Now</a>
            </div>
          </div>
        </section>
        {/* Additional sections omitted for brevity */}
      </section>
      <section id="dynamic-topic-section"></section>
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>TechInviting</h2>
            <p>Empowering innovation through a brandable digital identity.</p>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#faqs">FAQs</a>
            <a href="mailto:contact@techinviting.com">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 TechInviting. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
