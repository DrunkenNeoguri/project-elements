import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useVerified() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return { isOpen, setIsOpen, router };
}
