import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Collapse, CardImg } from 'reactstrap';

export default class AboutAccordion extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: 1, cards: [
        {
          index: 1,
          title: "Mythic Raid",
          subtitle: "Mythic Progression Team (Guild Only)",
          description: "Tuesday and Wednesday 7:00pm - 10:00pm Server Time (PST) Contact an officer for information about joining the mythic team.",
          image: "assets/img/carapacedown.jpg"
        },
        {
          index: 2,
          title: "Friday Fun Raid",
          subtitle: " - Alt friendly",
          description: "Friday 7:00pm - 10:00pm Server Time (PST) Must meet requirements set on the in game calendar event and sign up to receive invite.",
          image: "assets/img/hero_denathrius.jpg"
        },
        {
          index: 3,
          title: "Sunday Community Night",
          subtitle: " - Join us for RBGS and M+!",
          description: "Sundays starting at 7:00pm Server Time (PST) Check calendar event for details on requirements and to sign up.",
          image: "assets/img/gruul_stoned.jpg"
        },
      ],

    }
  }


  toggle(e) {
    let event = e.target.dataset.event;
    this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
  }



  render() {
    const { cards, collapse } = this.state;
    return (
      <div className="container">
        <h1 className="text-center mx-auto my-4 font-weight-bold">Guild Information</h1>

        {cards.map(index => {
          return (


            <Card key={index.index} className="">
              <CardHeader className="card-header align-items-center ac-link font-weight-bold" onClick={this.toggle} data-event={index.index}>{index.title} - <small onClick={this.toggle} data-event={index.index} className="d-none d-sm-inline no-shadow font-weight-bold"> {index.subtitle}</small></CardHeader>
              <Collapse isOpen={collapse === index.index}>
                <div className="row align-items-center">
                  <CardBody className="card-body col-sm-6 col-lg-5 align-self-center ac-link">{index.description}</CardBody>
                  <CardImg className="img-fluid col-sm-6 col-lg-7" src={index.image} />
                </div>
              </Collapse>
            </Card>
          )
        })}
        <Card key={4} className="">
          <CardHeader className="card-header align-items-center ac-link font-weight-bold" onClick={this.toggle} data-event={4}>Officers - <small onClick={this.toggle} data-event={4} className="d-none d-sm-inline no-shadow font-weight-bold"> Contact one of our officers in game with any questions.</small></CardHeader>
          <Collapse isOpen={collapse === 4}>
            <div className="row align-items-center">
              <CardBody className="card-body col-sm-6 col-lg-5 align-self-center ac-link">
                <ul>
                  <li className="font-weight-bold">GM: <span className="officer font-weight-bold">Star</span> [Bnet#****]</li>
                  <li className="font-weight-bold">Officer: <a id="rip" href="#" className="officer font-weight-bold" data-toggle="modal" data-target="#galleryModal">Ebon</a> [Bnet#****]</li>
                  <li className="font-weight-bold">Officer: <span className="officer font-weight-bold">Asuka</span> [Bnet#****]</li>
                  <li className="font-weight-bold">Officer: <span className="officer font-weight-bold">Bav</span> [Bnet#****]</li>
                </ul>
              </CardBody>
              <CardImg className="img-fluid col-sm-6 col-lg-7" src="assets/img/wrathion_dance.jpg" />
            </div>
          </Collapse>
        </Card>



      </div>
    );
  }


}



