import { cn } from "../../lib/utilities/Index";

function Container({ children, className }) {
    return (
        <div className={cn("w-full max-w-screen-xl mx-auto px-[30px] py-[20px]", className)}>
            {children}
        </div>
    );
}

export default Container;
