"use client";

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const skills = [
  "Визуальная айдентика", "UI/UX Дизайн", "Арт-дирекшн",
  "Моушн-дизайн", "3D моделирование", "Обработка фото", "Дизайн-системы", "JavaScript", "AI генерация"
];

const experience = [
  { year: "2025 — Наст. время", role: "Старший бренд-дизайнер", company: "\"точкА\" - Креативная Студия" },
  { year: "2023 — 2024", role: "Промышленный Дизайнер", company: "Digital Flow" },
  { year: "2020 — Наст. время", role: "Фриланс", company: "Проектная занятость" }
];

export default function AboutPage() {
  const [bio] = useState(
    "Обладая 5+ летним опытом в индустрии дизайна, я имел честь работать как с глобальными стартапами, так и с признанными брендами. Мой подход основан на простоте и целесообразности: я стремлюсь убрать лишний шум и сосредоточиться на том, что действительно важно для пользователя и идентичности бренда. Я верю, что хороший дизайн - это не только то, как он выглядит, но и то, как он решает проблемы и устанавливает эмоциональную связь."
  );

  const profileImage = PlaceHolderImages.find(img => img.id === 'profile')?.imageUrl || 'https://picsum.photos/seed/designer/600/800';

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
          <Image
            src={profileImage}
            alt="Портрет дизайнера"
            fill
            className="object-cover"
          />
        </div>

        <div className="md:col-span-7 flex flex-col gap-10">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl font-bold tracking-tight">Обо мне</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {bio}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Компетенции</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm rounded-full">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Опыт работы</h2>
            <div className="space-y-8">
              {experience.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start border-b pb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="text-muted-foreground">{item.company}</p>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
