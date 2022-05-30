import React, {forwardRef, useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = forwardRef(({}, ref) => {
    return (
        <section id="about" className="about" ref={ref}>
            <Container className="text-center">
            <h2>About Bell Theme</h2>
            <p>
                Voluptua scripserit per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, sed unum convenire id. Ut cum nisl moderatius, per nihil dicant commodo an. Eum tacimates erroribus ad. Atqui feugiat euripidis ea pri, sed veniam tacimates ex. Menandri
                temporibus an duo.
            </p>

            <Row className="stats-row">
                <div className="stats-col text-center col-md-3 col-sm-6">
                <div className="circle">
                    <span className="stats-no" data-toggle="counter-up">232</span> Satisfied Customers
                </div>
                </div>

                <div className="stats-col text-center col-md-3 col-sm-6">
                <div className="circle">
                    <span className="stats-no" data-toggle="counter-up">79</span> Released Projects
                </div>
                </div>

                <div className="stats-col text-center col-md-3 col-sm-6">
                <div className="circle">
                    <span className="stats-no" data-toggle="counter-up">1,463</span> Hours Of Support
                </div>
                </div>

                <div className="stats-col text-center col-md-3 col-sm-6">
                <div className="circle">
                    <span className="stats-no" data-toggle="counter-up">15</span> Hard Workers
                </div>
                </div>
            </Row>
            </Container>
        </section>
    )
});

export default About;