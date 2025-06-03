"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();
  const [position, setPosition] = useState<ToasterProps["position"]>("top-right");

  useEffect(() => {
    const updatePosition = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setPosition("bottom-center");
      } else {
        setPosition("top-right");
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <Sonner
      position={props.position || position}
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      {...props}
    />
  );
};

export { Toaster };
