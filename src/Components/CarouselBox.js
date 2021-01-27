import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import mountainImg from '../assets/mountain.jpg';
import jungleImg from '../assets/jungle.jpg';

class CarouselBox extends Component {
    render() {
        return (
            <div>
               <Carousel>
                   {/*--------------------------------------------Item 1*/}
                   <Carousel.Item>
                       <img
                       className="d-block w-100"
                       src={mountainImg}
                       alt="Mountain"
                       />
                       <Carousel.Caption>
                           <h3>Mountain</h3>
                           <p>Lorem Ipsum</p>
                       </Carousel.Caption>
                   </Carousel.Item>
                   {/*--------------------------------------------Item 2*/}
                   <Carousel.Item>
                       <img
                           className="d-block w-100"
                           src={jungleImg}
                           alt="Mountain"
                       />
                       <Carousel.Caption>
                           <h3>Jungle</h3>
                           <p>Lorem Ipsum</p>
                       </Carousel.Caption>
                   </Carousel.Item>
                   {/*--------------------------------------------Item 3*/}
                   <Carousel.Item>
                       <img
                           className="d-block w-100"
                           src={mountainImg}
                           alt="Mountain"
                       />
                       <Carousel.Caption>
                           <h3>Mountain</h3>
                           <p>Lorem Ipsum</p>
                       </Carousel.Caption>
                   </Carousel.Item>
               </Carousel>
            </div>
        );
    }
}

export default CarouselBox;