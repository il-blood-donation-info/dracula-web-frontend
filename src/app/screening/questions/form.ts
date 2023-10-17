const formData = [
  {
    id: "recentDonation",
    questionText: "האם תרמת דם בשלושת החודשים האחרונים?",
    answers: [
      {
        id: "recentDonation.yes",
        answerText: "כן",
        isTerminal: true,
        terminalMessage:
          'המינימום בין תרומות דם על פי קריטריוני מד"א הינו שלושה חודשים לפחות. אין באפשרותך לתרום דם כעת.',
      },
      {
        id: "recentDonation.no",
        answerText: "לא",
      },
    ],
  },
  {
    id: "age",
    questionText: "מהו גילך?",
    answers: [
      {
        id: "age.under17",
        answerText: "מתחת ל-17",
        isTerminal: true,
        terminalMessage: "הגיל המינימלי לתרומת דם הינו 17.",
      },
      {
        id: "age.17to18",
        answerText: "17 עד 18",
        commentsInTheEnd: "link to apotropus doc: https://blabla.com",
        warning:
          "שים לב, הנך מחויב בהצהרת הורים, קישור להצהרת הורים/אפוטרופוס יופיע בעמוד האחרון של הטופס.",
      },
      {
        id: "age.18to59",
        answerText: "18 עד 59",
      },
      {
        id: "age.60to64",
        answerText: "60 עד 64",
        extraQuestions: [
          {
            id: "age.60to64.firstTime",
            questionText: "האם זוהי תרומת הדם הראשונה שלך?",
            answers: [
              {
                id: "age.60to64.firstTime.yes",
                answerText: "כן",
                commentsInTheEnd:
                  "link to apotropus doc: https://blablabla.com", //there is no actual doc at the end, only a reminder to provide one
                warning:
                  "שים לב, ידרש אישור מהרופא המטפל לעמידה במדדים לקבלת תורמים.",
              },
              {
                id: "age.60to64.firstTime.no",
                answerText: "לא",
              },
            ],
          },
        ],
      },
      {
        id: "age.65up",
        answerText: "65 ומעלה",
        commentsInTheEnd: "link to apotropus doc: https://blablabla.com", //there is no actual doc at the end, only a reminder to provide one + whstsapp group link
        warning:
          "שים לב, ידרש אישור מהרופא המטפל לעמידה במדדים לקבלת תורמים, וכן קריטריונים נוספים באתר ההתרמה.", //the extra criteria - is the doner expected to check them up on the site? what are they? should be handled\shown in the app
      },
    ],
  },

  {
    id: "gender",
    questionText: "מהו מינך?",
    answers: [
      {
        id: "gender.male",
        answerText: "זכר",
      },
      {
        id: "gender.female",
        answerText: "נקבה",
        extraQuestions: [
          {
            id: "pregnant",
            questionText: "האם הינך בהריון כעת?",
            answers: [
              {
                id: "pregnant.yes",
                answerText: "כן",
                isTerminal: true,
                terminalMessage:
                  "אין באפשרותך לתרום כעת. מתן תרומת דם עשוי לסכן את בריאותך.",
              },
              {
                id: "pregnant.no",
                answerText: "לא",
              },
            ],
          },
          {
            id: "birth",
            questionText: "האם ילדת בחצי שנה האחרונה?",
            answers: [
              {
                id: "birth.yes",
                answerText: "כן",
                isTerminal: true,
                terminalMessage:
                  "אין באפשרותך לתרום כעת. מתן תרומת דם עשוי לסכן את בריאותך.",
              },
              {
                id: "birth.no",
                answerText: "לא",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "conditions",
    questionText: "האם הינך סובל מאחד מהמצבים הבאים?",
    description:
      " בעיה לבבית או הפרעות בקצב הלב הדורשות טיפול תרופתי, המופיליה או מחלת הנפילה (אפילפסיה) המטופלת בטיפול תרופתי או שחוו התקף ב-5 השנים האחרונות",
    answers: [
      {
        id: "conditions.yes",
        answerText: "כן",
        isTerminal: true,
        terminalMessage:
          "אין באפשרותך לתרום. מתן תרומת דם עשויה לסכן את בריאותך.",
      },
      {
        id: "conditions.no",
        answerText: "לא",
      },
    ],
  },
  {
    id: "antibiotics",
    questionText: "האם טופלת באנטיביוטיקה בחודש האחרון?",
    answers: [
      {
        id: "antibiotics.yesAndHealed",
        answerText: "כן, סיימתי את הטיפול והחלמתי מהמחלה",
      },
      {
        id: "antibiotics.yesAndNotHealed",
        answerText:
          "כן, טרם סיימתי את הטיפול ואני עדיין נוטל את האנטיביוטיקה / לא החלמתי",
        isTerminal: true,
        terminalMessage:
          "אין באפשרותך לתרום כעת, עליך לסיים את הטיפול לפני מתן תרומת דם.",
      },
      {
        id: "antibiotics.no",
        answerText: "לא",
      },
    ],
  },
  {
    id: "teeth",
    questionText: "האם עברת טיופל שיניים לאחרונה?",
    description:
      "האם עברת אחד או יותר מהטיפולים הבאים: שיננית ב-24 שעות האחרונות, טיפול שורש/עקירת שן בשבוע האחרון, השתלת שיניים בחודש האחרון.",
    answers: [
      {
        id: "teeth.yes",
        answerText: "כן",
        isTerminal: true,
      },
      {
        id: "teeth.no",
        answerText: "לא",
      },
    ],
  },
  {
    id: "hepatitis",
    questionText: " האם הינך חולה או חלית בעבר בדלקת כבד (צהבת)?",
    answers: [
      {
        id: "hepatitis.A",
        answerText: "כן, סוג A",
        extraQuestions: [
          {
            id: "hepatitis.A.notRecent",
            questionText: "האם החלמת וחלפה שנה ממועד ההחלמה?",
            answers: [
              {
                id: "hepatitis.A.notRecent.Yes",
                answerText: "כן",
              },
              {
                id: "hepatitis.A.notRecent.No",
                answerText: "לא",
                isTerminal: true,
              },
            ],
          },
        ],
      },
      {
        id: "hepatitis.BC",
        answerText: "כן, סוג B או C",
        isTerminal: true,
      },
      {
        id: "hepatitis.NA",
        answerText: "כן, מסיבה לא ידוע",
        extraQuestions: [
          {
            id: "hepatitis.NA.notRecent",
            questionText: "האם החלמת וחלפו שנתיים ממועד ההחלמה?",
            answers: [
              {
                id: "hepatitis.NA.notRecent.yes",
                answerText: "כן",
              },
              {
                id: "hepatitis.NA.notRecent.no",
                answerText: "לא",
                isTerminal: true,
              },
            ],
          },
        ],
      },
      {
        id: "hepatitis.no",
        answerText: "לא",
      },
    ],
  },
  {
    id: "vaccine",
    questionText: "האם קיבלת חיסון לאחרונה?",
    description:
      "האם קיבלת חיסון לאחת מהמחלות הבאות בחודש האחרון: אדמת, חצבת, חזרת, אבעבעות רוח, קדחת צהובה?",
    answers: [
      {
        id: "vaccine.yes",
        answerText: "כן",
        isTerminal: true,
      },
      {
        id: "vaccine.no",
        answerText: "לא",
      },
    ],
  },
  {
    id: "asthma",
    questionText: "האם הינך חולה באסתמה?",
    answers: [
      {
        id: "asthma.yes",
        answerText: "כן",
        extraQuestions: [
          {
            id: "asthma.yes.well",
            questionText:
              "האם הינך מרגיש טוב, ללא התקף בשבוע האחרון ולא נוטל סטרואידים בכדורים?",
            answers: [
              {
                id: "asthma.yes.well.yes",
                answerText: "כן",
              },
              {
                id: "asthma.yes.well.no",
                answerText: "לא",
                isTerminal: true,
              },
            ],
          },
        ],
      },
      {
        id: "asthma.no",
        answerText: "לא",
      },
    ],
  },
  {
    id: "diabetes",
    questionText: "האם הינך חולה בסכרת?",
    answers: [
      {
        id: "diabetes.yes",
        answerText: "כן",
        extraQuestions: [
          {
            id: "diabetes.yes.balanced",
            questionText: "האם הסכרת מאוזנת על ידי דיאטה או תרופות?",
            answers: [
              {
                id: "diabetes.yes.balanced.yes",
                answerText: "כן",
              },
              {
                id: "diabetes.yes.balanced.no",
                answerText: "לא / מטופל באינסולין",
                isTerminal: true,
              },
            ],
          },
        ],
      },
      {
        id: "diabetes.no",
        answerText: "לא",
      },
    ],
  },
  {
    id: "cancer",
    questionText: "האם הינך חולה או שחלית בעבר במחלה ממאירה?",
    answers: [
      {
        id: "cancer.yesVirus",
        answerText:
          "כן, מחלה או היסטוריה של מחלה ממאירה המטולוגית או המושרית על ידי וירוסים (לויקמיה, לימפומה, מחלת הודג'קין.",
        isTerminal: true,
      },
      {
        id: "cancer.yesOther",
        answerText: "כן, גידולים אחרים.",
        extraQuestions: [
          {
            id: "cancer.yesOther.beated",
            questionText: "האם חלפו 5 שנים לאחר השלמת הטיפול והחלמה מלאה?",
            answers: [
              {
                id: "cancer.yesOther.beated.yes",
                answerText: "כן",
              },
              {
                id: "cancer.yesOther.beated.no",
                answerText: "לא",
                isTerminal: true,
              },
            ],
          },
        ],
      },
      {
        id: "cancer.no",
        answerText: "לא",
      },
    ],
  },
  {
    id: "anemia",
    questionText: "האם יש לך אנמיה או נטיה לדמם?",
    answers: [
      {
        id: "anemia.yes",
        answerText: "כן",
        isTerminal: true,
      },
      {
        id: "anemia.no",
        answerText: "לא",
      },
    ],
  },
  {
    id: "transfusion",
    questionText: "האם קיבלת עירוי דם או מרכיבי דם?",
    answers: [
      {
        id: "transfusion.yesLately",
        answerText: "כן, ב-4 חודשים האחרונים",
        isTerminal: true,
      },
      {
        id: "transfusion.yesNotLately",
        answerText: "כן, לפני יותר מ-4 חודשים",
      },
      {
        id: "transfusion.no",
        answerText: "לא",
      },
    ],
  },
  {
    id: "miscProcedures",
    questionText:
      "האם ביצעת כתובת קעקוע, פירסינג, איפור קבוע או אנדוסקופיה עם ביופסיה?",
    answers: [
      {
        id: "miscProcedures.yesLately",
        answerText: "כן, ב-4 חודשים האחרונים",
        isTerminal: true,
      },
      {
        id: "miscProcedures.yesNotLately",
        answerText: "כן, לפני יותר מ-4 חודשים",
      },
      {
        id: "miscProcedures.no",
        answerText: "לא",
      },
    ],
  },
  {
    id: "countriesLastYear",
    questionText: "האם ביקרת בשנה האחרונה באחת מהמדינות הבאות?",
    description: "...", //where is the file with list of countries?
    answers: [
      {
        id: "countriesLastYear.yes",
        answerText: "כן",
        isTerminal: true,
      },

      {
        id: "countriesLastYear.no",
        answerText: "לא",
      },
    ],
  },
  {
    id: "countriesLongStay",
    description: "...", //where is the file with list of countries?
    questionText: "האם שהית תקופה של מעל 6 חודשים באחת מהמדינות הבאות?",
    answers: [
      {
        id: "countriesLongStay.yesLately",
        answerText: "כן, ב-3 השנים האחרונות",
        isTerminal: true,
      },
      {
        id: "countriesLongStay.yesNotLately",
        answerText: "כן, לפני יותר מ-3 שנים",
      },
      {
        id: "countriesLongStay.no",
        answerText: "לא",
      },
    ],
  },
  {
    id: "countriesAIDS",
    questionText: "האם שהית או ביקרת באחת מהמדינות הבאות?",
    description: "...", //where is the file with list of countries?
    answers: [
      {
        id: "countriesAIDS.yesLately",
        answerText: "כן, בשלושת החודשים האחרונים",
        isTerminal: true,
      },
      {
        id: "countriesAIDS.yesNotLately",
        answerText: "כן, לפני יותר משלושה חודשים",
      },
      {
        id: "countriesAIDS.no",
        answerText: "לא",
      },
    ],
  },
  {
    id: "intercourse",
    questionText:
      "האם קיימת יחסי מין בסיכון גבוה להידבקות במחלות אשר עלולות לעבור בעירוי (יחסים אנאליים ו/או בהשפעת סמים) עם שותף/ה חדש/ה או שותפים מרובים?",
    answers: [
      {
        id: "intercourse.yesLately",
        answerText: "כן, בשלושת החודשים האחרונים",
        isTerminal: true,
      },
      {
        id: "intercourse.yesNotLately",
        answerText: "כן, לפני יותר משלושה חודשים",
      },
      {
        id: "intercourse.no",
        answerText: "לא",
      },
    ],
  },
];

// export default formData

const formDataTest = formData.slice(0, 5)

export default formDataTest