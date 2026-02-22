import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { iconLibrary } from "@/resources/icons";

const LinkedInIcon = iconLibrary["linkedin"];
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Talha",
  lastName: "Güleryüz",
  name: `Talha Güleryüz`,
  role: "Design Engineer & 3D Artist",
  avatar: "/images/profil-foto.jpg",
  email: "hello@talhaguleryuz.com",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Turkish", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>{person.firstName}'ın Bültenine Abone Ol</>,
  description: <>Yaratıcılık, mühendislik ve 3D tasarımı üzerine haftalık bültenim</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
    essential: true,
  },
  {
    name: "Behance",
    icon: "behance",
    link: "https://www.behance.net/talhagleryz",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Ana Sayfa",
  title: `${person.name} | Portfolyo`,
  description: `Bir ${person.role} olarak projelerimi sergilediğim kişisel portfolyom`,
  headline: <>Tasarım ve teknolojinin kusursuz uyumu</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Öne Çıkan Çalışma</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Robotoy Vision S
        </Text>
      </Row>
    ),
    href: "/work/robotoy-vision-s",
  },
  subline: (
    <>
    Ben Talha, sezgisel kullanıcı deneyimleri ve yenilikçi ürün tasarımları üreten bir <Text as="span" size="xl" weight="strong">Tasarım Mühendisi ve 3D Sanatçısıyım</Text>.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "Hakkımda",
  title: `Hakkımda – ${person.name}`,
  description: `${person.location} konumundan ${person.role} ${person.name} ile tanışın`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Giriş",
    description: (
      <>
        Ben Talha, dijital dünyada estetik ve mühendisliği bir araya getiren bir tasarım mühendisiyim. Karmaşık problemleri sezgisel arayüzlere dönüştürerek; tasarım, hareketli grafikler ve modern web teknolojilerini birleştiriyor, kusursuz etkileşimli deneyimler inşa ediyorum.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "İş Deneyimi",
    experiences: [
      {
        company: "Nevera Development Solutions (Ofis İçi)",
        timeframe: "Temmuz 2025 - Günümüz",
        role: "Industrial Designer & 3D Artist | Robot Design Lead",
        achievements: [
          <>
            Robotik sistemlerin geleceğini 3D görselleştirme, ürün estetiği ve donanım inovasyonuyla harmanlayarak tasarlıyorum.
          </>,
          <>
            Fusion 360, Unreal Engine 5, Blender ve endüstriyel CGI gibi araçlar üzerinden konsept tasarımdan, hızlı prototiplemeye ve mekanik tasarıma uzanan uçtan uca bir üretim süreci yürütüyorum.
          </>,
          <div style={{ position: "relative", left: "-24px" }} className="hide-bullet">
            <style dangerouslySetInnerHTML={{
              __html: `
                .hide-bullet {
                  list-style: none !important;
                }
                li:has(> .hide-bullet) {
                  list-style-type: none !important;
                  margin-top: 16px;
                }
                .linkedin-exp-btn {
                  display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  color: #0a66c2;
                  font-weight: 600;
                  background: rgba(10, 102, 194, 0.1);
                  padding: 8px 16px;
                  border-radius: 100px;
                  text-decoration: none;
                  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                  border: 1px solid rgba(10, 102, 194, 0.2);
                }
                .linkedin-exp-btn:hover {
                  background: #0a66c2;
                  color: white !important;
                  transform: translateY(-2px) scale(1.02);
                  box-shadow: 0 4px 12px rgba(10, 102, 194, 0.3);
                }
                .linkedin-exp-btn:hover svg {
                  color: white !important;
                }
              `
            }} />
            <a 
              href="https://www.linkedin.com/in/talha-g%C3%BClery%C3%BCz-920422309/details/experience/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="linkedin-exp-btn"
            >
              {LinkedInIcon && <LinkedInIcon size={20} />}
              <span>LinkedIn</span>
            </a>
          </div>
        ],
        images: [],
      },
      {
        company: "Feron · Kendi işim",
        timeframe: "Ocak 2025 - Günümüz",
        role: "Founder & Product Lead",
        achievements: [
          <>
            Geleneksel e-ticaret deneyimini AI destekli hiper-kişiselleştirilmiş bir stil ekosistemine dönüştüren dijital moda asistanı Feron'u kurdum.
          </>,
          <>
            Google Gemini API entegrasyonu ile AI tabanlı görüntü analizi akışlarını ve kullanıcının kişisel tercihlerine göre günlük kombinler sunan akıllı stil motorunu kurguladım.
          </>,
          <>
            React Native ve Supabase altyapısıyla geliştirilen mobil uygulamanın onboarding sürecinden dijital gardırop yönetimine kadar olan tüm ürün stratejisini (UI/UX) yönettim.
          </>,
          <div style={{ position: "relative", left: "-24px" }} className="hide-bullet">
            <a 
              href="https://www.linkedin.com/in/talha-g%C3%BClery%C3%BCz-920422309/details/experience/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="linkedin-exp-btn"
            >
              {LinkedInIcon && <LinkedInIcon size={20} />}
              <span>LinkedIn</span>
            </a>
          </div>
        ],
        images: [],
      },
      {
        company: "İKÜ Asimov Teknoloji Kulübü",
        timeframe: "Nisan 2024 - Haziran 2025",
        role: "UI/UX Designer",
        achievements: [
          <>
            Teknofest yarışması kapsamında, tarihi ve turistik mekanları görüntü işleme ile tanıyarak anında bilgi veren yapay zeka destekli mobil dijital tur rehberi uygulamasının başlangıçtan bitişe tüm kullanıcı deneyimini (UI/UX) tasarladım.
          </>,
          <>
            Figma üzerinde modern bir arayüz kurguladım ve After Effects kullanarak uygulamanın kullanıcı akışları için etkileşimli video animasyonlar ürettim.
          </>,
          <div style={{ position: "relative", left: "-24px" }} className="hide-bullet">
            <a 
              href="https://www.linkedin.com/in/talha-g%C3%BClery%C3%BCz-920422309/details/experience/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="linkedin-exp-btn"
            >
              {LinkedInIcon && <LinkedInIcon size={20} />}
              <span>LinkedIn</span>
            </a>
          </div>
        ],
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Eğitim",
    institutions: [
      {
        name: "T.C. İstanbul Kültür Üniversitesi",
        description: <></>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Teknik Yetenekler",
    skills: [
      {
        title: "3D Tasarım & Görselleştirme",
        description: (
          <>
            Endüstriyel ürün tasarımından, gerçek zamanlı render ve animasyonlara kadar uçtan uca 3D modelleme ve görselleştirme yetkinliği.
          </>
        ),
        tags: [
          { name: "Fusion 360", icon: "autodesk" },
          { name: "Unreal Engine 5", icon: "unreal" },
          { name: "Blender", icon: "blender" },
          { name: "Cinema 4D", icon: "cube" },
          { name: "Houdini", icon: "houdini" },
          { name: "Shapr3D", icon: "cube" },
          { name: "CAD Modeling", icon: "cube" },
          { name: "Real-time Rendering", icon: "play" },
        ],
        images: [],
      },
      {
        title: "UI/UX & Prototipleme",
        description: (
          <>
            Kullanıcı merkezli tasarımlar, mikro etkileşimler, akıcı video animasyonlar ve yüksek sadakatli (high-fidelity) mobil/web prototipleri geliştirme.
          </>
        ),
        tags: [
          { name: "Figma", icon: "figma" },
          { name: "Framer", icon: "framer" },
          { name: "Spline", icon: "cube" },
          { name: "Lottie", icon: "play" },
          { name: "Adobe Cre. Cloud", icon: "adobe" },
          { name: "After Effects", icon: "play" },
          { name: "Webflow", icon: "openLink" },
          { name: "Miro", icon: "grid" },
        ],
        images: [],
      },
      {
        title: "Web/Mobil Geliştirme & Yapay Zeka",
        description: (
          <>
            Tasarımı gerçeğe dönüştüren, AI destekli altyapılarla güçlendirilmiş, ölçeklenebilir ve performanslı yazılım teknolojileri.
          </>
        ),
        tags: [
          { name: "React Native", icon: "nextjs" }, // using nextjs icon roughly for react
          { name: "Next.js", icon: "nextjs" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Supabase", icon: "supabase" },
          { name: "JavaScript / TS", icon: "javascript" },
          { name: "Python", icon: "code" },
          { name: "Gemini API", icon: "code" },
          { name: "OpenAI API", icon: "code" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Tasarım ve Teknoloji Üzerine Yazılar...",
  description: `${person.name}'ün güncel denemeleri ve rehberleri`,
};

const work: Work = {
  path: "/work",
  label: "Projeler",
  title: `Projeler – ${person.name}`,
  description: `${person.name} tarafından geliştirilen tasarım ve yazılım çalışmaları`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeri",
  title: `Fotoğraf Galerisi – ${person.name}`,
  description: `${person.name}'ün objektifinden veya 3D renderlarından kesitler`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
