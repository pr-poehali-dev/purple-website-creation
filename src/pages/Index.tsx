import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const donatePackages = [
    {
      name: 'VIP',
      price: '499₽',
      icon: 'Star',
      features: ['Приоритетный вход', 'Цветной ник', 'Доступ к /kit vip', '5 homes', 'Префикс [VIP]'],
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'PREMIUM',
      price: '999₽',
      icon: 'Crown',
      features: ['Все из VIP', 'Креативный режим', 'Полёт', '10 homes', 'Кастомная броня', 'Префикс [PREMIUM]'],
      color: 'from-violet-500 to-purple-700',
      popular: true
    },
    {
      name: 'LEGEND',
      price: '1999₽',
      icon: 'Sparkles',
      features: ['Все из PREMIUM', 'Уникальные эффекты', 'Приватные варпы', '20 homes', 'Кастомные команды', 'Префикс [LEGEND]'],
      color: 'from-purple-600 to-fuchsia-700'
    }
  ];

  const rules = [
    { title: 'Запрещён читинг', description: 'Использование любых модификаций, дающих преимущество', icon: 'Ban' },
    { title: 'Уважение к игрокам', description: 'Оскорбления, токсичность и грифинг запрещены', icon: 'Heart' },
    { title: 'Запрет рекламы', description: 'Реклама других серверов и сторонних ресурсов', icon: 'ShieldAlert' },
    { title: 'Баг-абузинг запрещён', description: 'Использование багов игры для получения выгоды', icon: 'AlertTriangle' }
  ];

  const faqItems = [
    { question: 'Как зайти на сервер?', answer: 'IP сервера: play.yourserver.ru. Версия: 1.20.x' },
    { question: 'Как получить донат?', answer: 'Выберите привилегию выше и следуйте инструкциям по оплате' },
    { question: 'Как подать жалобу?', answer: 'Напишите в Discord или создайте тикет в нашей группе ВК' },
    { question: 'Возможен ли возврат?', answer: 'Возврат средств не предусмотрен согласно пользовательскому соглашению' }
  ];

  const news = [
    { 
      title: 'Открытие сезона 5!', 
      date: '20 октября 2025', 
      content: 'Новый сезон стартует с обновлёнными мирами и уникальными ивентами!',
      badge: 'Новое'
    },
    { 
      title: 'Хэллоуин ивент', 
      date: '15 октября 2025', 
      content: 'Специальный ивент с уникальными наградами и тыквенными боссами!',
      badge: 'Ивент'
    },
    { 
      title: 'Обновление доната', 
      date: '1 октября 2025', 
      content: 'Добавлены новые привилегии и бонусы для всех донатеров!',
      badge: 'Обновление'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-purple-950/20">
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/dea88d68-96c6-4db9-8a0c-d1c95e4c8bc3.jpg" 
                alt="Logo" 
                className="h-12 w-12 object-cover rounded-lg shadow-lg shadow-primary/50"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                XTServer
              </span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {['Главная', 'Донат', 'Правила', 'Помощь', 'Новости'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`transition-all duration-300 hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary font-semibold' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            
            <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 animate-fade-in">
              <Icon name="Play" size={16} className="mr-2" />
              Играть
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 space-y-24">
        <section className="text-center space-y-8 py-20 animate-fade-in">
          <div className="space-y-4">
            <Badge className="bg-primary/20 text-primary border-primary/40 hover:bg-primary/30 animate-scale-in">
              <Icon name="Zap" size={14} className="mr-1" />
              Лучший сервер 2025
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-slide-up">
              Добро пожаловать на сервер!
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Присоединяйся к нашему дружному сообществу! Уникальные режимы, честная игра и активная администрация.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg px-8 py-6 hover-scale">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 text-lg px-8 py-6 hover-scale">
              <Icon name="Users" size={20} className="mr-2" />
              Discord
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: 'Users', label: 'Онлайн', value: '247+' },
              { icon: 'Trophy', label: 'Рейтинг', value: '#1' },
              { icon: 'Clock', label: 'Аптайм', value: '99.9%' },
              { icon: 'Heart', label: 'Отзывы', value: '5.0' }
            ].map((stat, index) => (
              <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur hover-scale animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6 text-center">
                  <Icon name={stat.icon as any} size={32} className="mx-auto mb-2 text-primary" />
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="donate" className="space-y-8 animate-fade-in">
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">Привилегии</h2>
            <p className="text-muted-foreground text-lg">Поддержи сервер и получи уникальные возможности</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {donatePackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative border-2 hover-scale transition-all duration-500 overflow-hidden ${
                  pkg.popular ? 'border-primary shadow-lg shadow-primary/20 scale-105' : 'border-primary/30'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-purple-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Популярно
                  </div>
                )}
                <CardHeader className={`bg-gradient-to-br ${pkg.color} text-white pb-12`}>
                  <div className="flex items-center justify-between">
                    <Icon name={pkg.icon as any} size={40} />
                    <CardTitle className="text-3xl">{pkg.name}</CardTitle>
                  </div>
                  <CardDescription className="text-white/90 text-2xl font-bold pt-4">
                    {pkg.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 mt-6">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="rules" className="space-y-8 animate-fade-in">
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">Правила сервера</h2>
            <p className="text-muted-foreground text-lg">Соблюдай правила для комфортной игры</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {rules.map((rule, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <Icon name={rule.icon as any} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{rule.title}</CardTitle>
                  </div>
                  <CardDescription className="pt-2 text-base">{rule.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="help" className="space-y-8 animate-fade-in">
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground text-lg">Найди ответы на популярные вопросы</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-2">
                    <Icon name="HelpCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    {item.question}
                  </CardTitle>
                  <CardDescription className="pt-2 text-base pl-7">{item.answer}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="news" className="space-y-8 animate-fade-in">
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">Новости</h2>
            <p className="text-muted-foreground text-lg">Следи за обновлениями и событиями</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all hover-scale overflow-hidden group" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="h-2 bg-gradient-to-r from-primary to-purple-600"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-primary/20 text-primary border-primary/40">{item.badge}</Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  <CardDescription className="pt-2 text-base">{item.content}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 mt-24 py-12 bg-card/30 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <img 
                  src="https://cdn.poehali.dev/files/dea88d68-96c6-4db9-8a0c-d1c95e4c8bc3.jpg" 
                  alt="Logo" 
                  className="h-10 w-10 object-cover rounded-lg shadow-lg shadow-primary/50"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                  XTServer
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Лучший игровой сервер 2025 года</p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>IP: play.yourserver.ru</p>
                <p>Discord: discord.gg/yourserver</p>
                <p>VK: vk.com/yourserver</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Социальные сети</h3>
              <div className="flex gap-3 justify-center md:justify-start">
                <Button size="icon" variant="outline" className="border-primary/40 hover:bg-primary/20 hover-scale">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary/40 hover:bg-primary/20 hover-scale">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary/40 hover:bg-primary/20 hover-scale">
                  <Icon name="Users" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>© 2025 YourServer. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;