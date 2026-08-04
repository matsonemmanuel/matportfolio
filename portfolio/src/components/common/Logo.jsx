function Logo() {
  return (
    <div
      className="
        flex
        items-center
        font-black
        tracking-tight
        select-none
        whitespace-nowrap
        text-3xl
        sm:text-4xl
      "
    >
      <span className="text-cyan-400">&lt;</span>

      <span className="text-white">
        EM
      </span>

      <span className="text-cyan-400">/&gt;</span>
    </div>
  );
}

export default Logo;