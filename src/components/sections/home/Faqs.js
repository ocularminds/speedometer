import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'

class Faqs extends Component {
    render() {
        return (
            <section className="section-padding loan-faqs-sec bg-light-white findrate-top">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-2 col-lg-8">
                            <div className="findratesec">
                                <h3 className="text-custom-black">Compare personal loan rates in 2 minutes</h3>
                                <div className="input-form-box">
                                    <form>
                                        <div className="input-group">
                                            <input type="email" name="#" className="form-control form-control-custom" placeholder="Enter amount ($1,000 to $100,000)" />
                                            <div className="input-group-append">
                                                <button type="submit" className="btn-first btn-submit-fill">Find My Rate</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 align-self-center">
                            <div className="section-header">
                                <div className="section-heading">
                                    <h3 className="text-custom-black fw-700">Our FAQs</h3>
                                    <div className="section-description">
                                        <p className="text-light-white no-margin">Still have questions?
                <br />Our Client Success Team is always here to help</p>
                                    </div>
                                </div>
                            </div>
                            <div className="loan-faqs-leftside mb-md-80">
                                <div className="support-card mb-xl-20">
                                    <div className="support-user">
                                        <img src="assets/images/faq-user.png" className="image-fit" alt="img" />
                                    </div>
                                    <div className="links text-center mb-xl-20"> <Link to="/">Support@domain.com</Link>
                                        <Link to="/">123-456-7890</Link>
                                        <Link to="/">Chat with us</Link>
                                    </div>
                                    <div className="schdule">
                                        <ul className="custom">
                                            <li>Mon - Thurs <span className="text-light-white">6am – 6pm PT</span>
                                            </li>
                                            <li>Fri <span className="text-light-white">6am – 6pm PT</span>
                                            </li>
                                            <li>Sat - Sun <span className="text-light-white">7am – 4pm PT</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div> <Link to="/" className="btn-first btn-submit-fill"> Chat With Us</Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 align-self-center">
                            <Accordion defaultActiveKey="0" className="faqs-accordion">

                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="0">
                                        <Card.Body>
                                            <p className="text-light-white">Once approved for an unsecured loan, you'll make monthly payments to pay it back in full, plus interest. The loan terms and interest rate vary based on the lender and your credit.</p>
                                            <p className="text-light-white no-margin">Each lender has their own set requirements to qualify for a personal loan. A hard inquiry can impact your credit score by two to nine points, but typically by no more than five.</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <Button className="collapsebtn" >What is an unsecured personal loan?</Button>
                                    </Accordion.Toggle>
                                </Card>

                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="1">
                                        <Card.Body><p className="text-light-white no-margin">Each lender has their own set requirements to qualify for a personal loan.</p></Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        <Button className="collapsebtn" >What are the requirements to qualify?</Button>
                                    </Accordion.Toggle>
                                </Card>
                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="2">
                                        <Card.Body><p className="text-light-white">Many lenders also have minimum credit score requirements for credit approval.</p>
                                            <p className="text-light-white no-margin">The upper limits for personal loans vary by lender but typically fall in the $35,000 to $50,000 range.</p></Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        <Button className="collapsebtn" >How much can I borrow with a personal loan?</Button>
                                    </Accordion.Toggle>
                                </Card>
                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="3">
                                        <Card.Body><p className="text-light-white">Using Loanly to check your rates doesn’t affect your credit score. Here’s how it works: Loanly's prequalification process uses a soft credit inquiry that you having to apply for a loan.</p>
                                            <p className="text-light-white no-margin">You'll be asked to authorize a hard credit inquiry when you apply for the loan. A hard inquiry can impact your credit score by two to nine points, but typically by no more than five.</p></Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        <Button className="collapsebtn" >Will checking my rates affect my credit score?</Button>
                                    </Accordion.Toggle>
                                </Card>
                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="4">
                                        <Card.Body><p className="text-light-white">Some lenders even offer an autopay discount if you authorize your monthly loan payments to be directly withdrawn from your bank account.</p>
                                            <p className="text-light-white no-margin">Qualifying for the lowest rates offered by a lender is dependent on your online application, credit approval and score, loan terms, and other factors.</p></Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        <Button className="collapsebtn" >What rate should I expect and how can I get the best rate?</Button>
                                    </Accordion.Toggle>
                                </Card>
                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="5">
                                        <Card.Body><p className="text-light-white no-margin">Once you’ve completed the loan application process, most lenders can fund your loan by the next business day (though it can take up to about a week, depending on the lender and your application).</p></Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="5">
                                        <Button className="collapsebtn" >How quickly will I receive my funds?</Button>
                                    </Accordion.Toggle>
                                </Card>
                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="6">
                                        <Card.Body><p className="text-light-white">Yes. In fact, personal loans offer many debt consolidation benefits.</p>
                                            <p className="text-light-white no-margin">Many credit cards also carry variable rates, which can cause the amount you pay in interest to fluctuate as rates change.</p></Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="6">
                                        <Button className="collapsebtn" >Can I use personal loans for debt consolidation?</Button>
                                    </Accordion.Toggle>
                                </Card>
                                <Card>

                                    <Accordion.Collapse className="collapseparent" eventKey="7">
                                        <Card.Body><p className="text-light-white no-margin">You’re typically not limited in how you can use your personal loan funds. Personal loans can be used to pay down high-interest credit card debt, meet unexpected needs like medical bills, take care of a major purchase like a new refrigerator, or fund home improvement projects. However, some lenders only provide loans for specific purposes (and some rates vary based on what you use it for), so you will be asked for the purpose of your loan.</p></Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="7">
                                        <Button className="collapsebtn" >How else can I use a personal loan?</Button>
                                    </Accordion.Toggle>
                                </Card>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Faqs;