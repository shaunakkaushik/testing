import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import WhyPart from "./WhyPart";
import Steps from "./Step";
import Faq from "./Faq";
import Footer from "./Footer";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, MoveIn, MoveOut, ZoomIn} from "react-scroll-motion";

function HomePage(){

    const ZoomInScrollOut = batch(FadeIn(), ZoomIn());

    return(
    <>
        <NavBar />
        <ScrollContainer>
            <ScrollPage page={0}>
                <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                    <Jumbotron />
                </Animator>
            </ScrollPage>

            <ScrollPage page={1}>
                <Animator animation={MoveIn(-500, 0)}>
                    <WhyPart />
                </Animator>
            </ScrollPage>

            <ScrollPage page={2}>
                <Animator  animation={MoveIn(500, 0)}>
                    <Steps />
                </Animator>
            </ScrollPage>

            <ScrollPage page={3}>
                <Animator animation={ZoomInScrollOut}>
                    <Faq />
                </Animator>
            </ScrollPage>
        </ScrollContainer>

        <Footer />
    </>);
}

export default HomePage;