import { useState } from "react";

export default function useVerified() {
  const [isOpen, setIsOpen] = useState(false);

  return { isOpen, setIsOpen };
}
