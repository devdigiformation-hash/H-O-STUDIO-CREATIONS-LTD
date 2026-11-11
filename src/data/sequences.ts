import { SequenceConfig } from '../types';

export const CINEMATIC_SEQUENCES: SequenceConfig[] = [
  {
    id: "VIDEO_01",
    title: "Enterprise IT Consultancy & Strategic Leadership",
    subtitle: "Empowering British and multinational businesses with high-availability infrastructure, disciplined software engineering, and proactive technical advisory.",
    badge: "UK IT Consultancy",
    ctaText: "Explore IT Services",
    ctaAction: "services",
    desktopPosition: "fullscreen",
    folder: "/sequences/video_01/",
    frameCount: 60,
    approvedDuration: 14.92,
    approvedEndSeconds: 14.92,
    trimPolicy: "0.000s - 14.916s (Full valid clip)",
    validationStatus: "VERIFIED_FULL"
  },
  {
    id: "VIDEO_02",
    title: "IT Infrastructure & Mission-Critical Support",
    subtitle: "Precision server rack deployment, hardened enterprise networks, on-site diagnostics, and 24/7 preventative operations.",
    badge: "Infrastructure & Systems",
    ctaText: "Request Technical Audit",
    ctaAction: "consultation",
    desktopPosition: "right",
    folder: "/sequences/video_02/",
    frameCount: 40,
    approvedDuration: 10.00,
    approvedEndSeconds: 10.00,
    trimPolicy: "0.000s - 10.000s ONLY (Excluding >= 10.000s)",
    validationStatus: "VERIFIED_TRIMMED_10S"
  },
  {
    id: "VIDEO_03",
    title: "Software Development & Digital Solutions",
    subtitle: "Bespoke full-stack web platforms, distributed microservices, secure API layers, and intelligent database architectures engineered to scale.",
    badge: "Digital Engineering",
    ctaText: "Explore Solutions",
    ctaAction: "solutions",
    desktopPosition: "left",
    folder: "/sequences/video_03/",
    frameCount: 60,
    approvedDuration: 14.92,
    approvedEndSeconds: 14.92,
    trimPolicy: "0.000s - 14.916s (Full valid clip)",
    validationStatus: "VERIFIED_FULL"
  },
  {
    id: "VIDEO_04",
    title: "Join Our Engineering Team",
    subtitle: "We are hiring an IT Technician (£35k–£45k) and Business Development Manager (£50k–£60k) to build resilient UK technology solutions.",
    badge: "Career Opportunities",
    ctaText: "View Open Vacancies & Apply",
    ctaAction: "careers",
    desktopPosition: "right",
    folder: "/sequences/video_04/",
    frameCount: 40,
    approvedDuration: 10.00,
    approvedEndSeconds: 10.00,
    trimPolicy: "0.000s - 10.000s ONLY (Excluding >= 10.000s)",
    validationStatus: "VERIFIED_TRIMMED_10S"
  }
];

export function getSequenceFrames(seq: SequenceConfig): string[] {
  const frames: string[] = [];
  for (let i = 1; i <= seq.frameCount; i++) {
    const num = String(i).padStart(3, '0');
    frames.push(`${seq.folder}frame_${num}.webp`);
  }
  return frames;
}
