import Container from "../Common/Container";
import ProblemCard from "../Common/ProblemCard";
import ProblemHeading from "../Common/ProblemHeading";

function ProblemAndSolution() {
    return (
        <section className="py-[100px]">
            <Container>
                <ProblemHeading />
                <ProblemCard />
            </Container>
        </section>
    );
}

export default ProblemAndSolution;
