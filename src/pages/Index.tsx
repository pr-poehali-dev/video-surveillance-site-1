import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [configurator, setConfigurator] = useState({
    areaSize: '',
    cameraType: '',
    cameraCount: 4,
    recordingDays: 30,
    nightVision: true,
    remoteAccess: true,
    motionDetection: true
  });

  const calculatePrice = () => {
    let basePrice = 50000;
    basePrice += configurator.cameraCount * 15000;
    basePrice += configurator.recordingDays * 500;
    if (configurator.nightVision) basePrice += 20000;
    if (configurator.remoteAccess) basePrice += 15000;
    if (configurator.motionDetection) basePrice += 10000;
    return basePrice.toLocaleString('ru-RU');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Системы безопасности</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-muted-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white">
                🚀 Передовые технологии безопасности
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight">
                Профессиональные системы видеонаблюдения
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Защитите то, что важно для вас. Современные IP-камеры, облачное хранение, 
                удаленный доступ и ИИ-аналитика в одном решении.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-lg px-8 py-4">
                  <Icon name="Calculator" className="h-5 w-5 mr-2" />
                  Подобрать систему
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 hover:bg-primary/10">
                  <Icon name="Play" className="h-5 w-5 mr-2" />
                  Посмотреть демо
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-30 -rotate-6"></div>
              <img 
                src="/img/fabbe053-fd75-4931-b058-b612698de6f6.jpg" 
                alt="Системы видеонаблюдения" 
                className="relative z-10 rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl z-20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Онлайн мониторинг</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Configurator */}
      <section id="configurator" className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary text-white">⚙️ Онлайн-конфигуратор</Badge>
            <h2 className="text-4xl font-bold mb-4">Подберите идеальную систему</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Настройте параметры под ваши потребности и получите точную стоимость за 2 минуты
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-scale-in">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold mb-2 block">Размер объекта</Label>
                    <Select onValueChange={(value) => setConfigurator({...configurator, areaSize: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите размер" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Небольшой (до 100 м²)</SelectItem>
                        <SelectItem value="medium">Средний (100-500 м²)</SelectItem>
                        <SelectItem value="large">Большой (500-1000 м²)</SelectItem>
                        <SelectItem value="enterprise">Крупный (более 1000 м²)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-2 block">Тип камер</Label>
                    <Select onValueChange={(value) => setConfigurator({...configurator, cameraType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="indoor">Внутренние</SelectItem>
                        <SelectItem value="outdoor">Наружные</SelectItem>
                        <SelectItem value="mixed">Комбинированные</SelectItem>
                        <SelectItem value="ptz">PTZ (поворотные)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-2 block">
                      Количество камер: {configurator.cameraCount}
                    </Label>
                    <Input 
                      type="range" 
                      min="1" 
                      max="16" 
                      value={configurator.cameraCount}
                      onChange={(e) => setConfigurator({...configurator, cameraCount: parseInt(e.target.value)})}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>1</span>
                      <span>16</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-2 block">
                      Срок хранения записей: {configurator.recordingDays} дней
                    </Label>
                    <Input 
                      type="range" 
                      min="7" 
                      max="365" 
                      value={configurator.recordingDays}
                      onChange={(e) => setConfigurator({...configurator, recordingDays: parseInt(e.target.value)})}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>7 дней</span>
                      <span>1 год</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold mb-4">Дополнительные функции</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg border bg-muted/20">
                      <div>
                        <h4 className="font-semibold">Ночное видение</h4>
                        <p className="text-sm text-muted-foreground">Инфракрасная подсветка до 30м</p>
                      </div>
                      <Button 
                        variant={configurator.nightVision ? "default" : "outline"}
                        onClick={() => setConfigurator({...configurator, nightVision: !configurator.nightVision})}
                      >
                        {configurator.nightVision ? 'Включено' : 'Отключено'}
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border bg-muted/20">
                      <div>
                        <h4 className="font-semibold">Удаленный доступ</h4>
                        <p className="text-sm text-muted-foreground">Просмотр через мобильное приложение</p>
                      </div>
                      <Button 
                        variant={configurator.remoteAccess ? "default" : "outline"}
                        onClick={() => setConfigurator({...configurator, remoteAccess: !configurator.remoteAccess})}
                      >
                        {configurator.remoteAccess ? 'Включено' : 'Отключено'}
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border bg-muted/20">
                      <div>
                        <h4 className="font-semibold">Детекция движения</h4>
                        <p className="text-sm text-muted-foreground">ИИ-аналитика и уведомления</p>
                      </div>
                      <Button 
                        variant={configurator.motionDetection ? "default" : "outline"}
                        onClick={() => setConfigurator({...configurator, motionDetection: !configurator.motionDetection})}
                      >
                        {configurator.motionDetection ? 'Включено' : 'Отключено'}
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-2xl text-white">
                    <h3 className="text-2xl font-bold mb-2">Стоимость системы</h3>
                    <div className="text-4xl font-bold mb-2">{calculatePrice()} ₽</div>
                    <p className="text-primary-foreground/80 mb-4">Включает оборудование и монтаж</p>
                    <Button className="w-full bg-white text-primary hover:bg-white/90">
                      <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                      Получить коммерческое предложение
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-white">📹 Каталог</Badge>
            <h2 className="text-4xl font-bold mb-4">Наше оборудование</h2>
            <p className="text-xl text-muted-foreground">Профессиональные решения для любых задач</p>
          </div>

          <Tabs defaultValue="cameras" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="cameras">IP-камеры</TabsTrigger>
              <TabsTrigger value="nvr">Видеорегистраторы</TabsTrigger>
              <TabsTrigger value="accessories">Аксессуары</TabsTrigger>
              <TabsTrigger value="software">ПО</TabsTrigger>
            </TabsList>

            <TabsContent value="cameras" className="grid md:grid-cols-3 gap-6">
              {[
                { name: "IP-камера 4MP", price: "15,900", features: ["4 Мегапикселя", "PoE", "H.265"] },
                { name: "PTZ-камера 8MP", price: "45,900", features: ["8 Мегапикселей", "30x зум", "Auto-tracking"] },
                { name: "Купольная камера", price: "12,900", features: ["2 Мегапикселя", "Вандалозащита", "WDR"] },
              ].map((camera, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                      <Icon name="Camera" className="h-16 w-16 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{camera.name}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-primary">{camera.price} ₽</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {camera.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="nvr">
              <div className="text-center py-12">
                <Icon name="Server" className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Видеорегистраторы</h3>
                <p className="text-muted-foreground">Сетевые видеорегистраторы от 4 до 64 каналов</p>
              </div>
            </TabsContent>

            <TabsContent value="accessories">
              <div className="text-center py-12">
                <Icon name="Cable" className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Аксессуары</h3>
                <p className="text-muted-foreground">Кабели, блоки питания, крепления и корпуса</p>
              </div>
            </TabsContent>

            <TabsContent value="software">
              <div className="text-center py-12">
                <Icon name="Monitor" className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Программное обеспечение</h3>
                <p className="text-muted-foreground">Решения для управления и аналитики видео</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-white">🔧 Услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Полный цикл услуг</h2>
            <p className="text-xl text-muted-foreground">От консультации до технической поддержки</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "Users", title: "Консультация", desc: "Бесплатный выезд специалиста и составление ТЗ" },
              { icon: "Wrench", title: "Монтаж", desc: "Профессиональная установка с гарантией 3 года" },
              { icon: "Settings", title: "Настройка", desc: "Полная настройка системы и обучение персонала" },
              { icon: "Shield", title: "Обслуживание", desc: "Техническая поддержка и плановое обслуживание" },
              { icon: "Smartphone", title: "Мобильное приложение", desc: "Удаленный доступ к видеонаблюдению" },
              { icon: "Cloud", title: "Облачное хранение", desc: "Безопасное хранение записей в облаке" },
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon as any} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Badge className="mb-4 bg-primary text-white">🏢 О нас</Badge>
              <h2 className="text-4xl font-bold mb-6">Более 10 лет на рынке безопасности</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы специализируемся на проектировании и внедрении систем видеонаблюдения 
                для бизнеса и частных объектов. За годы работы выполнили более 1000 проектов.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-muted-foreground">Проектов</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Клиентов</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Поддержка</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3 года</div>
                  <p className="text-muted-foreground">Гарантия</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-30 rotate-6"></div>
              <Card className="relative z-10 p-8 shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Наши преимущества</h3>
                <ul className="space-y-4">
                  {[
                    "Сертифицированные специалисты",
                    "Оборудование ведущих брендов",
                    "Гарантия на все работы",
                    "Техподдержка 24/7",
                    "Выезд в день обращения"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Icon name="CheckCircle" className="h-5 w-5 text-green-500 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-white">📸 Портфолио</Badge>
            <h2 className="text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground">Реализованные проекты различной сложности</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Торговый центр", type: "Коммерческий объект", cameras: "48 камер" },
              { title: "Частный дом", type: "Загородная недвижимость", cameras: "8 камер" },
              { title: "Производство", type: "Промышленный объект", cameras: "64 камеры" },
              { title: "Офисный центр", type: "Бизнес-центр", cameras: "32 камеры" },
              { title: "Складской комплекс", type: "Логистический центр", cameras: "28 камер" },
              { title: "Автосалон", type: "Коммерческий объект", cameras: "16 камер" },
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Icon name="Building" className="h-16 w-16 text-white/80" />
                  </div>
                  <Badge className="absolute top-3 right-3 bg-primary text-white">
                    {project.cameras}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{project.type}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-white">❓ FAQ</Badge>
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Сколько времени занимает установка системы?",
                  answer: "Время установки зависит от сложности проекта. Обычно на установку 4-8 камер требуется 1-2 рабочих дня."
                },
                {
                  question: "Предоставляете ли вы гарантию на оборудование?",
                  answer: "Да, мы предоставляем гарантию 3 года на все оборудование и выполненные работы."
                },
                {
                  question: "Можно ли просматривать видео удаленно?",
                  answer: "Конечно! Мы настраиваем удаленный доступ через мобильное приложение или веб-интерфейс."
                },
                {
                  question: "Какие способы оплаты вы принимаете?",
                  answer: "Мы принимаем наличные, банковские переводы, оплату картой. Возможна рассрочка."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white text-primary">📞 Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-primary-foreground/80">Консультация и выезд специалиста бесплатно</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-primary-foreground/80">+7 (939) 304-99-34</p>
              <p className="text-primary-foreground/80"></p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-primary-foreground/80">info@smart-ss.ru</p>
              <p className="text-primary-foreground/80">sales@smart-ss.ru</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Адрес</h3>
              <p className="text-primary-foreground/80">г. Москва</p>
              <p className="text-primary-foreground/80">ул. Примерная, д. 123</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Shield" className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">SecureVision</span>
            </div>
            <p className="text-muted-foreground mb-4">
              © 2024 SecureVision. Все права защищены.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="sm">Политика конфиденциальности</Button>
              <Button variant="ghost" size="sm">Условия использования</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;