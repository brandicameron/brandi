import { useState } from 'react';

export function useCopytoClipboard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    setCopied(true);
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      console.log(e);
    }
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return { copyToClipboard, copied };
}
