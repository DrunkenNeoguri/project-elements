import { Container, Header } from "./styles/style";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
