"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  BarChart3,
  Check,
  ChevronDown,
  Clock3,
  Dumbbell,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UserCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { gymConfig } from "@/config/gym";
import EnquiryForm from "./EnquiryForm";
const gold = "#c9a227";
const navLinks = [
  ["Home", "#home"],
  ["Goals", "#goals"],
  ["Programs", "#programs"],
  ["Membership", "#membership"],
  ["Trainers", "#trainers"],
  ["Gallery", "#gallery"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3"
      aria-label="Happy Wellness & Fitness home"
    >
      <span className="flex size-10 items-center justify-center rounded-xl bg-gold text-black">
        <Dumbbell className="size-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-sm font-bold tracking-tight text-white">
          HAPPY WELLNESS
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
          & FITNESS
        </span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Logo />
        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs font-medium text-white/65 transition hover:text-gold"
            >
              {label}
            </a>
          ))}
        </nav>
       <div className="hidden items-center gap-3 lg:flex">
  <a href="#contact" className="btn-gold">
    Start Your Journey <ArrowRight className="size-4" />
  </a>

  <Link
    href="/admin/login"
    className="rounded-lg border border-white/15 px-4 py-2.5 text-xs font-semibold text-white transition hover:border-gold hover:text-gold"
  >
    Admin
  </Link>
</div>
        <button
          className="flex size-11 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          className="border-t border-white/10 bg-black px-6 py-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/75"
              >
                {label}
              </a>
              
            ))}
            
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2 justify-center"
            >
              Start Your Journey <ArrowRight className="size-4" />
            </a>
            <Link
  href="/admin/login"
  onClick={() => setOpen(false)}
  className="mt-2 flex justify-center rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
>
  Admin
