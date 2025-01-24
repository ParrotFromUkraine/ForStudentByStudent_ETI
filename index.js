const TelegramAPI = require('node-telegram-bot-api');
const token = '7309883575:AAFFH2NEPLoU7GRZV6Ltm6oe8tPfBJJ6mxc'
const a = 1
console.log(a)
const bot = new TelegramAPI(token, { polling: true });

const mainMenu = {
    reply_markup: {
        keyboard: [
            [{ text: '🔔•Розклад дзвінків•🔔' }, { text: '📄•Розклад пар•📄' }],
            [{ text: '📚•Бібліотека знань•📚' }, { text: '⏰•Замены•⏰'}],
            [{ text: '💻•Feedback•💻'}]
        ],
        resize_keyboard: true
    }
};

const classMenu = {
    reply_markup: {
        keyboard: [
            [{ text: '💻Кнк-24' }, { text: '💳Фнк-24' }],
            [{ text: '💻Кнк-23' }, { text: '💳Фнк-23' }],
            [{ text: 'Назад' }]
        ],
        resize_keyboard: true
    }
};

const daysMenu = {
    reply_markup: {
        keyboard: [
            [{ text: 'Понеділок' }, { text: 'Вівторок' }],
            [{ text: 'Середа' }, { text: 'Четвер' }],
            [{ text: 'П\'ятниця' }, { text: 'Назад' }]
        ],
        resize_keyboard: true
    }
};
const libriaryClass = {
    reply_markup: {
        keyboard: [
            [{ text: '💻Кнк24' }, { text: '💳Фнк24' }],
            [{ text: '💻Кнк23' }, { text: '💳Фнк23' }],
            [{ text: 'Назад' }]
        ],
        resize_keyboard: true
    }
};
const qClass = {
    reply_markup: {
        keyboard: [
            [{ text: 'КНК-24' }, { text: 'ФНК-24' }],
            [{ text: 'КНК-23' }, { text: 'ФНК-24' }],
            [{ text: 'Назад' }]
        ],
        resize_keyboard: true
    }
};
const subjectMenu = {
    reply_markup: {
        keyboard: [
            [{ text: 'Теорія Дизайну' }, { text: 'Основи підприємництва' }],
            [{ text: 'Фізична культура' }, { text: 'Зарубижна Література' }],
            [{ text: 'Фізика' }, { text: 'Українська мова' }],
            [{ text: 'Навчальна практика' }, { text: 'Математика' }],
            [{ text: 'Хімія' }, { text: 'Інформатика' }],
            [{ text: 'Біологія' }, { text: 'Українська література' }],
            [{ text: 'Іноземна мова' }, { text: 'Захист України' }],
            [{ text: 'Кураторська година (Можлива)' }, { text: 'Програмування JS'} ],
            [{ text: 'Назад' }]
        ],
        resize_keyboard: true
    }
};


