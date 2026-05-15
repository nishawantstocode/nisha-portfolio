import { useEffect, useState } from "react";
import "./index.css";

const projects = [
  {
    title: "Internship Portfolio Website",
    description:
      "A responsive personal portfolio website built to showcase my skills, projects, resume, and contact links for internship applications.",
    tech: ["React", "Vite", "Tailwind CSS", "Vercel"],
    liveDemo: "https://nisha-portfolio-dajo.vercel.app",
    github: "https://github.com/nishawantstocode/nisha-portfolio",
  },
  {
    title: "BudgetBloom Dashboard",
    description:
      "A modern student budget tracker that helps users track income, expenses, savings goals, and spending insights through interactive charts.",
    tech: ["React", "Tailwind CSS", "Recharts", "localStorage", "Vercel"],
    liveDemo: "https://budgetwithnisha.vercel.app",
    github: "https://github.com/nishawantstocode/student-budget-dashboard",
    isCardClickable: true,
  },
  {
    title: "InternPilot AI",
    description:
      "An AI-assisted internship search workspace concept that helps students track applications, tailor materials, and prepare for interviews.",
    tech: ["React", "AI workflow design", "Data modeling", "UX research"],
    status: "Coming Soon",
  },
];

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "SQL",
  "Python",
  "Java",
  "Excel",
  "GitHub",
  "Problem Solving",
  "Business Technology",
];

const internshipTargets = [
  "Software Development",
  "IT Support",
  "Data Analytics",
  "Business Technology",
];

const githubUrl = "https://github.com/nishawantstocode";
const linkedInUrl = "https://www.linkedin.com/in/nisha-kc-26099a325";
const emailAddress = "mailmeatnishakc@gmail.com";
const resumeUrl = "/Nisha_KC_Resume.pdf";

const profileLinks = [
  {
    label: "GitHub",
    href: githubUrl,
    isDisabled: !githubUrl,
  },
  {
    label: "LinkedIn",
    href: linkedInUrl,
    isDisabled: !linkedInUrl,
  },
  {
    label: resumeUrl ? "Download Resume" : "Resume Coming Soon",
    href: resumeUrl,
    isDisabled: !resumeUrl,
  },
  {
    label: "Email",
    href: `mailto:${emailAddress}`,
    isDisabled: false,
  },
];

const recruiterProof = [
  "I learn new tools quickly and turn what I learn into organized notes, cleaner workflows, and usable deliverables.",
  "I can move between technical details and business goals without making either side feel like they need a translator.",
  "I care about small details because small details are usually where users, teams, and dashboards start to break down.",
];

const beyondResume = [
  {
    title: "Quietly competitive",
    text: "I like improving things until the final version looks simple, intentional, and obvious in hindsight.",
  },
  {
    title: "Business brain, builder hands",
    text: "I notice the workflow, the user, the data, and the tiny friction points that everyone else has learned to tolerate.",
  },
  {
    title: "Fast learner energy",
    text: "Give me a messy task, a clear goal, and a little context. I will ask smart questions and figure it out.",
  },
];

const tomorrowContributions = [
  {
    title: "Automate repetitive workflows",
    text: "I would look for the manual copy-paste tasks, the spreadsheet rituals, and the small process leaks that quietly eat team time.",
  },
  {
    title: "Build internal dashboards",
    text: "I would turn scattered information into clean views people can actually use to make decisions.",
  },
  {
    title: "Improve user-facing digital experiences",
    text: "I would help polish interfaces, clarify confusing flows, and make the product feel easier to trust.",
  },
];

