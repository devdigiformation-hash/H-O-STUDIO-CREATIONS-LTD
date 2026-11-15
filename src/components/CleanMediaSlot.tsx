import React from 'react';
import { Server, Database, Network, ShieldCheck, Terminal, Cpu, Users, Layers, Activity } from 'lucide-react';

interface CleanMediaSlotProps {
  slotId: string;
  title: string;
  className?: string;
}

export const CleanMediaSlot: React.FC<CleanMediaSlotProps> = ({
  slotId,
  title,
  className = ''
}) => {
  return (
    <div
      className={`relative w-full h-full bg-gradient-to-br from-navy-950 via-slate-900 to-navy-950 overflow-hidden flex items-center justify-center p-6 sm:p-8 select-none ${className}`}
      role="img"
      aria-label={`${title} — Reserved Media Slot for Future IT Footage`}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slot Content Based on Identifier */}
      {slotId === 'VIDEO_02' && (
        <div className="relative z-10 w-full max-w-md mx-auto flex flex-col justify-between h-full">
          {/* Slot Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold tracking-wider uppercase text-[11px]">
              <Server className="w-4 h-4 text-cyan-400" />
              <span>Infrastructure Topology • Tier 3 Standards</span>
            </div>
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEMS ACTIVE
            </span>
          </div>

          {/* Server Rack Simulation Graphics */}
          <div className="my-auto py-4 space-y-2.5">
            {[
              { label: 'Blade Array A1 — Core VLAN Gateway', status: 'Primary', load: '32%', color: 'border-cyan-500/40' },
              { label: 'Blade Array A2 — SAN Storage Cluster', status: 'Redundant', load: '45%', color: 'border-blue-500/40' },
              { label: 'Blade Array B1 — Bare-Metal Hypervisor', status: 'Active', load: '61%', color: 'border-indigo-500/40' },
              { label: 'Disaster Recovery Vault — Offsite Sync', status: 'Verified', load: '100%', color: 'border-emerald-500/40' }
            ].map((rack, idx) => (
              <div
                key={idx}
                className={`p-2.5 sm:p-3 rounded-xl bg-navy-950/90 border ${rack.color} flex items-center justify-between gap-3 text-xs shadow-sm`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <span className="font-mono text-slate-200 text-[11px] sm:text-xs truncate">{rack.label}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0 text-[11px]">
                  <span className="text-slate-400 hidden sm:inline">{rack.status}</span>
                  <span className="font-mono text-cyan-300 font-bold">{rack.load}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Slot Metadata Badge */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Reserved Visual Slot • Generic Server B-Roll</span>
            </span>
            <span className="text-slate-500 font-mono">16:9 HD</span>
          </div>
        </div>
      )}

      {slotId === 'VIDEO_03' && (
        <div className="relative z-10 w-full max-w-md mx-auto flex flex-col justify-between h-full">
          {/* Slot Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold tracking-wider uppercase text-[11px]">
              <Network className="w-4 h-4 text-cyan-400" />
              <span>Microservices &amp; Cloud API Architecture</span>
            </div>
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              CI/CD DEPLOYED
            </span>
          </div>

          {/* Architecture Nodes Schematic */}
          <div className="my-auto py-4">
            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="p-2.5 rounded-xl bg-navy-950/90 border border-cyan-500/40 flex flex-col items-center justify-center">
                <Layers className="w-5 h-5 text-cyan-400 mb-1" />
                <span className="font-mono text-[10px] text-slate-200 font-bold">API Gateway</span>
                <span className="text-[9px] text-slate-400">Zero-Trust</span>
              </div>
              <div className="p-2.5 rounded-xl bg-navy-950/90 border border-blue-500/40 flex flex-col items-center justify-center">
                <Cpu className="w-5 h-5 text-blue-400 mb-1" />
                <span className="font-mono text-[10px] text-slate-200 font-bold">Domain Pods</span>
                <span className="text-[9px] text-slate-400">Autoscaled</span>
              </div>
              <div className="p-2.5 rounded-xl bg-navy-950/90 border border-indigo-500/40 flex flex-col items-center justify-center">
                <Database className="w-5 h-5 text-indigo-400 mb-1" />
                <span className="font-mono text-[10px] text-slate-200 font-bold">PostgreSQL</span>
                <span className="text-[9px] text-slate-400">Replicated</span>
              </div>
            </div>

            <div className="mt-3 p-3 rounded-xl bg-navy-950/70 border border-slate-800 text-xs">
              <div className="flex items-center justify-between font-mono text-[11px] text-slate-300 mb-1">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Deployment Pipeline</span>
                </span>
                <span className="text-emerald-400 font-bold">All Tests Passed</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Automated TypeScript builds, microservice orchestration, zero-downtime rolling releases.
              </p>
            </div>
          </div>

          {/* Slot Metadata Badge */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Reserved Visual Slot • Generic Engineering B-Roll</span>
            </span>
            <span className="text-slate-500 font-mono">16:9 HD</span>
          </div>
        </div>
      )}

      {slotId === 'VIDEO_04' && (
        <div className="relative z-10 w-full max-w-md mx-auto flex flex-col justify-between h-full">
          {/* Slot Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold tracking-wider uppercase text-[11px]">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Engineering Recruitment &amp; Roles</span>
            </div>
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              OPEN VACANCIES
            </span>
          </div>

          {/* Vacancy Highlight Cards */}
          <div className="my-auto py-4 space-y-2.5">
            <div className="p-3 rounded-xl bg-navy-950/90 border border-cyan-500/40 flex items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Technical Role</span>
                <h4 className="text-white font-bold text-xs sm:text-sm">IT Technician</h4>
                <p className="text-[11px] text-slate-400">Infrastructure &amp; Systems Diagnostics</p>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-cyan-950 text-cyan-400 text-xs font-bold border border-cyan-500/30 shrink-0">
                £35,000 – £45,000
              </span>
            </div>

            <div className="p-3 rounded-xl bg-navy-950/90 border border-blue-500/40 flex items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Commercial Role</span>
                <h4 className="text-white font-bold text-xs sm:text-sm">Business Development Manager</h4>
                <p className="text-[11px] text-slate-400">Enterprise Client Strategy &amp; Partnerships</p>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-blue-950 text-blue-300 text-xs font-bold border border-blue-500/30 shrink-0">
                £50,000 – £60,000
              </span>
            </div>
          </div>

          {/* Slot Metadata Badge */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Reserved Visual Slot • UK Recruitment B-Roll</span>
            </span>
            <span className="text-slate-500 font-mono">16:9 HD</span>
          </div>
        </div>
      )}

      {/* Subtle Corner Status Accent */}
      <div className="absolute top-2 right-2 flex items-center gap-1 opacity-40 hover:opacity-100 transition-opacity pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        <span className="text-[9px] font-mono text-cyan-400 uppercase">Slot Ready</span>
      </div>
    </div>
  );
};
