import React from 'react';
import { PageTab } from '../types';
import { Network, Database, Cpu, Lock, CheckCircle, ArrowRight } from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onOpenConsultation
}) => {
  const blueprints = [
    {
      title: "Enterprise Server Modernisation & High Availability",
      category: "Infrastructure",
      icon: Network,
      challenge: "Ageing on-premise hardware leading to single-points-of-failure, unplanned downtime, and slow recovery cycles.",
      solution: "Engineered redundant hyperconverged virtualization clusters with automated live-migration failover and isolated off-site snapshots.",
      outcomes: [
        "99.9% target SLA availability across critical business systems",
        "Sub-15-minute Recovery Time Objective (RTO) for disaster recovery scenarios",
        "Centralized rack monitoring and preventative hardware alerting"
      ]
    },
    {
      title: "Cloud Migration & Distributed Microservices",
      category: "Software Architecture",
      icon: Database,
      challenge: "Tightly coupled monolithic applications struggling to handle peak user concurrency and rapid deployment cycles.",
      solution: "Decoupled domain services into containerized microservices communicating via resilient messaging queues and secure API gateways.",
      outcomes: [
        "Horizontal autoscaling during high-traffic load spikes",
        "Zero-downtime rolling deployments via automated CI/CD pipelines",
        "Isolated fault domains preventing application-wide service disruptions"
      ]
    },
    {
      title: "Zero-Trust Network Hardening & Access Control",
      category: "Cybersecurity",
      icon: Lock,
      challenge: "Dispersed workstations and unsegmented internal networks exposing sensitive corporate data to lateral movement risks.",
      solution: "Structured micro-segmented VLANs, multi-factor hardware keys, Role-Based Access Control (RBAC), and centralized audit logging.",
      outcomes: [
        "Complete network visibility and automated perimeter anomaly detection",
        "Strict adherence to UK GDPR data access governance standards",
        "Hardened endpoint encryption across all corporate devices"
      ]
    },
    {
      title: "Automated Data Pipelines & System Integration",
      category: "Business Automation",
      icon: Cpu,
      challenge: "Manual spreadsheet transfers and fractured legacy databases consuming engineering hours and generating errors.",
      solution: "Custom webhook listeners and scheduled ETL pipelines reconciling data in real time with automated schema validation.",
      outcomes: [
        "Elimination of repetitive manual record reconciliation",
        "Single-source-of-truth database synchronization across operations",
        "Instant error alerting for inconsistent data payloads"
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <span>Engineering Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-6">
            Architectural Solutions &amp; Use Cases
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Examine how our consultants address complex technical bottlenecks across server rooms, cloud platforms, software engineering, and corporate security.
          </p>
        </div>

        {/* Blueprint List */}
        <div className="space-y-10 mb-20">
          {blueprints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-navy-900 border border-slate-800 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      {item.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1">
                      {item.title}
                    </h2>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-navy-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-sm">
                  <div className="p-5 rounded-2xl bg-navy-950/60 border border-slate-800/80">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                      The Challenge / Problem Space
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {item.challenge}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-navy-950/60 border border-slate-800/80">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                      The Technical Solution Blueprint
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="space-y-1.5">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Target Engineering Outcomes:
                    </h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {item.outcomes.map((o, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 shrink-0"
                  >
                    <span>Consult on Similar Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="p-10 rounded-3xl bg-navy-900 border border-slate-800 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white font-heading mb-3">
            Have a Bespoke Infrastructure Challenge?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Our engineers can review your current topologies and formulate a detailed scoping document.
          </p>
          <button
            onClick={onOpenConsultation}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-navy-950 font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md"
          >
            Request Architecture Review
          </button>
        </div>

      </div>
    </div>
  );
};
