import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import {Button, animateScroll as scroll} from 'react-scroll';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const name = 'Howard Zhang';
const desc_1 = 'CS student with an interest in front-end and UX/UI'
const desc_2 = 'I enjoy problem-solving and realizing ideas'

export const siteTitle = 'hzhang portfolio';


export default function Layout({ children, home }) {
  // track the current page, used to update the navbar
  const router = useRouter();
  console.log(router); // could probably make this cleaner but whatever (get the window name and only use one line of code)
  const [isVisible, setIsVisible] = useState(false);
  const listenToScroll = () =>{
    let heightToHideFrom = 100;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  
    if(winScroll < heightToHideFrom){
      setIsVisible(false);
    }else{
      setIsVisible(true);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll)
  }, [])
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <div className={utilStyles.topRightDiv}>
          <Link href="/" style={{color: router.pathname === "/" ? 'red' : 'blue'}}>Home  </Link>
          <Link href="/work" style={{color: router.pathname === "/work" ? 'red' : 'blue'}}>Work </Link>
          <Link href="/about" style={{color: router.pathname === "/about" ? 'red' : 'blue'}}>About</Link>
        </div>
        {isVisible ? <div className={utilStyles.floatingDiv} id='hidden-div'>
          <Link href="/" style={{color: router.pathname === "/" ? 'red' : 'blue'}}>Home  </Link>
          <Link href="/work" style={{color: router.pathname === "/work" ? 'red' : 'blue'}}>Work </Link>
          <Link href="/about" style={{color: router.pathname === "/about" ? 'red' : 'blue'}}>About</Link>
        </div> : <></>}
        <header className={styles.header}>
          {home ? (
            <div>
              <Image
                priority
                src="/images/jb.jpg"
                className={`${utilStyles.borderCircle} ${utilStyles.inline_block_child}`}
                height={144}
                width={144}
                alt=""
              />
              <div className={`${utilStyles.inline_block_child} ${styles.header} ${utilStyles.marginleft20px}`}>
                <h1 className={`${utilStyles.heading2Xl}`}>{name}</h1>
                <h3>{desc_1}</h3>
                <p>{desc_2}</p>
                <Button
                  activeClass='active'
                  className='btn'
                  type='submit'
                  to='main'
                  value='Show more'
                  spy={true}
                  smooth={true}
                  duration={500}
                  >
                  </Button>
              </div>
              
            </div>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/jb.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main id='main'>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
        
      </div>
    <div className={styles.footer}>
      <br></br>
      <div className={`${utilStyles.center}`}>      
        <div className={utilStyles.centerDiv}>
            <Link href='/'>
              <Image 
                src='/images/linkedin.png'
                width={50}
                height={50}
                className={utilStyles.centerDiv.img}
              />
            </Link>  
        </div>
        <p className={`${utilStyles.footerText} ${utilStyles.padding40px}`}>howard.zhang111@gmail.com</p>
      </div>
      <p className={`${utilStyles.footerText} ${utilStyles.containerMargin}`}>built with next.js. you can find the repo here: github here</p> 
    </div>
  </div>
  );
}
