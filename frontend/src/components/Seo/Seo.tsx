import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  schemaData?: object;
}

const Seo = ({ title, description, schemaData }: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {schemaData && (
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    )}
  </Helmet>
);

export default Seo;
