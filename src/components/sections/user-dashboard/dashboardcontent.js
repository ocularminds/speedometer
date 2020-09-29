import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav, Collapse } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from "./ChangingProgressProvider";
import { Line as LineChart } from 'react-chartjs-2';

const dailyactivitypost = [
    {
        month: "Mar",
        date: "04",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",
        url: "/user-dashboard",
    },
    {
        month: "Mar",
        date: "03",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",
        url: "/user-dashboard",
    },
    {
        month: "Mar",
        date: "05",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",
        url: "/user-dashboard",
    },
    {
        month: "Mar",
        date: "06",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",
        url: "/user-dashboard",
    },
    {
        month: "Mar",
        date: "10",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",
        url: "/user-dashboard",
    },
    {
        month: "Mar",
        date: "05",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",
        url: "/user-dashboard",
    },
];
const daysummarypost = [
    {
        month: "Mar",
        date: "04",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",
        url: "/user-dashboard",
    },
    {
        month: "Mar",
        date: "03",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",
        url: "/user-dashboard",
    },
    {
        month: "Mar",
        date: "05",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",
        url: "/user-dashboard",
    },
    {
        month: "Mar",
        date: "06",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",
        url: "/user-dashboard",
    },
    {
        month: "Mar",
        date: "10",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",
        url: "/user-dashboard",
    },
    {
        month: "Mar",
        date: "05",
        text1: "Auto-repayment",
        text2: "Loan balance",
        text3: "$ 1,257.00",
        text4: "2 Completed",
        url: "/user-dashboard",
    },
];
function chartData() {
    return {
        labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
            {
                label: "",
                borderColor: "#0070ba",
                pointBorderColor: "#0070ba",
                pointBackgroundColor: "#0070ba",
                pointHoverBackgroundColor: "#0070ba",
                pointHoverBorderColor: "#0070ba",
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 1,
                pointRadius: 0,
                fill: true,
                options: false,
                backgroundColor: "#0070ba",
                borderWidth: 0,
                data: [200, 175, 150, 125, 100, 75, 50, 25, 0]
            },
        ]
    }
}
function smallchartData() {
    return {
        labels: ["", "", "", "", "", "", "", "", "", "", ""],
        datasets: [{
            label: "",
            borderColor: "#0070ba",
            pointBorderColor: "#0070ba",
            pointBackgroundColor: "#0070ba",
            pointHoverBackgroundColor: "#0070ba",
            pointHoverBorderColor: "#0070ba",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 1,
            pointRadius: 0,
            fill: true,
            options: false,
            backgroundColor: "#0070ba",
            borderWidth: 0,
            data: [200, 175, 150, 125, 100, 75, 50, 25, 0]
        }]

    }
}
const options = {
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 20
            },
            gridLines: {
                drawTicks: false,
                display: false
            }

        }],
        xAxes: [{
            gridLines: {
                zeroLineColor: "transparent"
            },
            ticks: {
                padding: 20,
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold"
            }
        }]
    }
}
const smalloptions = {
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            gridLines: {
                zeroLineColor: "transparent"
            },
            ticks: {
                display: false
            }
        }],
        xAxes: [{
            gridLines: {
                zeroLineColor: "transparent"
            },
            ticks: {
                display: false
            }
        }]
    }
}
class dashboardcontent extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data: chartData(),
            smalldata: smallchartData(),
            open: true,
        }
    };

    render() {
        const { open } = this.state;
        return (
            <div>
                <section className="section-padding user-dashboard-sec bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="dashboard-first-sec">
                                    <div className="row">
                                        <div className="col-lg-6 align-self-center">
                                            <div className="left-side mb-md-80">
                                                <h3><Link to="/user-dashboard" className="text-custom-black" target="_blank">www.companyname.com</Link></h3>
                                                <h5 className="no-margin fw-600" data-toggle="collapse" data-target="#user-profile" onClick={() => this.setState({ open: !open })}
                                                    aria-controls="user-profile"
                                                    aria-expanded={open}><Link to="/user-dashboard" className="text-custom-blue">Your Loan Profile</Link></h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="right-side">
                                                <ul className="custom">
                                                    <li>
                                                        <div className="icon-box">
                                                            <img src="assets/images/more.png" alt="icon" />
                                                        </div>
                                                        <p className="text-custom-black">Get more out of <br />Loanly</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box">
                                                            <img src="assets/images/connect.png" alt="icon" />
                                                        </div>
                                                        <p className="text-custom-black">Connect with the <br />best</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box">
                                                            <img src="assets/images/move.png" alt="icon" />
                                                        </div>
                                                        <p className="text-custom-black">Plan your next <br />move</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding user-dashboard-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Collapse in={this.state.open}>
                                    <div className="user-loan-profile" id="user-profile">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="welcome-box mb-md-40">
                                                    <div className="icon-box">
                                                        <img src="assets/images/faq-user.png" alt="icon" />
                                                    </div>
                                                    <div className="welcome-text">
                                                        <h4 className="text-custom-black">Welcome Back!</h4>
                                                        <p className="text-custom-black">We're happy to help you grow your business with Loanly Working Capital.</p>
                                                        <Link to="/user-dashboard" className="text-custom-blue fw-600 fs-14">View loan history</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-sm-4">
                                                <div className="loan-box-wrap">
                                                    <div className="content">
                                                        <h2 className="text-custom-black fw-600">5</h2>
                                                        <p className="no-margin text-custom-black">Loans</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-8">
                                                <div className="loan-box-wrap justify-content-between">
                                                    <div className="content">
                                                        <h2 className="text-custom-black fw-600">$ 50,000</h2>
                                                        <p className="no-margin text-custom-black">Total Borrowed</p>
                                                    </div>
                                                    <div className="content-infor">
                                                        <ul className="custom">
                                                            <li>Last Payment on <Link to="/user-dashboard" />24th April 20</li>
                                                            <li> <Link to="/user-dashboard">View Monthly Details</Link> </li>
                                                            <li> <Link to="/user-dashboard">View Yearly Details</Link> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="close-btn" onClick={() => this.setState({ open: !open })}
                                                aria-controls="user-profile"
                                                aria-expanded={open}>
                                                <Link to="/user-dashboard"><i className="fas fa-times" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                            <div className="col-12">
                                <div className="dashboard-second-sec" onClick={() => this.setState({ open: !open })}
                                    aria-controls="loan-progress"
                                    aria-expanded={open}>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 align-self-center">
                                            <div className="heading-text">
                                                <h4 className="text-custom-black no-margin">LOAN PROGRESS CHARTS</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-6">
                                            <div className="right-side">
                                                <div className="pie-chart-box">
                                                    <ChangingProgressProvider values={[0, 20, 40, 60, 78]}>
                                                        {percentage => (
                                                            <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} styles={buildStyles({
                                                                strokeLinecap: 'butt',
                                                                pathTransitionDuration: 0.5,
                                                                pathColor: '#11c391',
                                                                trailColor: '#0070ba',
                                                            })} />
                                                        )}
                                                    </ChangingProgressProvider>
                                                </div>
                                                <div className="line-chart-box">
                                                    <div className="graph">
                                                        <LineChart data={this.state.smalldata}
                                                            options={smalloptions} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Collapse in={this.state.open}>
                                    <div className="dashboard-second-sec-large" id="loan-progress">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <h5 className="text-custom-black fw-600 text-center mb-xl-40">Repayment Progress</h5>
                                                <div className="left-side mb-md-40">
                                                    <div className="pie-chart-area">
                                                        <ChangingProgressProvider values={[0, 20, 40, 60, 78]}>
                                                            {percentage => (
                                                                <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={2} styles={buildStyles({
                                                                    strokeLinecap: 'butt',
                                                                    pathTransitionDuration: 0.5,
                                                                    pathColor: '#11c391',
                                                                    trailColor: '#0070ba',
                                                                })} />
                                                            )}
                                                        </ChangingProgressProvider>
                                                    </div>
                                                    <div className="pie-chart-area-text">
                                                        <div className="text-wraper mb-xl-20">
                                                            <label className="fw-600 fs-16 text-custom-black">$ 10,000</label>
                                                            <p className="no-margin fw-500 text-custom-black">Outstanding balance</p>
                                                        </div>
                                                        <div className="text-wraper">
                                                            <label className="fw-600 fs-16 text-custom-black">$ 1,257</label>
                                                            <p className="no-margin fw-500 text-custom-black">Paid to date</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <h5 className="text-custom-black fw-600 text-center mb-xl-40">Repayment Tracking</h5>
                                                <div className="right-side">
                                                    <div className="graph mb-xs-40">

                                                        <LineChart data={this.state.data}
                                                            options={options} />

                                                    </div>
                                                    <div className="graph-text">
                                                        <div className="text-wraper mb-xl-20">
                                                            <label className="fw-600 fs-16 text-custom-black">Average Payment</label>
                                                            <p className="no-margin fw-500 text-custom-black">$ 57,975</p>
                                                        </div>
                                                        <div className="text-wraper">
                                                            <label className="fw-600 fs-16 text-custom-black">Estimated time to repay</label>
                                                            <p className="no-margin fw-500 text-custom-black">1 month(s)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                            <div className="col-12">
                                <div className="dashboard-third-sec">
                                    <div className="row">
                                        <aside className="col-lg-4 mb-md-80">
                                            <div className="widget-box mb-xl-30">
                                                <h4 className="text-custom-black">Loan Details</h4>
                                                <div className="content-wrap">
                                                    <div className="text-wraper mb-xl-10">
                                                        <label className="fw-600 fs-16 text-custom-black">$ 10,000</label>
                                                        <p className="no-margin fw-500">Outstanding balance</p>
                                                    </div>
                                                    <div className="text-wraper mb-xl-10">
                                                        <label className="fw-600 fs-16 text-custom-black">$ 1,257</label>
                                                        <p className="no-margin fw-500">Paid to date</p>
                                                    </div>
                                                    <button type="submit" className="btn-first btn-submit text-custom-blue">Make Payment</button>
                                                </div>
                                            </div>
                                            <div className="widget-box mb-xl-30">
                                                <div className="content-wrap">
                                                    <div className="text-wraper mb-xl-10">
                                                        <label className="fw-600 fs-16 text-custom-black">$ 10,000</label>
                                                        <p className="no-margin fw-500">Initial loan amount</p>
                                                    </div>
                                                    <div className="text-wraper mb-xl-10">
                                                        <label className="fw-600 fs-16 text-custom-black">$ 1,257</label>
                                                        <p className="no-margin fw-500">Loan Fee</p>
                                                    </div>
                                                    <div className="text-wraper mb-xl-10">
                                                        <label className="fw-600 fs-16 text-custom-black">30%</label>
                                                        <p className="no-margin fw-500">Repayment percentage</p>
                                                    </div>
                                                    <div className="text-wraper mb-xl-10">
                                                        <label className="fw-600 fs-16 text-custom-black">$ 4,500</label>
                                                        <p className="no-margin fw-500">Minimum due every 90 days</p>
                                                    </div>
                                                    <div className="text-wraper">
                                                        <Link to="/user-dashboard" className="text-custom-blue fw-600 fs-14"><i className="fas fa-download mr-2" /> Download contract</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-box mb-xl-30">
                                                <h4 className="text-custom-black">How are we doing?</h4>
                                                <div className="content-wrap">
                                                    <div className="text-wraper mb-xl-10">
                                                        <label className="fw-600 fs-14 text-custom-black mb-xl-10">Your feedback is always appreciated.</label>
                                                    </div>
                                                    <div className="text-wraper">
                                                        <Link to="/user-dashboard" className="text-custom-blue fw-600 fs-14">Take our satisfaction survey</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-box mb-xl-30">
                                                <h4 className="text-custom-black">Loan Tips</h4>
                                                <div className="content-wrap">
                                                    <div className="text-wraper mb-xl-10">
                                                        <label className="fw-600 fs-14 text-custom-black mb-xl-10">Meet the minimum requirement</label>
                                                        <p className="no-margin fw-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                    </div>
                                                    <div className="text-wraper">
                                                        <Link to="/user-dashboard" className="text-custom-blue fw-600 fs-14">Learn about the minimum requirement</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-box pb-0 border-0">
                                                <h4 className="text-custom-black">Have Questions?</h4>
                                                <div className="content-wrap">
                                                    <div className="text-wraper mb-xl-20">
                                                        <label className="fw-600 fs-14 text-custom-black d-block">Call us and we'll be happy to help.</label>
                                                        <Link to="/user-dashboard" className="fw-600 fs-14 text-custom-black">(+345 123 456 7890)</Link>
                                                    </div>
                                                    <div className="text-wraper">
                                                        <label className="fw-600 fs-14 text-custom-black d-block">9:00AM to 8:00PM Eastern Time </label>
                                                        <Link to="/user-dashboard" className="fw-600 fs-14 text-custom-black">Monday - Friday</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </aside>
                                        <div className="col-lg-8">
                                            <div className="tabs-sec">
                                                <Tab.Container defaultActiveKey="dailyactivity">
                                                    <Nav variant="pills" className="custom nav nav-tabs mb-xl-30">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="dailyactivity">Daily Activity</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="daysummary">90-Day Summary</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="dailyactivity">
                                                            <div className="sch-payment mb-xl-30">
                                                                <h4 className="text-custom-black">Scheduled Payments</h4>
                                                                <div className="sch-payment-box">
                                                                    <Link to="/user-dashboard" className="payment-activity-box border-0">
                                                                        <div className="left-side">
                                                                            <div className="date-box">
                                                                                <p className="month no-margin">Mar <span>05</span></p>
                                                                            </div>
                                                                            <div className="payment-type-box">
                                                                                <p className="text-custom-blue mb-1 fw-600">Auto-repayment</p>
                                                                                <p className="no-margin fw-600">Loan balance</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="right-side">
                                                                            <div className="price-box">
                                                                                <p className="mb-1 fw-600 text-custom-black">$ 1,257.00</p>
                                                                                <p className="no-margin text-light-grey">2 Completed</p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="recent-activity">
                                                                <h4 className="text-custom-black">Recent Activity</h4>
                                                            </div>
                                                            {dailyactivitypost.map((item, i) => (
                                                                <Link key={i} to={item.url} className="payment-activity-box">
                                                                    <div className="left-side">
                                                                        <div className="date-box">
                                                                            <p className="month no-margin">{item.month} <span>{item.date}</span></p>
                                                                        </div>
                                                                        <div className="payment-type-box">
                                                                            <p className="text-custom-blue mb-1 fw-600">{item.text1}</p>
                                                                            <p className="no-margin fw-600">{item.text2}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="right-side">
                                                                        <div className="price-box">
                                                                            <p className="mb-1 fw-600 text-custom-black">{item.text3}</p>
                                                                            <p className="no-margin text-light-grey">{item.text4}</p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                            <div className="all-act">
                                                                <Link to="/user-dashboard" className="text-right fw-600">View all activity</Link>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="daysummary">
                                                            <div className="sch-payment mb-xl-30">
                                                                <h4 className="text-custom-black">Scheduled Payments</h4>
                                                                <div className="sch-payment-box">
                                                                    <Link to="/user-dashboard" className="payment-activity-box border-0">
                                                                        <div className="left-side">
                                                                            <div className="date-box">
                                                                                <p className="month no-margin">Mar <span>05</span></p>
                                                                            </div>
                                                                            <div className="payment-type-box">
                                                                                <p className="text-custom-blue mb-1 fw-600">Auto-repayment</p>
                                                                                <p className="no-margin fw-600">Loan balance</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="right-side">
                                                                            <div className="price-box">
                                                                                <p className="mb-1 fw-600 text-custom-black">$ 1,257.00</p>
                                                                                <p className="no-margin text-light-grey">2 Completed</p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="recent-activity">
                                                                <h4 className="text-custom-black">Recent Activity</h4>
                                                            </div>

                                                            {daysummarypost.map((item, i) => (
                                                                <Link key={i} to={item.url} className="payment-activity-box">
                                                                    <div className="left-side">
                                                                        <div className="date-box">
                                                                            <p className="month no-margin">{item.month} <span>{item.date}</span></p>
                                                                        </div>
                                                                        <div className="payment-type-box">
                                                                            <p className="text-custom-blue mb-1 fw-600">{item.text1}</p>
                                                                            <p className="no-margin fw-600">{item.text2}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="right-side">
                                                                        <div className="price-box">
                                                                            <p className="mb-1 fw-600 text-custom-black">{item.text3}</p>
                                                                            <p className="no-margin text-light-grey">{item.text4}</p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            ))}

                                                            <div className="all-act">
                                                                <Link to="/user-dashboard" className="text-right fw-600">View all activity</Link>
                                                            </div>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Tab.Container>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

export default dashboardcontent;