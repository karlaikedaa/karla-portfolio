export default function ProjectImage({ src, alt = '', caption, fill }) {
  return (
    <figure className={`img-shield ${fill ? 'my-0 h-full' : 'my-8'}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full rounded-2xl ${fill ? 'h-full object-cover' : 'h-auto object-contain'}`}
        draggable="false"
        style={fill ? { display: 'block' } : { maxHeight: '600px', maxWidth: '1024px', margin: '0 auto', display: 'block' }}
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
