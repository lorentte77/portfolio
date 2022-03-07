import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import telegramIcon from "../../assets/telegram.png";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact me</h2>
        <p>
          If you have seen my potential or want to talk to me, feel free to send
          me a message
        </p>
      </header>
      <div className="contacts">
        <a
          className="link-tag"
          target="_blank"
          href="mailto:ahrorsulaymanov2@gmail.com"
        >
          <div>
            <img src={emailIcon} alt="Email" />
            <span>ruslan.abdurashidov@gmail.com</span>
          </div>
        </a>
        <a className="link-tag" target="_blank" href="tel:+998995713568">
          <div>
            <img src={phoneIcon} alt="Email" />
            <span>(99) 571-35-68</span>
          </div>
        </a>

        <a className="link-tag" target="_blank" href="https://t.me/lorentte">
          <div>
            <img src={telegramIcon} alt="Email" />
            <span>Ruslan Abdurashidov</span>
          </div>
        </a>
      </div>
    </Container>
  );
}
