import React, { type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from '@site/src/components/HomepageFeatures'; // Remove or comment out this line
import Heading from "@theme/Heading";

// Import your new Button component
import Button from "@site/src/components/Button/Button";

import styles from "./index.module.css"; // Ensure this file exists and contains .heroBanner, .buttons, .section and .grid

// Define your quick links data
const QuickLinksData = [
  {
    title: "✅️ Official Inventor.gg Discord Server",
    link: "https://discord.com/invite/ntcSNCjqWr",
    // Add an optional background image for the "cover" button
    backgroundImage: "url(/home/invt-discord.png)", // Make sure this image exists in static/img/
  },
  {
    title: "💙 8BiToe's Discord Server",
    link: "https://discord.com/invite/ztcvWPh8Zv", // External link
    backgroundImage: "url(/home/8bitoe-discord.png)", // Make sure this image exists in static/img/
  },
  {
    title: "💬 YouTube Post",
    link: "https://www.youtube.com/post/UgkxjZLHrRWIe2v3cqxUqLWqtDBI1SZG_oCi", // External link
    backgroundImage: "url(/home/yt-post.png)", // Make sure this image exists in static/img/
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`} // Custom browser tab title
      description="InvenTutor provides high-quality tutorials for Inventor.gg."
    >
      <HomepageHeader />
      <main>
        {/* About Section */}
        <section className={clsx("padding-vert--lg", styles.section)}>
          <div className="container">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <Heading as="h2">Message from the creator</Heading>
                <p>
                  Hello everyone. I have made a difficult decision to shut down
                  the InvenTutor service.
                </p>
                <p>
                  I am very grateful for the small community we managed to build
                  in the last 2 years. I feel satisfied that we made inventors
                  (that's you!😄) happy by showing you how to get started with
                  making advanced Inventor.gg bots. However, i need to step away
                  from this service so i can dedicate my time towards other
                  projects.
                </p>
                <p>
                  The Discord server will be deleted on 8th March 2026. If you
                  need help with making Inventor.gg bots, please join the
                  official Inventor.gg Discord server. However, if you need help
                  regarding a specific tutorial, you can reach out to me in my
                  personal Discord server.
                </p>
                <p>
                  Videos will stay public for the forseeable future, I have
                  labelled the videos with the V1 tag so others don't get
                  confused in the future about it not matching the new upcoming
                  version of Inventor.gg. The videos may be delisted in the
                  future once they are irrelevant.
                </p>
                <p>
                  ⚠️ Please note that Inventor.gg is NOT shutting down,
                  InvenTutor is. I don't want anyone to be confused by this.
                </p>

                <p>‎</p>

                <p>Thank you everyone,</p>
                <p> - 8BiToe</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className={clsx("padding-bottom--lg", styles.section)}>
          <div className="container">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <div className={clsx("row", styles.quickLinksGrid)}>
                  {QuickLinksData.map((item, index) => (
                    <div
                      key={index}
                      className={clsx("col col--4", styles.quickLinkItem)}
                    >
                      <Button
                        to={item.link}
                        href={
                          item.link.startsWith("http") ? item.link : undefined
                        } // Use href for external links
                        variant="cover"
                        style={{ backgroundImage: item.backgroundImage }} // Apply background image here
                      >
                        <Heading as="h3">{item.title}</Heading>
                        {/* You can add a short description here if needed */}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
