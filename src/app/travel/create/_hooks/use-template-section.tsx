import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../providers/auth-provider";

export default function useTemplateSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const user = useContext(AuthContext);
  const router = useRouter();

  return { isOpen, setIsOpen, user, router };
}
