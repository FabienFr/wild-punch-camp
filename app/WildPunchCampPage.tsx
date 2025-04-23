"use client";

import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/WildPunchCamp.module.css";
import Button from "./components/Button";
import AnimatedText from "./components/AnimatedText";
import AnimatedSection from "./components/AnimatedSection";
import { motion } from "framer-motion";
import PunchingTitle from "./components/PunchingTitle";
import Lightbox from "./components/Lightbox";

export default function WildPunchCampPage() {
  const [lightboxes, setLightboxes] = useState({
    salveo: false,
    activities: false,
    cadre: false,
  });

  const openLightbox = (name: keyof typeof lightboxes) => {
    setLightboxes((prev) => ({ ...prev, [name]: true }));
  };

  const closeLightbox = (name: keyof typeof lightboxes) => {
    setLightboxes((prev) => ({ ...prev, [name]: false }));
  };

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Chau+Philomene+One&family=Dancing+Script:wght@400;700&family=Pacifico&family=Satisfy&family=Great+Vibes&display=swap" rel="stylesheet" />
      </Head>
      <main className="bg-[#fffdf8] text-gray-900 font-body">
        {/* Palette de couleurs harmonisée et simplifiée */}
        {/* 
          Couleurs principales:
          - Bleu principal: #0088aa (plus doux que l'actuel)
          - Vert accent: #4dcc00 (moins fluo, plus naturel)
          - Bleu foncé: #2d4562 (inchangé)
          - Fond clair: #f8f9fa (inchangé)
          - Texte foncé: #333333 (inchangé)
        */}
        <section className={styles.hero}>
          {/* Image de fond avec overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00a0c6] to-[#4eca64] opacity-80 z-10"></div>
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url("/images/hero.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          <div className={`${styles.heroContent} relative z-20`}>
            <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className={styles.year}>
              ÉTÉ 2025
            </motion.h2>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className={styles.dates}>
              jeudi 24
              <svg className="inline-block w-8 h-8 mx-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              dimanche 27 juillet
            </motion.p>

            <div className="relative flex items-center justify-center my-4">
              {/* Titre */}
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="z-10">
                <PunchingTitle text="WILD PUNCH CAMP" className={styles.title} />
              </motion.div>
            </div>

            <AnimatedText text="VIBREZ AU COEUR DE L'AQUITAINE DURANT 3 JOURS DE REMISE EN FORME" className={styles.tagline} delay={1} />

            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 1.4 }} className={styles.separator}></motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.6 }} className={styles.description}>
              SÉJOUR INITIATION DÉCOUVERTE
            </motion.p>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.8 }} className={styles.location}>
              À seulement une 1H15 de Bordeaux
            </motion.p>

            {/* <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2 }}>
              <Button className="inline-block px-8 py-4 mt-8 text-lg font-bold text-gray-900 transition-all duration-300 bg-white rounded-full shadow-lg hover:bg-[#4dcc00] hover:text-white">RÉSERVER MA PLACE</Button>
            </motion.div> */}
          </div>
        </section>

        {/* À propos - Mise à jour pour harmonisation */}
        <section id="about" className="relative px-6 py-16 overflow-hidden text-center bg-white">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#5dff00] opacity-10 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#00a0c6] opacity-10 -ml-24 -mb-24"></div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className={`${styles.title2} mb-8 text-[#00a0c6]`}>RECONNECTEZ-VOUS À L'ESSENTIEL</h2>
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="h-2 w-64 bg-[#5dff00] mx-auto mb-10"></motion.div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <AnimatedSection delay={0.2}>
                <div className="text-left">
                  <p className="text-lg text-gray-700 mb-4">
                    <span className="font-bold text-[#00a0c6]">Je suis Brice Goillot</span>, fondateur et organisateur de ce séjour de remise en forme en pleine nature. Passionné de boxe et d'expériences humaines hors normes, je vous propose de vivre
                    <span className="font-bold text-[#5dff00]"> le 1er WILD PUNCH CAMP</span>.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Convaincu que le bien-être passe autant par le dépassement de soi que par la reconnexion à la nature, j'ai conçu ce séjour comme une expérience immersive et complète : des entraînements dynamiques, des conseils personnalisés et des moments de récupération dans un cadre apaisant.
                  </p>
                  <p className="text-lg text-gray-700">Préparez-vous à un séjour sportif unique aux côtés de coachs passionnés et engagés !</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <motion.div className="relative rounded-lg overflow-hidden shadow-xl" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <img src="/images/essentiel.png" alt="Brice Goillot" className="w-full h-auto rounded-lg" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white font-bold">Brice Goillot</p>
                    <p className="text-[#5dff00] text-sm">Fondateur Wild Punch Camp</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Activités - Titre harmonisé */}
        <section id="activities" className="px-6 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className={`${styles.title2} text-[#00a0c6] pb-8`}>LE PACK SPORT</h2>
              <div className="h-2 w-64 bg-[#5dff00] mx-auto mb-10"></div>
            </div>

            <p className="pb-6 text-lg">
              A 1H15 de Bordeaux, ce séjour fitness, boxe et bien-être dans le Réolais prend un accent du sud-ouest ! Pour ceux qui hésitent encore entre des vacances sportives ou un séjour bien-être et détente, on a trouvé le bon compromis ! Prenez soin de vous, prenez le soleil, prenez de bons conseils et surtout…
            </p>
            <p className="pb-12 text-lg">
              Prenez votre corps en main! Nous vous proposons un séjour de remise en forme sur 4 jours et 3 nuits pour un groupe de 8 personnes de tous niveaux sportifs. Axés sur du cross-training, la boxe pied poing et le yoga, cette parenthèse sportive vous apportera une expérience unique en pleine nature. On
              s'occupe de tout ! De la gare de Bordeaux / pension complète / activités …
            </p>

            {/* Prépa Physique */}
            <AnimatedSection delay={0.2}>
              <div className="max-w-6xl mx-auto mb-8 overflow-hidden rounded-lg shadow-lg md:mb-16">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-[#0088aa] text-white p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-5xl md:text-5xl font-bold mb-4 md:mb-6 text-[#4dcc00]">PRÉPA PHYSIQUE</h3>
                    <p className="text-base md:text-lg">La préparation physique est un entraînement structuré visant à améliorer les capacités athlétiques, que ce soit pour un sport spécifique ou pour renforcer son corps de manière générale.</p>
                    <p className="mt-3 text-base md:mt-4 md:text-lg">Elle combine différents axes de travail : force, endurance, vitesse, mobilité et coordination, en fonction des objectifs et du niveau de chacun.</p>
                  </div>
                  <motion.div className="md:w-1/2 relative min-h-[200px] md:min-h-[300px] overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <img src="/images/prepa.png" alt="Préparation physique" className="absolute inset-0 object-cover w-full h-full" />
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>

            {/* Boxe */}
            <AnimatedSection delay={0.2}>
              <div className="max-w-6xl mx-auto mb-16 overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="bg-[#2d4562] text-white p-8 md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-5xl font-bold mb-6 text-[#00e1ff]">BOXE</h3>
                    <p className="text-lg">Chaque entraînement combine travail cardio, renforcement musculaire et apprentissage des gestes techniques, que ce soit en ombre, sur sac ou en opposition.</p>
                    <p className="mt-4 text-lg">Accessible à tous, la boxe permet de se défouler, gagner en confiance et améliorer sa condition physique tout en respectant des valeurs de respect et de contrôle.</p>
                  </div>
                  <div className="md:w-1/2 relative min-h-[300px] overflow-hidden">
                    <img src="/images/boxe.png" alt="Entraînement de boxe" className="absolute inset-0 object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Yoga */}
            <AnimatedSection delay={0.2}>
              <div className="max-w-6xl mx-auto mb-16 overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-[#00a0c6] text-white p-8 md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-5xl font-bold mb-6 text-[#5dff00]">YOGA</h3>
                    <p className="text-lg">Que vous recherchiez souplesse, force, sérénité ou énergie, le yoga s'adapte à tous les niveaux et à toutes les aspirations.</p>
                    <p className="mt-4 text-lg">Chaque séance est une invitation à écouter son corps, lâcher prise et se reconnecter à l'instant présent.</p>
                  </div>
                  <div className="md:w-1/2 relative min-h-[300px]">
                    <Image src="/images/yoga.png" width={1000} height={1000} alt="Yoga" className="absolute inset-0 object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Cross Training */}
            <AnimatedSection delay={0.2}>
              <div className="max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="bg-[#2d4562] text-white p-8 md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-5xl font-bold mb-6 text-[#00e1ff]">CROSS TRAINING</h3>
                    <p className="text-lg">Le cross-training est une méthode d'entraînement polyvalente qui combine plusieurs disciplines sportives pour développer la force, l'endurance, l'agilité et la coordination.</p>
                    <p className="mt-4 text-lg">Il repose sur des exercices variés et fonctionnels, sollicitant l'ensemble du corps et améliorant les performances physiques globales.</p>
                  </div>
                  <div className="md:w-1/2 relative min-h-[300px]">
                    <Image src="/images/cross.png" width={1000} height={1000} alt="CrossTraining" className="absolute inset-0 object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Team - Mise à jour des photos avec meilleur positionnement mobile */}
        <section className="relative py-16 overflow-hidden">
          <div className="bg-gradient-to-r from-[#00a0c6] to-[#4eca64] absolute inset-0 z-0"></div>

          <div className="relative z-10 max-w-6xl px-6 mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="pr-0 mb-10 text-white md:w-1/2 md:mb-0 md:pr-10">
                <h2 className={`${styles.title2} mb-8 font-bold text-white`}>VOTRE TEAM</h2>
                <p className="mb-6 text-lg">DYNAMIQUE, BIENVEILLANTE ET ULTRA-MOTIVÉE, NOTRE ÉQUIPE DE COACHS EST LÀ POUR VOUS ACCOMPAGNER, VOUS CHALLENGER ET VOUS POUSSER À DONNER LE MEILLEUR DE VOUS-MÊME.</p>
                <p className="mb-6 text-lg">SPÉCIALISTES DU CROSS-TRAINING, DE LA BOXE ET DE LA PRÉPARATION PHYSIQUE, ILS METTENT LEUR EXPERTISE AU SERVICE DE VOTRE PROGRESSION, EN S'ADAPTANT À VOTRE NIVEAU ET À VOS OBJECTIFS.</p>
                <div className="h-2 w-64 bg-[#5dff00] mt-8 mb-4"></div>
              </div>

              <div className="md:w-1/2">
                {/* Utilisation de grid pour mobile et desktop */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {/* David - Coach de boxe */}
                  <div className="pb-4 overflow-hidden rounded-lg bg-black/20">
                    <div className="relative w-full pt-[100%]">
                      <img src="/images/coach-boxe.png" alt="David - Coach de boxe" className="absolute inset-0 object-cover w-full h-full" />
                    </div>
                    <div className="mt-3 text-center">
                      <h3 className="text-3xl font-bold text-[#5dff00]">David</h3>
                      <p className="text-white">Boxe</p>
                    </div>
                  </div>

                  {/* Jenna - Coach de yoga */}
                  <div className="pb-4 overflow-hidden rounded-lg bg-black/20">
                    <div className="relative w-full pt-[100%]">
                      <img src="/images/coach-yoga.png" alt="Jenna - Coach de yoga" className="absolute inset-0 object-cover w-full h-full" />
                    </div>
                    <div className="mt-3 text-center">
                      <h3 className="text-3xl font-bold text-[#5dff00]">Jenna</h3>
                      <p className="text-white">Yoga</p>
                    </div>
                  </div>

                  {/* Julien - Coach de cross training */}
                  <div className="pb-4 overflow-hidden rounded-lg bg-black/20">
                    <div className="relative w-full pt-[100%]">
                      <img src="/images/coach-crossfit.png" alt="Julien - Coach de cross training" className="absolute inset-0 object-cover w-full h-full" />
                    </div>
                    <div className="mt-3 text-center">
                      <h3 className="text-3xl font-bold text-[#5dff00]">Julien</h3>
                      <p className="text-white">Cross training</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All inclusive - Optimisation mobile */}
        <section className="relative py-16 overflow-hidden bg-[#f8f9fa]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00a0c6] to-[#5dff00]"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#5dff00] to-[#00a0c6]"></div>

          <div className="relative max-w-6xl px-6 mx-auto">
            <div className="mb-12 text-center">
              <h2 className={`${styles.title2} mb-8 text-[#00a0c6]`}>LE TOUT INCLUS HAUT DE GAMME</h2>
              <div className="h-2 w-64 bg-[#5dff00] mx-auto mb-8"></div>

              <div className="grid grid-cols-1 gap-4 py-8 md:gap-8 md:grid-cols-3">
                <motion.div className="p-4 md:p-6 transition-transform transform rounded-lg shadow-lg hover:scale-105 border-l-4 border-[#0088aa] relative overflow-hidden cursor-pointer" whileHover={{ scale: 1.03 }} onClick={() => openLightbox("salveo")}>
                  <div
                    className="absolute inset-0 z-0"
                    style={{
                      backgroundImage: 'url("/images/areole.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="absolute inset-0 z-10 bg-slate-900 opacity-50"></div>
                  <h3 className="relative z-20 mb-2 text-xl font-bold text-white md:mb-4">TRANPORT & HEBERGEMENT</h3>
                  <p className="relative z-20 text-white">zero prise de tête</p>
                </motion.div>

                <motion.div className="p-4 md:p-6 transition-transform transform rounded-lg shadow-lg hover:scale-105 border-l-4 border-[#0088aa] relative overflow-hidden cursor-pointer" whileHover={{ scale: 1.03 }} onClick={() => openLightbox("activities")}>
                  <div
                    className="absolute inset-0 z-0"
                    style={{
                      backgroundImage: 'url("/images/emilion.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="absolute inset-0 z-10 bg-slate-900 opacity-50"></div>
                  <h3 className="relative z-20 mb-2 text-xl font-bold text-white md:mb-4">ACTIVITÉS & LOISIRS</h3>
                  <p className="relative z-20 text-white">dynamique collective</p>
                </motion.div>

                <motion.div className="p-4 md:p-6 transition-transform transform rounded-lg shadow-lg hover:scale-105 border-l-4 border-[#0088aa] relative overflow-hidden cursor-pointer" whileHover={{ scale: 1.03 }} onClick={() => openLightbox("cadre")}>
                  <div
                    className="absolute inset-0 z-0"
                    style={{
                      backgroundImage: 'url("/images/salveo.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="absolute inset-0 z-10 bg-slate-900 opacity-50"></div>
                  <h3 className="relative z-20 mb-2 text-xl font-bold text-white md:mb-4">CADRE & AMBIANCE</h3>
                  <p className="relative z-20 text-white">espace découvertes</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Programme - Couleurs harmonisées */}
        <section id="program" className="relative py-16 overflow-hidden">
          {/* Image de fond avec overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 z-10 bg-gray-800 opacity-70"></div>
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url("/images/gym-equipment.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          <div className="relative z-20 max-w-6xl px-6 mx-auto">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xl italic font-medium text-[#4dcc00] font-dancing">3 jours de sport et de bien être</p>
              <h2 className={`${styles.title2} mb-8 font-bold text-white`}>LE PROGRAMME</h2>
              <div className="h-2 w-64 bg-[#4dcc00] mx-auto mb-12"></div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Jour 1 */}
              <div className="p-6 bg-[#0088aa] bg-opacity-20 border-l-4 border-[#0088aa] rounded-lg">
                <h3 className="mb-6 text-4xl font-bold text-white">Jeudi 24</h3>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full font-bold text-white sm:w-32">10H</div>
                    <div className="flex-1 text-white">ARRIVÉE GARE DE BORDEAUX</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full font-bold text-white sm:w-32 sm:text-white">10H30 - 11H30</div>
                    <div className="flex-1 text-white">TRANSPORT VAN POUR SALVÉO</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">11H30 - 12H</div>
                    <div className="flex-1 text-white">BRIEFING STAGE</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">12H - 13H</div>
                    <div className="flex-1 text-white">REPAS</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">13H - 14H</div>
                    <div className="flex-1 text-white">SIESTE CHILL PISCINE</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">14H - 15H15</div>
                    <div className="flex-1 text-white">PREPA PHYSIQUE</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">15H15 - 16H30</div>
                    <div className="flex-1 text-white">REPOS</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">16H30 - 18H</div>
                    <div className="flex-1 text-white">DÉCOUVERTE BOXE</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">18H - 19H</div>
                    <div className="flex-1 text-white">BALNÉO</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">19H - 19H30</div>
                    <div className="flex-1 text-white">RETOUR HÔTEL</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">20H30</div>
                    <div className="flex-1 text-white">DINER</div>
                  </div>
                </div>
              </div>

              {/* Jour 2 */}
              <div className="p-6 bg-[#0088aa] bg-opacity-20 border-l-4 border-[#0088aa] rounded-lg">
                <h3 className="mb-6 text-4xl font-bold text-white">Vendredi 25</h3>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">9H - 10H</div>
                    <div className="flex-1 text-white">CROSS TRAINING</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">10H - 10H30</div>
                    <div className="flex-1 text-white">REPOS</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">10H30 - 12H</div>
                    <div className="flex-1 text-white">BOXE</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">12H - 13H</div>
                    <div className="flex-1 text-white">REPAS</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">13H - 14H</div>
                    <div className="flex-1 text-white">SIESTE CHILL PISCINE</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">14H - 15H15</div>
                    <div className="flex-1 text-white">YOGA</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">15H15 - 16H30</div>
                    <div className="flex-1 text-white">REPOS</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">16H30 - 18H</div>
                    <div className="flex-1 text-white">BOXE DAVID</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">18H - 19H</div>
                    <div className="flex-1 text-white">BALNÉO</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">19H - 19H30</div>
                    <div className="flex-1 text-white">RETOUR HOTEL</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">20H30</div>
                    <div className="flex-1 text-white">DINER</div>
                  </div>
                </div>
              </div>

              {/* Jour 3 */}
              <div className="p-6 bg-[#0088aa] bg-opacity-20 border-l-4 border-[#0088aa] rounded-lg">
                <h3 className="mb-6 text-4xl font-bold text-white">Samedi 26</h3>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">9H - 10H</div>
                    <div className="flex-1 text-white">CROSS TRAINING</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">10H - 10H30</div>
                    <div className="flex-1 text-white">REPOS</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">10H30 - 12H</div>
                    <div className="flex-1 text-white">BOXE</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">12H</div>
                    <div className="flex-1 text-white">REPAS</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">13H - 14H</div>
                    <div className="flex-1 text-white">SIESTE CHILL PISCINE</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">14H - 16H</div>
                    <div className="flex-1 text-white">LES OLYMPIADES</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">16H - 17H</div>
                    <div className="flex-1 text-white">BALNÉO</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">17H - 17H30</div>
                    <div className="flex-1 text-white">TRANSPORT CAVISTE</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">18H - 19H</div>
                    <div className="flex-1 text-white">DEGUSTATION VIN</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">19H - 19H30</div>
                    <div className="flex-1 text-white">TRANSPORT LIEU SOIRÉE</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">19H30 - 23H</div>
                    <div className="flex-1 text-white">DINER GUINGUETTE</div>
                  </div>
                </div>
              </div>

              {/* Jour 4 */}
              <div className="p-6 bg-[#0088aa] bg-opacity-20 border-l-4 border-[#0088aa] rounded-lg">
                <h3 className="mb-6 text-4xl font-bold text-white">Dimanche 27</h3>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">9H30 - 10H30</div>
                    <div className="flex-1 text-white">BRUNCH DES SPORTIFS</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">10H30 - 11H30</div>
                    <div className="flex-1 text-white">RETOUR SUR BORDEAUX</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white">11H30</div>
                    <div className="flex-1 text-white">FIN DE STAGE / CHILL BORDEAUX</div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-32 font-bold text-white text-[#4dcc00] sm:text-white"></div>
                    <div className="flex-1 text-white">RETOUR EN TGV</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bouton CTA après le programme */}
            <div className="mt-12 text-center">
              <Button className="inline-block px-8 py-4 text-lg font-bold text-gray-900 transition-all duration-300 bg-white rounded-full shadow-lg hover:bg-[#4dcc00] hover:text-white">RÉSERVER MON SÉJOUR</Button>
            </div>
          </div>
        </section>

        {/* Contact - Correction du titre centré */}
        <section id="inscription" className="relative py-16 overflow-hidden">
          {/* Image de fond avec overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00a0c6] to-[#4eca64] opacity-80 z-10"></div>
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url("/images/yoga-class.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          <div className="relative z-20 max-w-6xl px-6 mx-auto text-center">
            <h2 className={`${styles.title2} mb-8 font-bold text-white`}>REJOIGNEZ L'AVENTURE</h2>
            <div className="h-2 w-64 bg-[#5dff00] mx-auto mb-10"></div>

            <div className="max-w-2xl p-8 mx-auto bg-white rounded-lg shadow-xl">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#00a0c6]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#00a0c6] mb-2">Brice Goillot</h3>
                  <p className="text-xl font-bold text-gray-700">06 88 98 16 89</p>
                  <p className="mt-1 text-gray-700">wildpunchcamp@gmail.com</p>
                </div>

                <div className="w-full h-px my-4 bg-gray-200"></div>

                <a href="https://www.instagram.com/wild_punch_camp" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#00a0c6] hover:text-[#5dff00] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="text-lg">@wild_punch_camp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-white bg-black">
          <div className="max-w-6xl px-6 mx-auto">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-[#5dff00] mb-2">WILD PUNCH CAMP</h3>
                <p className="text-gray-400">Séjour sportif en Aquitaine</p>
              </div>

              <div className="flex flex-col items-center md:items-end">
                <div className="flex mb-4 space-x-4">
                  <a href="https://www.instagram.com/wild_punch_camp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4dcc00] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Wild Punch Camp. Tous droits réservés.</p>
              </div>
            </div>
          </div>
        </footer>

        {/* Navigation mobile - Design moderne */}
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 shadow-lg bg-white/90 backdrop-blur-sm md:hidden">
          <div className="flex justify-around">
            <a href="#about" className="flex flex-col items-center py-3 px-3 text-gray-600 hover:text-[#4dcc00]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="mt-1 text-xs">À propos</span>
            </a>
            <a href="#activities" className="flex flex-col items-center py-3 px-3 text-gray-600 hover:text-[#4dcc00]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
              <span className="mt-1 text-xs">Activités</span>
            </a>
            <a href="#program" className="flex flex-col items-center py-3 px-3 text-gray-600 hover:text-[#4dcc00]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="mt-1 text-xs">Programme</span>
            </a>
            <a href="#inscription" className="flex flex-col items-center py-3 px-3 text-gray-600 hover:text-[#4dcc00]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="mt-1 text-xs">Contact</span>
            </a>
          </div>
        </div>

        {/* Bouton CTA flottant - Design moderne */}
        <motion.div
          className="fixed z-50 bottom-20 md:bottom-8 right-4 md:right-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 2.5,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button className="flex items-center justify-center w-16 h-16 text-white transition-all duration-300 rounded-full shadow-xl bg-emerald-500 hover:bg-white hover:text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </Button>
        </motion.div>

        {/* Lightboxes */}
        <Lightbox isOpen={lightboxes.salveo} onClose={() => closeLightbox("salveo")} title="TRANSPORT & HEBERGEMENT">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src="/images/Amani-hostel2.jpg" alt="Cadre" className="w-full h-auto rounded-lg mb-4" />
              <div className="grid grid-cols-2 gap-2">
                <img src="/images/Amani-hostel.jpg" alt="Cadre" className="w-full h-auto rounded-lg" />
                <img src="/images/areole.jpg" alt="Cadre" className="w-full h-auto rounded-lg" />
              </div>
            </div>
            <div>
              <p className="text-lg mb-4">Le Wild Punch Camp se déroule dans un cadre exceptionnel au cœur de l'Entre-deux-Mers, une région viticole préservée entre Garonne et Dordogne.</p>
              <p className="text-lg mb-4">Vous serez logés à l'hôtel Amañi, niché dans la cité médiévale de La Réole, offrant confort et authenticité dans un environnement chargé d'histoire.</p>
              <p className="text-lg mb-4">L'ambiance du séjour est à la fois dynamique et bienveillante, favorisant le dépassement de soi tout en créant des liens entre participants dans une atmosphère conviviale et sans jugement.</p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-[#5dff00] mb-2">Points forts</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Cadre naturel préservé propice à la reconnexion</li>
                  <li>Hébergement de charme dans une cité médiévale</li>
                  <li>Ambiance conviviale et bienveillante</li>
                  <li>Groupe limité à 8 personnes pour un suivi personnalisé</li>
                  <li>Gastronomie locale mettant en valeur les produits du terroir</li>
                  <li>Équilibre parfait entre effort et récupération</li>
                </ul>
              </div>
            </div>
          </div>
        </Lightbox>

        <Lightbox isOpen={lightboxes.activities} onClose={() => closeLightbox("activities")} title="ACTIVITÉS & LOISIRS">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src="/images/emilion.jpg" alt="Activités" className="w-full h-auto rounded-lg mb-4" />
              <div className="grid grid-cols-2 gap-2">
                <img src="/images/emilion2.jpg" alt="Activités" className="w-full h-auto rounded-lg" />
                <img src="/images/emilion3.jpg" alt="Activités" className="w-full h-auto rounded-lg" />
              </div>
            </div>
            <div>
              <p className="text-lg mb-4">Votre séjour Wild Punch Camp est conçu pour offrir un équilibre parfait entre effort physique et moments de détente.</p>
              <p className="text-lg mb-4">Chaque journée est rythmée par des sessions d'entraînement variées (CrossFit, boxe, yoga) adaptées à tous les niveaux, alternant avec des moments de récupération et de loisirs.</p>
              <p className="text-lg mb-4">Vous profiterez également d'activités culturelles comme la visite de Saint-Émilion et une dégustation de vins locaux, ainsi que d'une soirée guinguette pour clôturer votre séjour dans une ambiance conviviale.</p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-[#5dff00] mb-2">Programme des activités</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Sessions quotidiennes de CrossFit, boxe et yoga</li>
                  <li>Olympiades sportives en équipe</li>
                  <li>Visite et dégustation à Saint-Émilion</li>
                  <li>Accès quotidien à l'espace balnéo</li>
                  <li>Soirée guinguette avec tapas</li>
                  <li>Temps libres pour profiter du cadre naturel</li>
                </ul>
              </div>
            </div>
          </div>
        </Lightbox>

        <Lightbox isOpen={lightboxes.cadre} onClose={() => closeLightbox("cadre")} title="CADRE & AMBIANCE">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src="/images/salveo.jpg" alt="Salvéo" className="w-full h-auto rounded-lg mb-4" />
              <div className="grid grid-cols-2 gap-2">
                <img src="/images/salveo3.jpg" alt="Salvéo" className="w-full h-auto rounded-lg" />
                <img src="/images/salveo2.jpg" alt="Salvéo" className="w-full h-auto rounded-lg" />
              </div>
            </div>
            <div>
              <p className="text-lg mb-4">Sur les hauteurs de la vallée du Dropt, nichée en plein coeur de l'entre-deux-mers, cette ancienne bâtisse a conservé tout son charme comme si vous étiez à la maison !</p>
              <p className="text-lg mb-4">Ce lieu magique encadré par des coachs professionnels vous fera vivre une expérience sportive unique.</p>
              <p className="text-lg mb-4">Pour finir les journées en douceur, rien de tel qu'un espace Balnéo privatisé pour profiter de bains Hydromassants, sauna, hammam et piscine extérieure...</p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-[#5dff00] mb-2">Équipements disponibles</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Salle de CrossFit entièrement équipée</li>
                  <li>Ring de boxe professionnel</li>
                  <li>Espace yoga avec vue sur la nature</li>
                  <li>Espace balnéo avec sauna, hammam et jacuzzi</li>
                  <li>Piscine extérieure</li>
                  <li>Terrasse pour les moments de détente</li>
                </ul>
              </div>
            </div>
          </div>
        </Lightbox>
      </main>
    </>
  );
}
