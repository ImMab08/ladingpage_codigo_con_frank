"use client"

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Green outlined shapes */}
      <div className="absolute top-1/4 right-1/4 w-12 h-12 border-2 border-primary rotate-45 animate-float opacity-60" />
      <div className="absolute top-1/3 right-1/6 w-0 h-0 border-l-[15px] border-l-transparent border-b-[26px] border-b-primary border-r-[15px] border-r-transparent animate-float-delayed opacity-60" />
      <div className="absolute top-2/3 right-1/3 w-10 h-10 rounded-full border-2 border-primary animate-float opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-8 h-8 rotate-45 opacity-40">
        <div className="w-full h-full relative">
          <span className="absolute inset-0 flex items-center justify-center text-primary text-2xl font-bold">×</span>
        </div>
      </div>
      
      {/* Gray outlined shapes */}
      <div className="absolute top-1/2 right-1/5 w-8 h-8 border border-muted-foreground/30 rotate-12 animate-float-slow" />
      <div className="absolute bottom-1/3 right-1/2 w-6 h-6 rounded-full border border-muted-foreground/30 animate-float-delayed" />
      <div className="absolute top-1/5 left-1/4 w-6 h-6 rotate-45 border border-muted-foreground/20 animate-float" />
      <div className="absolute bottom-1/5 left-1/3 w-4 h-4 opacity-20">
        <span className="text-muted-foreground text-xl">+</span>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
