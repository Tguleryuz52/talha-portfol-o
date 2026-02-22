"use client";

import React, { useRef, useState } from "react";
import { Column, Row, Heading, Text, Icon, IconButton } from "@once-ui-system/core";
import { social } from "@/resources";

export const ContactCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .contact-card {
            position: relative;
            overflow: hidden;
            border-radius: 24px;
            background: linear-gradient(145deg, rgba(23, 105, 255, 0.05) 0%, rgba(20, 20, 25, 0.5) 100%);
            border: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
            animation: float 6s ease-in-out infinite;
            width: 100%;
            max-width: var(--static-space-s);
          }
          .contact-card:hover {
            transform: scale(1.02);
            border-color: rgba(23, 105, 255, 0.4);
            box-shadow: 0 0 40px rgba(23, 105, 255, 0.2);
          }
          .cursor-glow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            transition: opacity 0.3s ease;
            background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(23, 105, 255, 0.15), transparent 40%);
            z-index: 0;
          }
          .contact-content {
            position: relative;
            z-index: 1;
            padding: var(--static-space-48);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--static-space-24);
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .social-btn {
            transition: all 0.3s ease;
          }
          .social-btn:hover {
            transform: translateY(-4px) scale(1.1);
            color: #1769ff !important;
            background: rgba(23, 105, 255, 0.1) !important;
          }
        `
      }} />
      <div
        ref={cardRef}
        className="contact-card"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="cursor-glow"
          style={{ 
            opacity,
            "--mouse-x": `${position.x}px`,
            "--mouse-y": `${position.y}px`,
          } as React.CSSProperties}
        />
        <div className="contact-content">
          <Icon name="email" size="l" onBackground="brand-strong" />
          <Heading as="h2" variant="display-strong-s" wrap="balance" align="center">
            Bana Ulaşın
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak" align="center">
            Yeni bir proje fikriniz mi var, iş birliği yapmak mı istiyorsunuz veya sadece merhaba mı diyeceksiniz? Kahve eşliğinde sohbet etmeye her zaman açığım.
          </Text>
          <Row gap="16" wrap horizontal="center" marginTop="16">
            {social.map(
              (item) =>
                item.link && (
                  <IconButton
                    key={item.name}
                    href={item.link}
                    icon={item.icon}
                    size="l"
                    variant="secondary"
                    className="social-btn"
                  />
                )
            )}
          </Row>
        </div>
      </div>
    </>
  );
};
