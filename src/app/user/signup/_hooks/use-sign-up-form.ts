import { useState } from "react";

export default function useSignUpForm() {
  const [signUpData, setSignUpData] = useState<Record<string, string>>({});

  return { signUpData, setSignUpData };
}
