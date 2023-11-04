const formData = (t: any) => {
  return {
    recentDonation: {
      questionText: t('wizard.recentDonation.q'),
      isFirst: true,
      next: "age",
      answers: [
        {
          id: "recentDonation.yes",
          answerText: t('wizard.recentDonation.yes'),
          isTerminal: true,
          comment:
            t('wizard.recentDonation.comment'),
          confirmationText:
            t('wizard.recentDonation.comment'),
        },
        {
          id: "recentDonation.no",
          answerText: t('wizard.recentDonation.no'),
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
          comment: "לא ניתן לתרום דם מתחת לגיל 17.",
          confirmationText:
            'לא ניתן לתרום דם מתחת לגיל 17.',
        },
        {
          id: "age.17to18",
          answerText: "17 עד 18",
          comment: "באפשרותך לתרום דם, אך תידרש חתימת הורים/אפוטרופוס. ניתן להוריד את הטופס המתאים בקישור: https://www.mdais.org/media/3384/mda-044-7905.pdf",
        },
        {
          id: "age.18to59",
          answerText: "18 עד 59",
        },
        {
          id: "age.60up",
          answerText: "60 ומעלה",
          comment: "מגיל 60 אם זו התרומה הראשונה, נדרש אישור רופא מטפל. מגיל 65 נדרש אישור רופא לפני כל תרומה.",
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
          comment: 'לא ניתן לתרום דם במהלך הריון.',
          confirmationText:
            'לא ניתן לתרום דם במהלך הריון.'
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
          comment: "לא ניתן לתרום דם לאחר לידה.",
          confirmationText: "לא ניתן לתרום דם לאחר לידה.",
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
        "- בעיה לבבית/הפרעות בקצב הלב הדורשות טיפול תרופתי<br/>- המופיליה/מחלת הנפילה (אפילפסיה) המטופלת בטיפול תרופתי<br/>- חווית התקף אפילפסיה ב-5 השנים האחרונות",
      prev: 'birth',
      next: "antibiotics",
      answers: [
        {
          id: "conditions.yes",
          answerText: "כן",
          isTerminal: true,
          comment: "אין באפשרותך לתרום. מתן תרומת דם עשויה לסכן את בריאותך.",
          confirmationText: "אין באפשרותך לתרום. מתן תרומת דם עשויה לסכן את בריאותך.",
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
          confirmationText:
            "אין באפשרותך לתרום כעת, עליך לסיים את הטיפול לפני מתן תרומת דם.",
        },
        {
          id: "antibiotics.no",
          answerText: "לא",
        },
      ],
    },
    teeth: {
      questionText: "האם עברת טיפול שיניים לאחרונה?",
      description:
        "- שיננית ב-24 שעות האחרונות<br/>- טיפול שורש/עקירת שן בשבוע האחרון<br/>- השתלת שיניים בחודש האחרון?",
      prev: 'antibiotics',
      next: "hepatitis",
      answers: [
        {
          id: "teeth.yes",
          answerText: "כן",
          isTerminal: true,
          comment: "לא ניתן לתרום דם לאחר טיפול שיניים",
          confirmationText: "לא ניתן לתרום דם לאחר טיפול שיניים",
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
          confirmationText: "אין באפשרותך לתרום דם כעת.",
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
          confirmationText: "אין באפשרותך לתרום דם כעת.",
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
          confirmationText: "אין באפשרותך לתרום דם כעת.",
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
          confirmationText: "אין באפשרותך לתרום דם כעת.",
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
      questionText: "האם הסכרת מאוזנת? (על ידי דיאטה או תרופות)",
      prev: 'diabetes',
      next: "cancer",
      answers: [
        {
          id: "diabetes.yes.balanced.yes",
          answerText: "כן",
        },
        {
          id: "diabetes.yes.balanced.no",
          answerText: "לא מאוזנת / מטופלת באינסולין",
          isTerminal: true,
          confirmationText: "אין באפשרותך לתרום דם כעת.",
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
            "כן, מחלה או היסטוריה של מחלה ממאירה המטולוגית או המושרית על ידי וירוסים (לויקמיה, לימפומה, מחלת הודג'קין).",
          isTerminal: true,
          confirmationText: "אין באפשרותך לתרום דם כעת.",
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
      questionText: "האם חלפו 5 שנים מהשלמת הטיפול והחלמה מלאה?",
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
          confirmationText: "אין באפשרותך לתרום דם כעת.",
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
          confirmationText: "אין באפשרותך לתרום דם כעת.",
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
          confirmationText: "אין באפשרותך לתרום דם כעת.",
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
          confirmationText: "אין באפשרותך לתרום דם כעת.",
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
      description: ["אוגנדה (Uganda)", "איי שלמה (Solomon Islands)", "אינדונזיה (Indonesia)", "אנגולה (Angola)", "אסוואטיני(סווזילנד) (Swaziland)", "אפגניסטן (Afganistan)", "אקוודור (Ecuador)", "אריתריאה (Eritrea)", "אתיופיה (Ethiopia)", "בוטסואנה (Botswana)", "בוליביה (Bolivia)", "בורונדי (Burundi)", "בורמה (מיאנמר) (Burma)", "בורקינה פאסו (Burkina Faso)", "בליז (Belize)", "בנגלדש (Bangladesh)", "בנין (Benin)", "ברזיל (Brazil)", "גאנה (Ghana)", "גבון (Gabon)", "גואטמלה (Guatemala)", "גיאנה (Guyana)", "גיאנה הצרפתית (French Guiana)", "ג'יבוטי (Djibouti)", "גינאה (Guinea)", "גינאה ביסאו (Guinea-Bissau)", "גינאה המשוונית (Equatorial Guinea)", "גמביה (Gambia)", "דרום אפריקה (South Africa)", "דרום סודאן (South Sudan)", "האיטי (Haiti)", "הודו (India)", "הונדורס (Honduras)", "הרפובליקה הדומיניקנית (Dominican Republic)", "הרפובליקה הדמוקרטית  של קונגו (קונגו-קינשאסה) (Democratic Republic of the Congo( Congo-Kinshasa))", "הרפובליקה המרכז אפריקאית (Central African Republic)", "הרפובליקה של קונגו (קונגו- ברזוויל) (Republic of the Congo (Congo-Brazzaville))", "וייטנאם (Vietnam)", "ונואטו (Vanuatu)", "ונצואלה (Venezuela)", "זימבבואה (Zimbabwe (Rhodesia))", "זמביה (Zambia)", "זנזיבר(טנזניה) (Zanzibar(Tansania))", "חוף השנהב (Cote d'Ivoire (Ivory Coast))", "טוגו (Togo)", "טנזניה (Tansania)", "לאוס (Laos)", "ליבריה (Liberia)", "מאוריטניה (Mauritania)", "מאלי (Mali)", "מדגסקר (Madagascar)", "מוזמביק (Mozambique)", "מזרח טימור (Timor - Leste)", "מלאווי (Malawi)", "מלזיה (Malaysia)", "מקסיקו (Mexico)", "ניגריה (Nigeria)", "ניז'ר (Niger)", "ניקרגואה (Nicaragua)", "נמיביה (Namibia)", "נפאל (Nepal)", "סאו טומה ופרינסיפה (Sao Tome & Principe)", "סודאן (Sudan)", "סומליה (Somalia)", "סורינם (Suriname)", "סיירה-לאון (Sierra Leone)", "סנגל (Senegal)", "ערב הסעודית (Saudi Arabia)", "פיליפינים (Philippines)", "פנמה (Panama)", "פפואה  גינאה החדשה (Papua New Guinea)", "פקיסטן (Pakistan)", "פרו (Peru)", "צ'אד (Chad)", "קולומביה (Colombia)", "קומורו (Comoros)", "קוריאה הדרומית (Korea South)", "קוריאה הצפונית (Korea North)", "קמבודיה (Cambodia)", "קמרון (Cameroon)", "קניה (Kenya)", "רואנדה (Rwanda)", "תאילנד (Thailand)", "תימן (Yemen)"],
      prev: 'miscProcedures',
      next: "countriesAIDS",
      answers: [
        {
          id: "countriesLastYear.yes",
          answerText: "כן",
          isTerminal: true,
          confirmationText: "אין באפשרותך לתרום דם כעת.",
        },

        {
          id: "countriesLastYear.no",
          answerText: "לא",
        },
      ],
    },
    "countriesAIDS": {
      questionText: "האם שהית או ביקרת באחת מהמדינות הבאות?",
      description: ["איי בהאמה (Bahamas)", "אריתריאה (Eritrea)", "אתיופיה (Ethiopia)", "בוטסואנה (Botswana)", "בליז (Belize)", "ברבדוס (Barbados)", "ג'מייקה (Jamaica)", "דרום אפריקה (South Africa)", "הרפובליקה הדומיניקנית (Dominican Republic)", "טרינידד וטובגו (Trinidad and Tobago)", "כף ורדה (Cape Verde Islands)", "לסוטו (Lesotho)", "מאוריציוס (Mauritius)", "נמיביה (Namibia)", "סורינם (Suriname)", "תאילנד (Thailand)"],
      prev: 'countriesLastYear',
      next: "intercourse",
      answers: [
        {
          id: "countriesAIDS.yesLately",
          answerText: "כן, בשלושת החודשים האחרונים",
          isTerminal: true,
          confirmationText: "אין באפשרותך לתרום דם כעת.",
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
          confirmationText: "אין באפשרותך לתרום דם כעת.",
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
    }
  }
};

export default formData