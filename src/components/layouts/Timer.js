import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.countDownId = null;
        this.state = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: false
        };
      }
    
      componentDidMount() {
        this.countDownId = setInterval(this.timerInit, 1000);
      }
    
      componentWillUnmount() {
        if (this.countDownId) {
          clearInterval(this.countDownId);
        }
      }
    
      timerInit = () => {
        const { startDate } = this.props;
        console.log(startDate);
        const now = new Date().getTime();
        if (!startDate) {
          this.setState({ expired: true });
          return;
        }
        const countDownStartDate = new Date(startDate).getTime();
        const distance = countDownStartDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // For countdown is finished
        if (distance < 0) {
          clearInterval(this.countDownId);
          this.setState({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            expired: true
          });
          return;
        }
        this.setState({ days, hours, minutes, seconds, expired: false });
      };
    render() {
        const { days, hours, minutes, seconds, expired } = this.state;
        if (expired) {
            return <div className="expired">Expired :(</div>;
        }
        return (


            <div className="counter">
                <div className="counter-box">
                    <div className="inner-box"><span className="text-custom-white">{days}</span>
                    </div>
                    <p className="text-custom-white">Days</p>
                </div>
                <div className="counter-box">
                    <div className="inner-box"><span className="text-custom-white">{hours}</span>
                    </div>
                    <p className="text-custom-white">Hours</p>
                </div>
                <div className="counter-box">
                    <div className="inner-box"> <span className="text-custom-white">{minutes}</span>
                    </div>
                    <p className="text-custom-white">Minutes</p>
                </div>
                <div className="counter-box">
                    <div className="inner-box"> <span className="text-custom-white">{seconds}</span>
                    </div>
                    <p className="text-custom-white">Seconds</p>
                </div>
            </div>


        );
    }
}

export default Timer;