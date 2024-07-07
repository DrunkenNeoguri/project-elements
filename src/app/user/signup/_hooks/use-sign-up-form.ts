import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useSignUpForm() {
  const [signUpData, setSignUpData] = useState<Record<string, string>>({});
  const [modalMsg, setModalMsg] = useState<string | undefined>();
  const router = useRouter();

  return { signUpData, setSignUpData, modalMsg, setModalMsg, router };
}
