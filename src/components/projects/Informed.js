import React, { Component } from 'react'
import Lightbox from "react-image-lightbox";

import SideNavbar from '../SideNavbar'
import INBanner from '../../images/project3_informed-banner.png'
import INNeedfinding from '../../images/in-needfinding-demographics.png'
import INPersona1 from '../../images/in-persona-1.png'
import INPersona2 from '../../images/in-persona-2.png'
import INPersona3 from '../../images/in-persona-3.png'
import INStoryboard1 from '../../images/in-storyboard-1.png'
import INStoryboard2 from '../../images/in-storyboard-2.png'
import INStoryboard3 from '../../images/in-storyboard-3.png'
import INWireframes from '../../images/in-wireframes.png'
import INPrototype1 from '../../images/in-prototype-1.png'
import INPrototype2 from '../../images/in-prototype-2.png'
import INPrototype3 from '../../images/in-prototype-3.png'
import INFinal1 from '../../images/in-final-1.png'
import INFinal2 from '../../images/in-final-2.png'
import INFinal3 from '../../images/in-final-3.png'
import INTeam from '../../images/in-team-picture.png'
import "react-image-lightbox/style.css";
import './projects.css'

const images = [
  INNeedfinding,
  INPersona1,
  INPersona2,
  INPersona3,
  INStoryboard1,
  INStoryboard2,
  INStoryboard3,
  INWireframes,
  INPrototype1,
  INPrototype2,
  INPrototype3,
  INFinal1,
  INFinal2,
  INFinal3,
  INTeam
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
          <div className="green-banner">
            <img className="banner" src={INBanner}/>
          </div>
          <div className="project-content">
            <div className="project-title">iNFORMed: a grassroots community platform</div>
              <p><strong>Scope:</strong> UI/UX Design, Visual Design, User Research</p>
              <p><strong>Tools:</strong> Balsamiq, Figma, Google Forms, Calendly, Zoom</p>
              <p><strong>Timeline:</strong> March 2020 - June 2020 (fully remote)</p>
              <h2 id="overview">Background</h2>
              <p>
                During the abrupt upheavals in transitions caused by the COVID-19 pandemic, 
                my team and I experienced first-hand how ourselves, our peers, family members, 
                coworkers, and community members became receptive to unchecked information on 
                social media, the news, and through word-of-mouth. From initially hearing how 
                masks weren’t useful to suddenly being required to wear them and seeing a 
                surge in panic-buying, these drastic changes left ourselves and many of the 
                people around us confused about the veracity of information that was being 
                spread around. As a result, we were interested in understanding the impacts 
                of misinformation on community members, specifically focusing on communities 
                in California due to the variation of shelter-in-place orders across various 
                states. We set out to understand how we could better provide and refine 
                community resources to combat misinformation. 
              </p>
              <h2 id="needfinding">Needfinding</h2>
              <p>
                We sent out an initial <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIGf-sV-gRht0RpTbn4slVWV7o7AkF5F5s05b9ONQUrAHKuA/viewform?usp=sf_link" target="_blank">Google Forms questionnaire</a> to find out how people within 
                communities across California were receiving the impacts of information related 
                to the COVID-19 pandemic. We collected 121 responses from parents, students, 
                small business owners, retirees, college graduates, nurses, and other community 
                members across various platforms such as Facebook groups (including Etsy Buyers 
                and Sellers, You Know You Work at UPS If…, Small Businesses in California Fight Back, 
                Fast Food Workers, We All We Got San Diego - Mutual Aid), LinkedIn, and Twitter. 
                Here were our key insights:
              </p>
              <ul>
                <li><strong>82% of people across a broad spectrum of ages turned to social media </strong> a source of news</li>
                <li>We had <strong> over 40 unique examples of information that people heard and were questioning, </strong> 
                  ranging from the obviously false statements not backed by research such as “shine UV 
                  light at lungs to kill the virus” to the slightly believable “COVID-19 can be 
                  transmitted across food.”
                </li>
              </ul>
              <div>
                <img className="project-image-half center lightbox" src={INNeedfinding} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 0 })}/>
                <i className="center">Questionnaire Demographics</i>
              </div>
              <br/>
              <p>
                We followed up with 12 people who responded and gave consent for conducting remote virtual 
                interviews over Zoom, scheduled through Calendly. Through our conversations following an 
                interview guide, here were some of the highlights we came across:
              </p>
              <ul>
                <li>
                  News (via TV, news articles on websites, CDC, state, and city websites) can be <strong> overwhelmingly
                  repetitive </strong>combined at the national, state, city, and local levels <strong> to the extent that people 
                  avoid looking at the news and turn to social media </strong> where they only see news that turns up on 
                  their feed.
                </li>
                <li>
                  Participants expressed frustration with their family members constantly asking them <strong>what the store hours are/whether they’ve changed from week to week. </strong> People who drove to restaurants or other stores to find that <strong> they were closed. </strong>
                </li>
              </ul>
              <p>
                We also had our interviewees partake in a <strong> true/false activity, </strong> where we modified a list of 10 COVID-19 myth-buster facts we sourced from WHO and CDC’s websites to understand how well our interviewees could distinguish fact from fiction based off information they had heard of previously from hearsay, the news, or social media. We found that our interviewees <strong> averaged an 8.1/10 </strong> on this true/false activity. People generally had no problem distinguishing statements that were obviously not true, such as statements like “Consuming garlic and onions prevents infection from COVID-19” (Note: <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters" target="_blank"> this statement is false according to WHO).</a> People only tripped up on statements that <strong> combined fact and fiction</strong>—in particular, the following three questions:
              </p>
              <ol>
                <li>
                  The CDC has found evidence that the transmission of COVID-19 is associated with food.
                  <br/>
                  <i className="answer">False. “Currently, there is no evidence to support transmission of COVID-19 associated with food.” 
                    - <a href="https://www.cdc.gov/foodsafety/newsletter/food-safety-and-Coronavirus.html" target="_blank">CDC on “Food Safety and Coronavirus” </a></i>
                </li>
                <li>
                  Exposing yourself to the sun or to all temperatures higher than 30 degrees Celsius (86 degrees Fahrenheit) prevents the coronavirus disease.
                  <br/>
                  <i className="answer">False. Even though high temperatures can kill disease-causing organisms, weather-degree temperature is not high enough. “You can catch COVID-19, no matter how sunny or hot the weather is. Countries with hot weather have reported cases of COVID-19.”
                    - <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters" target="_blank"> World Health Organization COVID-19 Mythbusters </a></i>
                </li>
                <li>
                  The CDC recommends that the general public wear surgical masks.
                  <br/>
                  <i className="answer">False. “The cloth face coverings recommended are not surgical masks or N-95 respirators.  They are critical supplies that must continue to be reserved for healthcare workers and other medical first responders, as recommended by current CDC guidance.”
                    - <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover.html" target="_blank"> CDC on “Recommendations for Cloth Face Covers” </a></i>
                </li>
              </ol>
              <h2 id="problem-statement">Problem Statement</h2>
              <p>
              As a result of our needfinding process, we narrowed down our scope from our initial question “How does the spread of false information regarding COVID-19 impact the understanding of it, and the community’s perception of the stay-at-home order?” to ask <strong>“How might we provide community resources to combat the spread of false information regarding COVID-19?”</strong>
              </p>
              <h2 id="personas">Personas</h2>
              <p>
              Through our needfinding process, we pinpointed 3 types of stakeholders in the following personas that our problem revolves around: Alyssa, a work-from-home mother, Martin, a retired grandfather, and Crystal, a small business owner.
              </p>
              <div className="row">
                <img className="project-image-third center lightbox" src={INPersona1} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 1 })}/>
                <img className="project-image-third center lightbox" src={INPersona2} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 2 })}/>
                <img className="project-image-third center lightbox" src={INPersona3} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 3 })}/>
              </div>
              <h2 id="storyboarding">Storyboarding</h2>
              <p>Using the backgrounds of our 3 personas, we came up with 3 storyboards for each persona-type respectively to address our problem statement from different perspectives. We interviewed users across each of our persona types to gain feedback about each potential storyboard idea.</p>
              <h3 id="storyboard1">Storyboard 1 - Centralized Q&A forum and info resources</h3>
              <img className="project-image-full center lightbox" src={INStoryboard1} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 4 })}/>
              <p>
                <strong>Interview feedback: </strong><br/><br/>
                “It would be nice to know if research was done already and centralized. This would be helpful for parents who are worried and who don’t have time to get information on their own.” <i>- Charlene, 30s, Hiring advisor working from home, parent to two kids </i><br/><br/>
                “[The platform] is a good idea as long as it specifies who is answering the questions with their contact information. People would not spread false information under their own name.” <i>- Oscar, 22, Online business owner </i>
              </p>
              <h3 id="storyboard2">Storyboard 2 - Sharing is Caring</h3>
              <img className="project-image-full center lightbox" src={INStoryboard2} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 5 })}/>
              <p>
                <strong>Interview feedback: </strong><br/><br/>
                “My local community is doing something similar. I ask my elderly neighbors if they need anything”<i>- Carol, 60s, Technical support worker </i><br/><br/>
                “Sounds like the TaskRabbit app. Not a good idea because I don’t think people over time will keep up with it. It could potentially transmit the virus to one another.”<i> - Paul, 20s, fourth-year college student</i>
              </p>
              <h3 id="storyboard3">Storyboard 3 - Developing Online Presence for Small Businesses</h3>
              <img className="project-image-full center lightbox" src={INStoryboard3} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 6 })}/>
              <p>
                <strong>Interview feedback:</strong><br/><br/>
                “This is what I’ve been doing for my own personal business. Going online has helped me generate even more business--2 to 3 times more than what I earned prior to COVID-19. After COVID-19, businesses will be run differently. [Online businesses] would lower or eliminate costs of rent, food, employees and utilities.”<i> - Oscar, 22, Online business owner </i><br/><br/>
                “As a business owner you have to roll with the punches. Setting up an online platform is the thing to do.  The challenge you’d face would be what would attract [small business owners] from using this versus Facebook Marketplace or Ebay or other ecommerce shops.”<i> - Carol, 60s, Technical support worker</i>
              </p>
              <h2 id="wireframing">Wireframing</h2>
              <p>
                Using the storyboard interviews we conducted, we opted to combine aspects of the Q&A board, providing up-to-date information on county news, community service, and local business information. We created a low-fidelity wireframe to gather as much initial honest feedback for the layout as we could before investing too much time overhead into our ideas. We focused on 5 areas and created a module for them each in our low-fidelity wireframe.
              </p>
              <ol>
                <li>
                  <strong>COVID-19 Q&A:</strong> a question and answer board where community members could get fact-checked answers from community or verified members. Community members (e.g. teachers, healthcare workers, city officials) must apply for a specific Q&A group.
                </li>
                <li>
                  <strong>County Updates: </strong> a centralized location to find local alerts and status updates, such as curfews, shelter-in-place duration, closure of parks, etc.
                </li>
                <li>
                  <strong>Grocery Stores: </strong> find up-to-date hours of operation and notices for stock on certain items for local grocery stores 
                </li>
                <li>
                  <strong>Local Restaurants: </strong> support local businesses by finding up-to-date hours of operation and available means to order, such as dine-in, takeout, or delivery.
                </li>
                <li>
                  <strong>Sharing is Caring: </strong> module for community members to provide one another with task-based services
                </li>
              </ol>
              <div className="row">
                <img className="project-image-half center lightbox" src={INWireframes} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 7 })}/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/BWdO_DDEteY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
              </div>
              
              <h2 id="user-testing-on-wireframes">User Testing On Wireframes</h2>
              <p>
                Using Balsamiq Cloud, we created a wireframe for users to interact with. We used an interview guide where we asked users to perform tasks such as (1) navigate to view the profile of a verified member who responded to the first question in the Q&A module, (2) view county updates, (3) accept a request to help a community member get groceries. As we had our users screen share their interactions on Zoom, we noticed and made design decisions to the following:
              </p>
              <ul>
                <li>
                  Q&A groups should incorporate locations so that users can choose to engage on a local, county-wide, or state-wide level
                </li>
                <li>
                  Users wanted the ability to see their own posts on their profile page and notifications for their own posts. As a result, we decided to remove the bottom navigation bar to create a hamburger menu on the home screen instead, that would provide more flexibility in being able to hold additional sections that we had to incorporate that the bottom bar could not fit, such as the verified member application, saved questions, and the user’s own questions.
                </li>
                <li>
                  The Sharing is Caring module seemed ambitious although people liked the idea of community giving, since it would require built-in messaging for the details of requests. A user suggested that this could also be absorbed into the Q&A board module. As a result, we elected to remove this module.
                </li>
              </ul>
              <h2 id="prototyping-and-user-testing">Prototyping & User Testing</h2>
              <p>
                Using the feedback from conducting user testing on our wireframes, we created a high-fidelity prototype with more fleshed out user interface elements for each of the modules.  We conducted user testing on our high-fidelity prototypes to gauge how well our prototype performed, specifically focusing on whether our iconography could convey its intended purposes. Here were some of our findings and changes that we implemented to address the issues we found.
              </p>
              <h3>Ask/Respond to a Question Buttons</h3>
              <img className="project-image-full center lightbox" src={INPrototype1} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 8 })}/>
              <p>
                We noticed that when we asked users to create a question from the “View Discussion” screen where users could view responses, users kept hitting the floating action button with a plus symbol to create a response instead, and vice versa. <strong>We had assumed that users would understand what the button containing the plus symbol within the context of the current page </strong> (e.g. ask a question from the question page, respond to a question from the discussion page), but this was actually not the case. Users also hesitated to hit the button because they didn’t understand that the plus symbol referred to writing a new question or response. <strong> As a result of these insights, we distinguished the two actions by creating new icons:</strong> we used a pen and plus symbol next to each other to symbolize asking a new question, and a pen and arrow symbol next to each other to symbolize creating a response.
              </p>
              <h3>Revamping the Add Restaurant Form</h3>
              <img className="project-image-full center lightbox" src={INPrototype2} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 9 })}/>
              <p>
                Although we had envisioned that the form to add a new restaurant to a community listing would be a simple and straightforward process, this was not so according to our users. Despite being curious about the process to add a restaurant at first, <strong>users became discouraged from wanting to fill out the entire form </strong> due to the cognitive load of having to input all the information at once. <strong> To fix this, we spaced out the original single-page form into a three-page form for better readability and pacing. </strong> Users noted that our original single-page design also lacked a confirmation page that would allow the user to preview their changes before they submitted them, <strong>so we added preview images at the end of the process to bridge this gulf of execution.</strong> We also decided to fix the irregular spacing between the title of the form item and its text field (e.g. name and its text field), by changing our text field component in our design system to stack the title on top of its field to improve readability. We also added a border to the our buttons in our design system to improve the contrast between the button itself and its background, since a few users noted that it was hard to distinguish the button.
              </p>
              <h3>Call-to-action for Community Verification</h3>
              <img className="project-image-full center lightbox" src={INPrototype3} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 10 })}/>
              <p>
                <i>Closed Card</i> - Between versions 1 and 2, we worked on making space for multiple food delivery options and making it easier to read the ordering options and their respective availabilities. We saw that users were initially confused as they wandered around the screen trying to look for ways to activate the community verification in the open card. <strong>In version 2, the position of the exclamation point </strong> that required the user to tap to activate the verification dropdown in the open card turned out to be <strong> too subtle as it blended with the restaurant image. </strong> Although we tried to address this by moving the exclamation to the top right corner in version 3, users thought that it was a notification icon rather than a button. Finally, we created a background card behind the current card with call-to-action text next to the exclamation mark in version 4. <strong> By being able to read the call-to-action text, </strong> users were able to more easily distinguish that an action could occur by triggering the background card.
                <br/><br/>
                <i>Open Card</i> - From version 1, we made the following changes to create version 2: (1) users were initially confused what the policy was to suggest community changes, so we changed our information hierarchy by moving the instructions from the bottom to the top, (2) we made it easier to recognize the change-making progress in one place, since the two measures of progress (the 36 hours remaining and ⅕ verifications so far) were initially scattered about, (3) users noted that the black strikethrough blended in with the original text so we replaced this with a transparent red cross, (4) users felt like they were being pushed to respond to a change despite not knowing whether it was true, so we added an “I don’t know” option.
              </p>
              <h2 id="final-design">Final Design</h2>
              <p>View the video below for a full interactive experience of the platform. Beneath the video is a selection of the final versions of platform interfaces that I worked on within our allotted time constraints.</p>
              <iframe className="center" width="560" height="315" src="https://www.youtube.com/embed/fp13hFZfr5Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
              <h3>Home screen with modules, menu panel, and verification application</h3>
              <img className="project-image-full center lightbox" src={INFinal1} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 11 })}/>
              <h3>COVID-19 Q&A Module</h3>
              <img className="project-image-full center lightbox" src={INFinal2} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 12 })}/>
              <h3>Local Restaurants Module</h3>
              <img className="project-image-full center lightbox" src={INFinal3} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 13 })}/>
              <h2 id="reflection">Reflection</h2>
              <p>From what seemed to be an impossible task conducting interviews, gathering user research, collaborating to make prototypes, and facilitating user testing all online during the pandemic, we managed to create a useful platform beyond our initial imagination of the extent to which we could accomplish. Although iNFORMed isn’t perfect, we hope that the platform’s applications can extend beyond the duration of the COVID-19 pandemic to address community needs. Even after the impacts of shelter-in-place, we can continue to encourage community members to ask and answer each other’s questions grounded in truthfulness and motivate one another to take a grassroots approach to supporting local businesses.</p>
              <p>Here’s a team picture with all of my team members and myself personified as snowmen that we created while playing around with Figma’s tools. A huge thanks to my teammates, Brianna, Julianne, Josephine, and Sam for working with me throughout this project remotely ☃️</p>
              <img className="project-image-full center lightbox" src={INTeam} onClick={() => this.setState({ isLightboxOpen: true, photoIndex: 14 })}/>
          </div>
        </div>
      </div>
    );
  }
}

export default AvantGarde