export function BackgroundStarts() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Estrellas pequeñas */}
      <circle cx="5%" cy="10%" r="1" fill="white" opacity="0.4" />
      <circle cx="12%" cy="30%" r="1.2" fill="white" opacity="0.5" />
      <circle cx="18%" cy="75%" r="0.8" fill="white" opacity="0.3" />
      <circle cx="50%" cy="45%" r="1" fill="white" opacity="0.4" />

      {/* Estrellas medianas */}
      <circle cx="8%" cy="50%" r="1.6" fill="white" opacity="0.6" />
      <circle cx="15%" cy="90%" r="1.8" fill="white" opacity="0.7" />
      <circle cx="20%" cy="40%" r="1.5" fill="white" opacity="0.6" />
      <circle cx="53%" cy="20%" r="1.6" fill="white" opacity="0.5" />
      <circle cx="58%" cy="90%" r="1.8" fill="white" opacity="0.7" />

      {/* Estrellas grandes (pocas, para contraste) */}
      <circle cx="10%" cy="65%" r="2.2" fill="white" opacity="0.8" />
      <circle cx="25%" cy="20%" r="2" fill="white" opacity="0.7" />
      <circle cx="40%" cy="90%" r="2.4" fill="white" opacity="0.85" />
      <circle cx="85%" cy="70%" r="2.2" fill="white" opacity="0.75" />

      {/* Lado derecho */}
      <circle cx="60%" cy="10%" r="1" fill="white" opacity="0.4" />
      <circle cx="75%" cy="40%" r="1.6" fill="white" opacity="0.6" />
      <circle cx="78%" cy="90%" r="1.8" fill="white" opacity="0.7" />
      <circle cx="82%" cy="25%" r="1.2" fill="white" opacity="0.5" />
      <circle cx="88%" cy="50%" r="1.5" fill="white" opacity="0.6" />
    </svg>
  );
}