const schedules = {
	'💻Кнк-24': {
		Понеділок:
			'Розклад для Кнк-24 на Понеділок:\n\n1. Математика | Пара відсутня \n(17 ауд: Чиглінцева Н.В. Чисельник)\n(У небутті, Знаменник)\n\n2. Веб-розробка | Веб-дизайн\n(10 ауд: Найдьонов І.В. I )\n(16 ауд: Образчиков М.А. II )\n\n3. Історія України\n(17 ауд: Неборак К.О.)\n\n4. Громадянська освіта\n(20 ауд: Беспалий В.І.)',
		Вівторок:
			'Розклад для Кнк-24 на Вівторок:\n\n1. Веб-дизайн | Веб-розробка \n(16 ауд: Образчиков М.А. Чисельник)\n(16 ауд: Найдьонов І.В. Знаменик)\n\n2. Зарубіжна література\n(17 ауд: Саркісян Т.О.)\n\n3. Інформатика \n(10 ауд: Беспалий В.І.)\n\n4. Українська мова\n(17 ауд: Дідковська Н.А.)',
		Середа:
			'Розклад для Кнк-24 на Середу:\n\n1. Громадянська освіта\n(20 ауд: Беспалий В.І.)\n\n2. Фізика\n(17 ауд: Беспалий В.І.)\n\n3. Історія України | Хімія\n(17 ауд: Неборак К.О.Чисельник)\n(17 ауд: Бохан Ю.В Знаменик)\n\n4. Фізичне виховання \n(Гавриленко М.І.)',
		Четвер:
			'Розклад для Кнк-24 на Четвер:\n\n1. Українська література\n(17 ауд: Прохніцька Н.М.)\n\n2. Біологія | Географія\n(17 ауд:Маслова Н.М. Чисельник)\n(17 ауд:Маслова Н.М. Знаменик)\n\n3. Іноземна мова\n(17 ауд: Саркісян Т.О.)\n\n4. Веб-дизайн | Веб-розробка\n(4 ауд:Образчиков М.А. I )\n(16 ауд: Найдьонов І.В. II )',
		"П'ятниця":
			"Розклад для Кнк-24 на П'ятницю:\n\n1. Захист України\n(17 ауд: Степанчук О.С.)\n\n2. Технології \n(17 ауд: Штець Т.Ф.)\n\n3. Математика\n(17 ауд: Чиглінцева Н.В.)\n\n4. Фізичне виховання | Пара відсутня\n(Гавриленко М.І. Чисельник)",
	},
	'💳Фнк-24': {
		Понеділок:
			'Розклад для Фнк-24 на Понеділок:\n\n1. Історія україни\n(13 ауд: Неборак К.О.)\n\n2.Українська література\n(13 ауд: Прохніцька Н.М.)\n\n3.Математика\n(13 ауд: Чиглінцева Н.В.)\n\n4. Громадянська освіта\n(20 ауд: Беспалий В.і.)',
		Вівторок:
			'Розклад для Фнк-24 на Вівторок:\n\n1. Зарубіжна література\n(13 ауд:Саркісян Т.О.)\n\n2.Фізика\n(13 ауд: Беспалий В.І.)\n\n3.Українська мова\n(13 ауд: Дідковська Н.А.)\n\n4.Математика | Пара відсутня\n(13 ауд: Чиглінцева Н.В. Чисельник)\n(Ніде, знаменник.)',
		Середа:
			'Розклад для Фнк-24 на Середу:\n\n1. Громадянська освіта\n\n(20 ауд: Беспалий В.І.)\n\n2.Історія України | Хімія\n(13 ауд: Неборак К.О.)\n(13 ауд:Бохан Ю.В.)\n\n4. Фізичне виховання \n(Гавриленко М.І. Чисельник)',
		Четвер:
			"Розклад для Фнк-24 на Четвер:\n\n1. Біологія | Географія\n(17 ауд: Маслова Н.М. Чисельник)\n(17 ауд:Маслова Н.М. Знаменик)\n\n2. Зв'язки з громадськістю\n(13 ауд: Беспалий В.І.)\n\n3. Інформатика\n(4 ауд: Беспалий В.І.)\n\n4. Іноземна мова\n(13 ауд: Саркісян Т.О.)",
		"П'ятниця":
			"Розклад для Фнк-24 на П'ятницю:\n\n1. Перша пара відсутня\n\n2. Захист України\n(13 ауд: Степанчук О.С.)\n\n3. Технології\n(13 ауд: Штець Т.Ф.)\n\n4. Фізичне виховання | Пара відсутня\n(Гавриленко М.І. Чисельник)\n (Абсолютне ніщо, Знаменник)",
	},
	'💻Кнк-23': {
		Понеділок: 
			"Розклад для Кнк-23 на Понеділок:\n\n1. Комп'ютерні мережі\n(10 ауд: Квасов Е.М.)\n\n2. Історія України\n(14 ауд: Неборак К.О.)\n\n3. Українська мова\n(14 ауд: Прохіницька Н.М.)\n\n4. Українська література\n(14 ауд: Прохіницька Н.М.)",
		Вівторок: 
			'Розклад для Кнк-23 на Вівторок:\n\n1. Веб-розробка | Лінійна алгебра та аналітична геометрія\n(16 ауд: Найдьонов I.В. Чисельник)\n(15 ауд: Чиглінцева Н.В. Знаменник)\n\n2. Веб-дизайн\n(10 ауд: Образчиков М.А.)\n\n3. Безпека життєдіяльності\n(6 ауд: Нестеренко Т.С.)\n\n5. Операційні системи\n(4 ауд: Найдьонов І.В.)',
		Середа: 
			'Розклад для Кнк-23 на Середу:\n\n1. Лінійна алгебра та основи аналітичної геометрії\n(15 ауд: Чиглінцева Н.В.)\n\n2. Веб-розробка\n(16 ауд: Найдьонов І.В.)\n\n3. Лідерство\n(20 ауд: Образчиков М.А.)\n\n4. Фізика\n(14 ауд: Беспалий В.І.)',
		Четвер: 	
			'Розклад для Кнк-23 на Четверг:\n\n1. Ігробудування\n(10 ауд: Ізвалов О.В.)\n\n2. Основи правознавства\n(20 ауд: щербина О.В.)\n\n3. Математика\n(14 ауд: Чигліцева Н.В.)\n\n4.Фізичне виховання\n(Гавриленко М.І.)',
		"П'ятниця": 
			"Розклад для Кнк-23 на П'ятницю:\n\n1. Пара відсутня\n(Лише вам вибирати, де саме пара НЕ проведеться.)\n\n2. Іноземна мова\n(14 ауд: Саркісян Т.О.)\n\n3. Іноземна мова (за проф-спрямуванням)\n(20 ауд: Саркісян Т.О.)\n\n4. Навчальна практика\n(10 ауд: Образчиков М.А.)",
	},
	'💳Фнк-23': {
		Понеділок: 
			'Розклад для Фнк-23 на Понеділок:\n\n1. Основи бухгалетерського обліку\n(14 ауд: Штець Т.Ф.)\n\n2. Історія України\n(14 ауд: Неборак К.О.)\n\n3. Українська мова\n(14 ауд: Прохніцька Н.М.)\n\n4. Українська літеартура\n(14 ауд: Прохніцька Н.М.)',
		Вівторок: 
			'Розклад для Фнк-23 на Вівторок:\n\n1. Банківські операції\n(14 ауд: Щербина О.В.)\n\n2. Бюджетна система\n(14 ауд: Фрунза С.А.)\n\n3. Безпека життєдіяльності\n(6 ауд: Нестеренко Т.С.)\n\n4. Пара відсутня | Основи Бухгалтерського обліку\n(Пари не буде, Мінкульт прийняв іслам; Чисельник)\n(14 ауд: Штець Т.Ф. Знаменник)',
		Середа: 
			'Розклад для Фнк-23 на Середу:\n\n1. Основи Бухгалтерського обліку | Економікс (Мікроекономіка)\n(14 ауд: Штець Т.Ф. Чисельник)\n(14 ауд: Павлова О.В. Знаменник)\n\n2. Економікс (Мікроекономіка)\n(14 ауд. Павлова О.В.)\n\n3. Лідерство\n(20 ауд: Образчиков М.А.)\n\n4. Фізика\n(14 ауд: БеспалийВ.І.)',
		Четвер: 
			'Розклад для Фнк-23 на Четверг:\n\n1. Вища та прикладна математика\n(14 ауд: Чигліцина Н.В.)\n\n2. Основи правознавства\n(20 ауд: Щербина О.В.)\n\n3. Математика\n(14 ауд: Чиглінцева Н.В.)\n\n4.Фізичне виховання\n(Гавриленко М.І.)',
		"П'ятниця": 
			"Розклад для Фнк-23 на П'ятницю:\n\n1. Навчальна практика\n(14 ауд: Штець Т.Ф.)\n\n2. Іноземна мова\n(14 ауд: Саркісян Т.О.)\n\n3. Іноземна мова (за проф-спрямуванням)\n(20 ауд: Саркісян Т.О.)",
	},
}

