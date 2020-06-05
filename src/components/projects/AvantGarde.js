import React, { Component } from 'react'
import Lightbox from "react-image-lightbox"

import SideNavbar from '../SideNavbar'
import AGBanner from '../../images/ag-banner.png'
import AGOverviewInfo from '../../images/ag-overview-info-2.png'
import AGIdeationSketches from '../../images/ag-ideation-sketches.png'
import AGPrototypeA from '../../images/ag-prototype-a.png'
import AGPrototypeB from '../../images/ag-prototype-b.png'
import AGUserTesting1 from '../../images/ag-usertesting-1.png'
import AGUserTesting2 from '../../images/ag-usertesting-2.png'
import AGFinalProduct from '../../images/ag-final-product.png'

import "react-image-lightbox/style.css"
import './projects.css'

const images = [
  AGOverviewInfo,
  AGIdeationSketches,
  AGPrototypeA,
  AGPrototypeB,
  AGUserTesting1,
  AGUserTesting2,
  AGFinalProduct
]

class AvantGarde extends Component {
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

  toggleCollapse(item) {
    switch(item) {
      case 'versionA':
        this.setState({
          isVersionAOpen: !this.state.isVersionAOpen
        });
        break;
      case 'versionB':
        this.setState({
          isVersionBOpen: !this.state.isVersionBOpen
        });
        break;
      case 'round2':
        this.setState({
          isRound2Open: !this.state.isRound2Open
        });
        break;
      default:
        break;
    }
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
          <div className="gray-banner">
            <img className="banner" src={AGBanner}/>
          </div>
          <div className="project-content">
            <div className="project-title">The Origins of the Avant-Garde</div>
            <div className="project-subtitle">UC San Diego (DSGN 100 - Prototyping)</div>
            <p><strong>Scope:</strong> information design, visual design, user research</p>
            <h2 id="overview">Overview</h2>
            <p>
              Despite having an overwhelming amount of information to share, 
              event posters that serve as splash pages have only a short amount 
              of time to capture the attention of potential attendees. 
              As a result, it can be challenging to organize information in an 
              innovative way, such as with the uncategorized text information and 
              images (from a design challenge from a class on design prototyping) 
              that I had to create a poster with, in the visual below.
            </p>
            
              
            <img className="project-image-full lightbox" src={AGOverviewInfo} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 0 })}/>

            <h2>The Problem</h2>
            <p>
              Within this design task for my class on Prototyping (DSGN 100), the problem posed was that <i><strong>users need to be able to quickly identify necessary information on a 
              poster so that they can discern whether they are interested in the poster 
              splash page content. </strong></i>
            </p>
            <h2>User research</h2>
            <p>
              To understand my target audience, I gathered insights from interviewing 
              users. In the interview process, I had users <strong> rank the sections of 
              information</strong> in order of what they believed were <strong> most to least 
              important,</strong> namely text blocks corresponding to the subjects: Event 
              title, Venue, Dates, Location, Notable speakers, and Admission, Contact, 
              Organizer, and Event support information.
              <br/><br/>
              I gathered these rankings together to come up with the overall consensus 
              of rankings, ordered by subject from left to right, most important to 
              least important: <strong> 1. Event title, 2. Venue, Dates, Location, 3. Sessions, 
              4. Admission, Contact, and Organizer information, 5. Notable speakers, 
              6. Event support information. </strong>
              <br/><br/>
              Users for the most part agreed that the title was most important, followed 
              by a mixed ranking of Venue, Dates, and Location information, so I used 
              this finding to group the three categories within the same ranking. 
              Likewise was the case for the Admission, Contact, and Organizer information. 
              I used these rankings to <strong>determine what direction the visual flow of text 
              containers should go, </strong> specifically for ordering these information blocks 
              in different sizes on the poster.
            </p>
            <h2>Ideation</h2>
            <p>
              I made multiple sketches to experiment with as many ideas for layouts as 
              I could, as shown below. I experimented with ideas, such as how much space 
              to allocate for the title, session information, and other text containers, 
              as well as how much room to leave for images.
            </p>
            <img className="project-image-full lightbox" src={AGIdeationSketches}  onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 1 })}/>
            <h2>Prototyping</h2>
            <p>
              Among my sketches, I decided to move forward with <strong> two layouts </strong>taking a 
              combination of elements in my sketches that worked best (e.g. room for 
              prominent title, easy-to-follow placements of consecutive sections) to 
              create low-fidelity prototypes.
            </p>
            <div className="row">
              <div className="column-2">
                <h3>Prototype A</h3>
                <img className="project-image-full lightbox" src={AGPrototypeA} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 2 })}/>
                <p>
                  In this prototype, I experimented with a <strong> top-to-bottom visual flow, </strong>
                  while at the same time adhering to a 10x15 grid with ¼ inch margins 
                  and ¼ inch gutters. I used Figma to create the layouts and grids, so 
                  the ¼ inch measurement translated to 20 pixels. <strong> By vertically stacking 
                  each element, a user could scan pertinent information to gauge their 
                  interest from top to bottom starting with the title. </strong>
                </p>
              </div>
              <div className="column-2">
                <h3>Prototype B</h3>
                <img className="project-image-full lightbox" src={AGPrototypeB} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 3 })}/>
                <p>
                  In this next prototype, I experimented with both a <strong> top-to-bottom and 
                  left-to-right flow. </strong> I separated the presented information into 2 
                  columns--one for non-session information to the left, and one specifically 
                  for session information on the right. <strong> This way, the content could be easily 
                  scanned for basic information on the event on the left column starting with 
                  the title. If a user were more interested in the content of the talks, they 
                  could continue to read the content on the right column. </strong>
                </p>
              </div>
            </div>
            
            <h2>User Testing</h2>
            <h3>Round 1</h3>
            <p>
              Using the low-fidelity text-only prototypes I had made, I conducted a first round 
              of user testing on my progress so far for both versions. I collected the feedback 
              and summarized them below. For each version in the image, areas labelled with a 
              green border and number correspond to positive feedback, whereas areas labelled 
              with a red border and number indicate areas that users didn’t like, as explained 
              below the image.
            </p>
            <img className="project-image-full lightbox" src={AGUserTesting1} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 4 })}/>
            <button onClick={() => this.toggleCollapse('versionA')}>
            {(this.state.isVersionAOpen ? 'Hide' : 'View') + " Version A Feedback (left)"}
            </button>
            
            <div className="collapse">
            <div className={"row" + (this.state.isVersionAOpen ? '' : ' invisible')}>
              <div className="column-2">
                <p className="positive">Positive feedback (green)</p>
                <ol>
                  <li>Easy to follow flow from title down to other sections of poster.</li>
                  <li>Alignment for session containers makes session information well categorized.</li>
                  <li>Bolded and large first words of each text container make it easy to tell the subject.</li>
                </ol>
              </div>
              <div className="column-2">
                <p className="negative">Areas for improvement (red)</p>
                <ol>
                  <li>List of names could use more margin above the section.</li>
                  <li>(Enlargened) Session information alignment seems inconsistent.</li>
                  <li>There’s a noticeable patch of whitespace.</li>
                </ol>
              </div>
            </div>
            </div>
            <button onClick={() => this.toggleCollapse('versionB')}>
              {(this.state.isVersionBOpen ? 'Hide' : 'View') + " Version B Feedback (right)"}
            </button>
            <div className={"row" + (this.state.isVersionBOpen ? '' : ' invisible')}>
              <div className="column-2">
                <p className="positive">Positive feedback (green)</p>
                <ol>
                  <li>Clear distinction between event description on right and session information on the right.</li>
                  <li>Easy to spot at a distance individual sessions.</li>
                  <li>Event information is collected in one place.</li>
                </ol>
              </div>
              <div className="column-2">
                <p className="negative">Areas for improvement (red)</p>
                <ol>
                  <li>Alignment of times is uneven and jarring.</li>
                  <li>Shifted alignment for the subtitles is confusing and uncomfortable to follow.</li>
                  <li>Center alignment for the “generous support” text container is odd.</li>
                </ol>
              </div>
            </div>
            <h3>Round 2</h3>
            <p>
              With both the positive and negative feedback I received, I set out to apply the 
              results of my first round of user testing to the next stage, while adding in 
              images. I chose to continue with Version B because <strong> users indicated that they 
              preferred the benefit of being easily able to distinguish between the event 
              information and the session information through the left and right columns. </strong>
              After coming up with the result on the left side of the image below, I 
              conducted a second round of user testing for more insights on what users saw 
              in the new version. The new feedback is summarized below.
            </p>
            <img className="project-image-full lightbox" src={AGUserTesting2} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 5 })}/>
            <button onClick={() => this.toggleCollapse('round2')}>
              {(this.state.isRound2Open ? 'Hide' : 'View') + " Feedback"}
            </button>
            <div className={"row" + (this.state.isRound2Open ? '' : ' invisible')}>
              <div className="column-2">
                <p className="positive">Positive feedback (green)</p>
                <ol>
                  <li>Blue versus black text color makes it easy to distinguish session title and necessary information to attend the session with.
    </li>
                  <li>Nonbolded text for time and bolded text for speaker names in subsections for sessions facilitates ease of differentiation of information.</li>
                </ol>
              </div>
              <div className="column-2">
                <p className="negative">Areas for improvement (red)</p>
                <ol>
                  <li>Alignment of title is hard to trace with eyes as title words are sectioned off with different sizes.</li>
                  <li>Hard to spot location and date of event in hidden area of image.</li>
                  <li>Additional images and drop shadow add confusion to the visual hierarchy.</li>
                  <li>Session location and date compacted together adds difficulty for the viewer to notice that the last session is in a different location than all other sessions. Date is also confusing with the session number beside it (e.g. session 2 is on February 2 but session 3 is on February 3).
    </li>
                </ol>
              </div>
            </div>
            <p>
              After applying the second round of feedback I received from user testing, I created the final version to the right on the image above. I made changes such as moving the event date underneath the session number, and removing redundant information like the session titles  (e.g. “Session IV” is unnecessary if there is already a “4” next to the text container indicating the session number). 
            </p>
            <h2 id="reflection">Reflection</h2>
            <p>
              Overall from this project, I learned that <strong> contrast and consistency of alignment </strong> are essential to establishing a clear hierarchical flow for information and visual design. This design project provided a challenge where I had to juggle user needs, such as the readability of all the provided information. I also learned that despite having to sacrifice the prominence of certain elements (e.g. session information) through reducing font sizes and less favorable locations, it was still important to do so to highlight and draw attention to more important elements (e.g. title) to <strong> reduce cognitive load and thus time on the user’s behalf </strong> in making a more readable and usable product.
            </p>
            <img className="project-image-half lightbox center" src={AGFinalProduct} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 6 })}/>
          </div>
        </div>
      </div>
    );
  }
}

export default AvantGarde