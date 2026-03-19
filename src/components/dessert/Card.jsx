export default function Card({ title, text }) {
  return (
    <div className="
      w-[260px] h-[260px] backdrop-blur-md bg-white/10 border border-white/20 
      rounded-2xl p-6 shadow-lg  gap-6 flex flex-col justify-center 
      items-center  overflow-hidden">

      <h3 className="font-semibold text-white text-lg">{title}</h3>

      <p className="text-base text-white mt-3 drop-shadow-[0_2px_7px_rgba(0,0,0,1)]">
        {text}
      </p>

    </div>
  );
}