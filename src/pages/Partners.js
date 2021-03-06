import React from 'react';
import { Link } from 'react-router-dom';

import { TopSection } from '../components/TopSection';
import { PartnerLogos } from '../components/PartnerLogos';
import { Support } from '../components/Support';

const PartnersText = (
  <div>
    <p>
      The tech industry is facing a big challenge to find developers to fill the
      ever increasing number of vacancies. At the same time, asylum seekers and
      refugees lack the necessary opportunities to update their skills and
      integrate better in society.
    </p>
    <p>Together we’ll help to solve both of these issues.</p>

    <div className="section-bottom-link">
      <Link
        className="big-link-3 btn"
        to="mailto:contact@codeyourfuture.co?subject=Interested in partnership"
      >
        Get in Touch
      </Link>
    </div>
  </div>
);

export const Partners = () => (
  <div>
    <TopSection title="Partner with us" content={PartnersText} />
    <PartnerLogos />
    <Support />
  </div>
);
