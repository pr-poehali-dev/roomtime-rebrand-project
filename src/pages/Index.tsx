import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const privileges = [
  {
    name: 'Барон',
    price: 10,
    features: [
      '⚕ Префикс в чате и табе: [Барон] ВашНик',
      '› /kit Барон ⇨ Получить набор Барона',
      '› /salary ⇨ Получить зарплату',
      '› /crawl ⇨ Сменить позу: красться',
      'Доступно Точек домов: 2',
      'Регионов (Гриф): 2 по 40,000 блоков',
      'Регионов (Анка): 3 блоков',
      'Слотов на Аукционе: 6',
      'Задержка телепорта: 7 сек'
    ]
  },
  {
    name: 'Страж',
    price: 16,
    features: [
      '⚕ Префикс в чате и табе: [Страж] ВашНик',
      '› /kit Страж ⇨ Получить набор Стража',
      '› /suicide ⇨ Покончить жизнь самоубийством',
      '› /dchat ⇨ Воспользоваться Донат-Чатом',
      'Доступно Точек домов: 2',
      'Регионов (Гриф): 2 по 45,000 блоков',
      'Регионов (Анка): 3 блоков',
      'Слотов на Аукционе: 7',
      'Задержка телепорта: 6 сек'
    ]
  },
  {
    name: 'Герой',
    price: 24,
    features: [
      '⚕ Префикс в чате и табе: [Герой] ВашНик',
      '› /kit Герой ⇨ Получить набор Героя',
      '› /top ⇨ Телепортация вверх',
      '› /hat ⇨ Надеть блок на голову',
      'Доступно Точек домов: 2',
      'Регионов (Гриф): 2 по 50,000 блоков',
      'Регионов (Анка): 4 блоков',
      'Слотов на Аукционе: 8',
      'Задержка телепорта: 6 сек'
    ]
  },
  {
    name: 'Аспид',
    price: 56,
    features: [
      '⚕ Префикс в чате и табе: [Аспид] ВашНик',
      '› /kit Аспид ⇨ Получить набор Аспида',
      '› /clear ⇨ Очистить инвентарь',
      '› /feed ⇨ Восстановить голод',
      '› /heal ⇨ Восстановить здоровье',
      '› /me ⇨ Написать в чат Реакции',
      'Доступно Точек домов: 2',
      'Регионов (Гриф): 2 по 60,000 блоков',
      'Регионов (Анка): 4 блоков',
      'Слотов на Аукционе: 9',
      'Задержка телепорта: 6 сек'
    ]
  },
  {
    name: 'Сквид',
    price: 69,
    popular: true,
    features: [
      '⚕ Префикс в чате и табе: [Сквид] ВашНик',
      '› /kit Сквид ⇨ Получить набор Сквида',
      '› /back ⇨ Вернуться на место смерти',
      '› /ec ⇨ Открыть Эндер Сундук',
      '› /wbench ⇨ Открыть портативный Верстак',
      '› /ad ⇨ Написать в чат Рекламы',
      '› /buy ⇨ Написать в чат Покупки',
      '› /sell ⇨ Написать в чат Продажи',
      '› /name ⇨ Изменить название предмета',
      'Доступно Точек домов: 3',
      'Регионов (Гриф): 3 по 75,000 блоков',
      'Регионов (Анка): 5 блоков',
      'Слотов на Аукционе: 10',
      'Задержка телепорта: 5 сек'
    ]
  },
  {
    name: 'Глава',
    price: 87,
    features: [
      '⚕ Префикс в чате и табе: [Глава] ВашНик',
      '› /kit Глава ⇨ Получить набор Главы',
      '› /salary ⇨ Получить зарплату',
      '› /bc ⇨ Написать в чат Объявления',
      '› /ext ⇨ Потушить себя командой',
      '› /am toggle ⇨ Отключить Авто-сообщения',
      '› /msgtoggle ⇨ Отключить Личные сообщения',
      '› /paytoggle ⇨ Отключить получение платежей',
      '› /tptoggle ⇨ Отключить телепортации',
      '› /feed Ник ⇨ Покормить игрока',
      '› /heal Ник ⇨ Вылечить игрока',
      '› /exp ⇨ Получить бесплатный опыт',
      'Доступно Точек домов: 3',
      'Регионов (Гриф): 4 по 100,000 блоков',
      'Регионов (Анка): 6 блоков',
      'Слотов на Аукционе: 11',
      'Задержка телепорта: 4 сек'
    ]
  },
  {
    name: 'Элита',
    price: 149,
    features: [
      '⚕ Префикс в чате и табе: [Элита] ВашНик',
      '› /kit Элита ⇨ Получить набор Элиты',
      '› /time ⇨ Установить время',
      '› /weather ⇨ Установить погоду',
      '› /loom ⇨ Открыть Ткацкий станок',
      '› /carttable ⇨ Открыть Стол картографа',
      '› /msgtoggle ⇨ Отключить Личные сообщения',
      '› /beezooka ⇨ Выстрельнуть пчелой',
      '› /kittycannon ⇨ Выстрелить котом',
      '› /firework ⇨ Настроить феерверк',
      '› /name ⇨ Изменить назв. предмета цветным'
    ]
  },
  {
    name: 'Титан',
    price: 239,
    features: [
      '⚕ Префикс в чате и табе: [Титан] ВашНик',
      '› /kit Титан ⇨ Получить набор Титана',
      '› Все возможности Элиты',
      '› Увеличенный лимит регионов',
      '› Больше слотов на аукционе'
    ]
  },
  {
    name: 'Принц',
    price: 329,
    features: [
      '⚕ Префикс в чате и табе: [Принц] ВашНик',
      '› /kit Принц ⇨ Получить набор Принца',
      '› Все возможности Титана',
      '› Эксклюзивные команды',
      '› VIP-статус на сервере'
    ]
  },
  {
    name: 'Князь',
    price: 549,
    features: [
      '⚕ Префикс в чате и табе: [Князь] ВашНик',
      '› /kit Князь ⇨ Получить набор Князя',
      '› Все возможности Принца',
      '› Расширенные права',
      '› Премиум поддержка'
    ]
  },
  {
    name: 'Герцог',
    price: 999,
    features: [
      '⚕ Префикс в чате и табе: [Герцог] ВашНик',
      '› /kit Герцог ⇨ Получить набор Герцога',
      '› Все возможности Князя',
      '› Максимальные привилегии',
      '› Приоритетная техподдержка'
    ]
  },
  {
    name: 'Спонсор',
    price: 1850,
    features: [
      '⚕ Префикс в чате и табе: [Спонсор] ВашНик',
      '› /kit Спонсор ⇨ Получить набор Спонсора',
      '› Все возможности Герцога',
      '› Уникальные бонусы',
      '› Особый статус в сообществе'
    ]
  },
  {
    name: 'Мажор',
    price: 2650,
    features: [
      '⚕ Префикс в чате и табе: [Мажор] ВашНик',
      '› /kit Мажор ⇨ Получить набор Мажора',
      '› Все возможности Спонсора',
      '› Максимальный статус',
      '› Эксклюзивный доступ ко всему'
    ]
  }
];

