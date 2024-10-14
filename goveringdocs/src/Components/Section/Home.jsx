import React from "react";
import Button from "../Common/Button";
import Container from "../Common/Container";

function Home() {
    return (
        <section className="px-5 md:px-0 py-[80px] lg:py-[142px]">
            <Container className="p-0 flex flex-col flex-col-reverse lg:flex-row gap-24 justify-center lg:justify-between items-center ">
                <div className="basis-1/2">
                    <h1 className="text-[35px] lg:text-[60px] font-bold font-space-grotask leading-14 md:leading-[76.56px] ">
                        Simplify your real estate document analysis
                    </h1>
                    <p className="text-base lg:text-[20px] font-medium text-[#2D2D2D] py-4 md:py-[30px]">
                        Streamline, Automate, and Secure Your Business Documents
                        with Ai GoverningDocs
                    </p>
                    <Button className="text-white">Get Started Today</Button>
                </div>
                <div className="basis-1/2">
                    <img
                        className="mx-auto lg:ms-auto"
                        src="/Img/HeroSide.png"
                        alt=""
                    />
                </div>
            </Container>
        </section>
    );
}

export default Home;
