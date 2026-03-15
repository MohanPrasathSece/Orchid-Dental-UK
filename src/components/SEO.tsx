import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

const SEO = ({ title, description, canonical, ogType = "website", ogImage }: SEOProps) => {
  const siteName = "Orchid Dental Practice";
  const fullTitle = `${title} | ${siteName}`;
  const url = "https://orchiddental.co.uk";

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={`${url}${canonical}`} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${url}${canonical || ""}`} />
      {ogImage && <meta property="og:image" content={`${url}${ogImage}`} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={`${url}${ogImage}`} />}

      {/* Language */}
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
