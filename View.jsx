
import React from 'react';
import { flattenToAppURL } from '@plone/volto/helpers';
import './multicard.css';

const getImageURL = (image) => {
  if (typeof image === 'string') {
    return `${flattenToAppURL(image)}/@@images/image/large`;
  }
  const imageItem = Array.isArray(image) ? image[0] : image;
  if (imageItem?.['@id']) return `${flattenToAppURL(imageItem['@id'])}/@@images/image/large`;
  if (imageItem?.download) return flattenToAppURL(imageItem.download);
  return null;
};

const getHref = (url, anchor) => {
  const base = typeof url === 'string' ? url : (Array.isArray(url) ? url[0]?.['@id'] : url?.['@id']);
  return anchor?.trim() ? (base ? `${base}${anchor}` : anchor) : base || '#';
};

const isExternalLink = (href) => {
  if (!href) return false;
  if (typeof window === 'undefined') return false;
  return href.startsWith('http') && !href.includes(window.location.hostname);
};

const View = ({ data }) => {
  const alignmentClass = `align-${data.alignment || 'left'}`;
  const columnClass = `columns-${data.columns || 3}`;
  return (
    <div className={`multi-card-container ${alignmentClass} ${columnClass}`}>
      {(data.items || []).map((item, index) => {
        const imageUrl = getImageURL(item.image);
        const href = getHref(item.url, item.anchor);
        const external = isExternalLink(href);
        return (
          <div
            key={index}
            className="multi-card"
            style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }}
          >
            <div className="multi-card-overlay" />
            <div className="multi-card-content">
              {item.title?.trim() && <h3>{item.title}</h3>}
              {item.description?.trim() && <p>{item.description}</p>}
              {item.linkText?.trim() && (
                <a
                  href={href}
                  target={external ? '_blank' : '_self'}
                  rel={external ? 'noopener noreferrer' : undefined}
                >
                  {item.linkText}
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default View;
