import { cn } from "../../lib/utilities/Index"

function Gradiant({children, className}) {
  return (
    <h1 className={cn("bg-gradient-to-b text-2xl md:text-[35px] lg:text-[46px] from-[#00d2ff] to-[#059dbe] text-transparent bg-clip-text leading-[58.7px] inline", className)}>
      {children} 
    </h1>
  )
}

export default Gradiant
