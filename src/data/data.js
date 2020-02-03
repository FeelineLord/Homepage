const linkNamesEn = [
  {
    name: 'Main',
    href: 'header'
  },
  {
    name: 'About Myself',
    href: 'aboutMe'
  },
  {
    name: 'Skills',
    href: 'skills'
  },
  {
    name: 'Interests',
    href: 'interests'
  },
  {
    name: 'Portfolio',
    href: 'portfolio'
  },
  {
    name: 'Contacts',
    href: 'footer'
  }
];

const linkNamesRu = [
  {
    name: 'Главная',
    href: 'header'
  },
  {
    name: 'Обо мне',
    href: 'aboutMe'
  },
  {
    name: 'Навыки',
    href: 'skills'
  },
  {
    name: 'Интересы',
    href: 'interests'
  },
  {
    name: 'Портфолио',
    href: 'portfolio'
  },
  {
    name: 'Контакты',
    href: 'footer'
  }
];

const aboutMeHeadingEng = `Let's get acquainted`,
      aboutMeHeadingRu = `Давайте знакомиться`,
      aboutMeNameEng = `I'm Vadim`,
      aboutMeNameRu = `Меня зовут Вадим`;

const aboutMeTextEng1 = `I'm a front-end developer. I develop the custom part of web applications and their functionality. I work with
JavaScript frameworks and libraries, CSS preprocessors and graphics programs. In my free time, I develop a browser game in the genre
of CCG + RPG.`,
      aboutMeTextEng2 = `I am a code enthusiast and perfectionist. I believe that the application should carry out not only its tasks successfully
but also stand out from the modern world of the Internet creating positive emotions. I pay particular attention to quality, simplicity, and convenience
of the interface, logical semantics, and pleasant interaction. I prefer saturated minimalism.`,
      aboutMeTextEng3 = `Also, I have a sense of humor, and you guys will notice soon. If you don't believe me, ask my manager.
I am keeping him at the door not to scare people, but you can knock. Have a nice tour.)`,
      aboutMeTextRu1 = `Я front end разработчик. Разрабатываю пользовательскую часть веб-приложений и их функционал. Работаю с 
JavaScript-фреймворками и библиотеками, препроцессорами css и графическими программами. В свободное время разрабываю
браузерную игру в жанре CCG + RPG.`,
      aboutMeTextRu2 = `Я - энтузиаст кода и перфекционист. Считаю, что приложение должно не только выполнять
поставленные задачи, но и выделяться на фоне современного интернета, оставлять положительные эмоции.
Особое внимание при работе уделяю качеству, простоте и удобству интерфейса, логической семантике и приятному взаимодействию.
Предпочитаю насыщенный минимализм.`,
      aboutMeTextRu3 = `Так же, у меня есть чувство юмора, в чём Вы очень скоро убедитесь. Если не верите - спросите у моего менеджера.
Я держу его за дверью чтоб не пугал людей, но Вы можете постучаться. Приятной экскурсии :)`;

const skillsFrontEndTextEn = `I don't want to split the layout and development of the "front" logic into separate categories, because these are the most
necessary components of the future project, which go arm-in-arm and are written in almost one file :)`,
      skillsFrontEndTextRu = `Я не хочу делить для себя вёрстку и написание "внешней" логики на отдельные
категории, ведь это самые необходимые составляющие будущего проекта, которые
идут под руку и пишутся чуть ли не в одном файле :)`,
      skillsDesignTextEn = `...Or how you can rest while you're working. I'm a long way from being a professional designer, but I can and moreover I like working
on the design of the project or its elements.`,
      skillsDesignTextRu = `...Или о том, как можно отдохнуть, работая. Мне очень далеко до профессионального
дизайнера, но я люблю и могу работать над внешним видом проекта или его элементов`;

const interestsHeadingDevelopmentEn = `Development`,
      interestsHeadingDevelopmentRu = `Разработка`,
      interestsHeadingFantasyEn = `Fantasy`,
      interestsHeadingFantasyRu = `Фэнтези`,
      interestsHeadingDesignEn = 'Design',
      interestsHeadingDesignRu = `Дизайн`;

