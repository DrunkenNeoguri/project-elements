import { Container } from "./styles/style";

export function Layout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}
