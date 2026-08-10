const items = ["Atención en consulta", "Domicilio", "Online", "Iquique y Alto Hospicio"]

export function Marquee() {
  const track = (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-8">
          <span className="text-sm tracking-[0.1em] uppercase text-foreground/70 whitespace-nowrap">
            {item}
          </span>
          <span className="text-terracotta-500">·</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="bg-background border-y border-border py-5 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {track}
        {track}
      </div>
    </div>
  )
}
