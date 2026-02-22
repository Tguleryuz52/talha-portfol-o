import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Grid,
  Card,
  Icon,
  Tag,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes, social } from "@/resources";
import { IconButton } from "@once-ui-system/core";
import { ContactCard } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { HeroGlow } from "@/components/HeroGlow";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center" position="relative">
      <HeroGlow />
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>

          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <style dangerouslySetInnerHTML={{
              __html: `
                .behance-hero-btn {
                  background-color: #1769ff !important;
                  color: #ffffff !important;
                  border-color: #1769ff !important;
                  box-shadow: 0 4px 20px rgba(23, 105, 255, 0.4) !important;
                  transition: all 0.3s ease !important;
                }
                .behance-hero-btn:hover {
                  background-color: #0056ff !important;
                  border-color: #0056ff !important;
                  box-shadow: 0 6px 30px rgba(23, 105, 255, 0.6) !important;
                  transform: translateY(-2px) !important;
                }
                .behance-hero-btn * {
                  color: #ffffff !important;
                }

                .workflow-card {
                  position: relative;
                  overflow: hidden;
                  border-radius: 28px;
                  padding: 40px 32px;
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(20, 20, 25, 0.6) 100%);
                  border: 1px solid rgba(255, 255, 255, 0.04);
                  backdrop-filter: blur(16px);
                  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                  z-index: 1;
                }
                .workflow-card::after {
                  content: '';
                  position: absolute;
                  top: 0; left: 0; right: 0; bottom: 0;
                  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
                  opacity: 0;
                  transition: opacity 0.5s ease;
                  pointer-events: none;
                }
                .workflow-card:hover {
                  transform: translateY(-12px) scale(1.03);
                  border-color: rgba(23, 105, 255, 0.3);
                  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.3), 0 0 50px rgba(23, 105, 255, 0.15);
                  background: linear-gradient(180deg, rgba(23, 105, 255, 0.05) 0%, rgba(20, 20, 25, 0.8) 100%);
                }
                .workflow-card:hover::after {
                  opacity: 1;
                }
                
                .workflow-icon-wrapper {
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  width: 56px;
                  height: 56px;
                  border-radius: 20px;
                  background: rgba(23, 105, 255, 0.1);
                  color: #1769ff;
                  border: 1px solid rgba(23, 105, 255, 0.2);
                  margin-bottom: 8px;
                  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .workflow-card:hover .workflow-icon-wrapper {
                  transform: translateY(-8px) scale(1.1);
                  background: rgba(23, 105, 255, 0.2);
                  border-color: rgba(23, 105, 255, 0.5);
                  box-shadow: 0 10px 20px rgba(23, 105, 255, 0.2);
                }

                .skill-pill {
                  display: flex;
                  align-items: center;
                  gap: 12px;
                  padding: 16px 24px;
                  border-radius: 100px;
                  background: rgba(255, 255, 255, 0.03);
                  border: 1px solid rgba(255, 255, 255, 0.05);
                  backdrop-filter: blur(10px);
                  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                  color: var(--neutral-alpha-strong);
                }
                .skill-pill:hover {
                  transform: translateY(-6px) scale(1.05);
                  background: rgba(23, 105, 255, 0.1);
                  border-color: rgba(23, 105, 255, 0.3);
                  box-shadow: 0 10px 20px rgba(0,0,0,0.2), 0 0 20px rgba(23, 105, 255, 0.15);
                  color: #ffffff;
                }
                .skill-pill * {
                  transition: all 0.3s ease;
                }
                .skill-pill i {
                  color: #1769ff !important;
                }

                .fancy-projects-btn {
                  position: relative;
                  overflow: hidden;
                  background: linear-gradient(135deg, rgba(23, 105, 255, 0.8), rgba(0, 86, 255, 0.8)) !important;
                  border: 1px solid rgba(255, 255, 255, 0.2) !important;
                  color: white !important;
                  border-radius: 100px !important;
                  padding: 16px 40px !important;
                  font-weight: 600 !important;
                  letter-spacing: 0.5px !important;
                  box-shadow: 0 8px 32px rgba(23, 105, 255, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.2) !important;
                  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
                  backdrop-filter: blur(10px);
                }
                .fancy-projects-btn::after {
                  content: '';
                  position: absolute;
                  top: -50%;
                  left: -50%;
                  width: 200%;
                  height: 200%;
                  background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 60%);
                  opacity: 0;
                  transition: opacity 0.3s ease;
                  pointer-events: none;
                  mix-blend-mode: overlay;
                }
                .fancy-projects-btn:hover {
                  transform: translateY(-4px) scale(1.02) !important;
                  background: linear-gradient(135deg, rgba(43, 125, 255, 0.9), rgba(0, 86, 255, 0.9)) !important;
                  box-shadow: 0 16px 48px rgba(23, 105, 255, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.3) !important;
                  border-color: rgba(255, 255, 255, 0.4) !important;
                }
                .fancy-projects-btn:hover::after {
                  opacity: 1;
                }
                .fancy-projects-btn * {
                  color: white !important;
                  transition: transform 0.3s ease;
                }
                .fancy-projects-btn:hover i, .fancy-projects-btn:hover svg {
                  transform: translateX(4px);
                }

                .marquee-container {
                  overflow: hidden;
                  white-space: nowrap;
                  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                  width: 100%;
                  padding: 24px 0;
                }
                
                .marquee-track {
                  display: inline-flex;
                  animation: scroll 40s linear infinite;
                  gap: 24px;
                }
                
                .marquee-track:hover {
                  animation-play-state: paused;
                }
                
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(calc(-50% - 12px)); }
                }

                .tool-badge {
                  display: flex;
                  align-items: center;
                  gap: 12px;
                  padding: 16px 32px;
                  border-radius: 100px;
                  background: rgba(255, 255, 255, 0.02);
                  border: 1px solid rgba(255, 255, 255, 0.05);
                  backdrop-filter: blur(12px);
                  color: var(--neutral-alpha-strong);
                  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                  cursor: default;
                }
                .tool-badge:hover {
                  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
                  color: #ffffff;
                  border-color: rgba(255, 255, 255, 0.25);
                  transform: scale(1.05) translateY(-4px);
                  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.1);
                }
                .tool-badge * {
                  transition: all 0.4s ease;
                }
                .tool-badge:hover i, .tool-badge:hover svg {
                  color: #ffffff !important;
                  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.6));
                }
              `
            }} />
            <Row gap="16" vertical="center" s={{ direction: "column", gap: "16" }}>
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar
                      marginRight="8"
                      style={{ marginLeft: "-0.75rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {about.title}
                </Row>
              </Button>
              <Button
                id="behance"
                className="behance-hero-btn"
                data-border="rounded"
                href="https://www.behance.net/talhagleryz"
                variant="primary"
                size="m"
                weight="default"
                prefixIcon="behance"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  Behance Portfolyomu İncele
                </Row>
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="12" delay={0.5}>
        <Column fillWidth gap="64" horizontal="center" paddingY="48">
          
          <Column fillWidth gap="24" horizontal="center">
            <Heading as="h2" variant="display-strong-xs" wrap="balance" marginBottom="16">
              Profesyonel Sürecim
            </Heading>
            <Grid columns="3" s={{ columns: 1 }} gap="24" fillWidth maxWidth="l">
              <div className="workflow-card">
                <div className="workflow-icon-wrapper">
                  <Icon name="search" size="l" />
                </div>
                <Heading as="h3" variant="heading-strong-m">1. Keşif & Empati</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Tasarım sadece estetik değil, bir problem çözme sanatıdır. Kullanıcı davranışlarını, ihtiyaçları ve ürün vizyonunu anlayarak işe başlarım.
                </Text>
              </div>
              <div className="workflow-card">
                <div className="workflow-icon-wrapper">
                  <Icon name="refresh" size="l" />
                </div>
                <Heading as="h3" variant="heading-strong-m">2. Konsept & İterasyon</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  İhtiyaçları somutlaştırmak için onlarca fikir dener, prototipler üretir ve en sezgisel yapıyı bulana kadar tasarımı mükemmelleştiririm.
                </Text>
              </div>
              <div className="workflow-card">
                <div className="workflow-icon-wrapper">
                  <Icon name="check" size="l" />
                </div>
                <Heading as="h3" variant="heading-strong-m">3. İşlev & Üretim</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Mükemmel tasarım detaylarda gizlidir. Konsepti kusursuz dijital veya 3D üretimlere taşıyarak, piksel-mükemmel ve performanslı sonuçlar elde ederim.
                </Text>
              </div>
            </Grid>
          </Column>

          <Column fillWidth gap="24" horizontal="center" marginBottom="32">
            <Heading as="h2" variant="display-strong-xs" wrap="balance" marginBottom="8">
              Uzmanlık Alanlarım
            </Heading>
            <Row wrap gap="16" horizontal="center" maxWidth="m">
              <div className="skill-pill">
                <Icon name="cube" size="m" />
                <Text variant="heading-strong-s">Industrial Design</Text>
              </div>
              <div className="skill-pill">
                <Icon name="cube" size="m" />
                <Text variant="heading-strong-s">3D Modeling</Text>
              </div>
              <div className="skill-pill">
                <Icon name="gallery" size="m" />
                <Text variant="heading-strong-s">Rendering</Text>
              </div>
              <div className="skill-pill">
                <Icon name="play" size="m" />
                <Text variant="heading-strong-s">Motion Designer</Text>
              </div>
              <div className="skill-pill">
                <Icon name="figma" size="m" />
                <Text variant="heading-strong-s">UI/UX Tasarım</Text>
              </div>
              <div className="skill-pill">
                <Icon name="code" size="m" />
                <Text variant="heading-strong-s">Yazılım Geliştirme</Text>
              </div>
            </Row>
          </Column>

        </Column>
      </RevealFx>

      <RevealFx translateY="16" delay={0.55}>
        <Column fillWidth paddingY="48" horizontal="center" align="center">
          <Icon name="sparkle" size="l" onBackground="brand-strong" marginBottom="24" />
          <Text variant="display-strong-xs" onBackground="neutral-weak" align="center" style={{ maxWidth: "800px", lineHeight: "1.5" }}>
            "İyi tasarım görünmezdir. Geliştirdiğim her projede, estetik ve işlevselliği kusursuz bir uyum içinde harmanlayarak, kullanıcıya zahmetsiz ve akılda kalıcı bir deneyim sunmayı amaçlıyorum."
          </Text>
          <Text variant="body-default-m" onBackground="neutral-medium" marginTop="24">
            — Tasarım Felsefem
          </Text>
        </Column>
      </RevealFx>

      <RevealFx translateY="16" delay={0.6}>
        <Column fillWidth gap="24" horizontal="center" paddingY="48">
          <Heading as="h2" variant="display-strong-xs" wrap="balance" marginBottom="16">
            Kullandığım Teknolojiler
          </Heading>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...Array(2)].fill([
                { name: "Fusion 360", icon: "autodesk" as const },
                { name: "Blender", icon: "blender" as const },
                { name: "Houdini", icon: "houdini" as const },
                { name: "Unreal Engine", icon: "unreal" as const },
                { name: "Unity", icon: "unity" as const },
                { name: "Figma", icon: "figma" as const },
                { name: "Framer", icon: "framer" as const },
                { name: "Next Js", icon: "nextjs" as const },
                { name: "Node Js", icon: "nodejs" as const },
                { name: "Cursor", icon: "cursor" as const },
                { name: "Antigravity", icon: "antigravity" as const },
                { name: "Adobe Programları", icon: "adobe" as const },
              ]).flat().map((tool, index) => (
                <div key={index} className="tool-badge">
                  <Icon name={tool.icon as any} size="m" />
                  <Text variant="heading-strong-s">{tool.name}</Text>
                </div>
              ))}
            </div>
          </div>
        </Column>
      </RevealFx>

      <RevealFx translateY="16" delay={0.7}>
        <Column fillWidth gap="32" horizontal="center" paddingY="48">
          <Column fillWidth horizontal="center" gap="8">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Projelerim
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Tasarladığım ve geliştirdiğim en iyi işlerimden bazıları.
            </Text>
          </Column>
          
          <Projects range={[1, 2]} />
          
          <Button
            id="view-all-projects"
            className="fancy-projects-btn"
            data-border="rounded"
            href="/work"
            variant="primary"
            size="l"
            weight="strong"
            suffixIcon="arrowRight"
          >
            Tüm projeleri görüntüle
          </Button>
        </Column>
      </RevealFx>
      <RevealFx translateY="16" delay={0.8}>
        <Column fillWidth horizontal="center" paddingY="l" marginBottom="xl">
          <ContactCard />
        </Column>
      </RevealFx>
    </Column>
  );
}
