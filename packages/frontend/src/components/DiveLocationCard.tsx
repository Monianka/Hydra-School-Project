import React from 'react';
import { Link } from 'react-router-dom';
import type { DiveLocation } from '../types/diveLocation';
import './DiveLocationCard.css';

type DiveLocationCardProps = {
  location: DiveLocation;
  detailsLabel: string;
  websiteLabel: string;
};

const DiveLocationCard: React.FC<DiveLocationCardProps> = ({ location, detailsLabel, websiteLabel }) => {
  return (
    <article className="dive-location-card">
      <div className="dive-location-card-content">
        <p className="dive-location-card-area">{location.area}</p>
        <h3>{location.name}</h3>
        <p className="dive-location-card-description">{location.shortDescription}</p>
        <div className="dive-location-card-links">
          <Link to={`/dive-locations/${location.slug}`} className="dive-location-card-link">
            {detailsLabel}
          </Link>
          <a href={location.websiteUrl} target="_blank" rel="noreferrer" className="dive-location-card-link dive-location-card-link-secondary">
            {websiteLabel}
          </a>
        </div>
      </div>
    </article>
  );
};

export default DiveLocationCard;
