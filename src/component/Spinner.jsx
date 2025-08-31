function Spinner() {
  return (
    <div className="h-[80vh] inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-teal-500 border-t-transparent animate-spin"></div>
        <div className="absolute inset-3 rounded-full border-4 border-orange-500 border-t-transparent animate-spin [animation-duration:1.2s]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
        </div>
      </div>
      <span className="sr-only">Loading recipes…</span>
    </div>
  );
}

export default Spinner;
