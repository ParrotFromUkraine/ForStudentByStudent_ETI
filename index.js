const TelegramAPI = require('node-telegram-bot-api');
const token = '7309883575:AAFFH2NEPLoU7GRZV6Ltm6oe8tPfBJJ6mxc';

const bot = new TelegramAPI(token, { polling: true });

const mainMenu = {
    reply_markup: {
        keyboard: [
            [{ text: '🔔•Розклад дзвінків•🔔' }, { text: '📄•Розклад пар•📄' }],
            [{ text: '📚•Бібліотека знань•📚' }],
            [{ text: '💻•Feedback•💻'}]
        ],
        resize_keyboard: true
    }
};

const classMenu = {
    reply_markup: {
        keyboard: [
            [{ text: 'Кнк-24' }, { text: 'Фнк-24' }],
            [{ text: 'Кнк-23' }, { text: 'Фнк-23' }],
            [{ text: 'Назад' }]
        ],
        resize_keyboard: true
    }
};

const daysMenu = {
    reply_markup: {
        keyboard: [
            [{ text: 'Понеділок' }, { text: 'Вівторок' }],
            [{ text: 'Середа' }, { text: 'Четверг' }],
            [{ text: 'П\'ятниця' }, { text: 'Назад' }]
        ],
        resize_keyboard: true
    }
};
const libriaryClass = {
    reply_markup: {
        keyboard: [
            [{ text: 'Кнк24' }, { text: 'Фнк24' }],
            [{ text: 'Кнк23' }, { text: 'Фнк23' }],
            [{ text: 'Назад' }]
        ],
        resize_keyboard: true
    }
};
const subjectMenu = {
    reply_markup: {
        keyboard: [
            [{ text: 'Теорія Дизайну' }, { text: 'Основи Підприемства' }],
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
    'Кнк-24': {
        'Понеділок': 'Розклад для Кнк-24 на Понеділок:\n\n1.Пограмування(Java script) | Теорія Дизайну\n2.Основи підприємства\n3.Фізична культура\n4.Фізична культура',
        'Вівторок': 'Розклад для Кнк-24 на Вівторок:\n\n1.Зарубижна Література\n2.Фізика\n3.Українська мова\n4.Навчальна практика',
        'Середа': 'Розклад для Кнк-24 на Середу:\n\n1.Теорія Дизайну | Програмування(Java script)\n2.Математика\n3.Хімія\n4.Інформатика',
        'Четверг': 'Розклад для Кнк-24 на Четверг:\n\n1.Біологія\n2.Українська література\n3.Іноземна мова\n4.Теорія Дизайну | Програмування(Java script)',
        'П\'ятниця': 'Розклад для Кнк-24 на П\'ятницю:\n\n1.Захист України\n2.Математика\n3.Кураторська/ година (Можлива)'
    },
    'Фнк-24': {
        'Понеділок': 'Розклад для Фнк-24 на Понеділок:\n\n1.\n2.Математика\n3.Фізична культура\n4.Фізична культура',
        'Вівторок': 'Розклад для Фнк-24 на Вівторок:\n\n1.Фізика\n2.Зарубіжна література\n3.Математика\n4.Українська література',
        'Середа': 'Розклад для Фнк-24 на Середу:\n\n1.Економікс(Політекономія)\n2.Хімія\n3.Технології(основи підприємництва)\n4. Економікс(політекономія)',
        'Четверг': 'Розклад для Фнк-24 на Четверг:\n\n1.\n2.Біологія\n3.Інформатика\n4.Іноземна мова',
        'П\'ятниця': 'Розклад для Фнк-24 на П\'ятницю:\n\n1.Навчальна практика\n2.Захист України\n3.Українська мова'},

    'Кнк-23': {
        'Понеділок': 'Розклад для Кнк-23 на Понеділок:\n...',
        'Вівторок': 'Розклад для Кнк-23 на Вівторок:\n...',
        'Середа': 'Розклад для Кнк-23 на Середу:\n...',
        'Четверг': 'Розклад для Кнк-23 на Четверг:\n...',
        'П\'ятниця': 'Розклад для Кнк-23 на П\'ятницю:\n...'
    },
    'Фнк-23': {
        'Понеділок': 'Розклад для Фнк-23 на Понеділок:\n...',
        'Вівторок': 'Розклад для Фнк-23 на Вівторок:\n...',
        'Середа': 'Розклад для Фнк-23 на Середу:\n...',
        'Четверг': 'Розклад для Фнк-23 на Четверг:\n...',
        'П\'ятниця': 'Розклад для Фнк-23 на П\'ятницю:\n...'
    }
};

const information = {
    'Кнк24': {
        'Теорія Дизайну': 'Полезная інформация по Теорії Дизайну для Кнк-24...',
        'Основи Підприемства': 'Полезная інформация по Основам Підприемства для Кнк-24\n\nClassRoom - https://classroom.google.com/c/NTkzMDk3NDMzODAz?cjc=vhcnkjw',
        'Фізична культура': 'Полезная інформация по Фізичній культурі для Кнк-24...',
        'Зарубижна Література': 'Полезная інформация по Зарубіжній Літературі для Кнк-24...',
        'Фізика': 'Полезная інформация по Фізиці для Кнк-24...',
        'Українська мова': 'Полезная інформация по Українській мові для Кнк-24\n\n Підручник - https://pidruchnyk.com.ua/1233-ukrainska-mova-10-klas-shevchuk.html',
        'Навчальна практика': 'Полезная інформация по Навчальній практиці для Кнк-24...',
        'Математика': 'Полезная інформация по Математиці для Кнк-24\n\nПідручник - https://pidruchnyk.com.ua/1154-matematyka-10-klas-ister.html',
        'Хімія': 'Полезная інформация по Хімії для Кнк-24',
        'Інформатика': 'Полезная інформация по Інформатиці для Кнк-24...',
        'Біологія': 'Полезная інформация по Біології для Кнк-24\n\nClassRoom - https://classroom.google.com/c/NzExNTk4NDU5ODEx?cjc=wxs6g2a',
        'Українська література': 'Полезная інформация по Українській літературі для Кнк-24...',
        'Іноземна мова': 'Полезная інформация по Іноземній мові для Кнк-24...',
        'Захист України': 'Полезная інформация по Захисту України для Кнк-24...',
        'Кураторська година (Можлива)': 'Полезная інформация по Кураторській годині для Кнк-24...',
        'Програмування JS': 'Полезная інформация по Програмування JS для Кнк-24\n\nClassroom - https://classroom.google.com/c/NzExODExNjcyODI5?cjc=2i6iuwz'
    },
    'Фнк24': {
        'Теорія Дизайну': 'Полезная информация по Теорії Дизайну для Кнк-24...',
        'Основи Підприемства': 'Полезная информация по Основам Підприемства для Кнк-24...',
        'Фізична культура': 'Полезная информация по Фізичній культурі для Кнк-24...',
        'Зарубижна Література': 'Полезная информация по Зарубіжній Літературі для Кнк-24...',
        'Фізика': 'Полезная информация по Фізиці для Кнк-24',
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
    'Кнк23': {
        'Теорія Дизайну': 'Полезная информация по Теорії Дизайну для Кнк-24...',
        'Основи Підприемства': 'Полезная информация по Основам Підприемства для Кнк-24...',
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
    'Кфк23': {
        'Теорія Дизайну': 'Полезная информация по Теорії Дизайну для Кнк-24...',
        'Основи Підприемства': 'Полезная информация по Основам Підприемства для Кнк-24...',
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
        bot.sendMessage(chatId, '‼️Бот сьогодні вночі переходе на хостінг може бути так що бота відключили для переносу після переходу на хостінг його не будуть вимикати на тех.роботи‼️\n\nВас приветствует бот KolageETI', mainMenu);
    }

    else if (text === '🔔•Розклад дзвінків•🔔') {
        bot.sendMessage(chatId, '‼️Бот сьогодні вночі переходе на хостінг може бути так що бота відключили для переносу після переходу на хостінг його не будуть вимикати на тех.роботи‼️\n\nРозклад дзвінків:\n1. Пара 8:20 - 9:40\n2. Пара 9:50 - 11:10\n3. Пара 11:40 - 13:00\n4. Пара 13:10 - 14:30\n5. Пара 14:40 - 16:00', mainMenu);
    }

    else if (text === '📄•Розклад пар•📄') {
        bot.sendMessage(chatId, 'Оберіть клас:', classMenu);
    }

    else if (text === '💻•Feedback•💻') {
        bot.sendMessage(chatId,'Поки немає адміну бота. Ви можете написати:\n гл.Програмісту - @SnrKesha\n тех.Програміст - @IxstsxuI')
    }

    else if (['Кнк-24', 'Фнк-24', 'Кнк-23', 'Фнк-23'].includes(text)) {
        selectedClass = text;
        bot.sendMessage(chatId, `Ви обрали клас ${selectedClass}. Оберіть день тижня:`, daysMenu);
    }
    else if (['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П\'ятниця'].includes(text) && selectedClass) {
        const schedule = schedules[selectedClass][text];
        bot.sendMessage(chatId, schedule, daysMenu);
    }

    else if (text === '📚•Бібліотека знань•📚'){
        bot.sendMessage(chatId, 'Оберіть свій курс', libriaryClass)
        console.log(selectedCourse)
    }

    else if (['Кнк24', 'Фнк24', 'Кнк23', 'Фнк23'].includes(text)) {
        selectedCourse = text;
        bot.sendMessage(chatId, `Ви обрали ${selectedCourse}. Оберіть предмет:`, subjectMenu);
    }
    else if ([
        'Теорія Дизайну', 'Основи Підприемства', 'Фізична культура', 'Зарубижна Література',
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
            bot.sendMessage(chatId, 'Оберіть клас:', classMenu);
        } else {
            bot.sendMessage(chatId, '‼️Бот сьогодні вночі переходе на хостінг може бути так що бота відключили для переносу після переходу на хостінг його не будуть вимикати на тех.роботи‼️\n\nВы вернулись назад', mainMenu);
        }
    }
});

bot.on('polling_error', (error) => {
    console.log(`Polling error: ${error.code}`, error);
});
