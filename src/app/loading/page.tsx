import React from "react";
import { FlipWords } from "../../components/ui/flip-words"

export default function Loading() {
  const words = ["tracks", "genres", "artists", "albums","oh? frank ocean?", "your great music taste"];

  return (
    <div className=" flex items-center justify-center min-h-screen">
      <div className="text-4xl mx-auto font-medium text-neutral-600 dark:text-neutral-400">
        Analyzing
        <FlipWords words={words} /> <br />
        making a profile tailored to your listening activity
      </div>
    </div>
  );
}
