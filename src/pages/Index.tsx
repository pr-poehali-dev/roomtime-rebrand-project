import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const privileges = [
  {
    name: 'Барон',
    price: 10,
    color: 'from-gray-600 to-gray-700',
    features: [
      '⚕ Префикс в чате и табе: [Барон] ВашНик',
      '› /kit Барон ⇨ Получить набор Барона',
      '› /salary ⇨ Получить зарплату',
      '› /crawl ⇨ Сменить позу: красться',
      '',
      'Прочее:',
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
    color: 'from-blue-600 to-blue-700',
    features: [
      '⚕ Префикс в чате и табе: [Страж] ВашНик',
      '› /kit Страж ⇨ Получить набор Стража',
      '› /suicide ⇨ Покончить жизнь самоубийством',
      '› /dchat ⇨ Воспользоваться Донат-Чатом',
      '',
      'Прочее:',
      'Доступно Точек домов: 2',
      'Регионов (Гриф): 2 по 45,000 блоков',
      'Регионов (Анка): 3 блоков',
      'Слотов на Аукционе: 7',
      'Задержка телепорта: 6 сек',
      '✔️ Возможности привилегии ниже'
    ]
  },
  {
    name: 'Герой',
    price: 24,
    color: 'from-green-600 to-green-700',
    features: [
      '⚕ Префикс в чате и табе: [Герой] ВашНик',
      '› /kit Герой ⇨ Получить набор Героя',
      '› /top ⇨ Телепортация вверх',
      '› /hat ⇨ Надеть блок на голову',
      '',
      'Прочее:',
      'Доступно Точек домов: 2',
      'Регионов (Гриф): 2 по 50,000 блоков',
      'Регионов (Анка): 4 блоков',
      'Слотов на Аукционе: 8',
      'Задержка телепорта: 6 сек',
      '✔️ Возможности привилегии ниже'
    ]
  },
  {
    name: 'Аспид',
    price: 56,
    color: 'from-yellow-600 to-yellow-700',
    features: [
      '⚕ Префикс в чате и табе: [Аспид] ВашНик',
      '› /kit Аспид ⇨ Получить набор Аспида',
      '› /clear ⇨ Очистить инвентарь',
      '› /feed ⇨ Восстановить голод',
      '› /heal ⇨ Восстановить здоровье',
      '› /me ⇨ Написать в чат Реакции',
      '',
      'Прочее:',
      'Доступно Точек домов: 2',
      'Регионов (Гриф): 2 по 60,000 блоков',
      'Регионов (Анка): 4 блоков',
      'Слотов на Аукционе: 9',
      'Задержка телепорта: 6 сек',
      '✔️ Возможности привилегии ниже'
    ]
  },
  {
    name: 'Сквид',
    price: 69,
    popular: true,
    color: 'from-purple-600 to-pink-600',
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
      '',
      'Прочее:',
      'Доступно Точек домов: 3',
      'Регионов (Гриф): 3 по 75,000 блоков',
      'Регионов (Анка): 5 блоков',
      'Слотов на Аукционе: 10',
      'Задержка телепорта: 5 сек',
      '✔️ Возможности привилегии ниже'
    ]
  },
  {
    name: 'Глава',
    price: 87,
    color: 'from-orange-600 to-red-600',
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
      '',
      'Прочее:',
      'Доступно Точек домов: 3',
      'Регионов (Гриф): 4 по 100,000 блоков',
      'Регионов (Анка): 6 блоков',
      'Слотов на Аукционе: 11',
      'Задержка телепорта: 4 сек',
      '✔️ Возможности привилегии ниже'
    ]
  },
  {
    name: 'Элита',
    price: 149,
    color: 'from-purple-700 to-purple-800',
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
    color: 'from-indigo-600 to-indigo-700',
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
    color: 'from-pink-600 to-pink-700',
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
    color: 'from-red-600 to-red-700',
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
    color: 'from-yellow-500 to-orange-600',
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
    color: 'from-cyan-600 to-blue-700',
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
    color: 'from-purple-600 to-pink-600',
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

const creators = [
  { name: 'IIoneR', role: 'Основатель' },
  { name: 'umQKoKiq', role: 'Основатель' },
  { name: 'TukeInside', role: 'Основатель' }
];

export default function Index() {
  const [onlineCount] = useState(347);

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-black text-shadow bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent uppercase tracking-tight">
              *ROOMTIME<br/>MINECRAFT SERVER*
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Трумтайм Майнкрафт: Сродідер сентерт, грайделіґн сцанд цомент тудіцт.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Card className="bg-card/80 backdrop-blur-lg border-primary/30">
                <CardContent className="p-4 flex items-center gap-3">
                  <Icon name="Server" className="text-primary" size={28} />
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground font-medium">IP Сервера</p>
                    <p className="font-bold text-lg">RoomTime.gomc.me</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/80 backdrop-blur-lg border-secondary/30">
                <CardContent className="p-4 flex items-center gap-3">
                  <Icon name="Users" className="text-secondary" size={28} />
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground font-medium">Онлайн</p>
                    <p className="font-bold text-lg text-secondary">{onlineCount} игроков</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 justify-center pt-6">
              <Button asChild size="lg" className="gradient-purple-pink hover:gradient-hover border-0 minecraft-shadow font-bold text-lg px-8">
                <a href="https://t.me/HollyFunServer" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2" size={20} />
                  Telegram
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary/50 hover:bg-primary/20 font-bold text-lg px-8">
                <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Card className="bg-gradient-to-br from-accent/20 to-primary/20 border-accent/30 backdrop-blur-lg minecraft-shadow">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4">Общая оценка сервера</h3>
                <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" className="text-yellow-400 fill-yellow-400" size={32} />
                  ))}
                  <span className="text-5xl font-black ml-3 text-shadow">5.0</span>
                </div>
                <p className="text-muted-foreground text-lg">На основе {reviews.length} отзывов</p>
              </div>
              <div className="w-full md:w-auto space-y-3 min-w-[320px]">
                <div className="flex items-center gap-3">
                  <span className="text-base font-medium w-24">5 звёзд</span>
                  <Progress value={(50 / 60) * 100} className="flex-1 h-3" />
                  <span className="text-base font-bold w-12 text-right">50</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-base font-medium w-24">4 звезды</span>
                  <Progress value={(10 / 60) * 100} className="flex-1 h-3" />
                  <span className="text-base font-bold w-12 text-right">10</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-shadow">
          <Icon name="Coins" className="inline mr-3 text-yellow-400" size={40} />
          ИГРОВЫЕ ТОКЕНЫ
        </h2>
        <Card className="bg-gradient-to-br from-secondary/20 to-primary/20 border-secondary/30 backdrop-blur-lg max-w-md mx-auto minecraft-shadow">
          <CardHeader>
            <CardTitle className="text-3xl font-black">Токены RoomTime</CardTitle>
            <CardDescription className="text-lg">Внутриигровая валюта сервера</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-black text-secondary text-shadow mb-4">1₽ = 1 TOKEN</div>
              <p className="text-muted-foreground text-lg mb-6">Используйте токены для покупок на сервере</p>
              <Button className="w-full gradient-purple-pink hover:gradient-hover border-0 minecraft-shadow font-bold text-lg py-6" size="lg">
                <Icon name="ShoppingCart" className="mr-2" size={20} />
                Купить токены
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-shadow">
          <Icon name="Crown" className="inline mr-3 text-yellow-400" size={40} />
          ПРИВИЛЕГИИ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {privileges.map((priv) => (
            <Card 
              key={priv.name} 
              className={`bg-gradient-to-br ${priv.color} backdrop-blur-lg transition-all hover:scale-105 cursor-pointer minecraft-shadow hover:minecraft-shadow-sm ${
                priv.popular ? 'ring-4 ring-accent' : 'border-primary/30'
              }`}
            >
              {priv.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-accent text-white border-0 font-bold px-4 py-1 text-sm minecraft-shadow-sm">
                    ⭐ ПОПУЛЯРНАЯ
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-2xl font-black text-shadow">{priv.name}</CardTitle>
                  <Icon name="Shield" className="text-white/80" size={28} />
                </div>
                <CardDescription className="text-4xl font-black text-white text-shadow">
                  ${priv.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-black/30 rounded-lg p-4 mb-4 max-h-64 overflow-y-auto">
                  <ul className="space-y-1.5 text-sm">
                    {priv.features.map((feature, idx) => {
                      if (feature === '') return <div key={idx} className="h-2" />;
                      if (feature === 'Прочее:') return <p key={idx} className="font-bold text-white mt-2">{feature}</p>;
                      return (
                        <li key={idx} className="text-white/90 leading-relaxed">
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <Button className="w-full bg-white/20 hover:bg-white/30 border-0 minecraft-shadow-sm font-bold backdrop-blur">
                  <Icon name="ShoppingBag" className="mr-2" size={18} />
                  Purchase
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-shadow">
          <Icon name="MessageSquare" className="inline mr-3 text-accent" size={40} />
          ОТЗЫВЫ ДОНАТЕРОВ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 12).map((review, idx) => (
            <Card key={idx} className="bg-card/50 border-primary/20 backdrop-blur-lg hover:border-primary/40 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="gradient-purple-pink text-white font-bold text-lg">
                        {review.author[0]}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg font-bold">{review.author}</CardTitle>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {reviews.length > 12 && (
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="border-2 border-primary/50 hover:bg-primary/20 font-bold text-lg px-8">
              Показать все {reviews.length} отзывов
            </Button>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-shadow">
          <Icon name="Users" className="inline mr-3 text-secondary" size={40} />
          СОЗДАТЕЛИ СЕРВЕРА
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {creators.map((creator) => (
            <Card key={creator.name} className="bg-gradient-to-br from-secondary/20 to-primary/20 border-secondary/30 backdrop-blur-lg minecraft-shadow hover:scale-105 transition-all">
              <CardContent className="p-8 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary/50">
                  <AvatarFallback className="gradient-purple-pink text-white text-3xl font-black">
                    {creator.name[0]}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-black text-shadow mb-2">{creator.name}</h3>
                <p className="text-muted-foreground font-medium text-lg">{creator.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <footer className="border-t border-border/50 mt-16 bg-card/30 backdrop-blur">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-6">
              <Button asChild variant="ghost" size="lg" className="hover:bg-primary/20 font-bold">
                <a href="https://t.me/HollyFunServer" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2" size={20} />
                  Telegram
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="hover:bg-primary/20 font-bold">
                <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Discord
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground text-lg">© 2024 RoomTime Minecraft Server. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
