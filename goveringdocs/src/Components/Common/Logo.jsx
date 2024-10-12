import React from "react";
import { cn } from "../../lib/utilities/Index";

function Logo({ children, className }) {
    return (
        <h1
            className={cn(
                "text-[40px] leading-[50px] font-bold font-space-grotask",
                className
            )}
        >
            {children}
        </h1>
    );
}

export default Logo;