const reviews = [
  { author: 'СтивКрафт', rating: 5, text: 'Купил привилегию Сквид, очень доволен! Все команды работают отлично, администрация топ!' },
  { author: 'DiamondMiner2009', rating: 5, text: 'Лучший сервер! Привилегия Герой стоит своих денег, /hat команда просто огонь 🔥' },
  { author: 'ЛунаКрипер', rating: 5, text: 'Взял Аспида, теперь могу вылечиться в любой момент! Очень удобно для выживания' },
  { author: 'BuildMaster', rating: 5, text: 'Элита - моя любимая привилегия. Менять погоду и время - это круто для строителей!' },
  { author: 'PvPKing777', rating: 4, text: 'Привилегия Страж неплохая, но хотелось бы больше команд. В целом доволен!' },
  { author: 'RedstoneGenius', rating: 5, text: 'Титан - отличный выбор! Много возможностей, регионы огромные' },
  { author: 'СнежныйВолк', rating: 5, text: 'Купил Главу для своей команды, все работает как часы! Рекомендую' },
  { author: 'МинерПро', rating: 5, text: 'Барон - отличная стартовая привилегия для новичков. Цена адекватная!' },
  { author: 'SkyBuilder', rating: 5, text: 'Принц дает кучу возможностей! Не пожалел ни рубля, сервер топовый' },
  { author: 'ЛавовыйДракон', rating: 4, text: 'Герой - хорошая привилегия, /top очень полезная команда. Советую!' },
  { author: 'CreeperHunter', rating: 5, text: 'Сквид просто огонь! /back спас меня столько раз, что не сосчитать' },
  { author: 'ЗолотойЗомби', rating: 5, text: 'Взял Аспида на распродаже, лучшее вложение! Команды супер полезные' },
  { author: 'EndermanPro', rating: 5, text: 'Князь - мощная привилегия! Премиум поддержка реально работает' },
  { author: 'TNTMaster', rating: 4, text: 'Страж норм, но можно было бы добавить еще функций. В остальном всё ок' },
  { author: 'ДиамантовыйМеч', rating: 5, text: 'Элита стоит каждого рубля! Цветные названия предметов - это вообще топ' },
  { author: 'WaterWizard', rating: 5, text: 'Глава - отличный баланс цены и возможностей. Рекомендую всем!' },
  { author: 'FirePhoenix', rating: 5, text: 'Герцог дает просто нереальные возможности! Сервер лучший!' },
  { author: 'IceQueen', rating: 5, text: 'Купила Героя себе и Барона другу - оба довольны. Сервер крутой!' },
  { author: 'StoneKing', rating: 4, text: 'Аспид - хорошая привилегия, но цена могла бы быть чуть ниже' },
  { author: 'NetherLord', rating: 5, text: 'Титан - моя мечта сбылась! Все команды работают идеально' },
  { author: 'SandWarrior', rating: 5, text: 'Сквид - лучшая привилегия за свою цену! /ec экономит кучу времени' },
  { author: 'МагЛавы', rating: 5, text: 'Принц открыл для меня сервер с новой стороны. Очень крутая прива!' },
  { author: 'CobbleBuilder', rating: 5, text: 'Барон - отличный старт! Потом куплю что-то покруче' },
  { author: 'EnchantMaster', rating: 4, text: 'Герой хорош, /hat - прикольная фича. Стоит своих денег' },
  { author: 'ObsidianWall', rating: 5, text: 'Глава - золотая середина! Все нужные команды есть' },
  { author: 'ЛесныйЭльф', rating: 5, text: 'Сквид превзошел все ожидания! Портативный верстак - находка' },
  { author: 'BeaconLight', rating: 5, text: 'Элита - мой выбор! Управление погодой просто космос' },
  { author: 'SlimeJumper', rating: 5, text: 'Страж - норм привилегия для среднего уровня игры. Доволен!' },
  { author: 'ПустынныйСкорпион', rating: 4, text: 'Аспид - хорошо, но хочется больше слотов на аукционе' },
  { author: 'VillagerTrader', rating: 5, text: 'Купил Герцога, теперь чувствую себя VIP игроком! Всё супер' },
  { author: 'ИзумрудныйМаг', rating: 5, text: 'Князь - серьезная привилегия для серьезных игроков! Топ' },
  { author: 'SpiderClimber', rating: 5, text: 'Титан дает столько возможностей! Регионы просто огромные' },
  { author: 'BlazeFighter', rating: 5, text: 'Сквид - best choice! Все команды полезные, ни одной лишней' },
  { author: 'МорскойПират', rating: 4, text: 'Герой - неплохая прива, рекомендую для среднего бюджета' },
  { author: 'ChestCollector', rating: 5, text: 'Глава открыла доступ к крутым фишкам! Зарплата - бомба' },
  { author: 'WitherKiller', rating: 5, text: 'Спонсор - для тех кто хочет все и сразу. Не пожалел!' },
  { author: 'FarmingPro', rating: 5, text: 'Барон помог начать на сервере! Отличная стартовая привилегия' },
  { author: 'МолнияМакс', rating: 5, text: 'Аспид - лучшее соотношение цены и качества! Советую' },
  { author: 'CraftingGod', rating: 4, text: 'Страж норм, донат-чат работает отлично. Можно брать' },
  { author: 'JungleExplorer', rating: 5, text: 'Элита превзошла ожидания! Команды просто супер полезные' },
  { author: 'КаменныйГолем', rating: 5, text: 'Сквид - моя любимая привилегия! /back команда - спасение' },
  { author: 'BowMaster', rating: 5, text: 'Титан дает реально много! Стоит каждого рубля' },
  { author: 'MagmaWalker', rating: 5, text: 'Герой - отличная привилегия! /top очень удобная команда' },
  { author: 'СветлячокНочи', rating: 5, text: 'Глава - прекрасный выбор! Много команд, адекватная цена' },
  { author: 'IronGolem', rating: 4, text: 'Барон - хорош для начала, потом можно апгрейднуть' },
  { author: 'ЗвездныйМаг', rating: 5, text: 'Князь - мощная привилегия! Премиум поддержка работает на 5+' },
  { author: 'PotionBrewer', rating: 5, text: 'Аспид - моя первая донат привилегия. Очень доволен выбором!' },
  { author: 'TraderMaster', rating: 5, text: 'Сквид открыл кучу возможностей для торговли! Топ прива' },
  { author: 'ДраконРассвета', rating: 5, text: 'Элита - шикарная привилегия! Цветные названия предметов - огонь' },
  { author: 'MinecartRider', rating: 4, text: 'Страж - норм, но можно было добавить больше фич' },
  { author: 'АлмазныйРыцарь', rating: 5, text: 'Герцог - это реально круто! Максимум возможностей на сервере' },
  { author: 'FishermanPro', rating: 5, text: 'Купил Героя - лучшее решение! Все работает отлично' },
  { author: 'CaveExplorer', rating: 5, text: 'Глава - шикарная привилегия для активных игроков! Советую' },
  { author: 'ОгненныйТитан', rating: 5, text: 'Титан оправдал название! Мощная привилегия с кучей фишек' },
  { author: 'BookWriter', rating: 5, text: 'Сквид - лучшая покупка на сервере! Все команды полезные' },
  { author: 'МистическийВолк', rating: 4, text: 'Аспид хорош, но хотелось бы еще команд. В целом доволен' },
  { author: 'ArmorSmith', rating: 5, text: 'Барон - отличный старт для новичков! Рекомендую всем' },
  { author: 'NightHunter', rating: 5, text: 'Элита дает столько крутых возможностей! Не пожалел ни разу' },
  { author: 'ЛедянойДух', rating: 5, text: 'Князь - серьезная привилегия! Все работает как надо' },
  { author: 'PickaxePro', rating: 5, text: 'Сквид - просто бомба! /wbench экономит кучу времени' }
];

