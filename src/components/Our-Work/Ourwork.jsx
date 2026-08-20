"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Ourwork.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { id: 14, title: 'EHAM', year: '2026', tags: 'Technology, Strategy, UI/UX, Development', img: '/ourwork/highcloudwork.webp', col: 1, href: '/Eham' },
    { id: 13, title: 'Pontis', year: '2025', tags: 'Education, Branding, UI/UX Design', img: '/work individual page assets/pointis thumbnail.webp?v=2', col: 1, href: '/Pontis' },
    { id: 11, title: 'Evoque Impact', year: '2025', tags: 'Finance, UI/UX Design', img: '/ourwork/evoqueimpact.webp', col: 2, href: '/EvoqueImpact' },
    { id: 5, title: 'Naeem Zafar', year: '2025', tags: 'Branding, UI/UX Design', img: '/ourwork/naeeamzafar.webp', col: 3, href: '/NaeemZafar' },
    { id: 4, title: 'TIE Silicon Valley', year: '2024', tags: 'Rebranding, UI/UX Design', img: '/ourwork/siliconvalley.webp', col: 4, href: '/TieSiliconValley' },
    { id: 12, title: 'Life Cykul', year: '2025', tags: 'E-commerce, UI/UX Design', img: '/ourwork/lifecykul.webp', col: 4, href: '/LifeCykul' },

    // Middle Row (Rank 5-8)
    { id: 1, title: 'Ventura Pranas', year: '2024', tags: 'UI/UX Design, Development', img: '/ourwork/venturawork.webp', col: 1, href: '/VenturaPranas' },
    { id: 3, title: 'High Cloud', year: '2024', tags: 'SaaS Design', img: '/ourwork/highcloudwork.webp', col: 2, href: '/HighCloud' },
    { id: 9, title: 'Leiutis', year: '2023', tags: 'Content Design', img: '/ourwork/leiutis.webp', col: 3, href: '/Leiutis' },
    { id: 2, title: 'The Kshatriyas', year: '2025', tags: 'UI/UX, Product Design, Development', img: '/ourwork/kshatriyaswork.webp', col: 4, href: '/TheKshatriyas' },

    // Bottom Row (Rank 9-11)
    { id: 7, title: 'Mad Box', year: '2022', tags: 'Branding, Packaging Design', img: '/ourwork/madboxwork.webp', col: 1, href: '/Madbox' },
    { id: 8, title: 'Ecomall', year: '2025', tags: 'Branding, UI/UX Design', img: '/ourwork/ecomallwork.webp', col: 2, href: '/Ecomall' },
    { id: 6, title: 'Mall 360', year: '2025', tags: 'Branding, UI/UX Design', img: '/ourwork/mall360.webp', col: 3, href: '/Mall360' },
];

const ProjectCard = ({ project }) => {
    const cardContent = (
        <div className={`${styles.card} ${project.href ? styles.cardClickable : ''}`}>
            <div className={styles.cardImageWrap}>
                <img src={project.img} alt={project.title} className={styles.cardImage} />
            </div>
            <div className={styles.cardFooter}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <span className={styles.cardYear}>{project.year}</span>
                </div>
                <p className={styles.cardTags}>{project.tags}</p>
            </div>
        </div>
    );

    if (project.href) {
        return (
            <Link href={project.href} style={{ textDecoration: 'none', display: 'block' }}>
                {cardContent}
            </Link>
        );
    }

    return cardContent;
};

export default function Ourwork() {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [showAllMobile, setShowAllMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        let ctx = gsap.context(() => {
            const matchMedia = gsap.matchMedia();

            matchMedia.add("(min-width: 1024px)", () => {
                gsap.to(`.${styles.col1}`, {
                    y: -120,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    }
                });

                gsap.to(`.${styles.col2}`, {
                    y: -40,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    }
                });

                gsap.to(`.${styles.col3}`, {
                    y: -180,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    }
                });

                gsap.to(`.${styles.col4}`, {
                    y: -250,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    }
                });

                gsap.fromTo(`.${styles.centerText}`,
                    { scale: 0.8, opacity: 0, y: 50 },
                    {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top 70%',
                            end: 'center center',
                            scrub: 1,
                        }
                    }
                );
            });
        }, containerRef);

        return () => {
            window.removeEventListener('resize', checkMobile);
            ctx.revert();
        };
    }, []);

    // On mobile, if not showAllMobile, show first 6 projects
    const visibleProjects = isMobile && !showAllMobile ? projects.slice(0, 6) : projects;

    return (
        <section className={styles.container} id="work" ref={containerRef}>
            {/* Absolute Centered Text */}
            <div className={styles.centerText}>
                <h2>
                    GROWTH PARTNER<br />
                    <span>FROM DAY ZERO.</span>
                </h2>
            </div>

            <div className={styles.grid}>
                {/* On mobile: render flat 2-column grid of visible projects */}
                {isMobile ? (
                    visibleProjects.map(p => (
                        <ProjectCard key={p.id} project={p} />
                    ))
                ) : (
                    <>
                        <div className={`${styles.column} ${styles.col1}`}>
                            {projects.filter(p => p.col === 1).map(p => (
                                <ProjectCard key={p.id} project={p} />
                            ))}
                        </div>
                        <div className={`${styles.column} ${styles.col2}`}>
                            {projects.filter(p => p.col === 2).map(p => (
                                <ProjectCard key={p.id} project={p} />
                            ))}
                        </div>
                        <div className={`${styles.column} ${styles.col3}`}>
                            {projects.filter(p => p.col === 3).map(p => (
                                <ProjectCard key={p.id} project={p} />
                            ))}
                        </div>
                        <div className={`${styles.column} ${styles.col4}`}>
                            {projects.filter(p => p.col === 4).map(p => (
                                <ProjectCard key={p.id} project={p} />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Mobile Action Button */}
            {isMobile && (
                <div className={styles.mobileAction}>
                    <button
                        className={styles.viewMoreBtn}
                        onClick={() => setShowAllMobile(!showAllMobile)}
                        aria-label={showAllMobile ? "Show less work" : "View all work"}
                    >
                        {showAllMobile ? "SHOW LESS" : `VIEW ALL WORK (${projects.length})`}
                        <span className={`${styles.arrow} ${showAllMobile ? styles.up : ''}`}>↓</span>
                    </button>
                </div>
            )}
        </section>
    );
}