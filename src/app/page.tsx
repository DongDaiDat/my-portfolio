"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  ExternalLink,
  GraduationCap,
  Link,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import React, { useState } from "react";

const personal = {
  name: "Đạt Đồng",
  role: "Software Engineering Student",
  school: "Phenikaa University",
  location: "Ha Noi, Viet Nam",
  email: "dongdat2208@gmail.com",
  github: "https://github.com/DongDaiDat",
  linkedin: "https://linkedin.com/in/dat-dong-dai-74b0773a2/",
  summary:
    "I am a software engineering student who enjoys building clean, practical and user-friendly web applications. I focus on learning by creating real projects and improving them step by step.",
};

const techStacks = [
  { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { group: "Backend", items: ["Python", "Django", "REST API", "PostgreSQL"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "VS Code", "Postman"] },
  { group: "Learning", items: ["Next.js", "Testing", "AWS", "CI/CD"] },
];

const projects = [
  {
    title: "Graduation Project Management System",
    type: "Web Application",
    description:
      "A system for managing graduation topics, student registration, defense schedules, reports and evaluation results.",
    tech: ["Django", "PostgreSQL", "Bootstrap", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "Personal Portfolio Website",
    type: "Frontend Project",
    description:
      "A modern portfolio website to introduce personal information, technical skills and selected projects.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "CPU Scheduling Simulator",
    type: "Academic Project",
    description:
      "A Python simulator for scheduling algorithms, calculating response time, turnaround time and waiting time.",
    tech: ["Python", "Algorithm", "CLI"],
    github: "#",
    demo: "#",
  },
];

const achievements = [
  "Built multiple academic and personal web projects",
  "Experience with requirement analysis and software documentation",
  "Learning software testing, Docker and cloud deployment",
];

const navItems = ["About", "Skills", "Projects", "Contact"];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-zinc-300">
      {children}
    </span>
  );
}

function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-zinc-500">
        {label}
      </p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-zinc-400">{description}</p>}
    </div>
  );
}

export default function BlackStudentPortfolio() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-zinc-700/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-[120px]" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Đạt<span className="text-zinc-500">.dev</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href={`mailto:${personal.email}`}
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-zinc-200 md:inline-flex"
          >
            Contact me
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-white/10 bg-black px-5 py-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-zinc-300"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <section className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 pt-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for learning, internships and projects
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              Building clean web experiences as a student developer.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              {personal.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
              >
                View projects <ArrowRight size={18} />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                <Code2 size={18} /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-white/5"
          >
            <div className="rounded-[1.5rem] border border-white/10 bg-black p-6">
              <div className="mb-6 h-28 w-28 rounded-3xl bg-gradient-to-br from-white to-zinc-600 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-3xl bg-black text-4xl font-bold">
                  Đ
                </div>
              </div>
              <h3 className="text-2xl font-semibold">{personal.name}</h3>
              <p className="mt-2 text-zinc-400">{personal.role}</p>

              <div className="mt-6 space-y-4 text-sm text-zinc-300">
                <p className="flex items-center gap-3">
                  <GraduationCap size={18} className="text-zinc-500" /> {personal.school}
                </p>
                <p className="flex items-center gap-3">
                  <MapPin size={18} className="text-zinc-500" /> {personal.location}
                </p>
                <p className="flex items-center gap-3">
                  <Code2 size={18} className="text-zinc-500" /> Web Development / Software Engineering
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-6xl px-5 py-24">
        <SectionTitle
          label="About"
          title="A student developer with a practical mindset."
          description="My goal is not only to write code, but to understand how a real software product is planned, built, tested and improved."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {achievements.map((item, index) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm text-zinc-500">0{index + 1}</p>
              <p className="mt-4 text-lg text-zinc-100">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24">
        <SectionTitle
          label="Skills"
          title="Technologies I use and keep improving."
          description="This section should show what you can actually work with, while also being honest about what you are currently learning."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {techStacks.map((stack) => (
            <div key={stack.group} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="mb-5 text-xl font-semibold">{stack.group}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24">
        <SectionTitle
          label="Projects"
          title="Selected projects that show my learning journey."
          description="For a student portfolio, quality is more important than quantity. Each project should explain the problem, technology and what you learned."
        />
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/25 hover:bg-white/[0.07]"
            >
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
                    {project.type}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 max-w-3xl leading-7 text-zinc-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="rounded-full border border-white/10 p-3 transition hover:bg-white/10"
                    aria-label="GitHub"
                  >
                    <Code2 size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="rounded-full border border-white/10 p-3 transition hover:bg-white/10"
                    aria-label="Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 md:p-12">
          <SectionTitle
            label="Contact"
            title="Let’s connect and build something useful."
            description="You can place your real email, GitHub, Facebook or LinkedIn here."
          />
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              <Mail size={18} /> Email me
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              <Code2 size={18} /> GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              <Link size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
