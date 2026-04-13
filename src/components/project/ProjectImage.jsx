export default function ProjectImage({ src, alt = '', caption }) {
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-2xl object-contain"
        draggable="false"
        style={{ maxHeight: '600px', maxWidth: '1024px', margin: '0 auto', display: 'block' }}
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      />
      {caption && (
        <figcaption className="mt-3 text-center font-mono text-xs text-text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
