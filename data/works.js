import Work from "/models/Work.js";
const works = [
  new Work(
    "Cosiii",
    ["Website - UI/UX", "Web Development"],
    [
      {
        institution: "cosiii.com",
        url: "https://cosiii.com/?utm_source=referral&utm_medium=web&utm_campaign=cv",
        recognitions: [{ name: "Online", date: "2020" }],
      },
    ],
    null,
    "",
    [
      { name: "cosiii/01.jpg", alt: "cosiii" },
      { name: "cosiii/02.jpg", alt: "cosiii" },
      { name: "cosiii/03.jpg", alt: "cosiii" },
    ]
  ),
  new Work(
    "Genius Tech",
    ["brand identity", "Website - UI/UX", "Web Development"],
    [
      {
        institution: "geniustech.info",
        url: "https://geniustech.info/?utm_source=referral&utm_medium=web&utm_campaign=cv",
        recognitions: [{ name: "Online", date: "2020" }],
      },
    ],
    null,
    "",
    [
      { name: "genius-tech/01.jpg", alt: "Genius Tech" },
      { name: "genius-tech/02.jpg", alt: "Genius Tech" },
      { name: "genius-tech/03.jpg", alt: "Genius Tech" },
    ]
  ),
  new Work(
    "Stream Italy",
    ["brand identity", "Website - UI/UX", "Web Development"],
    [
        {
          institution: "stream-italy.com",
          url: "https://stream-italy.com/?utm_source=referral&utm_medium=web&utm_campaign=cv",
          recognitions: [{ name: "Online", date: "2019" }],
        },
      ],null,"",
    
    // [
    //   {
    //     institution: "Visit it Live",
    //     url: "https://www.awwwards.com/sites/casaross",
    //     recognitions: [
    //       { name: "Honorable Mention", date: "April 02, 2020" },
    //       { name: "Mobile of the week", date: "April 02, 2020" },
    //     ],
    //   },
    //   {
    //     institution: "Instagram Shop",
    //     url: "https://instagram.com/stream_storemilano",
    //     recognitions: [
    //       { name: "Special Kudos Award", date: "April 03, 2020" },
    //       { name: "Innovation Design Award", date: "April 03, 2020" },
    //       { name: "UI Design Award", date: "April 03, 2020" },
    //       { name: "UX Design Award", date: "April 03, 2020" },
    //     ],
    //   },
    //   {
    //     institution: "World Brand Design Society",
    //     url:
    //       "https://worldbranddesign.com/corporate-brand-identity-for-casaross-an-italian-shop-based-in-sorrento/",
    //     recognitions: [{ name: "Published", date: "June 11, 2019" }],
    //   },
    // ],
    // {
    //   text: "stream-italy.com",
    //   href: "https://stream-italy.com",
    // },
    [
      { name: "stream/01.jpg", alt: "Stream" },
      { name: "stream/02.jpg", alt: "Stream" },
      { name: "stream/03.jpg", alt: "Stream" },
    ]
  ),


  new Work("Petlab", ["brand identity"], 
  [
    {
      institution: "petlab.io",
      url: "https://petlab.io/?utm_source=referral&utm_medium=web&utm_campaign=cv",
      recognitions: [{ name: "In Progress", date: "2021" }],
    },
  ], null, "", [
    // { name: "beaumont/1.jpg", alt: "Beaumont", noMobile: !0 },
    // { name: "beaumont/2.jpg", alt: "Beaumont", noMobile: !0 },
    { name: "petlab/01.jpg", alt: "Petlab" },
    { name: "petlab/02.jpg", alt: "Petlab" },
    // { name: "beaumont/6.jpg", alt: "Beaumont", noMobile: !0 },
  ]),
  new Work(
    "Sia Karati",
    ["Website - UI/UX", "Web Development"],
    [
      {
        institution: "siakarati.com",
        url: "https://siakarati.com/?utm_source=referral&utm_medium=web&utm_campaign=cv",
        recognitions: [{ name: "Online", date: "2019" }],
      },
    ],
    null,
    "",
    [
      { name: "sk/01.jpg", alt: "Sia Karati" },
      { name: "sk/02.jpg", alt: "Sia Karati" },
      { name: "sk/03.jpg", alt: "Sia Karati" },
    ]
  ),
//   new Work("Covid-19 Posters", ["GRAPHIC DESIGN"], null, null, "", [
//     { name: "covid/2.jpg", alt: "Covid-19 Posters" },
//     { name: "covid/4.jpg", alt: "Covid-19 Posters" },
//     { name: "covid/6.jpg", alt: "Covid-19 Posters" },
//     { name: "covid/8.jpg", alt: "Covid-19 Posters" },
//     { name: "covid/10.jpg", alt: "Covid-19 Posters" },
//     { name: "covid/12.jpg", alt: "Covid-19 Posters" },
//   ]),
//   new Work("Klimatica", ["brand identity"], null, null, "", [
//     { name: "klimatica/1.jpg", alt: "Klimatica" },
//     { name: "klimatica/2.jpg", alt: "Klimatica" },
//     { name: "klimatica/3.jpg", alt: "Klimatica" },
//     { name: "klimatica/4.jpg", alt: "Klimatica" },
//   ]),
];
export default works;
