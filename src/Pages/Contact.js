import ContactItem from "../Components/ContactItems";
import Title from "../Components/Title";

const Contact = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Title title={"Contact"} span={"Contact"} />
      <div className='d-flex flex-wrap mt-5 justify-content-xs-center justify-content-sm-center justify-content-md-center justify-content-lg-around'>
        <div className='map-sec me-xs-0 me-sm-0 me-md-0 me-lg-5'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6572.981069957266!2d77.01874600315772!3d28.475065644090222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1675102090225!5m2!1sen!2sin'
            style={{ width: "400px", height: "450px" }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div className='contact-sect ms-xs-0 ms-sm-0  ms-md-0 ms-lg-0 ms-xl-4 mt-xs-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-0 mt-4'>
          <ContactItem
            title={"Phone:"}
            text1={"+91 8077624179"}
            icons={`fas fa-phone-square  m-4`}
          />
          <ContactItem
            title={"Email:"}
            text1={"ramkishan00128@gmail.com"}
            icons={`fas fa-envelope m-4`}
          />
          <ContactItem
            title={"Address:"}
            text1={"Dayanand colony sector-6"}
            text2={"Gurgoan, Haryana(122001)"}
            icons={`fas fa-address-card m-4`}
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