const funFacts = [
  "Probably overthinks button alignment",
  "Learns scary fast",
  "Explains tech without making people regret asking",
  "Debugging builds character (apparently)",
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#100d16] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(251,113,133,0.18),transparent_28%),radial-gradient(circle_at_78%_2%,rgba(34,211,238,0.13),transparent_28%),linear-gradient(180deg,#100d16_0%,#15111d_48%,#09070d_100%)]" />
      <div className="pink-glow pink-glow-one" />
      <div className="pink-glow pink-glow-two" />

      <div
        className={`fixed inset-0 z-[100] grid place-items-center bg-[#100d16]/95 px-6 text-center backdrop-blur-xl transition duration-700 ${
          isLoading
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="animate-fade-up">
          <div className="mx-auto mb-6 h-12 w-12 rounded-full border border-rose-200/30 bg-rose-200/10 shadow-2xl shadow-rose-950/50" />
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-rose-100/80">
            Nisha KC
          </p>
          <h1 className="mt-4 max-w-md text-3xl font-black text-white sm:text-5xl">
            Brewing something better than a PDF resume ☕
          </h1>
        </div>
      </div>

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#100d16]/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <a href="#" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-rose-200 to-cyan-200 text-sm font-black text-slate-950 shadow-lg shadow-rose-950/30 transition duration-300 group-hover:rotate-3">
              NK
            </span>
            <span>
              <span className="block text-sm font-bold leading-none">
                Nisha KC
              </span>
              <span className="mt-1 block text-xs text-slate-400">
                CIS Student
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 text-sm text-slate-300 md:flex">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-white"
              >
                {item}
              </a>
            ))}
            <a
              href="#recruiter"
              className="premium-button ml-2 rounded-full border border-rose-200/30 bg-rose-200/10 px-4 py-2 font-bold text-rose-100 shadow-sm shadow-rose-950/30"
            >
              Recruiter? 👀
            </a>
          </div>
        </div>
      </nav>

      <a
        href={`mailto:${emailAddress}`}
        className="premium-button fixed bottom-5 right-4 z-40 rounded-full border border-rose-200/30 bg-rose-200 px-5 py-3 text-sm font-black text-slate-950 shadow-2xl shadow-rose-950/40 sm:bottom-6 sm:right-6"
      >
        Hire me maybe? 👀
      </a>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:min-h-screen lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pt-24">
        <div className="animate-fade-up">
          <p className="inline-flex max-w-full rounded-full border border-rose-200/30 bg-rose-200/10 px-3 py-2 text-sm font-medium text-rose-100 transition duration-300 hover:border-rose-200/70 hover:bg-rose-200/15 sm:px-4">
            Computer Information Systems Student
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-tight text-white sm:mt-6 sm:text-5xl lg:text-7xl">
            No internship experience (yet). Just proof I can learn fast and
            build fast.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
            I&apos;m Nisha KC, a CIS student building practical software, data,
            IT support, and business technology projects. I may be
            early-career, but I&apos;m already practicing the kind of work
            interns are trusted with: organizing information, solving small
            problems, and making digital tools easier to use.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
            {internshipTargets.map((target) => (
              <span
                key={target}
                className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-rose-200/50 hover:bg-rose-200/10"
              >
                {target}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a
              href="#projects"
              className="premium-button rounded-lg bg-gradient-to-r from-rose-200 to-cyan-200 px-6 py-3 text-center font-bold text-slate-950 shadow-lg shadow-rose-950/40 sm:w-auto"
            >
              Show Me the Proof
            </a>
            <a
              href="#recruiter"
              className="premium-button rounded-lg border border-white/20 px-6 py-3 text-center font-semibold text-white sm:w-auto"
            >
              Recruiter Snapshot
            </a>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            {profileLinks.map((link) => (
              <ActionLink
                key={link.label}
                link={link}
                className="premium-button rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-center text-sm font-semibold text-slate-200"
              />
            ))}
          </div>
        </div>

        <div className="animation-delay-150 animate-fade-up animate-soft-glow rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-rose-200/30 hover:bg-white/[0.08] sm:p-6">
          <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-rose-100/70 sm:text-sm">
                Candidate Bet
              </p>
              <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                Why take a chance on me?
              </h3>
            </div>
            <span className="rounded-md bg-emerald-400/10 px-3 py-2 text-sm font-medium text-emerald-300">
              Open to Work
            </span>
          </div>

          <div className="grid gap-3 py-5">
            {recruiterProof.map((item) => (
              <div key={item} className="flex items-start gap-3 text-slate-200">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose-200" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-5 sm:gap-3">
            {[
              ["4", "Target Tracks"],
              ["12", "Core Skills"],
              ["3", "Projects"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg bg-[#0c0911]/70 p-3 sm:p-4">
                <p className="text-xl font-black text-rose-100 sm:text-2xl">
                  {value}
                </p>
                <p className="mt-1 text-xs text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="recruiter"
        className="reveal-section mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="animate-fade-up animate-soft-glow rounded-3xl border border-rose-200/20 bg-gradient-to-br from-rose-200/12 via-white/[0.06] to-cyan-200/10 p-5 shadow-2xl shadow-black/25 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-rose-100">
                Recruiter? 👀
              </p>
              <h3 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                Here&apos;s the snapshot before the 30-second skim.
              </h3>
              <p className="mt-5 leading-7 text-slate-300">
                I&apos;m looking for a team where I can learn quickly, support
                real work, and contribute to software, IT support, data, or
                business technology projects with care and consistency.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Best fit", "Software, IT, data, or business tech internship"],
                ["What I bring", "Fast learning, clear writing, organized execution"],
                ["Proof point", "Three focused projects built around real student and workplace needs"],
                ["Hiring vibe", "Warm communicator, low ego, high follow-through"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="premium-card rounded-2xl border border-white/10 bg-[#0c0911]/60 p-5"
                >
                  <p className="text-sm font-bold text-rose-100">{label}</p>
                  <p className="mt-3 text-slate-300">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="reveal-section mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20"
      >
        <h3 className="text-2xl font-bold sm:text-3xl">About Me</h3>
        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          I&apos;m a Computer Information Systems student interested in the
          space where software, IT, data, and business operations overlap. I
          enjoy turning scattered information into something clearer, whether
          that means a dashboard, a website, a support workflow, or a better
          process for tracking work.
        </p>
      </section>

      <section className="reveal-section mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-rose-100">
            If I interned at your company tomorrow...
          </p>
          <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
            I would look for the practical wins first.
          </h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {tomorrowContributions.map((item) => (
            <div
              key={item.title}
              className="premium-card rounded-2xl border border-white/10 bg-white/[0.05] p-5"
            >
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal-section mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-rose-100">
            Beyond the Resume
          </p>
          <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
            A little personality, because teams hire humans.
          </h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {beyondResume.map((item) => (
            <div
              key={item.title}
              className="premium-card rounded-2xl border border-white/10 bg-white/[0.05] p-5"
            >
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="reveal-section mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20"
      >
        <h3 className="text-2xl font-bold sm:text-3xl">Skills</h3>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-rose-200/50 hover:bg-rose-200/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="reveal-section mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-rose-100">
            Selected Work
          </p>
          <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Projects</h3>
          <p className="mt-4 leading-7 text-slate-300">
            Three focused projects that show how I think, build, organize
            information, and turn early-career curiosity into useful work.
          </p>
        </div>

        <div className="mt-6 grid gap-5 sm:mt-8 md:grid-cols-3 md:gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="premium-card group relative rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl sm:rounded-3xl sm:p-6"
            >
              {project.isCardClickable && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} live demo`}
                  className="absolute inset-0 z-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-200/70 focus:ring-offset-2 focus:ring-offset-[#100d16] sm:rounded-3xl"
                />
              )}

              <div className="pointer-events-none relative z-10">
                <h4 className="text-xl font-bold transition duration-300 group-hover:text-rose-100">
                  {project.title}
                </h4>
                {project.status && (
                  <span className="mt-4 inline-flex rounded-full border border-amber-200/30 bg-amber-200/10 px-3 py-1 text-xs font-bold text-amber-100">
                    {project.status}
                  </span>
                )}
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-rose-200/10 px-3 py-1 text-xs text-rose-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {(project.liveDemo || project.github) && (
                <div className="relative z-20 mt-6 flex flex-wrap gap-3">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="premium-button rounded-lg bg-gradient-to-r from-rose-200 to-cyan-200 px-4 py-2.5 text-sm font-black text-slate-950 shadow-lg shadow-rose-950/30"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="premium-button rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm font-bold text-white"
                    >
                      GitHub Code
                    </a>
                  )}
                </div>
              )}

              {project.status && (
                <div className="relative z-20 mt-6">
                  <span className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-bold text-slate-200">
                    Coming Soon
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="reveal-section mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="rounded-3xl border border-rose-200/20 bg-rose-200/10 p-5 transition duration-500 hover:-translate-y-1 hover:border-rose-200/50 sm:p-8">
          <h3 className="text-2xl font-bold sm:text-3xl">Resume</h3>
          <p className="mt-3 text-slate-300">
            Download my resume or connect with me for internship opportunities.
          </p>
          <ActionLink
            link={profileLinks.find((link) => link.label.includes("Resume"))}
            className="premium-button mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-slate-950"
          />
        </div>
      </section>

      <section
        id="contact"
        className="reveal-section mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20"
      >
        <h3 className="text-2xl font-bold sm:text-3xl">Contact</h3>
        <p className="mt-3 text-slate-300">
          I&apos;m open to internship opportunities and project collaborations.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {profileLinks.map((link) => (
            <ActionLink
              key={link.label}
              link={link}
              className="premium-button rounded-lg border border-white/10 bg-white/[0.05] px-5 py-4 font-semibold text-rose-100"
            />
          ))}
        </div>
      </section>

      <section className="reveal-section mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-rose-100">
            Fun facts
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {funFacts.map((fact) => (
              <div
                key={fact}
                className="premium-card rounded-2xl border border-white/10 bg-[#0c0911]/60 p-4 text-slate-200"
              >
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        &copy; 2026 Nisha KC. Built with React, Tailwind, and Vite.
      </footer>
    </main>
  );
}

function ActionLink({ link, className }) {
  const opensInNewTab = link.href.startsWith("http") || link.href.endsWith(".pdf");

  if (link.isDisabled) {
    return (
      <span
        className={`${className} cursor-not-allowed opacity-70`}
        title="Add this link in src/App.jsx when it is ready."
      >
        {link.label}
      </span>
    );
  }

  return (
    <a
      href={link.href}
      target={opensInNewTab ? "_blank" : undefined}
      rel={opensInNewTab ? "noreferrer" : undefined}
      className={className}
    >
      {link.label}
    </a>
  );
}
