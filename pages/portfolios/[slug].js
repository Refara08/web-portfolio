import { useRouter } from "next/router";

const PorfolioDetailPage = () => {
  const router = useRouter();
  const slug = router;
  console.log(slug);
  return <h1>{`this is portfolio ${slug.query.slug}`}</h1>;
};

export default PorfolioDetailPage;
