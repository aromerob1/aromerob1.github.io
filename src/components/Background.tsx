export default function Background() {
  return (
    <>
      {/* fixed ambient glows */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--bg)]">
        <div
          className="glow animate-float"
          style={{
            width: "44rem",
            height: "44rem",
            top: "-12rem",
            right: "-8rem",
            background: "var(--accent)",
          }}
        />
        <div
          className="glow"
          style={{
            width: "32rem",
            height: "32rem",
            top: "30%",
            left: "-10rem",
            background: "var(--accent-2)",
            opacity: 0.1,
          }}
        />
      </div>
      <div className="grain" />
    </>
  );
}
