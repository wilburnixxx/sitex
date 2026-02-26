
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string | null;
}

export default function ProjectCard({ id, title, category, imageUrl }: ProjectCardProps) {
  const safeImageUrl = imageUrl || `https://picsum.photos/seed/${id}/1200/800`;

  return (
    <Link href={`/projects/${id}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
        <Image
          src={safeImageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          data-ai-hint="design project"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            Смотреть проекты <ArrowRight size={16} />
          </span>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
      </div>
    </Link>
  );
}
