/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { constructUrl } from "./util";

const Seo = ({
  canonical,
  description,
  lang,
  meta,
  title,
  imageUrl,
  imageAlt,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            social {
              twitter
            }
            defaultogimage
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  const defaultImageUrl = constructUrl(
    site.siteMetadata.siteUrl,
    site.siteMetadata.defaultogimage
  );

  const ogImageUrl = imageUrl || defaultImageUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      link={
        canonical ? [{ rel: "canonical", key: canonical, href: canonical }] : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: imageUrl ? `summary_large_image` : `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          // You should ideally replace the hardcoded URL below with a value you set
          // in your gatsby-config.js file.  And import all shared site metadata into
          // this component with the useStaticQuery hook.
          content: ogImageUrl,
        },
        {
          name: `twitter:image`,
          content: ogImageUrl,
        },
        {
          property: `twitter:image:alt`,
          content: imageAlt || "se-unlocked.com social preview",
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
      ].concat(meta)}
    />
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: `Your favorite Software Engineering Podcast.`,
};

Seo.propTypes = {
  canonical: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  keywords: PropTypes.string,
};

export default Seo;
