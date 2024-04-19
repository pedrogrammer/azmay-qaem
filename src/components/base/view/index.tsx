import { HTMLAttributes, forwardRef } from "react";

interface ViewProps extends HTMLAttributes<HTMLDivElement> {}

const View = forwardRef<HTMLDivElement, ViewProps>(
  ({ children, style, ...rest }, ref) => {
    return (
      <div
        {...rest}
        ref={ref}
        style={{
          display: "flex",
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
);

export default View;
