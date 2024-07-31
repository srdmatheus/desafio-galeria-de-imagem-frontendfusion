import { ComponentPropsWithoutRef, useState } from "react";

import { cn } from "../../lib/utils";

type ImageProps = ComponentPropsWithoutRef<"img"> & {
  lazy?: boolean;
};

export const Image = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const { className, src, alt, lazy = true, ...rest } = props;

  return (
    <figure className={cn("overflow-hidden", isLoading && "animate-pulse")}>
      <img
        className={cn(
          "object-cover transition-[scale,filter] duration-500",
          isLoading && "scale-[1.02] blur-lg",
          className
        )}
        src={src}
        alt={alt}
        loading={lazy ? "lazy" : undefined}
        onLoad={() => setIsLoading(false)}
        {...rest}
      />
    </figure>
  );
};
