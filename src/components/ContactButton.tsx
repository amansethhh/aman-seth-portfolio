interface ContactButtonProps {
  label?: string
  className?: string
  href?: string
  onClick?: (e: React.MouseEvent) => void
  ariaLabel?: string
}

const ContactButton = ({ label = 'Contact Me', className = '', href, onClick, ariaLabel }: ContactButtonProps) => {
  const buttonStyles: React.CSSProperties = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
    outline: '2px solid white',
    outlineOffset: '-3px',
  }

  const baseClasses = `rounded-full px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base cursor-pointer hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(182,0,168,0.35)] transition-all duration-300 ${className}`

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        aria-label={ariaLabel || label}
        style={buttonStyles}
        className={`inline-block ${baseClasses}`}
      >
        {label}
      </a>
    )
  }

  return (
    <button
      style={buttonStyles}
      className={baseClasses}
      aria-label={ariaLabel || label}
    >
      {label}
    </button>
  )
}

export default ContactButton
