import { cn } from "../../lib/utilities/Index";
function Button({ children, className }) {
    return (
        <>
            <button className={cn(
                "py-3 sm:py-4 px-3.5 sm:px-[25px]  rounded-full bg-gradient-primary opacity-90 hover:opacity-100 transition-all delay-50", className
            )}>
                {children}
            </button>
        </>
    )
}

export default Button