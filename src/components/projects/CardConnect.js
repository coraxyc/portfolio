import React, { Component } from 'react'
import Lightbox from "react-image-lightbox";

import SideNavbar from '../SideNavbar'
import CCBanner from '../../images/cc-banner.png'
import CCFrameSetA from '../../images/cc-frame-set-a.png'
import CCFrameSetB from '../../images/cc-frame-set-b.png'
import CCFrameSetC from '../../images/cc-frame-set-c.png'
import CCGoogleAnalytics from '../../images/cc-google-analytics.png';
import CCStoryboard1 from '../../images/cc-storyboard-1.png'
import CCStoryboard2 from '../../images/cc-storyboard-2.png'
import CCCareerFair from '../../images/cc-ucsd-career-fair.jpg'
import CCUserTestingFlow from '../../images/cc-user-testing-flow.png'
import CCFinalDesign from '../../images/cc-final-design.png';
import CCFinalPhone from '../../images/cc-final-phone.jpg';
import CCTemplateStyles from '../../images/cc-template-styles.gif';
import "react-image-lightbox/style.css";
import './projects.css'

const images = [
  CCCareerFair,
  CCStoryboard1,
  CCStoryboard2,
  CCFrameSetA,
  CCFrameSetB,
  CCFrameSetC,
  CCUserTestingFlow,
  CCGoogleAnalytics,
  CCFinalDesign,
  CCFinalPhone
]

