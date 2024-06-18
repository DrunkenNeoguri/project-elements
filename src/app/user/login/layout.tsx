export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col px-[15px] justify-center items-center">
      {children}
    </section>
  );
}
