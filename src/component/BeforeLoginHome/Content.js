import React from 'react'
import './CSS/Content.css'
import Eachsection from './Eachsection'
import './CSS/Information.css'


const Content = () => {
  const data = [
    {
      heading: "What is Netflix",
      dis: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
      name: "card1"

    },
    {
      heading: "How much does netflix cost",
      dis: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD3.99 to USD11.99 a month. No extra costs, no contracts.",
      name: "card2"
    },
    {
      heading: "Where can i watch?",
      dis: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
      name: "card3"
    },
    {
      heading: "How do I cancel?",
      dis: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      name: 'card4'
    },
    {
      heading: "What can I watch on Netflix?",
      dis: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      name: 'card5'
    },
    {
      heading: "Is Netflix good for kids?",
      dis: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
      name: 'card6'
    }


  ]
  return (
    <>
      <div id='FAQSection'>
        <h1 className='heading text-center'>Frequently Asked Questions</h1>
        {
          data.map((e) => {
            return (
              <Eachsection element={e} key={e.dis} />
            )
          })
        }
        <p className='contentparagraph'>Ready to watch? Enter your email to create or restart your membership.</p>
      </div>
      <div id="contentSectionBtn">
        <div className="contactSection">
          <input type="email" name="email" id="email" placeholder='Email address' />
          <button>Get Started</button>
        </div>
      </div>
      <div className="downshadow"></div>
    </>
  )
}

export default Content
