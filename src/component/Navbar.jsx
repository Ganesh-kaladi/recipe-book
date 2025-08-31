function Navbar() {
  return (
    <header class="bg-gradient-to-r from-orange-500 to-teal-500 shadow-lg h-[64px]">
      <div class="w-[90%] h-full mx-auto flex items-center gap-2">
        <img src="/recipe.png" className="w-[64px] h-[64px] " />
        <h1 class="w-[50%] text-2xl font-extrabold text-white tracking-wider drop-shadow-lg">
          Recipe&nbsp;
          <span class="text-orange-200">Book</span>
        </h1>
        <div className="w-[50%]"></div>
      </div>
    </header>
  );
}

export default Navbar;