class CardConnect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isLightboxOpen: false,
      isVersionAOpen: false,
      isVersionBOpen: false,
      isRound2Open: false,
    };
  }

  render() {
    const { photoIndex, isLightboxOpen } = this.state;
    return (
      <div className="big-layout">
        <SideNavbar />
        { isLightboxOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isLightboxOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
        <div className="layout">
          <div className="blue-banner">
            <img className="banner" src={CCBanner}/>
          </div>
          <div className="project-content">
          <div className="project-title">CardConnect</div>
          <div className="project-subtitle">UC San Diego (COGS 120 - Interaction Design)</div>
            <p><strong>Scope:</strong> frontend development, user interface design, user research</p>
            <p><strong>Tools:</strong> HTML/CSS, Node.js, Figma, Heroku, Google Analytics, Adobe Illustrator</p>
            <p><strong>Timeline:</strong> January 2019 to March 2019</p>
            <h2 id="overview">Background</h2>
            <p>
              For student job-seekers, waiting to hear back from recruiters after standing 
              in line for hours on hours in career fairs can be a nightmare—especially 
              if they doesn’t have the contact information of the recruiter whom they 
              spoke to for one of their dream companies that they stood in line for an 
              aching half-hour. Once they’ve waited their turn in line, student 
              job seekers have to quickly request contact information in the form of 
              emails or business cards within their limited conversation time frames 
              with recruiters; otherwise, they would have no control but to await the greatly 
              feared outcome—being ghosted. On the flip side, imagine if you were a 
              recruiter or hiring manager—if you have a business card, how often do 
              you give it out knowing full well that it’ll more likely than not end 
              up in the landfill?
            </p>

            <h2>Needfinding</h2>
            <p>
              We shadowed students at the UCSD Winter career fair, and noticed that about 
              <strong> 1 in 20 students </strong> asked recruiters for follow-up contact information, such 
              as business cards or a recruiter’s email. We also noticed that about <strong> 1 in 
              6 recruiters </strong> brought business cards with them. Students mentioned that the 
              <strong> business cards would eventually get lost, crumpled, or destroyed with laundry </strong>
              after students shoved them into pockets. Even if more students were to ask 
              for contact information, the only viable way would be to ask for the recruiter’s 
              email,<strong> while feeling pressured to hurry with the growing line behind them.</strong> 
              Students had concerns about not remembering the recruiters’ names with 
              only emails written down, and were also afraid of asking recruiters for their 
              names again lest recruiters thought they were rude to not pay attention to 
              introductions at the beginning of their conversations.
              <br/><br/>
            </p>
            <img className="project-image-half center lightbox" src={CCCareerFair} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 0 })}/>
            <p className="center"><i>Image of UCSD Career Fair courtesy of <a href="https://images.app.goo.gl/kWkXDKQ8GL1sCS4Q7" target="_blank"> Glassdoor</a></i></p>
            
            <h2>Problem Statement</h2>
            <p>
              As a result of our needfinding process, we identified our target problem:
              <br/><br/>
              <strong><i>Student job-seekers need a quick way to record recruiter contact information 
              at conferences and career fairs so that they can later contact recruiters to 
              obtain more transparent updates on their job application process.</i></strong>
            </p>

            <h2>Storyboarding</h2>
            <p>
              We began to explore potential solutions to our problem statement by creating 
              storyboards. We decided that storyboards were a low time-commitment and low-cost
              method of presenting solution concepts to users for further user research, to 
              prevent ourselves from becoming too entrenched with ideas that might not address
              user needs carefully.
            </p>

            <h3 className="no-bottom-margin">Storyboard 1 - Sharing digital business cards</h3>
            <img className="project-image-full lightbox" src={CCStoryboard1} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 1 })}/>
            <p>
              In this storyboard, users create a dynamically updated digital business card 
              stored within a contact list synced to their user accounts on the platform. 
              We liked this idea because the digital business cards could convey uniqueness
              of each individual through the <strong> preservation of the styled formatting </strong>  of 
              traditional physical business cards. However, a drawback to this concept 
              was that <strong> users could be frustrated with having to find contact information </strong> 
              elements by sifting through inconsistent locations of emails, phone numbers, 
              and company names across all the uniquely styled business cards.
            </p>
            <h3 className="no-bottom-margin">Storyboard 2 - Note taking-based networking</h3>
            <img className="project-image-full lightbox" src={CCStoryboard2} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 2 })}/>
            <p>Through note taking, a benefit for users was that they could <strong>autonomously record 
              tidbits of information unique to conversations</strong> they had with whoever they were
              networking with. However, users noted that the hasty notes they take would be 
              <strong> likely disorganized </strong> without structured input locations. On top of this, users <strong>might
              not need all the information </strong> from their discussions. This approach would also draw 
              attention away from maintaining good eye contact with the people they were talking 
              to; otherwise if the users were to write down information quickly after they conversed
              with someone, they might run into other people to talk to right after as well, and 
              would not be able to comprehensively record the contents of their conversations.
            </p>

            <h2>Prototyping</h2>
            <p>From our storyboards insights, we decided to combine the <strong>best parts of each 
              approach </strong> into a new potential solution to create an initial paper prototype 
              with. In this prototype, users could design styled business cards with contact
              information listed in a structured format below the styled card image, to 
              make it easy for users to locate contact information elements in an
              organized manner. This prototype also allows users to optionally fill
              in short notes.
            </p>
            <iframe className="center" width="560" height="315" src="https://www.youtube.com/embed/tXHjtgFhXDc" 
              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen="true">
            </iframe>

            <h2>Wireframing</h2>
            <p>
              After having explored the tangible realm of possibilities that our paper prototype 
              allowed us to experience, we used it to guide our wireframe creation process. 
              We created three sets of frames: one for the contacts list, one for capturing an 
              image of a business card, and one for using styled templates to create a contact 
              card.
            </p>

            <h3>Frame Set A - Contacts List</h3>
            <p>
              This is the home page where users can quickly search up an existing contact or create a new contact.
            </p>
            <img className="project-image-full lightbox" src={CCFrameSetA} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 3 })}/>
            <h3>Frame Set B - Capture image of a physical business card</h3>
            <p>
              We also wanted to provide users with the option to quickly snap and store a picture of an existing business card.
            </p>
            <img className="project-image-full lightbox" src={CCFrameSetB} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 4 })}/>
            <h3>Frame Set C - Use styled templates or captured image to create contact card</h3>
            <p>
              This is the page where users view an image of a business card along with a structured list of contact information elements (phone, company, email, etc).
            </p>
            <img className="project-image-full lightbox" src={CCFrameSetC} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 5 })}/>
            <p className="center">Here are some of the <strong>templated business card styles</strong> in we used on Frame Set C:</p>
            <img className="project-image-half center" src={CCTemplateStyles}/>
            <h2>User Testing</h2>
            <img className="project-image-full lightbox" src={CCUserTestingFlow} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 6 })}/>
            <p>
              Using our wireframes, we built a <strong> functional web application </strong> hosted on Heroku to conduct user testing 
              for our progress so far. We developed a testing guide with tasks for our users to 
              complete, where we asked users to show us how they would create, edit, and delete 
              a card and how they would search for a contact.
              <br/><br/>
              We were curious about whether users would prefer that the add button on the 
              Contact List page in Frame Set A link to Frame Set B (so that they could 
              immediately take a picture first) or Frame Set C (so that they could enter 
              the name of a person first). To find out, we ran an <strong> A/B testing experiment </strong>
              using Google Analytics on 26 sessions, where users had a 50% chance of landing 
              on either frame set. After running this experiment, we saw that the bounce rate 
              of the add button linking to <strong> Frame Set B (titled New B in the image) had a  higher 
              bounce rate </strong> than did for Frame Set C (titled New A in the image)—25% compared to 
              7.14%. Using this metric, it appeared that users preferred to type their own labels 
              first onto a contact card than to snap an image of the card without labelling what 
              the card was for first. As a result, we decided to link the plus button directly 
              to the contact card creation page.
            </p>
            <img className="project-image-full lightbox" src={CCGoogleAnalytics} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 7 })}/>
            
            <h2>Final Design</h2>
            <p>We applied our findings from conducting user testing and our Google Analytics experiment to create the final version below.</p>
            <img className="project-image-full center lightbox" src={CCFinalDesign} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 8 })}/>

            <h2>Reflection</h2>
            <p>
              Although something as simple as making sure that we don’t lose a business 
              card may seem like a trivial issue, we realized that it was still crucial 
              to address this problem of being able to better preserve important 
              information that may lead to the next step in our career and change our 
              futures. I learned to work with my team, as we discussed each of our 
              perspectives throughout the iterative process of creating CardConnect. 
              I also learned that needfinding and user testing really helps drive the 
              core direction of a product to better serve a product’s user base. 
              In the future, I’d like to continue to explore how details however small, 
              such as the ordering of a product’s interactive flow, can affect how a user’s 
              perception of the product and how to better align a product according to 
              user needs through interaction design.
            </p>
            <div className="row">
              <div className="column-2">
                <img className="project-image-full center lightbox" src={CCFinalPhone} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 9 })}/>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    );
  }
}

export default CardConnect