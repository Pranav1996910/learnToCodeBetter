'use client';

import styles from "./components/video/home.module.css"
import pStyles from "./page.module.css"
import { useRef } from "react";
import Link from "next/link";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import ExperienceForm from "./components/experience-form";

const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function Page() {
  const parallax = useRef<IParallax>(null!);
  const infosysDescription = ["seffsefsef esf se fsef", "sefsesef sef se fse ff", " sef se fse fse fse f"];
  return (
    <>
      <div>
        <div id="aboutMe">
          <div className={pStyles.introCenterMain}>
            <Parallax ref={parallax} style={{ backgroundColor: '#000812' }} pages={4}>

              <ParallaxLayer
                offset={1}
                speed={0}
                factor={3}
                style={{
                  backgroundImage: url('stars', true),
                  backgroundSize: 'cover',
                  color: "#000000"
                }}
              />

              <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img src={url('satellite4')} style={{ width: '15%', marginLeft: '80%' }} />
              </ParallaxLayer>

              <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={1.2} speed={0.2} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '60%', marginTop: '25%' }} />
              </ParallaxLayer>

              <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={2.1} speed={2} style={{ opacity: 0.8 }}>
                <img src='/images/rocket.gif' style={{ display: 'block', width: '20%', marginLeft: '1%', marginTop: '20%' }} />
              </ParallaxLayer>

              <ParallaxLayer
                offset={3.5}
                speed={-0.4}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                }}>
                <img src={url('earth')} style={{ width: '50%' }} />
              </ParallaxLayer>


              <ParallaxLayer offset={2.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%', marginTop: '20%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={2.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
              </ParallaxLayer>

              <ParallaxLayer offset={3.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
              </ParallaxLayer>

              <ParallaxLayer
                offset={3.4}
                speed={-0.3}
              >
                <div className={pStyles.projectsLaptops}>
                  <div className={pStyles.projectsBackgroundLaptop}>
                    <img src="/images/laptop-first.gif" />
                  </div>
                  <div className={pStyles.projectsForegroundLaptopMain}>

                  </div>
                  <div className={pStyles.projectsBackgroundLaptop}>
                    <img src="/images/laptop_test.gif" />
                  </div>
                  <div className={pStyles.projectsForegroundLaptop}>
                    <img src="/images/laptop_test.gif" />
                  </div>
                </div>
              </ParallaxLayer>

              <ParallaxLayer
                offset={0}
                speed={0}
                onClick={() => parallax.current.scrollTo(1)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <div className={styles.videoContainer}>
                  <video playsInline autoPlay loop muted>
                    <source src="/images/bannervideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className={styles.videoButton}>
                    <Link href="#aboutMe" scroll={true}>
                      <button className={pStyles.videoButton}><p className={pStyles.buttonArrow}>-&gt;</p></button>
                    </Link>
                  </div>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={1}
                speed={.5}
                onClick={() => parallax.current.scrollTo(2)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <div className={pStyles.introCenterMainDiv}>
                  <div>
                    <p className={pStyles.introFirstLine}>Hi, I’m Pranav <img className={pStyles.wavingIcon} title="typescript" alt="typescript" src='/images/icons/waving.gif'></img></p>
                    <div>
                      <p id="introText" className={pStyles.introSecondLine}>Passionate full-stack developer with a passion for programming and a flair for teaching. Transforming difficult ideas into clear and practical insights with 5 years of experience in</p>
                      <div className={pStyles.iconsMain}>
                        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><img className={pStyles.languagesIcon} title="typescript" alt="typescript" src='/images/icons/typescript.png'></img></a>
                        <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><img className={pStyles.languagesIcon} title="javascript" alt="javascript" src='/images/icons/java-script.png'></img></a>
                        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><img className={pStyles.languagesIcon} title="python" alt="python" src='/images/icons/python.png'></img></a>
                        <a href="https://dotnet.microsoft.com/en-us/languages/csharp" target="_blank" rel="noopener noreferrer"><img className={pStyles.languagesIcon} title="csharp" alt="csharp" src='/images/icons/c-sharp.png'></img></a>
                        <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"><img className={pStyles.languagesIcon} title="mysql" alt="mysql" src='/images/icons/mysql.png'></img></a>
                        <a href="https://html.com/html5/" target="_blank" rel="noopener noreferrer"><img className={pStyles.languagesIcon} title="html" alt="html" src='/images/icons/html-5.png'></img></a>
                        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer"><img className={pStyles.languagesIcon} title="css" alt="css" src='/images/icons/css-3.png'></img></a>
                      </div>
                      <div className={pStyles.iconsMain}>
                        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer"><img className={pStyles.languagesIcon} title="react" alt="react" src='/images/icons/react.png'></img></a>
                        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><img className={pStyles.languagesIcon} title="nextjs" alt="next js" src='/images/icons/nextjs.png'></img></a>
                        <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"><img className={pStyles.languagesIcon} title="vuejs" alt="vue js" src='/images/icons/vuejs.png'></img></a>
                        <a href="https://angular.io/" target="_blank" rel="noopener noreferrer"><img className={pStyles.languagesIcon} title="angular" alt="angular" src='/images/icons/angular.svg'></img></a>
                        <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer"><img className={pStyles.languagesIcon} title="nodejs" alt="node js" src='/images/icons/nodejs.svg'></img></a>
                        <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"><img className={pStyles.languagesIcon} title="postgres" alt="postgres" src='/images/icons/postgres.png'></img></a>
                        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><img className={pStyles.languagesIcon} title="mongodb" alt="mongodb" src='/images/icons/mongodb.png'></img></a>
                      </div>
                    </div>
                  </div>
                  <div className={pStyles.introAvatarMain}>
                    <div className={pStyles.introAvatarCircle}>
                    </div>
                  </div>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={2.1}
                speed={0.5}
                onClick={() => parallax.current.scrollTo(3)}
                style={{
                  alignItems: 'center',
                }}>
                <div className={pStyles.experienceTitle}> Professional Experience </div>
                <div className={pStyles.experienceMain}>
                  <div className={pStyles.experience1}>
                    <ExperienceForm designation="Software Engineer" imageSrc="/images/icons/Zalando.png" description={infosysDescription} />
                  </div>
                  <div className={pStyles.experience2}>
                    <ExperienceForm designation="Intern" imageSrc="/images/icons/sap.svg" description={infosysDescription} />
                  </div>
                  <div className={pStyles.experience3}>
                    <ExperienceForm designation="Working Student" imageSrc="/images/icons/leomax.svg" description={infosysDescription} />
                  </div>
                  <div className={pStyles.experience4}>
                    <ExperienceForm designation="Senior Web developer" imageSrc="/images/icons/luxeveda.png" description={infosysDescription} />
                  </div>
                  <div className={pStyles.experience5}>
                    <ExperienceForm designation="Systems Engineer" imageSrc="/images/icons/infosys.png" description={infosysDescription} />
                  </div>
                </div>
              </ParallaxLayer>
              {/* <ParallaxLayer
                offset={3.2}
                speed={.5}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => parallax.current.scrollTo(0)}>
                <img src={url('clients-main')} style={{ width: '40%' }} />
              </ParallaxLayer> */}
            </Parallax>
          </div>
        </div>
      </div >
    </>
  )
}