const information = {
    '💻Кнк24': {
        'Теорія Дизайну': 'Полезная інформация по Теорії Дизайну для Кнк-24...',
        'Основи підприємництва': 'Полезная інформация по Основи підприємництва для Кнк-24\n\nClassRoom - https://classroom.google.com/c/NTkzMDk3NDMzODAz?cjc=vhcnkjw',
        'Фізична культура': 'Полезная інформация по Фізичній культурі для Кнк-24...',
        'Зарубижна Література': 'Полезная інформация по Зарубіжній Літературі для Кнк-24...',
        'Фізика': 'Полезная інформация по Фізиці для Кнк-24 \n\nGoogle Form - https://www.facebook.com/share/p/a8JGEiLy1tE7k7z1/?mibextid=K35XfP \nTelegram - https://t.me/+RdiVaNRgaZViZGFi\n Підручник - https://vshkole.com/10-klass/uchebniki/fizika/vg-baryahtar-so-dovgij-fya-bozhinova-2018-riven-standartu/stranitsa-52',
        'Українська мова': 'Полезная інформация по Українській мові для Кнк-24\n\n Підручник - https://pidruchnyk.com.ua/1233-ukrainska-mova-10-klas-shevchuk.html',
        'Навчальна практика': 'Полезная інформация по Навчальній практиці для Кнк-24...',
        'Математика': 'Полезная інформация по Математиці для Кнк-24\n\nПідручник - https://pidruchnyk.com.ua/1154-matematyka-10-klas-ister.html \n Classroom - https://classroom.google.com/c/NjIyMzY5MDIzODU1?cjc=ibejnsk',
        'Хімія': 'Полезная інформация по Хімії для Кнк-24',
        'Інформатика': 'Полезная інформация по Інформатиці для Кнк-24...',
        'Біологія': 'Полезная інформация по Біології для Кнк-24\n\nClassRoom - https://classroom.google.com/c/NzExNTk4NDU5ODEx?cjc=wxs6g2a',
        'Українська література': 'Полезная інформация по Українській літературі для Кнк-24\n\nКайдашева Сім\'я - https://www.ukrlib.com.ua/books/printit.php?tid=907\n\nClassRoom - https://classroom.google.com/c/NzEyNDkzOTA3ODg3?cjc=kdho537',
        'Іноземна мова': 'Полезная інформация по Іноземній мові для Кнк-24...',
        'Захист України': 'Полезная інформация по Захисту України для Кнк-24...',
        'Кураторська година (Можлива)': 'Полезная інформация по Кураторській годині для Кнк-24...',
        'Програмування JS': 'Полезная інформация по Програмування JS для Кнк-24\n\nClassroom - https://classroom.google.com/c/NzExODExNjcyODI5?cjc=2i6iuwz'
    },
    '💳Фнк24': {
        'Теорія Дизайну': 'Полезная информация по Теорії Дизайну для Кнк-24...',
        'Основи підприємництва': 'Полезная информация по Основи підприємництва для Кнк-24...',
        'Фізична культура': 'Полезная информация по Фізичній культурі для Кнк-24...',
        'Зарубижна Література': 'Полезная информация по Зарубіжній Літературі для Кнк-24...',
        'Фізика': 'Полезная информация по Фізиці для Кнк-24 \n\nGoogle Form - https://www.facebook.com/share/p/a8JGEiLy1tE7k7z1/?mibextid=K35XfP',
        'Українська мова': 'Полезная информация по Українській мові для Кнк-24\n\nПідручник - https://pidruchnyk.com.ua/1233-ukrainska-mova-10-klas-shevchuk.html',
        'Навчальна практика': 'Полезная информация по Навчальній практиці для Кнк-24',
        'Математика': 'Полезная информация по Математиці для Кнк-24...',
        'Хімія': 'Полезная информация по Хімії для Кнк-24...',
        'Інформатика': 'Полезная информация по Інформатиці для Кнк-24...',
        'Біологія': 'Полезная информация по Біології для Кнк-24...',
        'Українська література': 'Полезная информация по Українській літературі для Кнк-24...',
        'Іноземна мова': 'Полезная информация по Іноземній мові для Кнк-24...',
        'Захист України': 'Полезная информация по Захисту України для Кнк-24...',
        'Кураторська година (Можлива)': 'Полезная информация по Кураторській годині для Кнк-24...'
    },
    '💻Кнк23': {
        'Теорія Дизайну': 'Полезная информация по Теорії Дизайну для Кнк-24...',
        'Основи підприємництва': 'Полезная информация по Основи підприємництва для Кнк-24...',
        'Фізична культура': 'Полезная информация по Фізичній культурі для Кнк-24...',
        'Зарубижна Література': 'Полезная информация по Зарубіжній Літературі для Кнк-24...',
        'Фізика': 'Полезная информация по Фізиці для Кнк-24...',
        'Українська мова': 'Полезная информация по Українській мові для Кнк-24...',
        'Навчальна практика': 'Полезная информация по Навчальній практиці для Кнк-24...',
        'Математика': 'Полезная информация по Математиці для Кнк-24...',
        'Хімія': 'Полезная информация по Хімії для Кнк-24...',
        'Інформатика': 'Полезная информация по Інформатиці для Кнк-24...',
        'Біологія': 'Полезная информация по Біології для Кнк-24...',
        'Українська література': 'Полезная информация по Українській літературі для Кнк-24...',
        'Іноземна мова': 'Полезная информация по Іноземній мові для Кнк-24...',
        'Захист України': 'Полезная информация по Захисту України для Кнк-24...',
        'Кураторська година (Можлива)': 'Полезная информация по Кураторській годині для Кнк-24...'
    },
    '💳Фнк23': {
        'Теорія Дизайну': 'Полезная информация по Теорії Дизайну для Кнк-24...',
        'Основи підприємництва': 'Полезная информация по Основи підприємництва для Кнк-24...',
        'Фізична культура': 'Полезная информация по Фізичній культурі для Кнк-24...',
        'Зарубижна Література': 'Полезная информация по Зарубіжній Літературі для Кнк-24...',
        'Фізика': 'Полезная информация по Фізиці для Кнк-24...',
        'Українська мова': 'Полезная информация по Українській мові для Кнк-24...',
        'Навчальна практика': 'Полезная информация по Навчальній практиці для Кнк-24...',
        'Математика': 'Полезная информация по Математиці для Кнк-24...',
        'Хімія': 'Полезная информация по Хімії для Кнк-24...',
        'Інформатика': 'Полезная информация по Інформатиці для Кнк-24...',
        'Біологія': 'Полезная информация по Біології для Кнк-24...',
        'Українська література': 'Полезная информация по Українській літературі для Кнк-24...',
        'Іноземна мова': 'Полезная информация по Іноземній мові для Кнк-24...',
        'Захист України': 'Полезная информация по Захисту України для Кнк-24...',
        'Кураторська година (Можлива)': 'Полезная информация по Кураторській годині для Кнк-24...'
    }
};

