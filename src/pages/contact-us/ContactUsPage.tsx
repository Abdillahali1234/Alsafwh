import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconPhone,
} from "@tabler/icons-react";
import Style from "./ContactUsPage.module.css";
import { Link } from "react-router-dom";
import ContactForm from "./components/contactform/ContactForm";

const {
  parent,
  mainInfo,
  ConToLinks,
  Handler,
  Seprator,
  StylingSocial,
  conToSocial,
  FormStyling,
} = Style;

const links = [
  {
    icon: IconBrandTwitter,
    link: "https://twitter.com/your_twitter_handle",
  },
  {
    icon: IconBrandFacebook,
    link: "https://www.facebook.com/your_facebook_handle",
  },
  {
    icon: IconBrandInstagram,
    link: "https://www.instagram.com/your_instagram_handle",
  },
];
const social = [
  {
    icon: IconBrandWhatsapp,
    link: "https://wa.me/201014786438",
    text: "عبر واتساب",
    phoneNumber: "201014786438",
  },
  {
    icon: IconPhone,
    link: "tel:201014786438",
    text: "الاتصال عبر الهاتف",
    phoneNumber: "201014786438",
  },
];

export default function ContactUsPage() {
  return (
    <div className={parent}>
      <div className={Handler}></div>
      <div className={mainInfo}>
        <div className={conToSocial}>
          {social.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className={StylingSocial}
              target="_blank"
              rel="noopener noreferrer">
              <div>
                <item.icon />
                <span>{item.phoneNumber}</span>
              </div>
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
        <div className={ConToLinks}>
          {links.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              target="_blank"
              rel="noopener noreferrer">
              <div>
                <item.icon />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <span className={Seprator}>او</span>
      <div className={FormStyling}>
        <ContactForm />
      </div>
    </div>
  );
}
