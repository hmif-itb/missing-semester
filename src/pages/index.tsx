import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
        <p>
          The Missing Semester atau dapat disebut juga Kitab Suci HMIF (HMIF
          Knowledge Base) adalah sebuah koleksi dari dokumen dengan berbagai
          tema, yang ditulis untuk dipelajari dan juga berbagi ilmu. Project ini
          dibuat pada tahun 2024, pada kepengurusan Dewan Eksekutif HMIF ITB
          2024/2025, dengan nama HMIF Nirmana. Sesuai dengan visi HMIF Nirmana,
          yaitu "Mewujudkan Nirmana Akselerasi Potensi HMIF ITB", dimana Nirmana
          berarti "kumpulan unsur-unsur yang disusun secara harmonis", visi ini
          berarti bahwa HMIF ITB harus dapat disusun dengan sesuai, menjadi
          wadah yang sesuai dengan isinya, yaitu mahasiswa, dan menjadi sebuah
          organisasi yang relevan dengan mahasiswanya, yang akan membuat
          pencapaian potensi bagi mahasiswa HMIF ITB terakselerasi. Project ini
          menjadi sebuah inisiatif yang diharapkan membantu pencapaian potensi
          bagi warga HMIF ITB, dengan dapat berbagi ilmu, terus belajar, dan
          juga dapat menunjukkan relevansi dan eksistensi HMIF ITB di berbagai
          struktur sosial.
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <Heading as={"h1"}></Heading>
      </main>
    </Layout>
  );
}
