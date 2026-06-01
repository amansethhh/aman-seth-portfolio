const Footer = () => {
  return (
    <footer className="premium-footer">
      {/* Subtle divider */}
      <div className="premium-footer__divider" />

      <div className="premium-footer__inner">
        {/* Left */}
        <p className="premium-footer__text">
          Designed &amp; Developed by Aman Seth
        </p>

        {/* Right */}
        <p className="premium-footer__text">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
