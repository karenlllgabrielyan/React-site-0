import React, {Component} from 'react';
import {Col, Container, Nav, NavLink, Row} from "react-bootstrap";
import Tab from "react-bootstrap/Tab";

class About extends Component {
    render() {
        return (
            <Container className="mt-5">
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-5">
                                <Nav.Item>
                                    <NavLink eventKey="first">Design</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey="second">Team</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey="third">Programming</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey="fourth">Frameworks</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink eventKey="fifth">Libraries</NavLink>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9} className="mt-5">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img src="https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg"/>
                                    <p>The history of the British penny (​1⁄240 of a pound sterling) from 1901 to 1970 saw it remain a large bronze coin throughout that time, with the obverse depicting the monarch and the reverse Britannia. The obverse from 1902 to 1910 featured George William de Saulles's depiction of Edward VII, followed by Bertram Mackennal's portrait of George V. </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://apluscourses.com/wp-content/uploads/2020/06/coding-isometric-11.png"/>
                                    <p>The history of the British penny (​1⁄240 of a pound sterling) from 1901 to 1970 saw it remain a large bronze coin throughout that time, with the obverse depicting the monarch and the reverse Britannia. The obverse from 1902 to 1910 featured George William de Saulles's depiction of Edward VII, followed by Bertram Mackennal's portrait of George V. </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://itsjdigital.com/wp-content/uploads/2020/07/web-developer-banner-1.jpg"/>
                                    <p>The history of the British penny (​1⁄240 of a pound sterling) from 1901 to 1970 saw it remain a large bronze coin throughout that time, with the obverse depicting the monarch and the reverse Britannia. The obverse from 1902 to 1910 featured George William de Saulles's depiction of Edward VII, followed by Bertram Mackennal's portrait of George V. </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://apextechinc.com/wp-content/uploads/2019/07/webdevelopment-banner.png"/>
                                    <p>The history of the British penny (​1⁄240 of a pound sterling) from 1901 to 1970 saw it remain a large bronze coin throughout that time, with the obverse depicting the monarch and the reverse Britannia. The obverse from 1902 to 1910 featured George William de Saulles's depiction of Edward VII, followed by Bertram Mackennal's portrait of George V. </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://templateheart.com/wp-content/uploads/2020/02/1_pE2fOVDikEUwiQJlh4ggzg.jpeg"/>
                                    <p>The history of the British penny (​1⁄240 of a pound sterling) from 1901 to 1970 saw it remain a large bronze coin throughout that time, with the obverse depicting the monarch and the reverse Britannia. The obverse from 1902 to 1910 featured George William de Saulles's depiction of Edward VII, followed by Bertram Mackennal's portrait of George V. </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                </Tab.Container>
            </Container>
        );
    }
}

export default About;