import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export default function SEO({
  title = "Patrick Chimezie Chukwudifu | UIUX Designer/ Product Manager Portfolio",
  description = "Portfolio of Patrick Chimezie Chukwudifu, a skilled UIUX Designer/Product Manager specializing in designing intuitive, scalable, and user-centered digital products that seamlessly connect business goals with customer needs.",
  keywords = [],
  image = "/Assets/Pic3.JPG",
  url = "https://patoski.netlify.app",
  type = "website",
  author = "Patrick Chimezie Chukwudifu",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}: SEOProps) {
  const siteTitle = "Patrick Chimezie Chukwudifu Portfolio";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  
  const defaultKeywords = [
    "Patrick Chimezie Chukwudifu",
    "UIUX Designer",
    "Product Manager",
    "ICT Project Manager",
    "Product Designer",
    "Software Designer",
    "Web Designer",
    "Mobile Designer",
  ];
  
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />
            
      {/* Additional Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Head>
  );
}
