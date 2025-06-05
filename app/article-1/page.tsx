import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ArticlePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container max-w-screen-md py-12">
          <Link
            href="/#writing"
            className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all articles
          </Link>
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Article Title 1</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>June 1, 2023</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Article 1 banner"
                width={1200}
                height={600}
                className="object-cover"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
              Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.
            </p>
            <h2>The Importance of User-Centered Design</h2>
            <p>
              Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta
              lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <p>
              Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor
              nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl
              imperdiet. Ut convallis libero in urna ultrices accumsan.
            </p>
            <h2>Implementing Accessibility</h2>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
              auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Vivamus suscipit tortor
              eget felis porttitor volutpat.
            </p>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget
              consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.
            </p>
            <h2>Conclusion</h2>
            <p>
              Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet
              elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.
            </p>
          </article>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
