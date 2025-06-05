import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProjectPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container max-w-screen-md py-12">
          <Link
            href="/#work"
            className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all projects
          </Link>
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Project 1</h1>
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Project 1 banner"
                width={1200}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
                React
              </span>
              <span className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
                Next.js
              </span>
              <span className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
                Tailwind CSS
              </span>
            </div>
            <h2>Overview</h2>
            <p>
              This project was a complete redesign of a client's e-commerce platform, focusing on improving user
              experience and conversion rates. The goal was to create a modern, responsive interface that would work
              seamlessly across all devices while maintaining the brand's identity.
            </p>
            <h2>Challenge</h2>
            <p>
              The main challenge was to balance aesthetic design with performance optimization. The previous site
              suffered from slow load times and a confusing navigation structure, leading to high bounce rates and
              abandoned carts.
            </p>
            <h2>Solution</h2>
            <p>
              I implemented a component-based architecture using React and Next.js, which allowed for better code
              organization and reusability. The UI was built with Tailwind CSS for consistent styling and responsive
              design.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Project detail 1"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Project detail 2"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <h2>Results</h2>
            <p>
              The redesigned site saw a 40% decrease in bounce rate and a 25% increase in conversion rate within the
              first month of launch. Page load times were reduced by 60%, and mobile users reported a significantly
              improved shopping experience.
            </p>
            <h2>Technologies Used</h2>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion for animations</li>
              <li>Vercel for deployment</li>
            </ul>
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
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
