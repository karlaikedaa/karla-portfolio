export default function StatCard({ value, label }) {
  return (
    <div
      className="flex-1 min-w-[120px] rounded-2xl border border-warm/40 px-6 py-5 text-center"
    >
      <p className="font-heading text-2xl font-medium text-text-brown">{value}</p>
      <p className="font-body text-xs text-text-muted mt-1">{label}</p>
    </div>
  )
}