const interestsDevelopmentTextEn1 = `Front-end brings me lots of emotions and satisfaction. I’m both interested in developing the
software with logic and in layout. But most of all I like developing a project or its separate
element from scratch. I also like to wrestle with the way everything looks and to get the final
decision to the best condition by fixing all defects.`,
      interestsDevelopmentTextEn2 = `Among my other priorities is the expansion of my technology stack and deeper research of what I
use every day. It is really nice to find new possibilities and immediately use them in a real-case scenario :)`,
      interestsDevelopmentTextRu1 = `Front-end приносит мне множество эмоций и удовольствия. Для меня одинаково интересно
продумывать функционал с логикой и верстать. Но больше всего я люблю разрабатывать проект, или отдельный его элемент
с нуля. Так же, очень люблю поломать голову над внешним видом и доводить готовое решение до наилучшего состояния, исправляя
все деффекты.`,
      interestsDevelopmentTextRu2 = `Так же, в списке моих приоритетов - расширение своего стека технологий и более глубокое изучение того, чем пользуюсь каждый
день. Очень приятно находить новые возможности и сразу использовать их на практике :)`;

const interestsFantasyTextEn1 = `Games and hand-crafted fantasy universes are things that found a place in my heart since childhood and. I hope,
for my whole life. My deepest gratitude to all authors of such books and gaming studios that allow living many
new lives in other and very interesting worlds.`,
      interestsFantasyTextEn2 = `Recently I’ve got enthusiastic about the idea of creating a browser game with a catching and thrilling plot in a
fantasy style, so I spend almost all my free time on this.`,
      interestsFantasyTextRu1 = `Игры и рукотворные фентези-вселенные - это то, что с самого юного возраста, и, надеюсь, до глубокой старости поселилось в
моём сердце. Низкий поклон авторам книг и игровым студиям за возможность прожить ещё несколько жизней в другом, не менее
интересном мире.`,
      interestsFantasyTextRu2 = `В последнее время, я сам загорелся идеей создать браузерную игру с захватывающим сюжетом и фентези look, чему отдаю практически
всё своё свободное время.`;

const interestsDesignTextEn1 = `This my hobby allows me to get some rest from coding and helps think more “precisely”, as, otherwise, I could have drawn
only a matchbox in 3D :)`,
      interestsDesignTextEn2 = `I study on drawing programs and graphic editors, and also learn how to draw by hand on a tablet. I must say that in the
realities of the 2020 year these are very important skills for a front-end developer, but I don’t see drawing and design
as my main profession.`,
      interestsDesignTextRu1 = `Моё хобби, которое помогает отдохнуть от кода и мыслить менее "точно", ведь в противном случае я мог бы нарисовать лишь
спичечный коробок в 3D :)`,
      interestsDesignTextRu2 = `Овладеваю графическими редакторами, а так же учусь рисовать от руки на планшете. Должен признать, в реалиях 2020 это очень
важный навык для front-end разработчика, однако я не вижу рисование и дизайн в качестве своей основной профессии.`;

const portfolioHeadingEn = `Portfolio`,
      portfolioAdviceEn = `Swipe to view`,
      portfolioHeadingRu = 'Портфолио',
      portfolioAdviceRu = 'Листайте, чтоб просмотреть';

const portfolioProjectDescriptionEn1 = `Mini todo-app (react)`,
      portfolioProjectDescriptionEn2 = `Landing-page (pure HTML + CSS + JavaScript)`,
      portfolioProjectDescriptionEn3 = `Landing-page (pure HTML + CSS + JavaScript)`,
      portfolioProjectDescriptionRu1 = `Небольшое функциональное приложение "заметки" на react`,
      portfolioProjectDescriptionRu2 = `Лендинг на чистом HTML + CSS + JavaScript`,
      portfolioProjectDescriptionRu3 = `Лендинг на чистом HTML + CSS + JavaScript`;

