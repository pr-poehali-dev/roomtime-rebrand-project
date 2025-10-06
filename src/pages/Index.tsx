import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

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
      '› /cartography ⇨ Открыть Картографический стол',
      '› /smithing ⇨ Открыть Кузнечный стол',
      '› /grindstone ⇨ Открыть Точило',
      '› /stonecutter ⇨ Открыть Камнерез',
      '› /anvil ⇨ Открыть Наковальню',
      '› /lore ⇨ Изменить описание предмета',
      '› /enchant ⇨ Зачаровать предмет',
      '› /skull ⇨ Получить голову игрока',
      '',
      'Прочее:',
      'Доступно Точек домов: 4',
      'Регионов (Гриф): 5 по 150,000 блоков',
      'Регионов (Анка): 7 блоков',
      'Слотов на Аукционе: 12',
      'Задержка телепорта: 3 сек',
      '✔️ Возможности привилегии ниже'
    ]
  },
  {
    name: 'Титан',
    price: 345,
    color: 'from-red-600 to-red-700',
    features: [
      '⚕ Префикс в чате и табе: [Титан] ВашНик',
      '› /kit Титан ⇨ Получить набор Титана',
      '› /god ⇨ Режим Бога',
      '› /fly ⇨ Режим полета',
      '› /speed ⇨ Изменить скорость',
      '› /tp Ник ⇨ Телепортация к игроку',
      '',
      'Прочее:',
      'Доступно Точек домов: 5',
      'Регионов (Гриф): 7 по 200,000 блоков',
      'Регионов (Анка): 9 блоков',
      'Слотов на Аукционе: 14',
      'Задержка телепорта: 2 сек',
      '✔️ Возможности привилегии ниже'
    ]
  },
  {
    name: 'Князь',
    price: 749,
    color: 'from-pink-600 to-rose-600',
    features: [
      '⚕ Префикс в чате и табе: [Князь] ВашНик',
      '› /kit Князь ⇨ Получить набор Князя',
      '› Все возможности Титана',
      '› Премиум техподдержка',
      '› Расширенные возможности'
    ]
  },
  {
    name: 'Принц',
    price: 999,
    color: 'from-indigo-600 to-purple-700',
    features: [
      '⚕ Префикс в чате и табе: [Принц] ВашНик',
      '› /kit Принц ⇨ Получить набор Принца',
      '› Все возможности Князя',
      '› VIP статус в игре',
      '› Особые бонусы и привилегии'
    ]
  },
  {
    name: 'Герцог',
    price: 1399,
    color: 'from-amber-600 to-orange-700',
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
  const [nickname, setNickname] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePurchase = () => {
    if (nickname.trim().length < 3) {
      alert('Введите корректный никнейм (минимум 3 символа)');
      return;
    }
    window.open('https://funpay.com/users/16724676/', '_blank');
    setIsDialogOpen(false);
    setNickname('');
  };

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);
  const fiveStarCount = reviews.filter(r => r.rating === 5).length;
  const fourStarCount = reviews.filter(r => r.rating === 4).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black">
      {/* Хедер */}
      <header className="bg-black/80 backdrop-blur-sm border-b border-red-900/50 sticky top-0 z-50 evil-shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-900 rounded-lg flex items-center justify-center border-glow">
                <Icon name="Gamepad2" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-red-500 text-shadow-red">RoomTime</h1>
                <p className="text-xs text-red-400/70">Minecraft сервер</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-red-950/50 text-red-400 border-red-900">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                {onlineCount} онлайн
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="bg-gradient-to-r from-red-950 via-black to-red-950 text-white py-16 border-y border-red-900/50 evil-shadow-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-shadow-red text-red-500">Донат магазин RoomTime</h2>
            <p className="text-xl mb-8 text-red-300/80">Лучшие привилегии для твоей игры</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="pt-6 text-center">
                  <Icon name="Users" className="mx-auto mb-3 text-white" size={32} />
                  <div className="text-3xl font-bold mb-1">{onlineCount}</div>
                  <div className="text-sm text-blue-100">Игроков онлайн</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="pt-6 text-center">
                  <Icon name="Star" className="mx-auto mb-3 text-white" size={32} />
                  <div className="text-3xl font-bold mb-1">{averageRating}</div>
                  <div className="text-sm text-blue-100">Средний рейтинг</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="pt-6 text-center">
                  <Icon name="Package" className="mx-auto mb-3 text-white" size={32} />
                  <div className="text-3xl font-bold mb-1">{privileges.length}</div>
                  <div className="text-sm text-blue-100">Привилегий</div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-black/40 backdrop-blur border-red-900/50 mb-8 evil-shadow">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-red-300/70">IP сервера:</span>
                    <span className="font-mono font-bold">RoomTime.gomc.me</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-red-300/70">Telegram:</span>
                    <a href="https://t.me/HollyFunServer" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">
                      @HollyFunServer
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-red-300/70">Discord:</span>
                    <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">
                      discord.gg/WBrBCpUbkc
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gradient-red-dark hover:gradient-hover border-glow font-bold text-lg px-8 py-6">
                  <Icon name="ShoppingCart" className="mr-2" size={24} />
                  Купить токены
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Покупка токенов</DialogTitle>
                  <DialogDescription className="text-base">
                    Введите ваш игровой никнейм для продолжения покупки
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="nickname" className="text-sm font-medium">
                      Игровой никнейм
                    </label>
                    <Input
                      id="nickname"
                      placeholder="Ваш ник в Minecraft"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handlePurchase()}
                      className="text-base"
                    />
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-900">
                      <Icon name="Info" className="inline mr-1" size={16} />
                      Курс обмена: <strong>1₽ = 1 TOKEN</strong>
                    </p>
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    onClick={handlePurchase}
                    className="w-full gradient-purple-pink hover:gradient-hover font-bold"
                    size="lg"
                  >
                    Продолжить покупку
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Привилегии */}
      <section className="py-16 bg-gradient-to-b from-black to-neutral-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-500 text-shadow-red">Выберите привилегию</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {privileges.map((privilege) => (
              <Card key={privilege.name} className={`relative overflow-hidden hover:evil-shadow-lg transition-all border-red-900/50 bg-neutral-950 ${privilege.popular ? 'border-glow' : ''}`}>
                {privilege.popular && (
                  <Badge className="absolute top-4 right-4 bg-red-600 text-white border-glow">
                    Популярное
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${privilege.color} mb-4`} />
                  <CardTitle className="text-2xl font-bold text-red-400">{privilege.name}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold text-red-500">{privilege.price}₽</span>
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="space-y-1.5 text-sm max-h-64 overflow-y-auto">
                    {privilege.features.map((feature, idx) => (
                      <div key={idx} className={feature === '' ? 'h-2' : feature.startsWith('Прочее:') ? 'font-semibold mt-2 text-red-400' : 'text-gray-400'}>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full gradient-red-dark hover:gradient-hover font-bold mt-4 border-glow">
                        <Icon name="ShoppingBag" className="mr-2" size={18} />
                        Купить
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">Покупка привилегии</DialogTitle>
                        <DialogDescription className="text-base">
                          Введите ваш игровой никнейм для продолжения покупки
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <label htmlFor="nickname" className="text-sm font-medium">
                            Игровой никнейм
                          </label>
                          <Input
                            id="nickname"
                            placeholder="Ваш ник в Minecraft"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handlePurchase()}
                            className="text-base"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          onClick={handlePurchase}
                          className="w-full gradient-red-dark hover:gradient-hover font-bold border-glow"
                          size="lg"
                        >
                          Продолжить покупку
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 bg-neutral-950 border-y border-red-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-red-500 text-shadow-red">Отзывы игроков</h2>
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-red-400 mb-2">{averageRating}</div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-sm text-red-300/70">{reviews.length} отзывов</p>
              </div>
              
              <div className="space-y-2 flex-1 max-w-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={14} />
                    ))}
                  </div>
                  <Progress value={(fiveStarCount / reviews.length) * 100} className="flex-1" />
                  <span className="text-sm text-red-400 w-8">{fiveStarCount}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={14} />
                    ))}
                    <Icon name="Star" className="text-gray-300" size={14} />
                  </div>
                  <Progress value={(fourStarCount / reviews.length) * 100} className="flex-1" />
                  <span className="text-sm text-red-400 w-8">{fourStarCount}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2">
              {reviews.map((review, idx) => (
                <Card key={idx} className="bg-neutral-950 border-red-900/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Avatar className="bg-gradient-to-br from-red-600 to-red-900">
                        <AvatarFallback className="text-white font-bold">
                          {review.author[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-red-400">{review.author}</span>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Icon
                                key={i}
                                name="Star"
                                className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                                size={14}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-400">{review.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Создатели */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-red-500 text-shadow-red">Создатели сервера</h2>
            
            <div className="flex justify-center gap-8">
              {creators.map((creator) => (
                <Card key={creator.name} className="text-center border-red-900/50 bg-neutral-950">
                  <CardContent className="pt-6">
                    <Avatar className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-red-600 to-red-900 border-glow">
                      <AvatarFallback className="text-2xl text-white font-bold">
                        {creator.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-lg mb-1 text-red-400">{creator.name}</h3>
                    <p className="text-sm text-red-300/70">{creator.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-black border-t border-red-900/50 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-900 rounded-lg flex items-center justify-center border-glow">
              <Icon name="Gamepad2" className="text-white" size={18} />
            </div>
            <span className="font-bold text-lg text-red-400">RoomTime</span>
          </div>
          <p className="text-red-400/60 text-sm mb-4">
            © 2024 RoomTime Minecraft Server. Все права защищены.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="https://t.me/HollyFunServer" target="_blank" rel="noopener noreferrer" className="text-red-400/70 hover:text-red-400 transition-colors">
              Telegram
            </a>
            <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer" className="text-red-400/70 hover:text-red-400 transition-colors">
              Discord
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}