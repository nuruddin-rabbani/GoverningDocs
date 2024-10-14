import LeftArrow from "../Icon/LeftArrow";
import RightArrow from "../Icon/RightArrow";
import Gradiant from "./Gradiant";
import SectionTitle from "./SectionTitle";

function ProblemHeading() {
    return (
        <div className="flex justify-between items-center">
            <SectionTitle>
                Problem & <Gradiant>Solution</Gradiant>
            </SectionTitle>
            <div className="flex justify-center items-center gap-3">
                <LeftArrow className="bg-[#ddd] size-8 md:size-10  p-2 rounded-full" />
                <RightArrow className="bg-gradient-primary size-8 md:size-10 p-2 rounded-full text-white" />
            </div>
        </div>
    );
}

export default ProblemHeading;
