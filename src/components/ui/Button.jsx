import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-warm text-text-button hover:bg-peach hover:shadow-md',
  outline:
    'border border-olive text-olive hover:bg-olive/10 hover:border-olive/80',
  whatsapp:
    'border border-olive text-olive hover:bg-olive/10 hover:border-olive/80',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  icon,
  className = '',
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-center gap-2 px-6 py-3 font-body text-base rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-rose-accent focus-visible:ring-offset-2 no-underline ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {icon && <span aria-hidden="true">{icon}</span>}
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {icon && <span aria-hidden="true">{icon}</span>}
        {children}
      </a>
    )
  }

  return (
    <button className={baseClasses} {...props}>
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </button>
  )
}
