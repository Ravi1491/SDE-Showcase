import PageMetaData from "@/components";
import HomePageComponents from "@/components/HomePage";

export default function Home() {
  return (
    <PageMetaData title="Portfolio" description="My portfolio website">
      <HomePageComponents />
    </PageMetaData>
  );
}