export const dataEn = {
  linkNamesCurrent: linkNamesEn,
  aboutMeHeadingCurrent: aboutMeHeadingEng,
  aboutMeNameCurrent: aboutMeNameEng,
  aboutMeTextCurrent1: aboutMeTextEng1,
  aboutMeTextCurrent2: aboutMeTextEng2,
  aboutMeTextCurrent3: aboutMeTextEng3,
  skillsFrontEndTextCurrent: skillsFrontEndTextEn,
  skillsDesignTextCurrent: skillsDesignTextEn,
  skillsProgress: {
    html: 80,
    css: 75,
    javaScript: 55,
    react: 65,
    ajax: 70,
    webpack: 40,
    ui: 70,
    figma: 60,
    photoshop: 80,
    illustrator: 30,
    handleDraw: 50,
    cssTricks: 70,
  },
  interestesHeadingDevelopmentCurrent: interestsHeadingDevelopmentEn,
  interestesHeadingFantasyCurrent: interestsHeadingFantasyEn,
  interestesHeadingDesignCurrent: interestsHeadingDesignEn,
  interestsDevelopmentTextCurrent1: interestsDevelopmentTextEn1,
  interestsDevelopmentTextCurrent2: interestsDevelopmentTextEn2,
  interestsFantasyTextCurrent1: interestsFantasyTextEn1,
  interestsFantasyTextCurrent2: interestsFantasyTextEn2,
  interestsDesignTextCurrent1: interestsDesignTextEn1,
  interestsDesignTextCurrent2: interestsDesignTextEn2,
  portfolioHeadingCurrent: portfolioHeadingEn,
  portfolioAdviceCurrent: portfolioAdviceEn,
  portfolioProjectDescriptionCurrent1: portfolioProjectDescriptionEn1,
  portfolioProjectDescriptionCurrent2: portfolioProjectDescriptionEn2,
  portfolioProjectDescriptionCurrent3: portfolioProjectDescriptionEn3,
};

export const dataRu = {
  linkNamesCurrent: linkNamesRu,
  aboutMeHeadingCurrent: aboutMeHeadingRu,
  aboutMeNameCurrent: aboutMeNameRu,
  aboutMeTextCurrent1: aboutMeTextRu1,
  aboutMeTextCurrent2: aboutMeTextRu2,
  aboutMeTextCurrent3: aboutMeTextRu3,
  skillsFrontEndTextCurrent: skillsFrontEndTextRu,
  skillsDesignTextCurrent: skillsDesignTextRu,
  skillsProgress: {
    html: 80,
    css: 75,
    javaScript: 55,
    react: 65,
    ajax: 70,
    webpack: 40,
    ui: 70,
    figma: 60,
    photoshop: 80,
    illustrator: 30,
    handleDraw: 50,
    cssTricks: 70,
  },
  interestesHeadingDevelopmentCurrent: interestsHeadingDevelopmentRu,
  interestesHeadingFantasyCurrent: interestsHeadingFantasyRu,
  interestesHeadingDesignCurrent: interestsHeadingDesignRu,
  interestsDevelopmentTextCurrent1: interestsDevelopmentTextRu1,
  interestsDevelopmentTextCurrent2: interestsDevelopmentTextRu2,
  interestsFantasyTextCurrent1: interestsFantasyTextRu1,
  interestsFantasyTextCurrent2: interestsFantasyTextRu2,
  interestsDesignTextCurrent1: interestsDesignTextRu1,
  interestsDesignTextCurrent2: interestsDesignTextRu2,
  portfolioHeadingCurrent: portfolioHeadingRu,
  portfolioAdviceCurrent: portfolioAdviceRu,
  portfolioProjectDescriptionCurrent1: portfolioProjectDescriptionRu1,
  portfolioProjectDescriptionCurrent2: portfolioProjectDescriptionRu2,
  portfolioProjectDescriptionCurrent3: portfolioProjectDescriptionRu3,
};