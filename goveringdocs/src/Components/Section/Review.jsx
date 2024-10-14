import { reviews } from "../../lib/Database/Index";
import Container from "../Common/Container";
import ReviewCard from "../Common/ReviewCard";
import SectionTitle from "../Common/SectionTitle";
import { StarIcon } from "../Icon/StarIcon";

function Review() {
    return (
        <section className="my-[150px] bg-[#F6F6F6] py-20">
            <Container>
                <SectionTitle className="text-center" gradient="Our Client">
                    Reviews From
                </SectionTitle>
                <div className="flex-col md:flex-row flex justify-between pt-10 gap-[93px] ">
                    <div className="basis-1/2 space-y-4 ">
                        {reviews.map((review, i) => (
                            <ReviewCard key={i} {...review} />
                        ))}
                    </div>
                    <div className="basis-1/2 self-center space-y-[30px]">
                        <h1 className="text-[20px] md:text-[30px] font-bold">
                            It Was A Amazing Experiance!
                        </h1>
                        <div className="flex justify-start gap-1">
                            {[...Array(5)].map((_, index) => (
                                <StarIcon key={index} />
                            ))}
                        </div>
                        <p className="text-accent max-w-[500px]">
                            The AI features saved us countless hours and ensured
                            our compliance was spot on.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Review;
