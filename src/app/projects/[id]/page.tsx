"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projectData: Record<string, any> = {
  "1": {
    title: "Логотипы",
    category: "Брендинг / Айдентика",
    description: "Актуальные проекты логотипов, разработанные мной. Разные стили, разные ниши, итог - стабильно в цель...",
    image: PlaceHolderImages.find(img => img.id === 'project-1')?.imageUrl || null,
    tools: "Adobe Illustrator, Adobe Photoshop, Figma",
    gallery: ["case65.jpeg", "neva.jpeg", "tochka.jpg", "code.png", "flamingo.png", "ledex.jpg"]
  },
  "2": {
    title: 'Брендбук "точкА"',
    category: "Брендинг",
    description: "Разработка комплексной визуальной айдентики и правил использования бренда для современного креативного агентства.",
    image: PlaceHolderImages.find(img => img.id === 'project-2')?.imageUrl || null,
    tools: "Adobe Illustrator, Adobe Photoshop, Figma",
    gallery: ["case66.jpg", "t_2.jpg", "t_3.jpg", "t_4.png", "t_5.jpg", "t_6.png"]
  },
  "3": {
    title: "3D модели и визуализации",
    category: "3D графика",
    description: "Визуализация объектов и персонажей с использованием современных инструментов 3D моделирования и рендеринга.",
    image: PlaceHolderImages.find(img => img.id === 'project-3')?.imageUrl || null,
    tools: "Adobe Photoshop, Blender 3D, Cycles",
    gallery: ["a1.jpg", "a2.jpg", "a3.jpg", "a4.png", "a5.jpg", "a6.jpg"]
  },
  "4": {
    title: 'Фирменный стиль "AlmatyGazablock"',
    category: "Брендинг / Айдентика",
    description: "Создание комплексной айдентики для производственной компании, подчеркивающей надежность и качество продукции.",
    image: PlaceHolderImages.find(img => img.id === 'project-4')?.imageUrl || null,
    tools: "Adobe Illustrator, Adobe Photoshop, Figma, Notion, Jira",
    gallery: ["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg", "g5.jpg", "g6.png"]
  },
  "5": {
    title: "2D и 3D моушн",
    category: "Анимация",
    description: "Анимационные ролики и заставки, сочетающие в себе динамику и современный визуальный стиль.",
    image: PlaceHolderImages.find(img => img.id === 'project-5')?.imageUrl || null,
    tools: "Adobe After Effects, DaVinci Resolve, Blender 3D",
    gallery: ["m1.png", "m2.png", "m3.png", "m4.png", "m5.png", "m6.png"]
  },
  "6": {
    title: "Интерфейсы и сайты",
    category: "UI/UX дизайн",
    description: "Проектирование удобных и эстетичных цифровых продуктов с фокусом на пользовательский опыт.",
    image: PlaceHolderImages.find(img => img.id === 'project-6')?.imageUrl || null,
    tools: "Figma, Adobe Photoshop, Firebase Studio, VScode, React, JavaScript",
    gallery: ["i1.png", "i2.png", "i3.png", "i4.png", "i5.png", "i6.png"]
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const project = projectData[id] || projectData["1"];
  
  const [description, setDescription] = useState(project.description);

  useEffect(() => {
    setDescription(project.description);
  }, [project.description]);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <Button 
        variant="ghost" 
        onClick={() => router.back()} 
        className="mb-8 hover:bg-transparent hover:text-primary -ml-2"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Назад в галерею
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Теперь мы берем данные из project.gallery */}
    {(project.gallery || []).map((fileName: string, index: number) => (
      <div key={index} className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
        <Image
          src={`/${fileName}`} 
          alt={`Детали проекта ${index + 1}`}
          fill
          className="object-cover"
        />
      </div>
    ))}
  </div>
</div>

        <div className="lg:col-span-4 space-y-10">
          <div>
            <h1 className="text-4xl font-bold mb-4 tracking-tight">{project.title}</h1>
            <p className="text-primary font-medium">{project.category}</p>
          </div>

          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-wrap">
              {description}
            </p>
          </div>

          <div className="pt-6 border-t space-y-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Инструменты</p>
              <p className="font-medium">{project.tools}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Роль</p>
              <p className="font-medium">Ведущий дизайнер</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
