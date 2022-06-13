import React from "react";

import Footer from "./Footer";
import Header from "./Header";
// import LoginDetails from "../context/LoginContext";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../assets/imgs/helpline.jpg";
import pic2 from "../assets/imgs/AmbulanceSlide.jpg";
import pic3 from "../assets/imgs/medical-team.jpg";
import pic4 from "../assets/imgs/medicalLab.jpg";

import "../assets/css/main.css";

const HomePage = () => {

    return (
        <React.Fragment>
            <Header />
            <div className={'our-services'}>
                <h1 className={'carousel-heading'}>Our Services</h1>
                <Carousel className={'carousel'} variant="dark">
                    <Carousel.Item>

                        <img
                            className="d-block w-100"
                            src={pic1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className={'captions'}><span>24/7 Helpline Service</span></h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className={'captions'}><span>Ambulance Service</span></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className={'captions'}><span>Highly Qualified Medical Team</span></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic4}
                            alt="Fourth Slide"
                        />

                        <Carousel.Caption>
                            <h3 className={'captions'}><span>Medical Laboratory</span></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* <div className={"services"} id={"services"}>
				<h1 id={"services-head"}>Our Services</h1>
				<div className={"container1"}>
					<div className={"service"}>
						
						<h4>Emergencies</h4>
					</div>
					<div className={"service"}>
						
						<h4>Ambulance</h4>
					</div>
					<div className={"service"}>
						
						<h4>Medical Kit</h4>
					</div>
				</div>
				<div className={"container2"}>
					<div className={"service"}>
						
						<h4>Wheelchair</h4>
					</div>
					<div className={"service"}>
						
						<h4>Laboratory</h4>
					</div>
					<div className={"service"}>
						
						<h4>
							24x7
							<br />
							Helpline
						</h4>
					</div>
				</div>
			</div> */}

            <Footer />
        </React.Fragment>
    );
};

export default HomePage;
