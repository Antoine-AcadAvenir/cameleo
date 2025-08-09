import { EmailFormSection } from "@/features/email/email-form-section";
import { BentoGridSection } from "@/features/landing/bento-section";
import { CTASectionCard } from "@/features/landing/cta/cta-card-section";
import { CTAImageSection } from "@/features/landing/cta/cta-image-section";
import { CtaSection } from "@/features/landing/cta/cta-section";
import { FAQSection } from "@/features/landing/faq-section";
import { FeaturesSection } from "@/features/landing/feature-section";
import { Hero } from "@/features/landing/hero";
import { LandingHeader } from "@/features/landing/landing-header";
import { PainSection } from "@/features/landing/pain";
import { ReviewGrid } from "@/features/landing/review/review-grid";
import { ReviewSingle } from "@/features/landing/review/review-single";
import { ReviewTriple } from "@/features/landing/review/review-triple";
import { SectionDivider } from "@/features/landing/section-divider";
import { StatsSection } from "@/features/landing/stats-section";
import { Footer } from "@/features/layout/footer";
import { Pricing } from "@/features/plans/pricing-section";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-background text-foreground relative flex h-fit flex-col">
      <div className="mt-16"></div>

      <LandingHeader />

      <Hero />

      <StatsSection />

      <BentoGridSection />

      <PainSection />

      <SectionDivider />
      

      <ReviewTriple
        reviews={[
          {
            image: "", /* ne rien mettre pour que ce soit la premier lettre du prénom dans la photo de profile*/
            name: "Florian",
            review: ` Connaissant le dirigeant de **CAMELEO** , j’ai testé leur version **bêta** comme **freelance** . J’ai adoré ! Le fonctionnement est **simple** , **innovant** , et **clair** . Les freelances sont tous **hyper bien formés** grâce à la **formation** et la **certification obligatoires** . Pour chaque client fictif , je devais réaliser un **plan détaillé : étapes , objectifs , défis, timing , et budget** basé sur leur grille tarifaire. Tout est carré , **pro** , **efficace** . La bêta était déjà **folle** , la **version finale** va tout écraser ! Je **kiffe** bosser avec eux **!**`,
            role: "Freelance",
          },
          {
            image: "images/bioénergéticien.png",
            name: "Bruno",
            review: ` Je gère mon **hébergement**  mon **nom de domaine** et la **maintenance** de mon **site web** avec **CAMELEO** . Tout est **parfait** , mise en service **gratuite** , et je paye rien avant les **résultats** . À ce prix , c’est **donné** **!**`,
            role: "Bioénergéticien",
          },
          {
            image: "", /* ne rien mettre pour que ce soit la premier lettre du prénom dans la photo de profile*/
            name: "Evan",
            review: `J’ai confié ma **stratégie** à **CAMELEO** pour **valider** et **lancer** mon **projet** **rapidement** et **efficacement** . Le premier freelance, super **honnête**, m’a redirigé vers un autre freelance **expert de mon domaine** qui a tout de suite capté **mes besoins**. Il m’a envoyé un **plan détaillé** : étapes, objectifs, défis, clair et précis, validé à chaque étape via leur **dashboard** . J’ai **rejeté** une étape , il a rebondi avec une proposition **béton** et **qualitative** . C’est du **lourd** , **résultat** Leur étude de marché est hyper **précise** , et le business plan est béton , je suis prêt à **cartonner** **!** `,
            role: "Entrepreneur",
          },
        ]}
      />

      <SectionDivider />

      <ReviewSingle
        image="images/maëva.jpg"
        name="Maëva"
        review={` **CAMELEO**, une **révolution** ! **Innovation** totale ! Le **dashboard** est clair , suivre mon **projet** en temps réel est **top** . Le paiement au **résultat** , Je **gagne**, Je paye, **Zéro risque** ! Résultats **assurés**, je **recommande** !`}
        role="MBM Nettoyage"
        compagnyImage="images/logo-mbm.png"
        key={1}
      />

      <FeaturesSection
        features={[
          {
            badge: "⏰ Schedule",
            title: "Schedule your post",
            description: "Schedule your post on the Threader in a few clicks.",
            component: (
              <Image
                src="/images/placeholder1.gif"
                alt=""
                width={200}
                height={100}
                className="h-auto w-full object-cover"
                unoptimized
              />
            ),
          },
          {
            badge: "📅 Calendar",
            title: "See what you scheduled",
            description:
              "With the calendar view, you can see what you scheduled and when.",
            component: (
              <Image
                src="/images/placeholder1.gif"
                alt=""
                width={200}
                height={100}
                className="h-auto w-full object-cover"
              />
            ),
          },
          {
            badge: "👁️ Preview",
            title: "Preview your post",
            description:
              "Preview your post before scheduling it to see how it will look like.",
            component: (
              <Image
                src="/images/placeholder1.gif"
                alt=""
                width={200}
                height={100}
                className="h-auto w-full object-cover"
                unoptimized
              />
            ),
          },
          {
            badge: "🔄 Repost",
            title: "Schedule repost",
            description:
              "Automatically repost your post after a certain amount of time.",
            component: (
              <Image
                src="/images/placeholder1.gif"
                alt=""
                width={200}
                height={100}
                className="h-auto w-full object-cover"
                unoptimized
              />
            ),
          },
        ]}
      />

      <CTAImageSection />

      <CTASectionCard />

      <CtaSection />

      <Pricing />

      <FAQSection
        faq={[
          {
            question: "What is Threader?",
            answer:
              "Threader is an innovative platform designed to help you write, schedule, and publish content to your account with the assistance of AI, enhancing your business's online presence.",
          },
          {
            question: "How does AI Content Generation work?",
            answer:
              "Our AI Content Generation feature leverages the power of artificial intelligence to create unique and engaging content for your Threads, making content creation easier and more efficient.",
          },
          {
            question: "Can I schedule my threads in advance?",
            answer:
              "Yes, with Threader, you can schedule your threads for a specific time, allowing you to maintain a consistent online presence without the need to manually post every day.",
          },
          {
            question: "What is the Now.TS project?",
            answer:
              "Now.TS is a new project announced on our platform that enables users to create professional Next.js applications in days, streamlining the development process.",
          },
          {
            question: "How can I get more followers?",
            answer:
              "To gain more followers, focus on creating content related to Next.js, as our analysis shows it's highly engaging. Utilize our research tools to understand trends and improve your content strategy.",
          },
          {
            question: "What are the benefits of posting with Threader?",
            answer:
              "Posting with Threader allows you to schedule posts, avoid daily manual postings, track your scheduled content easily, and maintain consistency in your online activity.",
          },
          {
            question: "What pricing plans does Threader offer?",
            answer:
              "Threader offers two pricing plans: THREADER FREE, perfect for tiny creators, allowing you to schedule 1 post in advance; and THREADER PREMIUM, ideal for content creators, offering unlimited scheduling, post previews, and auto-reposting features.",
          },
        ]}
      />

      <SectionDivider />

      <ReviewGrid
        reviews={[
          {
            image: "https://i.pravatar.cc/300?u=b1",
            name: "Eva",
            review:
              "Since I started using Threader, my content creation process has been streamlined. The AI suggestions are spot on, helping me to connect better with my audience. Highly recommend for anyone looking to elevate their content game.",
            role: "Content Creator",
          },
          {
            image: "https://i.pravatar.cc/300?u=b2",
            name: "Lucas",
            review:
              "Threader's scheduling feature is a lifesaver. It allows me to plan my content calendar efficiently, ensuring I never miss posting on the optimal days and times. Fantastic tool for social media managers.",
            role: "Social Media Manager",
          },
          {
            image: "https://i.pravatar.cc/300?u=b3",
            name: "Mia",
            review:
              "The analytics provided by Threader are invaluable. They've given me insights into what my audience loves, helping me double my engagement rate in just a few months.",
            role: "Digital Marketer",
          },
          {
            image: "https://i.pravatar.cc/300?u=b4",
            name: "Noah",
            review:
              "I was skeptical about AI-generated content, but Threader changed my mind. The content feels personal and has significantly increased my interaction rates.",
            role: "Blogger",
          },
          {
            image: "https://i.pravatar.cc/300?u=b5",
            name: "Isabella",
            review:
              "Threader's user interface is incredibly user-friendly. I was able to onboard my team in no time, and we've seen a marked improvement in our social media performance.",
            role: "Team Leader",
          },
          {
            image: "https://i.pravatar.cc/300?u=b6",
            name: "Oliver",
            review:
              "Auto-reposting with Threader is a feature I didn't know I needed. It's great for getting more mileage out of your best content without any extra effort.",
            role: "Freelancer",
          },
          {
            image: "https://i.pravatar.cc/300?u=b7",
            name: "Sophia",
            review:
              "Joining the Threader community has opened up networking opportunities with fellow content creators. It's more than just a tool; it's a platform for growth.",
            role: "Influencer",
          },
          {
            image: "https://i.pravatar.cc/300?u=b8",
            name: "Elijah",
            review:
              "The calendar view in Threader helps me visualize my content strategy for the entire month. It's been a game changer for my planning process.",
            role: "Strategist",
          },
          {
            image: "https://i.pravatar.cc/300?u=b9",
            name: "Charlotte",
            review:
              "I appreciate the flexibility in Threader's pricing plans. It's accessible for creators at any stage of their journey, from beginners to established influencers.",
            role: "Entrepreneur",
          },
          {
            image: "https://i.pravatar.cc/300?u=b10",
            name: "James",
            review:
              "The customer support team at Threader is fantastic. They've been quick to respond and helpful with any questions I've had. Great service overall.",
            role: "Customer",
          },
        ]}
      />

      <EmailFormSection />

      <SectionDivider />

      <Footer />
    </div>
  );
}
