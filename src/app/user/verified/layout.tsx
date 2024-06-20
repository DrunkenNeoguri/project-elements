export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col w-full justify-center items-center">
      {children}
    </section>
  );
}
