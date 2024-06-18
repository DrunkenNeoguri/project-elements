export default function LoginLangBox() {
  return (
    <div className="flex gap-1 mt-6 w-full justify-center items-center">
      <span className="font-light10 text-black">언어 - </span>
      <button
        type="button"
        className="bg-transparent outline-none inline-flex font-bold10 text-primary"
      >
        English
      </button>
      <span className="font-light10 text-black"> | </span>
      <button
        type="button"
        className="bg-transparent outline-none inline-flex font-bold10 text-primary"
      >
        한국어
      </button>
      <span className="font-light10 text-black"> | </span>
      <button
        type="button"
        className="bg-transparent outline-none inline-flex font-bold10 text-primary"
      >
        日本語
      </button>
    </div>
  );
}
