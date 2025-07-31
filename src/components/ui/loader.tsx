export default function ClassicLoader() {
  return (
    <div className="relative flex items-center justify-center h-32 w-32">
      {/* Grand cercle */}
      <div className="absolute h-32 w-32 animate-spin duration-[2500ms] rounded-full border-4 border-t-transparent border-white opacity-30" />
      {/* Petit cercle au milieu */}
      <div className="absolute h-16 w-16 animate-spin duration-1000 rounded-full border-4 border-t-transparent border-white opacity-60" />
    </div>
  );
}