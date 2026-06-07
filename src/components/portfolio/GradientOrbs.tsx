export function GradientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Star field */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.6) 50%, transparent 100%),\
             radial-gradient(1px 1px at 70% 80%, rgba(255,255,255,0.5) 50%, transparent 100%),\
             radial-gradient(1.5px 1.5px at 40% 60%, rgba(200,200,255,0.4) 50%, transparent 100%),\
             radial-gradient(1px 1px at 85% 20%, rgba(255,255,255,0.5) 50%, transparent 100%),\
             radial-gradient(1px 1px at 10% 85%, rgba(255,255,255,0.4) 50%, transparent 100%)",
          backgroundSize: "600px 600px, 800px 800px, 500px 500px, 700px 700px, 900px 900px",
        }}
      />

      {/* Drifting orbs */}
      <div
        className="absolute -top-40 -left-40 size-[36rem] rounded-full blur-[120px] opacity-50 animate-orb-drift"
        style={{ background: "radial-gradient(circle, var(--cosmic-violet) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 size-[32rem] rounded-full blur-[120px] opacity-40 animate-orb-drift"
        style={{
          background: "radial-gradient(circle, var(--cosmic-cyan) 0%, transparent 70%)",
          animationDelay: "-7s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 size-[34rem] rounded-full blur-[140px] opacity-35 animate-orb-drift"
        style={{
          background: "radial-gradient(circle, var(--cosmic-indigo) 0%, transparent 70%)",
          animationDelay: "-14s",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),\
             linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 40%, rgba(5,5,12,0.7) 100%)",
        }}
      />
    </div>
  );
}