</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title mt-4">{title}</h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-white/55">{description}</p>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10 hero-grid" />
      <div className="container-shell grid min-h-[680px] items-center gap-12 pb-20 lg:grid-cols-[1.02fr_.98fr] lg:pb-28">
        <div className="max-w-2xl">
          <div className="eyebrow">
            <span className="size-2 rounded-full bg-gold" /> Armoor's premium
            fitness destination
          </div>
          <h1 className="mt-7 font-display text-5xl font-bold leading-[.98] tracking-[-.06em] text-white sm:text-7xl lg:text-[6.5rem]">
            Start Your <span className="text-gold">Transformation</span> Today
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-white/60">
            Train smarter. Get stronger. Build a healthier lifestyle with expert
            coaching and a community that keeps you moving.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-gold">
              Start Your Journey <ArrowRight className="size-4" />
            </a>
            <a href="#programs" className="btn-ghost">
              Explore Programs <ArrowDownRight className="size-4" />
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-6">
            <div>
              <div className="font-display text-2xl font-bold text-white">
                500<span className="text-gold">+</span>
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-white/40">
                Members
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-white">
                8<span className="text-gold">+</span>
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-white/40">
                Expert Trainers
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-white">
                5<span className="text-gold">+</span>
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-white/40">
                Years Strong
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="hero-image relative aspect-[.83] overflow-hidden rounded-[2rem] border border-white/10 bg-[#191919]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=85')] bg-cover bg-center grayscale-[20%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
              <div>
                <div className="text-xs uppercase tracking-[.24em] text-gold">
                  Train with purpose
                </div>
                <div className="mt-2 font-display text-2xl font-bold text-white">
                  Your best self starts here.
                </div>
              </div>
              <div className="flex size-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur">
                <Play className="ml-1 size-5 fill-current" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-[#181818] p-4 shadow-2xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Award className="size-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">
                  Member rating
                </div>
                <div className="mt-1 flex items-center gap-1 text-sm font-bold text-white">
                  <Star className="size-3.5 fill-gold text-gold" /> 4.9 / 5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="border-y border-white/10 bg-[#121212]">
      <div className="container-shell grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
        {gymConfig.stats.map((stat) => (
          <div key={stat.label} className="px-4 py-8 text-center md:py-11">
            <div className="font-display text-3xl font-bold text-white md:text-4xl">
              {stat.number}
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[.2em] text-white/40">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const goalIcons = [Scale, Dumbbell, Zap, HeartPulse];
export function GoalsSection() {
  return (
    <section id="goals" className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Find your focus"
          title="Choose Your Goal"
          description="Your fitness journey starts with a goal. We'll help you build the path to reach it."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gymConfig.goals.map((goal, i) => {
            const Icon = goalIcons[i];
            return (
              <a
                href="#contact"
                key={goal.id}
                className="group card-dark flex min-h-[290px] flex-col justify-between p-6"
              >
                <div>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-black">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-bold text-white">
                    {goal.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {goal.description}
                  </p>
                </div>
                <span className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                  Explore Goal{" "}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const whyIcons = [UserCheck, SettingsIcon, Target, Clock3, ShieldCheck, Users];
function SettingsIcon(props) {
  return <Dumbbell {...props} />;
}
export function WhyChooseUs() {
  return (
    <section className="section-pad bg-[#121212]">
      <div className="container-shell grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="aspect-[.9] max-w-md overflow-hidden rounded-[1.8rem] bg-[#202020]">
            <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85')] bg-cover bg-center grayscale-[30%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="absolute -bottom-7 -right-3 rounded-2xl border border-white/10 bg-black p-5 sm:-right-7">
            <div className="font-display text-4xl font-bold text-gold">
              5<span className="text-white">+</span>
            </div>
            <div className="mt-1 text-xs text-white/50">
              Years of excellence
            </div>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="The happy difference"
            title="More Than A Gym. A Community."
            description="We believe lasting results come from the right environment, the right guidance, and the right people around you."
          />
          <div className="mt-10 grid gap-x-7 gap-y-8 sm:grid-cols-2">
            {gymConfig.whyChooseUs.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-gold/30 text-gold">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-white/45">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgramsSection() {
  return (
    <section id="programs" className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Train your way"
          title="Programs Built For Progress"
          description="From first rep to personal best, our programs give you the structure and support to keep going."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gymConfig.programs.map((program, i) => (
            <article
              key={program.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#151515] p-6 ${i === 0 ? "md:row-span-2 md:min-h-[410px]" : i === 3 ? "lg:col-span-2" : ""}`}
            >
              <div
                className={`absolute right-0 top-0 size-40 rounded-full blur-3xl ${i % 2 === 0 ? "bg-gold/10" : "bg-white/5"}`}
              />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[.22em] text-gold">
                    {program.category}
                  </span>
                  <ArrowRight className="size-5 text-white/35 transition group-hover:translate-x-1 group-hover:text-gold" />
                </div>
                <div className="mt-auto pt-20">
                  <h3 className="font-display text-3xl font-bold text-white">
                    {program.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/50">
                    {program.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-white/70 transition hover:text-gold"
                  >
                    Learn More <ArrowRight className="ml-2 size-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MembershipSection() {
  return (
    <section id="membership" className="section-pad bg-[#121212]">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Invest in yourself"
          title="Membership That Moves With You"
          description="Choose the plan that fits your pace. Every membership includes access to our full facility and a community committed to progress."
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {gymConfig.memberships.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${plan.popular ? "border-gold bg-gold text-black" : "border-white/10 bg-[#181818] text-white"}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-black">
                  Most Popular
                </div>
              )}
              <div
                className={`text-xs font-semibold uppercase tracking-widest ${plan.popular ? "text-black/60" : "text-gold"}`}
              >
                {plan.name}
              </div>
              <div className="mt-7">
                <span className="font-display text-3xl font-bold">
                  {plan.price}
                </span>
                <span
                  className={`text-xs ${plan.popular ? "text-black/60" : "text-white/40"}`}
                >
                  {plan.period}
                </span>
              </div>
              <div
                className={`my-6 h-px ${plan.popular ? "bg-black/15" : "bg-white/10"}`}
              />
              <ul className="flex flex-col gap-3 text-xs">
                <li className="mb-1 font-semibold">Includes:</li>
                {plan.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className={`flex gap-2 ${plan.popular ? "text-black/70" : "text-white/55"}`}
                  >
                    <Check className="mt-0.5 size-3.5 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 flex items-center justify-center rounded-lg px-4 py-3 text-xs font-bold transition ${plan.popular ? "bg-black text-white hover:bg-black/80" : "border border-white/15 text-white hover:border-gold hover:text-gold"}`}
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrainersSection() {
  return (
    <section id="trainers" className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Meet the coaches"
          title="Guidance That Gets Results"
          description="Our trainers bring expertise, empathy, and energy to every session."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {gymConfig.trainers.map((trainer, i) => (
            <article key={trainer.name} className="group">
              <div className="relative aspect-[.82] overflow-hidden rounded-2xl bg-[#1a1a1a]">
                <div
                  className={`h-full w-full bg-cover bg-center grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0 ${i === 0 ? "bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=85')]" : i === 1 ? "bg-[url('https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=700&q=85')]" : "bg-[url('https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=700&q=85')]"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[10px] uppercase tracking-widest text-gold">
                    {trainer.experience}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white">
                    {trainer.name}
                  </h3>
                  <p className="mt-1 text-xs text-white/55">{trainer.role}</p>
                  <p className="mt-3 text-xs leading-5 text-white/45">
                    {trainer.bio}
                  </p>
                  <div className="mt-5 flex gap-2">
                    <a
                      href="#contact"
                      aria-label={`${trainer.name} on Instagram`}
                      className="flex size-8 items-center justify-center rounded-full border border-white/15 text-white/60 hover:border-gold hover:text-gold"
                    >
                      <FaInstagram className="size-3.5" />
                    </a>
                    <a
                      href="#contact"
                      aria-label={`${trainer.name} on LinkedIn`}
                      className="flex size-8 items-center justify-center rounded-full border border-white/15 text-white/60 hover:border-gold hover:text-gold"
                    >
                      <FaLinkedinIn className="size-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TransformationSection() {
  return (
    <section className="section-pad bg-[#121212]">
      <div className="container-shell">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#181818]">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative min-h-[440px] overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85')] bg-cover bg-center grayscale" />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute bottom-7 left-7 right-7 flex justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gold">
                    Sample result story
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold text-white">
                    Real Progress Starts
                    <br />
                    With Consistency
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-4xl font-bold text-white">
                    -12<span className="text-gold">kg</span>
                  </div>
                  <div className="text-xs text-white/45">in 16 weeks</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="eyebrow">Transformation stories</div>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white">
                Small wins. <span className="text-gold">Big changes.</span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/55">
                Progress isn&apos;t always measured on a scale. It&apos;s the
                extra rep, the better form, and the confidence you carry out the
                door. Our members show up, stay consistent, and grow stronger
                every day.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-7">
                <div>
                  <div className="font-display text-2xl font-bold text-white">
                    16
                  </div>
                  <div className="mt-1 text-[10px] text-white/40">
                    Weeks training
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-white">
                    42
                  </div>
                  <div className="mt-1 text-[10px] text-white/40">
                    Sessions done
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-white">
                    +38%
                  </div>
                  <div className="mt-1 text-[10px] text-white/40">
                    Strength gain
                  </div>
                </div>
              </div>
              <p className="mt-8 border-l-2 border-gold pl-4 text-sm italic text-white/65">
                &ldquo;The team gave me a plan I could actually stick to. That
                changed everything.&rdquo;
              </p>
              <div className="mt-4 text-xs font-semibold text-gold">
                — Demo member story
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const galleryImages = [
  [
    "Gym floor",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Strength training",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Cardio zone",
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Training together",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "The energy",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85",
  ],
];
export function GallerySection() {
  return (
    <section id="gallery" className="section-pad">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Inside happy wellness"
            title="Built For Your Best Work"
          />
          <p className="max-w-xs text-sm leading-6 text-white/45 sm:text-right">
            A focused, energizing environment designed to make every session
            count.
          </p>
        </div>
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
          {galleryImages.map(([label, src], i) => (
            <div
              key={label}
              className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "row-span-2" : i === 1 ? "col-span-2" : ""}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center grayscale-[30%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                style={{ backgroundImage: `url(${src})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-xs font-medium text-white">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    [
      "The trainers actually pay attention to technique and progress. The atmosphere makes it easy to stay consistent.",
      "Rahul",
    ],
    [
      "Best gym in Armoor. The equipment is top-notch and the environment is very clean and motivating.",
      "Sneha",
    ],
    [
      "The personalized guidance made it much easier for me to stay consistent.",
      "Karthik",
    ],
  ];
  return (
    <section className="section-pad bg-[#121212]">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Member voices"
          title="What Our Community Says"
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map(([quote, name]) => (
            <article key={name} className="card-dark p-7">
              <div className="flex gap-1 text-gold">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-7 text-base leading-7 text-white/70">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex size-9 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                  {name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{name}</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/35">
                    Demo member
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [active, setActive] = useState(0);
  return (
    <section id="faq" className="section-pad">
      <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <SectionHeading
          eyebrow="Need to know"
          title="Questions, Answered."
          description="Everything you need to know before you take the first step."
        />
        <div className="flex flex-col border-t border-white/10">
          {gymConfig.faqs.map((faq, i) => (
            <div key={faq.question} className="border-b border-white/10">
              <button
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-sm font-medium text-white"
                onClick={() => setActive(active === i ? -1 : i)}
                aria-expanded={active === i}
              >
                {faq.question}
                <ChevronDown
                  className={`size-4 shrink-0 text-gold transition ${active === i ? "rotate-180" : ""}`}
                />
              </button>
              {active === i && (
                <p className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-white/50">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-[#121212]">
      <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        {/* Contact Information */}
        <div>
          <SectionHeading
            eyebrow="Come say hello"
            title="Let's Get You Moving"
            description="Have a question or ready to see the space? Reach out and our team will help you take the next step."
          />

          <div className="mt-10 flex flex-col gap-5">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-4 text-sm text-white/70 hover:text-gold"
            >
              <span className="flex size-10 items-center justify-center rounded-lg border border-white/10 text-gold">
                <Phone className="size-4" />
              </span>

              {gymConfig.phone}
            </a>

            <a
              href="mailto:hello@happywellness.com"
              className="flex items-center gap-4 text-sm text-white/70 hover:text-gold"
            >
              <span className="flex size-10 items-center justify-center rounded-lg border border-white/10 text-gold">
                <Mail className="size-4" />
              </span>

              {gymConfig.email}
            </a>

            <div className="flex items-center gap-4 text-sm text-white/70">
              <span className="flex size-10 items-center justify-center rounded-lg border border-white/10 text-gold">
                <MapPin className="size-4" />
              </span>

              {gymConfig.location}
            </div>
          </div>

          {/* Opening Hours */}
          <div className="mt-10 border-t border-white/10 pt-7">
            <div className="text-[10px] uppercase tracking-[.2em] text-gold">
              Opening hours
            </div>

            <div className="mt-4 text-sm font-medium text-white">
              Monday – Saturday
            </div>

            <div className="mt-1 text-sm text-white/50">
              {gymConfig.hours.weekdays}
            </div>

            <div className="mt-5 text-sm font-medium text-white">Sunday</div>

            <div className="mt-1 text-sm text-white/50">
              {gymConfig.hours.sunday}
            </div>
          </div>

          {/* Directions */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/search/?api=1&query=Happy+Wellness+%26+Fitness,+Armoor,+Nizamabad,+Telangana"
            className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-gold"
          >
            Get Directions
            <ArrowRight className="size-3" />
          </a>
        </div>

        {/* Enquiry Form */}
        <div className="rounded-2xl border border-white/10 bg-[#181818] p-7 sm:p-9">
          <div className="mb-7">
            <div className="text-[10px] uppercase tracking-[.2em] text-gold">
              Start your journey
            </div>

            <h3 className="mt-3 font-display text-3xl font-bold text-white">
              Send Us an Enquiry
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/45">
              Tell us a little about your fitness goals and our team will get
              back to you.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="section-pad pt-8">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-3xl bg-gold px-7 py-14 text-center sm:px-12 sm:py-20">
          <div className="absolute -left-20 -top-32 size-80 rounded-full border-[40px] border-black/5" />
          <div className="absolute -bottom-48 -right-20 size-96 rounded-full border-[50px] border-black/5" />
          <div className="relative">
            <div className="text-[10px] font-bold uppercase tracking-[.25em] text-black/55">
              Your next chapter starts now
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Ready to Start?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-black/65">
              Take the first step toward a stronger, healthier you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-xs font-bold text-white transition hover:bg-black/80"
              >
                Start Your Journey <ArrowRight className="size-4" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/919876543210"
                className="inline-flex items-center gap-2 rounded-lg border border-black/20 px-5 py-3 text-xs font-bold text-black transition hover:bg-black/10"
              >
                Talk on WhatsApp <FaWhatsapp className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b] py-12">
      <div className="container-shell grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/40">
            A stronger body. A clearer mind. A happier you. Start your
            transformation in Armoor.
          </p>
          <div className="mt-6 flex gap-2">
            <a href="#contact" aria-label="Instagram" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#contact" aria-label="Facebook" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#contact" aria-label="YouTube" className="social-icon">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div>
          <div className="footer-label">Explore</div>
          <div className="mt-5 flex flex-col gap-3">
            {navLinks.slice(0, 4).map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-white/45 hover:text-gold"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-label">More</div>
          <div className="mt-5 flex flex-col gap-3">
            {navLinks.slice(4).map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-white/45 hover:text-gold"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-label">Visit us</div>
          <p className="mt-5 text-sm leading-6 text-white/45">
            {gymConfig.location}
            <br />
            <a href="tel:+919876543210" className="hover:text-gold">
              {gymConfig.phone}
            </a>
            <br />
            <a
              href="mailto:hello@happywellness.com"
              className="hover:text-gold"
            >
              {gymConfig.email}
            </a>
            
          </p>
        </div>
      </div>
      <div className="container-shell mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-white/30 sm:flex-row">
        <span>© 2024 Happy Wellness & Fitness. Demo website.</span>
        <span>Built for better days.</span>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Happy Wellness & Fitness on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition hover:scale-105"
    >
      <FaWhatsapp className="size-7" />
    </a>
  );
}

export { SectionHeading };

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <GoalsSection />
        <WhyChooseUs />
        <ProgramsSection />
        <MembershipSection />
        <TrainersSection />
        <TransformationSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
