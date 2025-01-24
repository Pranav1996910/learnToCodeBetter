'use client';

import styles from "./components/video/home.module.css"
import pStyles from "./page.module.css"
import { useRef } from "react";
import Link from "next/link";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import ExperienceForm from "./components/experience-form";
import Footer from "./components/footer"

const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function Page() {
  const parallax = useRef<IParallax>(null!);
  const infosysDescription = ["seffsefsef esf se fsef", "sefsesef sef se fse ff", " sef se fse fse fse f"];
  return (
    <>
      <div>
        <div>
          <div className={pStyles.introCenterMain}>
            <Parallax ref={parallax} style={{ backgroundColor: '#000812' }} pages={5.4}>

              <ParallaxLayer
                offset={0}
                speed={0}
                factor={5}
                style={{
                  backgroundImage: url('stars', true),
                  backgroundSize: 'cover',
                  color: "#000000"
                }}
              />

              <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={1.2} speed={0.2} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '60%', marginTop: '25%' }} />
              </ParallaxLayer>

              <ParallaxLayer offset={4.3} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={2.1} speed={2} style={{ opacity: 0.8 }}>
                <img src='/images/rocket.gif' style={{ display: 'block', width: '20%', marginLeft: '1%', marginTop: '20%' }} />
              </ParallaxLayer>

              <ParallaxLayer offset={2.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%', marginTop: '20%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={2.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
              </ParallaxLayer>

              <ParallaxLayer offset={1.3} speed={-0.3} style={{ opacity: 0.6, pointerEvents: 'none' }}>
                <img src={url('satellite4')} style={{ width: '15%', marginLeft: '10%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={3.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={4} speed={0.8} style={{ opacity: 0.6 }}>
                <img className={pStyles.austonautRocket} src='/images/astronaut-rocket.png' />
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
                <div className={pStyles.bannerContainer}>
                  {/* <video playsInline autoPlay loop muted>
                    <source src="/images/bannervideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                  <div className={pStyles.bannerMainDiv}>
                    <div className={pStyles.bannerTitle}>
                      LearnToCodeBetter101
                    </div>
                    <div className={pStyles.introSecondLine}>
                      Master programming languages and development frameworks with hands-on projects in small groups. Learn best practices throughout our courses for practical and industry-relevant skills.
                    </div>
                    <Link href="/courses">
                      <button className={pStyles.coursesButton}>View Courses</button>
                    </Link>
                  </div>
                  <div className={pStyles.bannerAstronaut}>
                    <img className={pStyles.astronautGif} alt="astronaut" src="/images/astronaut-tumble.gif" height={100} width={100} />
                  </div>
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
                  <div className={pStyles.introCenterInnerDiv}>
                    <div className={pStyles.introCenter}>
                      <p className={pStyles.introFirstLine}>Hi, I’m Pranav <img className={pStyles.wavingIcon} title="Hello" alt="hello" src='/images/icons/waving.gif'></img></p>
                      <div>
                        <p id="introText" className={pStyles.introSecondLine}>Full-stack developer with a passion for programming and a flair for teaching. Transforming difficult ideas into clear and practical insights with 5 years of experience in</p>
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
                        <img className={pStyles.avatarPicture} src="/images/profile.png" />
                      </div>
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
                <div className={pStyles.experienceMainDiv}>
                  <div className={pStyles.experienceTitle}> Professional Experience </div>
                  <div className={pStyles.experienceMain}>
                    <div className={pStyles.experience1}>
                      <a href="http://www.zalando.de/" target="_blank" rel="noopener noreferrer">
                        <ExperienceForm designation="Software Engineer" imageSrc="/images/icons/Zalando.png" description={infosysDescription} />
                      </a>
                    </div>
                    <div className={pStyles.experience2}>
                      <a href="https://www.sap.com/" target="_blank" rel="noopener noreferrer">
                        <ExperienceForm designation="Intern" imageSrc="/images/icons/sap.svg" description={infosysDescription} />
                      </a>
                    </div>
                    <div className={pStyles.experience3}>
                      <a href="https://leomax.de/" target="_blank" rel="noopener noreferrer">
                        <ExperienceForm designation="Working Student" imageSrc="/images/icons/leomax.svg" description={infosysDescription} />
                      </a>
                    </div>
                    <div className={pStyles.experience4}>
                      <a href="https://luxeveda.com/" target="_blank" rel="noopener noreferrer">
                        <ExperienceForm designation="Senior Web developer" imageSrc="/images/icons/luxeveda.png" description={infosysDescription} />
                      </a>
                    </div>
                    <div className={pStyles.experience5}>
                      <a href="https://www.infosys.com/" target="_blank" rel="noopener noreferrer">
                        <ExperienceForm designation="Systems Engineer" imageSrc="/images/icons/infosys.png" description={infosysDescription} />
                      </a>
                    </div>
                  </div>
                </div>
              </ParallaxLayer>

              <ParallaxLayer
                offset={3}
                speed={0.5}
                onClick={() => parallax.current.scrollTo(4)}
              >
                <div className={pStyles.projectsMainDiv}>
                  <div className={pStyles.experienceTitle}>
                    My Projects
                    <a href="https://github.com/PranavJ96" target="_blank" rel="noopener noreferrer">
                      <img className={pStyles.githubSectionLogo} alt="Github" width={100} height={100} src="/images/icons/github.png" />
                    </a>
                  </div>
                  <div className={pStyles.projectsLaptops}>
                    <div className={pStyles.projectsGif}>
                      <img className={pStyles.projectImage} src="/images/project1.gif" />
                    </div>
                    <div className={pStyles.projectsGif}>
                      <img className={pStyles.projectImage} src="/images/project3.gif" />
                    </div>
                    <div className={pStyles.projectsGif}>
                      <img className={pStyles.projectImage} src="/images/project2.gif" />
                    </div>
                  </div>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={4}
                speed={0.5}
                onClick={() => parallax.current.scrollTo(5)}
                style={{
                  alignItems: 'center',
                }}>
                <div className={pStyles.instagramMainDiv}>
                  <div className={pStyles.experienceTitle}>
                    Follow me on Instagram
                    <a href="https://www.instagram.com/learntocodebetter101/" target="_blank" rel="noopener noreferrer">
                      <img className={pStyles.instagramSectionLogo} alt="instagram" width={100} height={100} src="/images/icons/instagram.svg" />
                    </a>
                  </div>
                  <div className={pStyles.instagramInnerContainer}>
                    <div className={pStyles.instagramPost}>
                      <div className={pStyles.instagramPostPictureMain}>
                        <img className={pStyles.instagramPostPicture} alt="instagram post1" width={100} height={100} src="/images/instagram/1.png" />
                        <div className={pStyles.instagramPostImageDescriptionMain}>
                          <div className={pStyles.instagramPostImageDescription}>
                            Some text here, explaining what is happening in the code will come here.
                          </div>
                        </div>
                      </div>
                      <div className={pStyles.instagramCaption}>
                        Some dummy text here
                      </div>
                    </div>
                    <div className={pStyles.instagramPost}>
                      <div className={pStyles.instagramPostPictureMain}>
                        <img className={pStyles.instagramPostPicture} alt="instagram post1" width={100} height={100} src="/images/instagram/2.png" />
                        <div className={pStyles.instagramPostImageDescriptionMain}>
                          <div className={pStyles.instagramPostImageDescription}>
                            Some text here, explaining what is happening in the code will come here.
                          </div>
                        </div>
                      </div>
                      <div className={pStyles.instagramCaption}>
                        Some dummy text here
                      </div>
                    </div>
                    <div className={pStyles.instagramPost}>
                      <div className={pStyles.instagramPostPictureMain}>
                        <img className={pStyles.instagramPostPicture} alt="instagram post1" width={100} height={100} src="/images/instagram/3.png" />
                        <div className={pStyles.instagramPostImageDescriptionMain}>
                          <div className={pStyles.instagramPostImageDescription}>
                            Some text here, explaining what is happening in the code will come here.
                          </div>
                        </div>
                      </div>
                      <div className={pStyles.instagramCaption}>
                        Some dummy text here
                      </div>
                    </div>
                    <div className={pStyles.instagramPost}>
                      <div className={pStyles.instagramPostPictureMain}>
                        <img className={pStyles.instagramPostPicture} alt="instagram post1" width={100} height={100} src="/images/instagram/4.png" />
                        <div className={pStyles.instagramPostImageDescriptionMain}>
                          <div className={pStyles.instagramPostImageDescription}>
                            Some text here, explaining what is happening in the code will come here.
                          </div>
                        </div>
                      </div>
                      <div className={pStyles.instagramCaption}>
                        Some dummy text here
                      </div>
                    </div>
                    <div className={pStyles.instagramPost}>
                      <div className={pStyles.instagramPostPictureMain}>
                        <img className={pStyles.instagramPostPicture} alt="instagram post1" width={100} height={100} src="/images/instagram/5.png" />
                        <div className={pStyles.instagramPostImageDescriptionMain}>
                          <div className={pStyles.instagramPostImageDescription}>
                            Some text here, explaining what is happening in the code will come here.
                          </div>
                        </div>
                      </div>
                      <div className={pStyles.instagramCaption}>
                        Some dummy text here
                      </div>
                    </div>
                    <div className={pStyles.instagramPost}>
                      <div className={pStyles.instagramPostPictureMain}>
                        <img className={pStyles.instagramPostPicture} alt="instagram post1" width={100} height={100} src="/images/instagram/7.png" />
                        <div className={pStyles.instagramPostImageDescriptionMain}>
                          <div className={pStyles.instagramPostImageDescription}>
                            Some text here, explaining what is happening in the code will come here.
                          </div>
                        </div>
                      </div>
                      <div className={pStyles.instagramCaption}>
                        Some dummy text here
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={5}
                onClick={() => parallax.current.scrollTo(0)}
                className={pStyles.footerMain}>
                <Footer />
              </ParallaxLayer>
            </Parallax>
          </div>
        </div>
      </div >
    </>
  )
}
