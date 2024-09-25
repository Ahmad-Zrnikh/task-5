import "./Contact.css"

export default function Contact() {
  return (
    <div className="contact" id="contact">
        <div className="oneCol">
        <img src="images/Group 41.png" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus
felis vitae sit est quisque.</p>
        </div>
        <div className="twoCol">
            <p className="title4">Service</p>
            <p>Payment & Tax</p>
            <p>Features</p>
            <p>View Booking</p>
            <p>Support</p>
        </div>
        <div className="twoCol">
            <p className="title4">About</p>
            <p>About us</p>
            <p>News</p>
            <p>Pricing</p>
            <p>New Property</p>
        </div>
        <div className="twoCol">
            <p className="title4">Our Location</p>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
           <div className="icons">
            <div><img src="images/facebook-fill.png" alt="" /></div>
            <div> <img src="images/twitter-fill.png" alt="" /></div>
            <div> <img src="images/linkedin-fill.png" alt="" /></div>
           </div>
        </div>
    </div>
  )
}
