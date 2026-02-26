"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, ArrowRight, MessageSquare, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Имитация API запроса
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо за обращение! Я свяжусь с вами в ближайшее время.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl font-bold tracking-tight mb-8">Давайте создадим что-то <span className="text-secondary italic">значимое</span> вместе.</h1>
          <p className="text-xl text-muted-foreground max-w-md">
            Открыт для новых проектов и сотрудничества.
          </p>
          <p className="text-xl text-muted-foreground mb-12 max-w-md">
            Если у вас есть идея, которую вы хотите воплотить в жизнь, напишите мне.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Телефон</p>
                <a href="tel:+77027910464" className="font-medium hover:text-primary transition-colors">+7 (702) 791-04-64</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <MessageSquare size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telegram</p>
                <a href="#" className="font-medium hover:text-secondary transition-colors">@jiessiepinkman</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Где я нахожусь</p>
                <p className="font-medium">Алматы, Казахстан</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border p-8 md:p-12 rounded-2xl shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" required className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Ваш email" required className="bg-background" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Тип проекта</Label>
              <Input id="subject" placeholder="Например: Айдентика, Веб-дизайн" className="bg-background" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea id="message" placeholder="Расскажите о вашем проекте..." className="min-h-[150px] bg-background resize-none" required />
            </div>

            <Button type="submit" className="w-full h-12 rounded-full gap-2 group" disabled={loading}>
              {loading ? "Отправка..." : "Отправить сообщение"}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
