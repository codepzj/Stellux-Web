"use client";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@heroui/button";

const CopyButton = ({ id }: { id: string }) => {
  const [copied, setCopited] = useState(false);

  const onCopy = async () => {
    try {
      setCopited(true);
      const text = document.getElementById(id)!.innerText;
      await navigator.clipboard.writeText(text);
      setTimeout(() => {
        setCopited(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      onPress={onCopy}
      isIconOnly
      aria-label="Copy"
      variant="light"
      className="p-0 w-8 h-8 min-w-8 min-h-8 rounded-md cursor-pointer hover:bg-default-100 dark:hover:bg-default-500/10"
      disableAnimation
    >
      {copied ? <Check color="green" size={16} /> : <Copy size={16} />}
    </Button>
  );
};

export default CopyButton;