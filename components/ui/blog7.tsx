import { ArrowRight, Flame } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface Post {
  id: string
  title: string
  summary: string
  label: string
  author: string
  published: string
  url: string
  image: string
  masLeido?: boolean
}

interface Blog7Props {
  tagline: string
  heading: string
  description: string
  buttonText: string
  buttonUrl: string
  posts: Post[]
}

export function Blog7({
  tagline = "Contenido educativo",
  heading = "Nos encuentras todos los días en Instagram",
  description = "Mitos vs. realidad, casos reales y consejos prácticos sobre kinesiología respiratoria, maxilofacial y fonoaudiología.",
  buttonText = "Seguir en Instagram",
  buttonUrl = "https://www.instagram.com/rehabilita.meiqq/",
  posts = [],
}: Blog7Props) {
  return (
    <section className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <div className="flex flex-col items-center gap-16 text-center">
        <div>
          <Badge variant="secondary" className="mb-6">
            {tagline}
          </Badge>
          <h2 className="mb-3 text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground md:mb-4">
            {heading}
          </h2>
          <p className="mb-8 text-sm leading-[1.75] text-muted-foreground md:text-base lg:mx-auto lg:max-w-2xl">
            {description}
          </p>
          <Button variant="link" className="w-full sm:w-auto" asChild>
            <a href={buttonUrl} target="_blank" rel="noopener">
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="grid grid-rows-[auto_auto_1fr_auto]">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                {post.masLeido && (
                  <Badge className="absolute left-3 top-3 z-10 gap-1 bg-terracotta-500 text-white hover:bg-terracotta-500">
                    <Flame className="size-3" />
                    Más leído
                  </Badge>
                )}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener"
                  className="transition-opacity duration-200 hover:opacity-70"
                >
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                  />
                </a>
              </div>
              <CardHeader>
                <span className="text-[11px] tracking-[0.15em] uppercase text-terracotta-600 mb-1">
                  {post.label}
                </span>
                <h3 className="text-lg font-light tracking-tight text-foreground hover:underline md:text-xl">
                  <a href={post.url} target="_blank" rel="noopener">
                    {post.title}
                  </a>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-[1.7] text-muted-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center text-xs tracking-[0.15em] uppercase text-foreground hover:underline"
                >
                  Ver publicación
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
