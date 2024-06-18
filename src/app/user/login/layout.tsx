export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col px-4 justify-center items-center">
      {children}
    </section>
  );
}
