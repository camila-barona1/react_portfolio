import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";
import firebase from "./firebase_con";
// firebase.firestore().collection("contacts").add({
//   title: "sssssaaa",
// });

function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;

  const [name_contac, setName] = useState("");
  const [email_contac, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection("contacts")
      .add({
        name_contac,
        email_contac,
        subject,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      });
  }
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" onSubmit={onSubmit}>
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input
                  type="text"
                  value={name_contac}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input
                  type="email"
                  value={email_contac}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.currentTarget.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your Message*</label>
                <textarea
                  name="textarea"
                  value={message}
                  onChange={(e) => setMessage(e.currentTarget.value)}
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field f-button">
                <button>
                  <PrimaryButton title={"Send Email"} />
                </button>
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Phone"}
              icon={phone}
              cont1={"+37 323 516 69 11"}
              cont2={"400 57 40"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              cont1={"camilabarona1@gmail.com"}
              cont2={"camilabarona666@gmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              cont1={"Cali, Valle del Cauca"}
              cont2={"Colombia"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;