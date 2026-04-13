export default function SkillCard({ category }) {
  if (category.card === false) {
    // Bottom row — no card border, flat layout
    return (
      <div className="space-y-4 py-4">
        <h3 className="font-body text-base font-medium text-text-dark">
          {category.title}
        </h3>
        <div className="flex flex-wrap gap-2" role="list" aria-label={category.title}>
          {category.skills.map((skill) => (
            <SkillTag key={skill}>{skill}</SkillTag>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-6 space-y-4 border border-warm/20">
      <h3 className="font-body text-base font-medium text-text-dark">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2" role="list" aria-label={category.title}>
        {category.skills.map((skill) => (
          <SkillTag key={skill}>{skill}</SkillTag>
        ))}
      </div>
    </div>
  )
}

function SkillTag({ children }) {
  return (
    <span
      role="listitem"
      className="inline-block px-3 py-1.5 font-mono text-[11px] text-text-dark bg-warm-alt/60 rounded-full border border-warm/30"
    >
      {children}
    </span>
  )
}