export default function Index() {
  const [onlineCount] = useState(347);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white grid-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent"></div>
        <div className="container mx-auto px-4 py-12 relative">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <Badge className="gaming-gradient text-white px-6 py-2 text-lg font-bold border-0">
                <Icon name="Gamepad2" className="mr-2" size={20} />
                ROOMTIME MINECRAFT SERVER
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              RoomTime
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Лучший Minecraft сервер с уникальными привилегиями и токенами
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Card className="bg-card/50 border-primary/20 backdrop-blur">
                <CardContent className="p-4 flex items-center gap-3">
                  <Icon name="Server" className="text-primary" size={24} />
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">IP сервера</p>
                    <p className="font-bold">RoomTime.gomc.me</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-secondary/20 backdrop-blur">
                <CardContent className="p-4 flex items-center gap-3">
                  <Icon name="Users" className="text-secondary" size={24} />
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Онлайн</p>
                    <p className="font-bold text-secondary">{onlineCount} игроков</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <Button asChild size="lg" className="gaming-gradient hover:gaming-gradient-hover border-0">
                <a href="https://t.me/HollyFunServer" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2" size={20} />
                  Telegram
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="container mx-auto px-4 py-8">
        <Card className="bg-card/50 border-accent/20 backdrop-blur">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Общая оценка сервера</h3>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" className="text-yellow-400 fill-yellow-400" size={24} />
                  ))}
                  <span className="text-3xl font-bold ml-2">5.0</span>
                </div>
                <p className="text-muted-foreground mt-2">На основе {reviews.length} отзывов</p>
              </div>
              <div className="w-full md:w-auto space-y-2 min-w-[300px]">
                <div className="flex items-center gap-2">
                  <span className="text-sm w-20">5 звёзд</span>
                  <Progress value={(50 / 60) * 100} className="flex-1" />
                  <span className="text-sm w-12 text-right">50</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm w-20">4 звезды</span>
                  <Progress value={(10 / 60) * 100} className="flex-1" />
                  <span className="text-sm w-12 text-right">10</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tokens Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          <Icon name="Coins" className="inline mr-2 text-yellow-400" size={32} />
          Игровые токены
        </h2>
        <Card className="bg-card/50 border-secondary/20 backdrop-blur max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Токены RoomTime</CardTitle>
            <CardDescription>Внутриигровая валюта сервера</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold text-secondary">1₽ = 1 токен</div>
              <p className="text-muted-foreground">Используйте токены для покупок на сервере</p>
              <Button className="w-full gaming-gradient hover:gaming-gradient-hover border-0" size="lg">
                Купить токены
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Privileges Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          <Icon name="Crown" className="inline mr-2 text-yellow-400" size={36} />
          Игровые привилегии
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {privileges.map((priv) => (
            <Card 
              key={priv.name} 
              className={`bg-card/50 backdrop-blur transition-all hover:scale-105 cursor-pointer ${
                priv.popular ? 'border-accent border-2' : 'border-primary/20'
              }`}
            >
              {priv.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-white border-0">Популярная</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-between">
                  <span>{priv.name}</span>
                  <Icon name="Shield" className="text-primary" size={24} />
                </CardTitle>
                <CardDescription className="text-3xl font-bold text-primary">
                  {priv.price}₽
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {priv.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                  {priv.features.length > 4 && (
                    <li className="text-accent font-medium">+{priv.features.length - 4} возможностей</li>
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full gaming-gradient hover:gaming-gradient-hover border-0">
                  Купить
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          <Icon name="MessageSquare" className="inline mr-2 text-accent" size={36} />
          Отзывы донатеров
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 12).map((review, idx) => (
            <Card key={idx} className="bg-card/50 border-primary/20 backdrop-blur">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-white">
                        {review.author[0]}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg">{review.author}</CardTitle>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {reviews.length > 12 && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="border-primary/50">
              Показать все {reviews.length} отзывов
            </Button>
          </div>
        )}
      </div>

      {/* Creators Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          <Icon name="Users" className="inline mr-2 text-secondary" size={36} />
          Создатели сервера
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {['IIoneR', 'umQKoKiq', 'TukeInside'].map((creator) => (
            <Card key={creator} className="bg-card/50 border-secondary/20 backdrop-blur">
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="bg-secondary text-white text-2xl">
                    {creator[0]}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{creator}</h3>
                <p className="text-muted-foreground mt-2">Основатель</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-4">
              <Button asChild variant="ghost" size="sm">
                <a href="https://t.me/HollyFunServer" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2" size={16} />
                  Telegram
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" className="mr-2" size={16} />
                  Discord
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground">© 2024 RoomTime Minecraft Server. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
