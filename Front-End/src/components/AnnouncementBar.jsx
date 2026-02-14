/*import React from 'react';
import Marquee from 'react-fast-marquee/dist';
import './AnnouncementBar.css';

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <Marquee gradient={false} speed={50}>
        <span>🚚 Livraison Gratuite à partir de 1999 DT</span>
        <span className="announcement-separator"> • </span>
        <span>💳 Paiement Sécurisé</span>
        <span className="announcement-separator"> • </span>
        <span>⚡ Garantie Constructeur</span>
        <span className="announcement-separator"> • </span>
        <span>📞 Support Client</span>
      </Marquee>
    </div>
  );
};

export default AnnouncementBar;*/

import React from 'react';
import './AnnouncementBar.css';

/*export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-track">
         Free delivery from  •  Secure payment •  Warranty •  Authentic Laptops Only • Don't Miss Out
      </div>
      
     
      
    </div>

  
  );
}*/

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-marquee">
        <div className="announcement-track">
          <span className="delivery-badge">
            <span className="delivery-main">FreeDelivery</span>
            <sup className="delivery-from">From 1990</sup>
          </span>

          <span className="announcement-item">Limited Stock — Don’t Miss Out</span>
          <span className="announcement-item">Authentic Laptops Only</span>
          <span className="announcement-item">Secure Payment</span>
          <span className="announcement-item">Official Warranty</span>
        </div>

        {/* duplicate for infinite loop */}
        <div className="announcement-track" aria-hidden="true">
          <span className="delivery-badge">
            <span className="delivery-main">FreeDelivery</span>
            <sup className="delivery-from">From 1990</sup>
          </span>

          <span className="announcement-item">Limited Stock — Don’t Miss Out</span>
          <span className="announcement-item">Authentic Laptops Only</span>
          <span className="announcement-item">Secure Payment</span>
          <span className="announcement-item">Official Warranty</span>
        </div>
      </div>
    </div>
  );
}




 