import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import ProjectCard from '../components/projectCard';
import ProjectCardStyles from '../styles/projectCard.module.css'
import { Button } from 'react-scroll';

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return{
    props:{
      allPostsData,
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.whitespace100per}></div>
        <div className={ProjectCardStyles.projectCardContainer}>
          <h1>Projects</h1>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
        </div>
        <div>
            <p>want to see more?</p>
            <Link href='/work'>
              <button>click here</button>
            </Link>
          </div>
        
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  {title}
                </Link>
                <br/>
                <small className={utilStyles.lightText}>
                  {date}
                </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