let selectedClass = '';
let selectedCourse = '';

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        selectedClass = '';
        selectedCourse = '';
        bot.sendMessage(chatId, 'Вас приветствует бот KolageETI', mainMenu);
    }
            
    else if (text === '🔔•Розклад дзвінків•🔔') {
        bot.sendMessage(chatId, 'Розклад дзвінків:\n1. Пара 8:20 - 9:40\n2. Пара 9:50 - 11:10\n3. Пара 11:40 - 13:00\n4. Пара 13:10 - 14:30\n5. Пара 14:40 - 16:00', mainMenu);
    }
	else if (text === '⏰•Замены•⏰'){
		if (chatId === 5086923431){
			bot.sendMessage(chatId, 'Выберете курс для указания замен', qClass)
			if(['КНК-24', 'ФНК-24', 'КНК-23', 'ФНК-23'].includes(text)){
				bot.sendMessage(chatId, 'Напешыте замены')
			}
		}

	}
            
    else if (text === '📄•Розклад пар•📄') {
        bot.sendMessage(chatId, 'Оберіть клас:', classMenu);
    }

    else if (text === '💻•Feedback•💻') {
        bot.sendMessage(chatId,'Вельме дякуємо: Олександр Володимирович\nПоки немає адміну бота. Ви можете написати:\n гл.Програмісту - @SnrKesha\n тех.Програміст - @IxstsxuI')
                if (text === '@ColageSupportBot Я сильно хочу випіть піва. Поделішся если у тебя есть???'){
                bot.sendStiker(chatId, 'https://tlgrm.ru/_/stickers/765/cd8/765cd855-50a5-397d-ab67-ca72db0488b6/2.webp', mainMenu)
            }
    }

    else if (['💻Кнк-24', '💳Фнк-24', '💻Кнк-23', '💳Фнк-23'].includes(text)) {
        selectedClass = text;
        bot.sendMessage(chatId, `Ви обрали клас ${selectedClass}. Оберіть день тижня:`, daysMenu);
    }
    else if (['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця'].includes(text) && selectedClass) {
        const schedule = schedules[selectedClass][text];
        bot.sendMessage(chatId, schedule, daysMenu);
    }

    else if (text === '📚•Бібліотека знань•📚'){
        bot.sendMessage(chatId, 'Оберіть свій курс', libriaryClass)
        console.log(selectedCourse)
    }

    else if (['💻Кнк24', '💳Фнк24', '💻Кнк23', '💳Фнк23'].includes(text)) {
        selectedCourse = text;
        bot.sendMessage(chatId, `Ви обрали ${selectedCourse}. Оберіть предмет:`, subjectMenu);
    }
    else if ([
        'Теорія Дизайну', 'Основи підприємництва', 'Фізична культура', 'Зарубижна Література',
        'Фізика', 'Українська мова', 'Навчальна практика', 'Математика', 'Хімія', 'Інформатика',
        'Біологія', 'Українська література', 'Іноземна мова', 'Захист України', 'Кураторська година (Можлива)','Програмування JS'
    ].includes(text) && selectedCourse) {
        const info = information[selectedCourse][text];
        bot.sendMessage(chatId, info || 'Інформація відсутня', mainMenu);
    }

    else if (text === 'Назад') {
        if (selectedCourse) {
            selectedCourse = '';
            bot.sendMessage(chatId, 'Оберіть курс:', classMenu);
        } else if (selectedClass) {
            selectedClass = '';
            bot.sendMessage(chatId, 'Оберіть курс:', classMenu);
        } else {
            bot.sendMessage(chatId, 'Ви вернулись назад', mainMenu);
        }
    }
});













