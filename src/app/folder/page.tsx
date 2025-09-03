"use client"

export default function GradientDemo() {
  return (
    <div className="flex flex-wrap gap-4 p-8">
      <div className="demo circle-25">circle 25%</div>
      <div className="demo circle-50">circle 50%</div>
      <div className="demo circle-100">circle 100%</div>
      <div className="demo ellipse-60-30">ellipse 60% 30%</div>

      <style jsx>{`
        .demo {
          width: 300px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #666;
          color: white;
          font-size: 14px;
        }
        .circle-25 {
          background: radial-gradient(circle 25% at center, red, transparent);
        }
        .circle-50 {
          background: radial-gradient(circle 50% at center, orange, transparent);
        }
        .circle-100 {
          background: radial-gradient(circle 100% at center, green, transparent);
        }
        .ellipse-60-30 {
          background: radial-gradient(ellipse 60% 30% at center, blue, transparent);
        }
      `}</style>
    </div>
  );
}
