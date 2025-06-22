/* Stealing these YouTube player parts will result in breaking Rule 2 in the License. */

import React, { useState } from 'react';
import clsx from 'clsx'; // For combining CSS classes
import styles from './YouTubeEmbed.module.css';

type YouTubeEmbedProps = {
  videoId: string;
  title: string; // Title for accessibility
};

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [showVideo, setShowVideo] = useState(false);
  // Construct the YouTube thumbnail URL (hqdefault is high quality)
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  // Construct the embed URL with privacy-enhanced mode (nocookie)
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;

  const handleConsentClick = () => {
    setShowVideo(true);
  };

  return (
    <div className={clsx(styles.videoContainer, showVideo && styles.showVideo)}>
      {!showVideo ? (
        // Placeholder and Consent Message
        <div className={styles.placeholder} onClick={handleConsentClick}>
          <img
            src={thumbnailUrl}
            alt={`Video Thumbnail for ${title}`}
            className={styles.thumbnail}
            loading="lazy" // Lazy load the thumbnail image
          />
          <div className={styles.overlay}>
            <div className={styles.privacyMessage}>
              This content is hosted on YouTube. By clicking on this section, you agree to YouTube's{' '}
              <a
                href="https://www.youtube.com/t/privacy"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Prevent parent div click from triggering video
              >
                Privacy Policy
              </a>
              .
            </div>
            <button className={styles.playButton} aria-label={`Play video: ${title}`}>
              <span className={styles.playSymbol}>▶</span>
            </button>
          </div>
        </div>
      ) : (
        // Actual Iframe
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}