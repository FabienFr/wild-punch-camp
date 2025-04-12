import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/WildPunchCamp.module.css";
import StripeButton from "./components/Stripe";

export default function WildPunchCampPage() {
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
            <h2 className={styles.year}>ÉTÉ 2025</h2>
            <p className={styles.dates}>
              jeudi 24
              <svg className="inline-block w-8 h-8 mx-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              dimanche 27 juillet
            </p>
            <h1 className={styles.title}>WILD PUNCH CAMP</h1>
            <p className={styles.tagline}>VIBREZ AU COEUR DE L'AQUITAINE DURANT 3 JOURS DE REMISE EN FORME</p>
            <div className={styles.separator}></div>
            <p className={styles.description}>SÉJOUR INITIATION DÉCOUVERTE</p>
            <p className={styles.location}>À seulement une 1H15 de Bordeaux</p>

            {/* Bouton CTA principal */}
            <StripeButton amount={49900} productName="Wild Punch Camp - Séjour Sportif" className="inline-block px-8 py-4 mt-8 text-lg font-bold text-gray-900 transition-all duration-300 bg-white rounded-full shadow-lg hover:bg-[#4dcc00] hover:text-white">
              RÉSERVER MA PLACE
            </StripeButton>
          </div>
        </section>

        {/* À propos - Mise à jour pour harmonisation */}
        <section id="about" className="relative px-6 py-16 overflow-hidden text-center bg-white">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#5dff00] opacity-10 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#00a0c6] opacity-10 -ml-24 -mb-24"></div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className={`${styles.title2} mb-8 text-[#00a0c6]`}>RECONNECTEZ-VOUS À L'ESSENTIEL</h2>
            <div className="h-2 w-64 bg-[#5dff00] mx-auto mb-10"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">Imaginé par Brice Goillot, ce séjour allie dépassement de soi, nature et convivialité. Entraînements dynamiques, conseils personnalisés et moments de détente encadrés par des coachs passionnés.</p>
          </div>
        </section>

        {/* Activités - Titre harmonisé */}
        <section id="activities" className="px-6 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className={`${styles.title2} text-[#00a0c6] pb-8`}>LE PACK SPORT</h2>
              <div className="h-2 w-64 bg-[#5dff00] mx-auto mb-10"></div>
            </div>

            {/* Prépa Physique */}
            <div className="max-w-6xl mx-auto mb-8 overflow-hidden rounded-lg shadow-lg md:mb-16">
              <div className="flex flex-col md:flex-row">
                <div className="bg-[#0088aa] text-white p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-5xl md:text-5xl font-bold mb-4 md:mb-6 text-[#4dcc00]">PRÉPA PHYSIQUE</h3>
                  <p className="text-base md:text-lg">La préparation physique est un entraînement structuré visant à améliorer les capacités athlétiques, que ce soit pour un sport spécifique ou pour renforcer son corps de manière générale.</p>
                  <p className="mt-3 text-base md:mt-4 md:text-lg">Elle combine différents axes de travail : force, endurance, vitesse, mobilité et coordination, en fonction des objectifs et du niveau de chacun.</p>
                </div>
                <div className="md:w-1/2 relative min-h-[200px] md:min-h-[300px] overflow-hidden">
                  <img src="/images/prepa.png" alt="Préparation physique" className="absolute inset-0 object-cover w-full h-full" />
                </div>
              </div>
            </div>

            {/* La Boxe */}
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

            {/* Yoga */}
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

            {/* Cross Training */}
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
              <h2 className={`${styles.title2} mb-8 text-[#00a0c6]`}>TOUT EST INCLUS</h2>
              <div className="h-2 w-64 bg-[#5dff00] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 gap-4 py-8 md:gap-8 md:grid-cols-3">
              <div className="p-4 md:p-6 transition-transform transform rounded-lg shadow-lg hover:scale-105 border-l-4 border-[#0088aa] relative overflow-hidden">
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: 'url("/images/hotel.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="absolute inset-0 z-10 bg-slate-900 opacity-30"></div>
                <h3 className="relative z-20 mb-2 text-xl font-bold text-white md:mb-4 md:text-2xl">TRANSPORT & HÉBERGEMENT</h3>
              </div>

              <div className="p-4 md:p-6 transition-transform transform rounded-lg shadow-lg hover:scale-105 border-l-4 border-[#0088aa] relative overflow-hidden">
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: 'url("/images/cadre.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="absolute inset-0 z-10 bg-slate-900 opacity-30"></div>
                <h3 className="relative z-20 mb-2 text-xl font-bold text-white md:mb-4 md:text-2xl">ACTIVITÉS & LOISIRS</h3>
              </div>

              <div className="p-4 md:p-6 transition-transform transform rounded-lg shadow-lg hover:scale-105 border-l-4 border-[#0088aa] relative overflow-hidden">
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: 'url("/images/stemilion.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="absolute inset-0 z-10 bg-slate-900 opacity-30"></div>
                <h3 className="relative z-20 mb-2 text-xl font-bold text-white md:mb-4 md:text-2xl">CADRE & AMBIANCE</h3>
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
              <StripeButton amount={49900} productName="Wild Punch Camp - Séjour Sportif" className="inline-block px-8 py-4 text-lg font-bold text-gray-900 transition-all duration-300 bg-white rounded-full shadow-lg hover:bg-[#4dcc00] hover:text-white">
                RÉSERVER MON SÉJOUR
              </StripeButton>
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
        <div className="fixed z-50 bottom-20 md:bottom-8 right-4 md:right-8">
          <StripeButton amount={49900} productName="Wild Punch Camp - Séjour Sportif" className="flex items-center justify-center w-16 h-16 text-white transition-all duration-300 rounded-full shadow-xl bg-emerald-500 hover:bg-white hover:text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </StripeButton>
        </div>
      </main>
    </>
  );
}
