// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяц',
  address: 'Ukraine, Zhytomyr',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume & Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development.
       Whenever I start to work on a new project I learn the domain and try to understand the
       idea of the project. Good team player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport
       statistics (tournament position, goals etc), analyzing by simple mathematics models
       and preparing probability for such events like: money line - first win / draw / second
       win, totals etc.`,
      },
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume & Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 7,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 5,
          isTop: false,
        },
        {
          name: 'React JS',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'NameSkills-1',
          isMain: true,
        },
        {
          name: 'NameSkills-2',
          isMain: false,
        },
        {
          name: 'NameSkills-3',
          isMain: true,
        },
      ],
    },

    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume & Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'Винницкий национальный медицинский университет имени Николая Пирогова',
          isEnd: true,
        },
        {
          name: 'Государственный университет «Житомирская Политехника»',
          isEnd: true,
        },
        {
          name: 'Запорожская государственная инженерная академия',
          isEnd: false,
        },
        {
          name: 'Ивано-Франковский государственный медицинский университет',
          isEnd: true,
        },
        {
          name: 'Академия адвокатуры Украины',
          isEnd: false,
        },
        {
          name: 'Киевская школа экономики (KSE)',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Name-1',
          id: '131424234',
        },
        {
          name: 'Name-2',
          id: '5445615165',
        },
        {
          name: 'Name-3',
          id: '81773457648',
        },
      ],
    },
    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume & Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          project: [
            {
              name: 'Resume',
              url: "https://www.upwork.com/hire/react-js-developers/job-description/",
              about:
                'js developers design and implement user interface components for JavaScript-based web and mobile applications using the React open-source library ecosystem.',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
                ],
              awards: [
                {
                  name: 'ReactJS developers are front-end developers who build modern-day UI components to improvise application performance. They leverage their knowledge about JavaScript, HTML, CSS and work closely with testers, designers, web designers, and project managers to create a robust and effective application.',
                },
                {
                  name: 'Tips for Writing a React.js Developer Job Description',
                },
                ],
                stackAmount: "534654",
                awardAmount: "76917617",
            },
          ],
        },
      ],
    },
    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================


// Підключаємо роутер до бек-енду
module.exports = router
