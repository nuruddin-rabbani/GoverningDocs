import { ProblemCardInfo } from "../../lib/Database/Index";

function ProblemCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] pt-[40px]">
            {ProblemCardInfo.map(({ img, title, des1, des2 }) => (
                <div className="shadow-lg p-5 rounded-xl hover:bg-primary group transition-color duration-200">
                    <img src={img} alt="Image" />
                    <div>
                        <h3 className="py-5 font-bold group-hover:text-white">
                            {title}
                        </h3>
                        <div className="group-hover:text-white">
                            <p>{des1}</p>
                            {des2 && <p>{des2}</p>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProblemCard;
