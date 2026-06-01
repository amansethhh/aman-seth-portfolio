import FadeIn from '../components/FadeIn'
import ReactivateIcon from '../components/ReactivateIcon'
import AnimatedText from '../components/AnimatedText'

const decorativeImages = [
  {
    src: '/moon_icon.webp',
    alt: 'Moon icon',
    className: 'w-[120px] sm:w-[160px] md:w-[168px] lg:w-[210px] absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    animClass: 'icon-float icon-phase-0',
    fadeIn: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: '/smiley_icon.webp',
    alt: 'Smiley',
    className: 'w-[100px] sm:w-[140px] md:w-[144px] lg:w-[180px] absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
    animClass: 'icon-float icon-phase-4',
    fadeIn: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: '/cube_icon.webp',
    alt: 'Cube',
    className: 'about-hide-mobile w-[120px] sm:w-[160px] md:w-[168px] lg:w-[210px] absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    animClass: 'icon-float icon-phase-2',
    fadeIn: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
  },
  {
    src: '/cursor_icon.webp',
    alt: 'Cursor',
    className: 'about-hide-mobile w-[130px] sm:w-[170px] md:w-[176px] lg:w-[220px] absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
    animClass: 'icon-float icon-phase-6',
    fadeIn: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
  },
]

const aboutText =
  "I'm Aman Seth, a Full-Stack Python Developer who enjoys turning ideas into real products. My interest in software development comes from solving problems and building applications that people can actually use. I enjoy working across both backend and frontend development, creating scalable systems, modern web applications, and AI-powered solutions that combine functionality with great user experience. Beyond writing code, I enjoy understanding how products are designed, improved, and deployed in real-world environments. Through internships, projects, hackathons, and continuous learning, I have developed a strong foundation in building practical software while constantly exploring new technologies and development approaches. My goal is to keep growing as an engineer, contribute to meaningful products, and create software that delivers real value to users."

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32 relative"
    >
      {/* Decorative corner images */}
      {decorativeImages.map((img) => (
        <FadeIn
          key={img.alt}
          delay={img.fadeIn.delay}
          x={img.fadeIn.x}
          y={img.fadeIn.y}
          duration={img.fadeIn.duration}
          className={img.className}
        >
          <ReactivateIcon src={img.src} alt={img.alt} animClass={img.animClass} />
        </FadeIn>
      ))}

      {/* Content */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center section-heading-glow"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)', opacity: 0.82 }}
            >
              About Me
            </h2>
          </FadeIn>

          <AnimatedText
            text={aboutText}
            className="about-text text-center"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
