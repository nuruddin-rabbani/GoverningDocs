import { ProblemCardInfo } from "../../lib/Database/Index";

function ProblemCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] pt-[40px]">
            {ProblemCardInfo.map(({ img, title, des1, des2 }) => (
                <div className="shadow-lg p-5 rounded-xl">
                    <img src={img} alt="Image" />
                    <div>
                        <h3 className="py-5 font-bold" q>
                            {title}
                        </h3>
                        <p>{des1}</p>
                        <p>{des2}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProblemCard;
