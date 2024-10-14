import { cn } from "../../lib/utilities/Index";
import Gradiant from "./Gradiant";


function SectionTitle({children, className, gradient}) {
  return (
      <h1
          className={cn(
              "font-space-grotask font-bold text-2xl md:text-[35px] lg:text-[46px] leading-[58.7px]",
              className
          )}
      >
          {children} <Gradiant>{gradient}</Gradiant>
      </h1>
  );
}

export default SectionTitle; 
