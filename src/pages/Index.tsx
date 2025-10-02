import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold tracking-wide">TPlain Academy</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Овладей искусством
              <span className="block mt-2 bg-gradient-to-r from-primary via-yellow-500 to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">трейдинга криптовалют</span>
              и форекс
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Узнай проверенные стратегии, которые помогут тебе уверенно торговать и зарабатывать на волатильных рынках. Начни свой путь к финансовой свободе уже сегодня.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-yellow-600 hover:from-yellow-600 hover:to-primary text-background font-bold text-lg px-10 py-6 rounded-xl shadow-2xl shadow-primary/50 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://t.me/+QgiLIa1gFRY4Y2Iy', '_blank')}
              >
                <Icon name="Send" className="mr-2" size={24} />
                Получить бесплатный гайд
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/50 text-primary hover:bg-primary/10 font-semibold text-lg px-10 py-6 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Узнать больше
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Успешных трейдеров</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Успешных сделок</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$2M+</div>
                <div className="text-sm text-muted-foreground">Заработано клиентами</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему трейдинг — это твоя возможность
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Финансовая свобода начинается с правильных знаний и инструментов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "TrendingUp",
                title: "Неограниченный потенциал",
                description: "Рынки крипты и форекс работают 24/7, давая тебе возможность зарабатывать в любое время"
              },
              {
                icon: "Zap",
                title: "Быстрый старт",
                description: "Начни торговать с минимальным капиталом и масштабируй свои результаты по мере роста навыков"
              },
              {
                icon: "Shield",
                title: "Полный контроль",
                description: "Ты сам управляешь своими деньгами, рисками и стратегиями — никаких посредников"
              },
              {
                icon: "BarChart3",
                title: "Проверенные стратегии",
                description: "Используй методы, которые работают годами и приносят стабильный доход"
              },
              {
                icon: "Target",
                title: "Точные сигналы",
                description: "Получай конкретные точки входа и выхода для максимизации прибыли"
              },
              {
                icon: "Trophy",
                title: "Реальные результаты",
                description: "Тысячи наших студентов уже достигли финансовой независимости"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                    <Icon name={item.icon as any} size={32} className="text-background" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Инструменты и стратегии успеха
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Все что нужно для профессиональной торговли
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-8">
              {[
                {
                  icon: "LineChart",
                  title: "Технический анализ",
                  description: "Освой чтение графиков, паттернов и индикаторов для точного прогнозирования движений рынка"
                },
                {
                  icon: "Brain",
                  title: "Психология трейдинга",
                  description: "Научись контролировать эмоции и принимать рациональные решения даже в стрессовых ситуациях"
                },
                {
                  icon: "Layers",
                  title: "Управление рисками",
                  description: "Защити свой капитал с помощью правильного risk-management и размера позиций"
                },
                {
                  icon: "Rocket",
                  title: "Скальпинг и свинг",
                  description: "Выбери стратегию под свой стиль: быстрые сделки или долгосрочные инвестиции"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-yellow-600 rounded-xl flex items-center justify-center">
                    <Icon name={item.icon as any} size={28} className="text-background" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-yellow-600/30 rounded-3xl blur-3xl" />
              <img 
                src="/img/a9548743-e262-41d6-b786-34defe5600dc.jpg" 
                alt="Trading Tools"
                className="relative rounded-3xl shadow-2xl border border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Истории успеха наших трейдеров
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные люди, реальные результаты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Алексей М.",
                result: "+340% за 6 месяцев",
                story: "Начинал с $500, сейчас стабильно зарабатываю $3-5K в месяц на криптовалютах"
              },
              {
                name: "Мария К.",
                result: "+180% за 3 месяца",
                story: "Форекс казался сложным, но благодаря четким стратегиям смогла выйти на доход выше зарплаты"
              },
              {
                name: "Дмитрий П.",
                result: "+520% за год",
                story: "Совмещаю скальпинг и свинг-трейдинг. Бросил офисную работу и торгую из любой точки мира"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-card to-card/50 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-yellow-600 flex items-center justify-center">
                      <Icon name="User" size={32} className="text-background" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <div className="text-primary font-semibold">{item.result}</div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{item.story}"
                  </p>

                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Icon key={star} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-primary/10 via-background to-yellow-600/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Готов начать зарабатывать на трейдинге?
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              Скачай бесплатный гайд с проверенными стратегиями и начни свой путь к финансовой свободе прямо сейчас
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-yellow-600 hover:from-yellow-600 hover:to-primary text-background font-bold text-xl px-12 py-8 rounded-2xl shadow-2xl shadow-primary/50 transition-all duration-300 hover:scale-110"
                onClick={() => window.open('https://t.me/+QgiLIa1gFRY4Y2Iy', '_blank')}
              >
                <Icon name="Download" className="mr-3" size={28} />
                Получить бесплатный гайд
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Check" size={20} className="text-primary" />
                <span>Без спама</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={20} className="text-primary" />
                <span>100% бесплатно</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={20} className="text-primary" />
                <span>Мгновенный доступ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold">
              <Icon name="TrendingUp" size={32} className="text-primary" />
              <span className="bg-gradient-to-r from-primary to-yellow-600 bg-clip-text text-transparent">
                Trading Mastery
              </span>
            </div>
            <p className="text-muted-foreground">
              Твой путь к финансовой свободе через профессиональный трейдинг
            </p>
            <div className="pt-4 text-sm text-muted-foreground">
              © 2025 Trading Mastery. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;