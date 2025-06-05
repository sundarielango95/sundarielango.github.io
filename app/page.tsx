import Image from "next/image"
import Link from "next/link"
import { BookOpen, Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Sundari Elango</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="#about" className="transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#research" className="transition-colors hover:text-primary">
                Research
              </Link>
              <Link href="#projects" className="transition-colors hover:text-primary">
                Projects
              </Link>
              <Link href="#publications" className="transition-colors hover:text-primary">
                Publications
              </Link>
              <Link href="#patents" className="transition-colors hover:text-primary">
                Patents
              </Link>
              <Link href="#contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <nav className="flex items-center md:hidden">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <span className="font-bold">Sundari Elango</span>
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="https://scholar.google.com/citations?user=ZRXxgu8AAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground text-sm font-medium transition-colors hover:bg-accent/80 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                <BookOpen className="h-4 w-4" />
                <span className="sr-only">Google Scholar</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/sundari-elango-4b66a2114/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground text-sm font-medium transition-colors hover:bg-accent/80 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/sundarielango95"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground text-sm font-medium transition-colors hover:bg-accent/80 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container max-w-screen-md py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-start gap-4 md:gap-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Hello, I'm Sundari Elango
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              I'm a PhD candidate in Computational Neuroscience at IIT Madras, specializing in stroke rehabilitation,
              motor learning, and developing innovative virtual reality applications for healthcare. I have extensive
              experience in AI research and computational neuroscience.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <Link href="mailto:sundarielango95@gmail.com" className="text-sm text-primary hover:underline">
                  sundarielango95@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="https://scholar.google.com/citations?user=ZRXxgu8AAAAJ&hl=en&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground text-sm font-medium transition-colors hover:bg-accent/80"
                >
                  <BookOpen className="h-3 w-3" />
                  <span className="sr-only">Google Scholar</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sundari-elango-4b66a2114/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground text-sm font-medium transition-colors hover:bg-accent/80"
                >
                  <Linkedin className="h-3 w-3" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://github.com/sundarielango95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground text-sm font-medium transition-colors hover:bg-accent/80"
                >
                  <Github className="h-3 w-3" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="container max-w-screen-md py-12 md:py-24 lg:py-32">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">About</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <p className="text-muted-foreground">
                  I'm currently pursuing my PhD in Computational Neuroscience at IIT Madras with a CGPA of 9.3. My
                  research focuses on developing patient-specific computational tools for rehabilitation in hemiparetic
                  stroke of the upper extremity.
                </p>
                <p className="text-muted-foreground">
                  I combine computational neuroscience, machine learning, and virtual reality to create innovative
                  solutions for stroke rehabilitation and motor learning. My work bridges the gap between theoretical
                  neuroscience and practical healthcare applications.
                </p>
                <p className="text-muted-foreground">
                  I have extensive experience in developing virtual reality gaming systems for stroke patients,
                  automated movement evaluation systems, and hierarchical motor learning networks. My work has been
                  published in prestigious journals and presented at international conferences.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-accent">
                  <Image
                    src="/images/sundari-profile.png"
                    alt="Sundari Elango presenting research at academic conference"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="research" className="bg-secondary py-12 md:py-24 lg:py-32">
          <div className="container max-w-screen-md">
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">Research Focus</h2>
              <div className="grid gap-6">
                {[
                  {
                    title: "Computational Models for Stroke Rehabilitation",
                    description:
                      "My primary research focus is on developing computational models that can help understand and improve rehabilitation strategies for stroke patients. I work on creating patient-specific models that can predict recovery trajectories and optimize therapy approaches.",
                  },
                  {
                    title: "Motor Learning and Adaptation",
                    description:
                      "I study the neural mechanisms underlying motor learning and adaptation, with a particular focus on how the brain adapts to perturbations and transfers skills between limbs. This research has implications for understanding recovery after neurological injury.",
                  },
                  {
                    title: "Virtual Reality Applications in Healthcare",
                    description:
                      "I develop and evaluate virtual reality applications for healthcare, particularly focusing on rehabilitation. My work includes creating engaging VR environments that can motivate patients and provide real-time feedback during therapy.",
                  },
                ].map((area, i) => (
                  <div
                    key={i}
                    className="group flex flex-col gap-3 rounded-lg border border-border/50 bg-card p-6 transition-colors hover:border-primary/20 hover:bg-accent/20"
                  >
                    <h3 className="text-lg font-semibold group-hover:text-primary">{area.title}</h3>
                    <p className="text-muted-foreground">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="container max-w-screen-md py-12 md:py-24 lg:py-32">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">
              Stroke Rehabilitation Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "RL-based Model for Stroke Patient Assistance",
                  description:
                    "Developing an RL-based model to learn how to play a virtual tennis game for stroke rehabilitation. The system anticipates and assists patients in recovery by playing the game along with the patient during rehabilitation.",
                  technologies: "GPU, Python, Anaconda, DQN",
                },
                {
                  title: "Virtual Reality Gaming System for Stroke Rehabilitation",
                  description:
                    "A comprehensive virtual reality gaming system for upper extremity rehabilitation in stroke patients. The system has been deployed in several hospitals across India, integrating computer vision techniques to recognize patient gestures.",
                  technologies: "Unity Engine, ZMQ module, Virtual Reality",
                },
                {
                  title: "Automated Movement Evaluation System for Stroke Patients",
                  description:
                    "Using computer vision techniques to develop low-cost, affordable tools for evaluating motor performance in stroke patients. Building systems to evaluate, monitor and track improvements in motor performance.",
                  technologies: "MediaPipe, OpenCV, LSTM, Flip flop neurons",
                },
                {
                  title: "Mapping Rehabilitation Therapy to Lesion in Stroke",
                  description:
                    "Developed a simple feedforward network to capture basic features of bimanual reaching. Introduced stroke to this network and analyzed impact of increasing complexity of movements used in retraining on recovery.",
                  technologies: "Keras, CNN, Blender, Retraining, Stroke",
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className="group flex flex-col gap-4 rounded-lg border border-border/50 bg-card overflow-hidden transition-all hover:shadow-md hover:border-primary/20"
                >
                  <div className="flex flex-col gap-2 p-4">
                    <h3 className="text-lg font-semibold group-hover:text-primary">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {project.technologies.split(", ").map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Link
                href="https://github.com/sundarielango95"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View All Projects on GitHub
              </Link>
            </div>
          </div>
        </section>
        <section id="publications" className="bg-secondary py-12 md:py-24 lg:py-32">
          <div className="container max-w-screen-md">
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">Publications</h2>
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Journal Articles</h3>
                  <div className="grid gap-4">
                    {[
                      {
                        title: "A lateralized motor network in order to understand adaptation to visuomotor rotation",
                        authors: "S. Elango, V. S. Chakravarthy, and P. K. Mutha",
                        journal: "Journal of Neural Engineering, vol. 21, 2024",
                        link: "https://iopscience.iop.org/article/10.1088/1741-2552/ad4211", // Add actual DOI link
                      },
                      {
                        title:
                          "Feasibility and efficacy of virtual reality rehabilitation compared with conventional physiotherapy for upper extremity impairment due to ischaemic stroke",
                        authors: "R. Paul, S. Elango, Sylaja, et al.",
                        journal: "BMJ Open, vol. 7, 2024",
                        link: "https://bmjopen.bmj.com/content/14/7/e086556.full", // Add actual BMJ link
                      },
                      {
                        title:
                          "Interaction of network and rehabilitation therapy parameters in defining recovery after stroke in a bilateral neural network",
                        authors: "S. Elango, A. J. A. Francis, and V. S. Chakravarthy",
                        journal: "Journal of NeuroEngineering and Rehabilitation, vol. 19, 2022",
                        link: "https://link.springer.com/article/10.1186/s12984-022-01106-3", // Add actual DOI link
                      },
                      {
                        title:
                          "A cortico-basal ganglia model for choosing an optimal rehabilitation strategy in hemiparetic stroke",
                        authors: "R. Narayanamurthy, S. Jayakumar, S. Elango, V. Muralidharan, and V. S. Chakravarthy",
                        journal: "Scientific Reports, vol. 9, 2019",
                        link: "https://www.nature.com/articles/s41598-019-49670-4", // Add actual DOI link
                      },
                    ].map((article, i) => (
                      <div
                        key={i}
                        className="group flex flex-col gap-2 rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-primary/20 hover:bg-accent/20"
                      >
                        <h4 className="font-semibold group-hover:text-primary">
                          {article.link ? (
                            <Link
                              href={article.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors"
                            >
                              {article.title}
                            </Link>
                          ) : (
                            article.title
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">{article.authors}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground italic">{article.journal}</p>
                          {article.link && (
                            <Link
                              href={article.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-primary hover:underline"
                            >
                              View Article →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Recent Conference Proceedings</h3>
                  <div className="grid gap-4">
                    {[
                      {
                        title: "A computational model to understand hemispheric specialization in motor control",
                        authors: "S. Elango, V. S. Chakravarthy, and P. Mutha",
                        conference: "32nd Annual Computational Neuroscience Meeting, Germany, 2023",
                        link: null, // Add conference link if available
                      },
                      {
                        title: "A comprehensive gaming system for rehabilitation of upper extremity post stroke",
                        authors: "S. Elango, A. J. A. F, D. Darshini, et al.",
                        conference:
                          "11th International Brain Research Organization World Congress of Neuroscience, Spain, 2023",
                        link: "https://www.ibroneuroreports.org/article/S2667-2421(23)01427-6/fulltext", // Add conference link if available
                      },
                      {
                        title:
                          "Feasibility and efficacy of virtual reality rehabilitation for the treatment of impairment of the upper extremity due to ischemic stroke",
                        authors: "R. Paul, S. Elango, S. Hafsa, et al.",
                        conference: "11th Annual Conference of the Indian Federation of Neurorehabilitation, 2023",
                        link: null, // No link available
                      },
                      {
                        title: "Automation of fugl-meyer assessment",
                        authors: "A. Sharma, A. J. A. F, S. Elango, and V. S. Chakravarthy",
                        conference: "13th World Stroke Congress (WSO 2021), 2021",
                        link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZRXxgu8AAAAJ&citation_for_view=ZRXxgu8AAAAJ:UeHWp8X0CEIC", // Add conference link if available
                      },
                    ].map((article, i) => (
                      <div
                        key={i}
                        className="group flex flex-col gap-2 rounded-lg border border-border/50 bg-card p-4 transition-colors hover:border-primary/20 hover:bg-accent/20"
                      >
                        <h4 className="font-semibold group-hover:text-primary">
                          {article.link ? (
                            <Link
                              href={article.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors"
                            >
                              {article.title}
                            </Link>
                          ) : (
                            article.title
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">{article.authors}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground italic">{article.conference}</p>
                          {article.link && (
                            <Link
                              href={article.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-primary hover:underline"
                            >
                              View Details →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="patents" className="container max-w-screen-md py-12 md:py-24 lg:py-32">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">Patents</h2>
            <div className="grid gap-6">
              {[
                {
                  title: "Virtual Reality Gaming System for Stroke Rehabilitation",
                  description:
                    "A comprehensive virtual reality gaming system designed specifically for upper extremity rehabilitation in stroke patients. The system integrates computer vision techniques for gesture recognition and provides real-time feedback for motor performance evaluation.",
                  status: "Filed",
                  applicationArea: "Healthcare Technology, Virtual Reality, Rehabilitation",
                },
                {
                  title: "Automated Movement Evaluation System for Motor Performance Assessment",
                  description:
                    "A low-cost, computer vision-based system for automated evaluation of motor performance in patients. The system uses advanced algorithms to track and analyze movement patterns, providing objective assessments for rehabilitation progress.",
                  status: "Filed",
                  applicationArea: "Medical Devices, Computer Vision, Healthcare Analytics",
                },
                {
                  title:
                    "Interaction of Network and Rehabilitation Therapy Parameters in Defining Recovery After Stroke",
                  description:
                    "A computational framework that models the interaction between neural network parameters and rehabilitation therapy variables to predict and optimize recovery outcomes in stroke patients. The system provides insights into personalized rehabilitation strategies.",
                  status: "Filed",
                  applicationArea: "Computational Neuroscience, Rehabilitation Medicine, Predictive Modeling",
                },
                {
                  title: "Cortico-Basal Ganglia Model for Optimal Rehabilitation Strategy Selection",
                  description:
                    "A biologically-inspired computational model based on cortico-basal ganglia circuits that determines optimal rehabilitation strategies for hemiparetic stroke patients. The model considers patient-specific factors to recommend personalized therapy approaches.",
                  status: "Granted",
                  patentNumber: "507924",
                  applicationArea: "Neural Networks, Stroke Rehabilitation, Decision Support Systems",
                },
              ].map((patent, i) => (
                <div
                  key={i}
                  className="group flex flex-col gap-3 rounded-lg border border-border/50 bg-card p-6 transition-colors hover:border-primary/20 hover:bg-accent/20"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold group-hover:text-primary">{patent.title}</h3>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                          patent.status === "Granted"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {patent.status}
                      </span>
                      {patent.patentNumber && (
                        <span className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
                          Patent No: {patent.patentNumber}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{patent.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {patent.applicationArea.split(", ").map((area, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="bg-secondary py-12 md:py-24 lg:py-32">
          <div className="container max-w-screen-md">
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">Get in Touch</h2>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <p className="text-muted-foreground">
                    I'm always interested in discussing research collaborations, innovative projects in computational
                    neuroscience, and opportunities to apply AI in healthcare and rehabilitation.
                  </p>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <Link href="mailto:sundarielango95@gmail.com" className="text-primary hover:underline">
                      sundarielango95@gmail.com
                    </Link>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href="https://scholar.google.com/citations?user=ZRXxgu8AAAAJ&hl=en&oi=ao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground text-sm font-medium transition-colors hover:bg-accent/80 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      <BookOpen className="h-4 w-4" />
                      <span className="sr-only">Google Scholar</span>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/sundari-elango-4b66a2114/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground text-sm font-medium transition-colors hover:bg-accent/80 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                      href="https://github.com/sundarielango95"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground text-sm font-medium transition-colors hover:bg-accent/80 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Sundari Elango. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://scholar.google.com/citations?user=ZRXxgu8AAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Google Scholar
            </Link>
            <Link
              href="https://www.linkedin.com/in/sundari-elango-4b66a2114/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/sundarielango95"
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
