const iconSrc = {
  ai: '/item.icon.svg',
  writing: '/item.icon-1.svg',
  accessibility: '/Accessibility_logo 1.svg',
  strategy: '/item.icon-2.svg',
}

export default function ExpertiseCard({ item }) {
  return (
    <article
      className="rounded-2xl p-8 space-y-5"
      style={{ backgroundColor: item.bg }}
      role="group"
      aria-label={item.title}
    >
      <div>
        <img
          src={iconSrc[item.icon]}
          alt=""
          aria-hidden="true"
          width="28"
          height="28"
          className="w-7 h-7"
        />
      </div>
      <h3 className="font-heading text-lg font-medium text-white">
        {item.title}
      </h3>
      <p className="font-body text-sm leading-relaxed text-white/80">
        {item.description}
      </p>
    </article>
  )
}
