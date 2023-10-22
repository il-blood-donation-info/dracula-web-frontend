const formData = {
  recentDonation: {
    questionText: "האם תרמת דם בשלושת החודשים האחרונים?",
    isFirst: true,
    next: "age",
    answers: [
      {
        id: "recentDonation.yes",
        answerText: "כן",
        isTerminal: true,
        comment:
          'המינימום בין תרומות דם על פי קריטריוני מד"א הינו שלושה חודשים לפחות. אין באפשרותך לתרום דם כעת.',
      },
      {
        id: "recentDonation.no",
        answerText: "לא",
      },
    ],
  },
  age: {
    questionText: "מהו גילך?",
    prev: 'recentDonation',
    next: "gender",
    answers: [
      {
        id: "age.under17",
        answerText: "מתחת ל-17",
        isTerminal: true,
        comment: "הגיל המינימלי לתרומת דם הינו 17.",
      },
      {
        id: "age.17to18",
        answerText: "17 עד 18",
        comment: "link to apotropus doc: https://blabla.com",
      },
      {
        id: "age.18to59",
        answerText: "18 עד 59",
      },
      {
        id: "age.60to64",
        answerText: "60 עד 64",
        next: "age.60to64.firstTime",
      },
      {
        id: "age.65up",
        answerText: "65 ומעלה",
        comment: "link to apotropus doc: https://blablabla.com",
      },
    ],
  },
  'age.60to64.firstTime': {
    questionText: "האם זוהי תרומת הדם הראשונה שלך?",
    prev: 'age',
    next: "gender",
    answers: [
      {
        id: "age.60to64.firstTime.yes",
        answerText: "כן",
        comment: "link to apotropus doc: https://blablabla.com",
      },
      {
        id: "age.60to64.firstTime.no",
        answerText: "לא",
      },
    ],
  },
  gender: {
    questionText: "מהו מינך?",
    prev: 'age',
    next: "conditions",
    answers: [
      {
        id: "gender.male",
        answerText: "זכר",
      },
      {
        id: "gender.female",
        answerText: "נקבה",
        next: "pregnant",
      },
    ],
  },
  pregnant: {
    questionText: "האם הינך בהריון כעת?",
    prev: 'gender',
    next: "birth",
    answers: [
      {
        id: "pregnant.yes",
        answerText: "כן",
        isTerminal: true,
        comment: "אין באפשרותך לתרום כעת. מתן תרומת דם עשוי לסכן את בריאותך.",
      },
      {
        id: "pregnant.no",
        answerText: "לא",
      },
    ],
  },
  birth: {
    questionText: "האם ילדת בחצי שנה האחרונה?",
    prev: 'pregnant',
    next: "conditions",
    answers: [
      {
        id: "birth.yes",
        answerText: "כן",
        isTerminal: true,
        comment: "אין באפשרותך לתרום כעת. מתן תרומת דם עשוי לסכן את בריאותך.",
      },
      {
        id: "birth.no",
        answerText: "לא",
      },
    ],
  },
  conditions: {
    questionText: "האם הינך סובל מאחד מהמצבים הבאים?",
    description:
      " בעיה לבבית או הפרעות בקצב הלב הדורשות טיפול תרופתי, המופיליה או מחלת הנפילה (אפילפסיה) המטופלת בטיפול תרופתי או שחוו התקף ב-5 השנים האחרונות",
    prev: 'birth',
    next: "antibiotics",
    answers: [
      {
        id: "conditions.yes",
        answerText: "כן",
        isTerminal: true,
        comment: "אין באפשרותך לתרום. מתן תרומת דם עשויה לסכן את בריאותך.",
      },
      {
        id: "conditions.no",
        answerText: "לא",
      },
    ],
  },
  antibiotics: {
    questionText: "האם טופלת באנטיביוטיקה בחודש האחרון?",
    prev: 'conditions',
    next: "teeth",
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
        comment:
          "אין באפשרותך לתרום כעת, עליך לסיים את הטיפול לפני מתן תרומת דם.",
      },
      {
        id: "antibiotics.no",
        answerText: "לא",
      },
    ],
  },
  teeth: {
    questionText: "האם עברת טיופל שיניים לאחרונה?",
    description:
      "האם עברת אחד או יותר מהטיפולים הבאים: שיננית ב-24 שעות האחרונות, טיפול שורש/עקירת שן בשבוע האחרון, השתלת שיניים בחודש האחרון.",
    prev: 'antibiotics',
    next: "hepatitis",
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
  hepatitis: {
    questionText: " האם הינך חולה או חלית בעבר בדלקת כבד (צהבת)?",
    prev: 'teeth',
    next: "vaccine",
    answers: [
      {
        id: "hepatitis.A",
        answerText: "כן, סוג A",
        next: "hepatitis.A.notRecent",
      },
      {
        id: "hepatitis.BC",
        answerText: "כן, סוג B או C",
        isTerminal: true,
      },
      {
        id: "hepatitis.NA",
        answerText: "כן, מסיבה לא ידוע",
        next: "hepatitis.NA.notRecent",
      },
      {
        id: "hepatitis.no",
        answerText: "לא",
      },
    ],
  },
  "hepatitis.A.notRecent": {
    questionText: "האם החלמת וחלפה שנה ממועד ההחלמה?",
    prev: 'hepatitis',
    next: "vaccine",
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
  'hepatitis.NA.notRecent': {
    questionText: "האם החלמת וחלפו שנתיים ממועד ההחלמה?",
    prev: 'hepatitis',
    next: "vaccine",
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
  vaccine: {
    questionText: "האם קיבלת חיסון לאחרונה?",
    description:
      "האם קיבלת חיסון לאחת מהמחלות הבאות בחודש האחרון: אדמת, חצבת, חזרת, אבעבעות רוח, קדחת צהובה?",
    prev: 'hepatitis',
    next: "asthma",
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
  asthma: {
    questionText: "האם הינך חולה באסתמה?",
    prev: 'vaccine',
    next: "diabetes",
    answers: [
      {
        id: "asthma.yes",
        answerText: "כן",
        next: "asthma.yes.well",
      },
      {
        id: "asthma.no",
        answerText: "לא",
      },
    ],
  },
  "asthma.yes.well": {
    questionText:
      "האם הינך מרגיש טוב, ללא התקף בשבוע האחרון ולא נוטל סטרואידים בכדורים?",
    prev: 'asthma',
    next: "diabetes",
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
  diabetes: {
    questionText: "האם הינך חולה בסכרת?",
    prev: 'asthma',
    next: "cancer",
    answers: [
      {
        id: "diabetes.yes",
        answerText: "כן",
        next: "diabetes.yes.balanced",
      },
      {
        id: "diabetes.no",
        answerText: "לא",
      },
    ],
  },
  "diabetes.yes.balanced": {
    questionText: "האם הסכרת מאוזנת על ידי דיאטה או תרופות?",
    prev: 'diabetes',
    next: "cancer",
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
  "cancer": {
    questionText: "האם הינך חולה או שחלית בעבר במחלה ממאירה?",
    prev: 'diabetes',
    next: "anemia",
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
        next: "cancer.yesOther.beated",
      },
      {
        id: "cancer.no",
        answerText: "לא",
      },
    ],
  },
  "cancer.yesOther.beated": {
    questionText: "האם חלפו 5 שנים לאחר השלמת הטיפול והחלמה מלאה?",
    prev: 'cancer',
    next: "anemia",
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
  "anemia": {
    questionText: "האם יש לך אנמיה או נטיה לדמם?",
    prev: 'cancer',
    next: "transfusion",
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
  "transfusion": {
    questionText: "האם קיבלת עירוי דם או מרכיבי דם?",
    prev: 'anemia',
    next: "miscProcedures",
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
  "miscProcedures": {
    questionText:
      "האם ביצעת כתובת קעקוע, פירסינג, איפור קבוע או אנדוסקופיה עם ביופסיה?",
    prev: 'transfusion',
    next: "countriesLastYear",
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
  "countriesLastYear": {
    questionText: "האם ביקרת בשנה האחרונה באחת מהמדינות הבאות?",
    description: "...", //where is the file with list of countries?
    prev: 'miscProcedures',
    next: "countriesLongStay",
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
  "countriesLongStay": {
    description: "...", //where is the file with list of countries?
    questionText: "האם שהית תקופה של מעל 6 חודשים באחת מהמדינות הבאות?",
    prev: 'countriesLastYear',
    next: "countriesAIDS",
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
  "countriesAIDS": {
    questionText: "האם שהית או ביקרת באחת מהמדינות הבאות?",
    description: "...", //where is the file with list of countries?
    prev: 'countriesLongStay',
    next: "intercourse",
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
  "intercourse": {
    questionText:
      "האם קיימת יחסי מין בסיכון גבוה להידבקות במחלות אשר עלולות לעבור בעירוי (יחסים אנאליים ו/או בהשפעת סמים) עם שותף/ה חדש/ה או שותפים מרובים?",
    prev: 'countriesAIDS',
    isFinal: true,
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
};

export default formData