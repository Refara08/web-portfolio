import { useContext } from "react";

import HeroSocials from "../hero/HeroSocials";
import ContactForm from "./ContactForm";
import Notification from "../notification/Notification";

import NotificationContext from "../../store/notification-ctx";

const Footer = () => {
  const NotificationCtx = useContext(NotificationContext);

  return (
    <>
      {NotificationCtx.status && (
        <Notification
          status={NotificationCtx.status}
          message={NotificationCtx.message}
        />
      )}
      <div
        id="contact"
        className="grid grid-cols-1 lg:grid-cols-2 pt-12 pb-20 px-8 xl:px-56 bg-dark-prime bg-opacity-60"
      >
        <div className="pl-0 lg:pl-28 xl:pl-40 pb-24">
          <div className="mb-12">
            <h3 className="uppercase tracking-widest mb-2">Contact</h3>
            <a
              href="mailto:refara.08@gmail.com"
              className="border-b-2 border-white pb-2 hover:border-secondary hover:pb-1 transition-all duration-300"
            >
              refara.08@gmail.com
            </a>
          </div>
          <div>
            <h3 className="uppercase tracking-widest mb-2">socials</h3>
            <HeroSocials />
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default Footer;
