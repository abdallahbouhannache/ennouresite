import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

export default function Map() {
  {
    /* <!-- GOOGLE MAP --> */
  }
  const { t } = useTranslation();

  return (
    <section id="google-map">
      {/* How to change your own map point
     1. Go to Google Maps
     2. Click on your location point
     3. Click "Share" and choose "Embed map" tab
     4. Copy only URL and paste it within the src="" field below
 */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.756272046849!2d5.947463116996685!3d36.40854297221031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f3b3ae1788e141%3A0xcc0830e86c8f4bc8!2sFedj-M&#39;zata%2C%20Ferdjioua!5e0!3m2!1sen!2sdz!4v1648510993418!5m2!1sen!2sdz"
        width="100%"
        height={350}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
      />
    </section>
  );
}
