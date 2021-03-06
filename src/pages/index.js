import * as React from "react"
import "../index.scss"

// Images
import HeroImg from '../images/hero.png'
import SelectImg from '../images/phone_1.png'
import ChoosePeopleImg from '../images/choose_people.png'
import SplitImg from '../images/split.png'
import GetPaidImg from '../images/get_paid.png'
import SupportImg from '../images/support.png'

// Components
import Nav from '../components/nav'
import Footer from '../components/footer'

// styles
const primaryColor = "#3A41E8";

const pageStyles = {
  color: "#000",
  padding: 0,
  fontFamily: "Poppins, sans-serif",
}
const headingStyles = {
  color: primaryColor,
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <Nav />
      <section>
        <div className="container hero">
          <div className="column">
            <h1 style={headingStyles}>A simple way to split expenses with anyone</h1>
          </div>
          <div className="column">
            <img src={HeroImg} alt="iphone" />
          </div>
        </div>
      </section>
      <div className="container how-title">
        <h2 id="how" >How it works</h2>
      </div>
      <section>
        <div className="container inverse select-section">
          <div className="column column-content">
            <h3>Select an expense</h3>
            <p>Choose any past transaction from your credit card you wish to split</p>
          </div>
          <div className="column column-img">
            <div className="select-img">
              <img src={SelectImg} alt="iphone" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue ">
        <div className="container choose-section">
          <div className="column column-content">
            <h3>Choose people</h3>
            <p>Select who you want to split the transaction with individually or as a group</p>
          </div>
          <div className="column column-img">
            <div className="choose-img">
              <img src={ChoosePeopleImg} alt="iphone" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container inverse split-section">
          <div className="column">
            <h3>Split the expense</h3>
            <p>Send split request instantly between your people</p>
          </div>
          <div className="column column-img split-img">
            <img src={SplitImg} alt="iphone" />
          </div>
        </div>
      </section>
      <section className="bg-blue">
        <div className="container get-paid-section">
          <div className="column column-content">
            <h3>Get paid</h3>
            <p>Receive the money directly in your account</p>
          </div>
          <div className="column column-img">
            <div className="get-paid-img">
              <img src={GetPaidImg} alt="iphone" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default IndexPage
