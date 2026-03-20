import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

const SEO = ({ title, description, keywords, canonical, ogType = "website", ogImage }: SEOProps) => {
  const siteName = "Orchid Dental Practice";
  const fullTitle = `${title} - ${siteName}`;
  const url = "https://orchiddental.co.uk";

  const misspelledKeywords = "orhid dental, orcid dental, orched dental, orchard dental, dentist willesden, dentis nw10, teath dr london, ortid dental, orchid dentle, best dentst london, orhid dentl, orhid dntlist";
  const finalKeywords = keywords ? `${keywords}, ${misspelledKeywords}` : `orchid dental, dentist, dental practice, london, nw10, willesden, cosmetic dentistry, ${misspelledKeywords}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteName,
    description: "Modern, gentle dental care in Willesden, London—serving nearby Dollis Hill & Willesden Green. Check-ups, hygiene, Invisalign & more.",
    image: "https://orchiddental.co.uk/logo_main.png",
    url: url,
    telephone: "+442084595960",
    address: {
      "@type": "PostalAddress",
      streetAddress: "158–160 High Road",
      addressLocality: "London",
      addressRegion: "Willesden",
      postalCode: "NW10 2PB",
      addressCountry: "GB"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.547527099999996",
      longitude: "-0.2343988"
    },
    areaServed: [
      { "@type": "Place", "name": "Willesden, London" },
      { "@type": "Place", "name": "Dollis Hill, London" },
      { "@type": "Place", "name": "Willesden Green, London" }
    ],
    openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00",
    sameAs: []
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
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

      {/* JSON-LD Schema */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      {/* Language */}
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
