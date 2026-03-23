"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Ourwork.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    // Col 1
    { id: 1, title: 'Ventura Pranas', year: '2024', tags: 'UI/UX Design, Development', img: 'https://picsum.photos/400/300?random=1', col: 1 },
    { id: 2, title: 'The Kshatriyas', year: '2025', tags: 'UI/UX, Product Design, Development', img: 'https://picsum.photos/400/600?random=2', col: 1 },
    { id: 3, title: 'Dashboard', year: '2024', tags: 'SaaS Design', img: 'https://picsum.photos/400/300?random=3', col: 1 },

    // Col 2
    { id: 4, title: 'TIE Silicon Valley', year: '2024', tags: 'Rebranding, UI/UX Design', img: 'https://picsum.photos/400/500?random=4', col: 2 },
    { id: 5, title: 'Naeem Zafar', year: '2025', tags: 'Branding, UI/UX Design', img: 'https://picsum.photos/400/400?random=5', col: 2 },

    // Col 3
    { id: 6, title: 'Mall 360', year: '2025', tags: 'Branding, UI/UX Design', img: 'https://picsum.photos/400/300?random=6', col: 3 },
    { id: 7, title: 'Mad Box', year: '2022', tags: 'Branding, Packaging Design', img: 'https://picsum.photos/400/400?random=7', col: 3 },

    // Col 4
    { id: 8, title: 'Ecomall', year: '2025', tags: 'Branding, UI/UX Design', img: 'https://picsum.photos/400/300?random=8', col: 4 },
    { id: 9, title: 'Leiutis', year: '2023', tags: 'Content Design', img: 'https://picsum.photos/400/600?random=9', col: 4 },
    { id: 10, title: 'Eco Shop', year: '2024', tags: 'E-Commerce, Web Design', img: 'https://picsum.photos/400/300?random=10', col: 4 },
];

const ProjectCard = ({ project }) => (
    <div className={styles.card}>
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

export default function Ourwork() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const matchMedia = gsap.matchMedia();

            // Only run complex parallax on desktop/tablet, skip for small mobiles if needed, 
            // but let's run it simply if width >= 1024px to match our un-stacked grid.
            matchMedia.add("(min-width: 1024px)", () => {
                // Col 1: Moves up slightly faster
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

                // Col 2: Moves up slower
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

                // Col 3: Moves up quickly
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

                // Col 4: Moves up the fastest
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

                // Center Text Parallax & Fade In
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

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.container} id="work" ref={containerRef}>
            {/* Absolute Centered Text */}
            <div className={styles.centerText}>
                <h2>
                    OUR WORK<br />
                    <span>YOUR SUCCESS</span>
                </h2>
            </div>

            <div className={styles.grid}>
                {/* Column 1 */}
                <div className={`${styles.column} ${styles.col1}`}>
                    {projects.filter(p => p.col === 1).map(p => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>

                {/* Column 2 */}
                <div className={`${styles.column} ${styles.col2}`}>
                    {projects.filter(p => p.col === 2).map(p => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>

                {/* Column 3 */}
                <div className={`${styles.column} ${styles.col3}`}>
                    {projects.filter(p => p.col === 3).map(p => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>

                {/* Column 4 */}
                <div className={`${styles.column} ${styles.col4}`}>
                    {projects.filter(p => p.col === 4).map(p => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}