interface LiveProjectButtonProps {
  label?: string
  className?: string
  href?: string
  ariaLabel?: string
}

const LiveProjectButton = ({ label = 'Live Project', className = '', href, ariaLabel }: LiveProjectButtonProps) => {
  const baseClasses = `rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] text-center font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-200 cursor-pointer ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel || label} className={`inline-block ${baseClasses}`}>
        {label}
      </a>
    )
  }

  return (
    <button className={baseClasses}>
      {label}
    </button>
  )
}

export default LiveProjectButton
