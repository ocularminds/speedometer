import React, { Component } from 'react';
import MultiStep from './step/react-multistep'
import StepOne from './step/stepOne'
import StepTwo from './step/stepTwo'
import StepThree from './step/stepThree'
import StepFour from './step/stepFour'
import StepFive from './step/stepFive'

const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
  { component: <StepFour /> },
  { component: <StepFive /> }
]

const prevStyle = { }
const nextStyle = { }
class Userinfodetails extends Component {
  handleStepChange = currentStep => { };
  render() {
    return (
      <section className="section-padding-bottom user-info-details">
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 col-lg-6">
              <div className="user-info-tabs">
                <div id="add-user-tab" className="step-app">
                  <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Userinfodetails;