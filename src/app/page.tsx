import ProjectCard from '@/components/ProjectCard';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: '1',
    title: 'Логотипы',
    category: 'Брендинг / Айдентика',
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-1')?.imageUrl || null
  },
  {
    id: '2',
    title: 'Брендбук "точкА"',
    category: 'Брендинг',
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-2')?.imageUrl || null
  },
  {
    id: '3',
    title: '3D модели и визуализации',
    category: '3D графика',
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-3')?.imageUrl || null
  },
  {
    id: '4',
    title: 'Фирменный стиль "AlmatyGazablock"',
    category: 'Брендинг / Айдентика',
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-4')?.imageUrl || null
  },
  {
    id: '5',
    title: '2D и 3D моушн',
    category: 'Анимация',
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-5')?.imageUrl || null
  },
  {
    id: '6',
    title: 'Интерфейсы и сайты',
    category: 'UI/UX дизайн',
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-6')?.imageUrl || null
  }
];

export default function Home() {
  return (
    <div className="pt-32 pb-20 px-6">
      <section className="max-w-7xl mx-auto mb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl">
          Создаю <span className="text-secondary italic">значимые</span> <br /> визуальные истории <br /> со смыслом.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Независимый дизайнер, специализирующийся на создании вневременной айдентики брендов и удобных цифровых интерфейсов.
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>

      <section className="max-w-7xl mx-auto mt-40 text-center">
        <h2 className="text-3xl font-bold mb-6">Хотите создать что-то необыкновенное?</h2>
        <a 
          href="/contact" 
          className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Обсудить проект
        </a>
      </section>
    </div>
  );
}
