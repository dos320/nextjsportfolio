import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import asdstyles from '../../styles/utils.module.css';
import { useStyleRegistry } from 'styled-jsx';

export async function getStaticProps({params}){
    const postData = await getPostData(params.id);
    return {
        props: {postData},
    }
}

export async function getStaticPaths(){
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export default function Post({postData}){
    return (
        <Layout>
            <Head>
                <h1 className={asdstyles.headingX1}>{postData.title}</h1>
            </Head>
            <div className={asdstyles.lightText}>
                <Date dateString={postData.date}/>
            </div>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
        </Layout>
    );
}