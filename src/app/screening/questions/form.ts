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
      questionText: t('wizard.age.q'),
      prev: 'recentDonation',
      next: "gender", 
      answers: [
        {
          id: "age.under17",
          answerText: t('wizard.age.under17'),
          isTerminal: true,
          comment: t('wizard.age.under17comment'),
          confirmationText:
            t('wizard.age.under17comment'),
        },
        {
          id: "age.17to18",
          answerText:t('wizard.age.17to18'),
          comment: t('wizard.age.17to18comment'),
        },
        {
          id: "age.18to59",
          answerText: t('wizard.age.18to59'),
        },
        {
          id: "age.60up",
          answerText: t('wizard.age.60up'),
          comment: t('wizard.age.60upComment'),
        },
      ],
    },
    gender: {
      questionText: t('wizard.gender.q'),
      prev: 'age',
      next: "conditions",
      answers: [
        {
          id: "gender.male",
          answerText: t('wizard.gender.male'),
        },
        {
          id: "gender.female",
          answerText: t('wizard.gender.female'),
          next: "pregnant",
        },
      ],
    },
    pregnant: {
      questionText: t('wizard.pregnant.q'),
      prev: 'gender',
      next: "birth",
      answers: [
        {
          id: "pregnant.yes",
          answerText: t('wizard.pregnant.yes'),
          isTerminal: true,
          comment: t('wizard.pregnant.comment'),
          confirmationText:
            t('wizard.pregnant.comment')
        },
        {
          id: "pregnant.no",
          answerText: t('wizard.pregnant.no'),
        },
      ],
    },
    birth: {
      questionText: t('wizard.birth.q'),
      prev: 'pregnant',
      next: "conditions",
      answers: [
        {
          id: "birth.yes",
          answerText: t('wizard.birth.yes'),
          isTerminal: true,
          comment: t('wizard.birth.comment'),
          confirmationText: t('wizard.birth.comment'),
        },
        {
          id: "birth.no",
          answerText: t('wizard.birth.no'),
        },
      ],
    },
    conditions: {
      questionText: t('wizard.conditions.q'),
      description:
        t('wizard.conditions.description'),
      prev: 'birth',
      next: "antibiotics",
      answers: [
        {
          id: "conditions.yes",
          answerText: t('wizard.conditions.yes'),
          isTerminal: true,
          comment: t('wizard.conditions.comment'),
          confirmationText: t('wizard.conditions.comment'),
        },
        {
          id: "conditions.no",
          answerText: t('wizard.conditions.no'),
        },
      ],
    },
    antibiotics: {
      questionText: t('wizard.antibiotics.q'),
      prev: 'conditions',
      next: "teeth",
      answers: [
        {
          id: "antibiotics.yesAndHealed",
          answerText: t('wizard.antibiotics.yesAndHealed'),
        },
        {
          id: "antibiotics.yesAndNotHealed",
          answerText:
            t('wizard.antibiotics.yesAndNotHealed'),
          isTerminal: true,
          comment:
            t('wizard.antibiotics.comment'),
          confirmationText:
            t('wizard.antibiotics.comment'),
        },
        {
          id: "antibiotics.no",
          answerText: t('wizard.antibiotics.no'),
        },
      ],
    },
    teeth: {
      questionText: t('wizard.teeth.q'),
      description:
        t('wizard.teeth.description'),
      prev: 'antibiotics',
      next: "hepatitis",
      answers: [
        {
          id: "teeth.yes",
          answerText: t('wizard.teeth.yes'),
          isTerminal: true,
          comment: t('wizard.teeth.comment'),
          confirmationText: t('wizard.teeth.comment'),
        },
        {
          id: "teeth.no",
          answerText: t('wizard.teeth.no'),
        },
      ],
    },
    hepatitis: {
      questionText: t('wizard.hepatitis.q'),
      prev: 'teeth',
      next: "vaccine",
      answers: [
        {
          id: "hepatitis.A",
          answerText: t('wizard.hepatitis.A'),
          next: "hepatitis.A.notRecent",
        },
        {
          id: "hepatitis.BC",
          answerText: t('wizard.hepatitis.BC'),
          isTerminal: true,
        },
        {
          id: "hepatitis.NA",
          answerText: t('wizard.hepatitis.NA'),
          next: "hepatitis.NA.notRecent",
        },
        {
          id: "hepatitis.no",
          answerText: t('wizard.hepatitis.no'),
        },
      ],
    },
    "hepatitis.A.notRecent": {
      questionText: t('wizard.hepatitis_A_notRecent.q'),
      prev: 'hepatitis',
      next: "vaccine",
      answers: [
        {
          id: "hepatitis.A.notRecent.Yes",
          answerText: t('wizard.hepatitis_A_notRecent.yes'),
        },
        {
          id: "hepatitis.A.notRecent.No",
          answerText: t('wizard.hepatitis_A_notRecent.no'),
          isTerminal: true,
          confirmationText: t('wizard.hepatitis_A_notRecent.comment'),
        },
      ],
    },
    'hepatitis.NA.notRecent': {
      questionText: t('wizard.hepatitis_NA_notRecent.q'),
      prev: 'hepatitis',
      next: "vaccine",
      answers: [
        {
          id: "hepatitis.NA.notRecent.yes",
          answerText: t('wizard.hepatitis_NA_notRecent.yes'),
        },
        {
          id: "hepatitis.NA.notRecent.no",
          answerText: t('wizard.hepatitis_NA_notRecent.no'),
          isTerminal: true,
          confirmationText: t('wizard.hepatitis_NA_notRecent.comment'),
        },
      ],
    },
    vaccine: {
      questionText: t('wizard.vaccine.q'),
      description:
        t('wizard.vaccine.description'),
      prev: 'hepatitis',
      next: "asthma",
      answers: [
        {
          id: "vaccine.yes",
          answerText: t('wizard.vaccine.yes'),
          isTerminal: true,
          confirmationText: t('wizard.vaccine.comment'),
        },
        {
          id: "vaccine.no",
          answerText: t('wizard.vaccine.no'),
        },
      ],
    },
    asthma: {
      questionText: t('wizard.asthma.q'),
      prev: 'vaccine',
      next: "diabetes",
      answers: [
        {
          id: "asthma.yes",
          answerText: t('wizard.asthma.yes'),
          next: "asthma.yes.well",
        },
        {
          id: "asthma.no",
          answerText: t('wizard.asthma.no'),
        },
      ],
    },
    "asthma.yes.well": {
      questionText:
        t('wizard.asthma_yes_well.q'),
      prev: 'asthma',
      next: "diabetes",
      answers: [
        {
          id: "asthma.yes.well.yes",
          answerText: t('wizard.asthma_yes_well.yes'),
        },
        {
          id: "asthma.yes.well.no",
          answerText: t('wizard.asthma_yes_well.no'),
          isTerminal: true,
          confirmationText: t('wizard.asthma_yes_well.comment'),
        },
      ],
    },
    diabetes: {
      questionText: t('wizard.diabetes.q'),
      prev: 'asthma',
      next: "cancer",
      answers: [
        {
          id: "diabetes.yes",
          answerText: t('wizard.diabetes.yes'),
          next: "diabetes.yes.balanced",
        },
        {
          id: "diabetes.no",
          answerText: t('wizard.diabetes.no'),
        },
      ],
    },
    "diabetes.yes.balanced": {
      questionText: t('wizard.diabetes_yes_balanced.q'),
      prev: 'diabetes',
      next: "cancer",
      answers: [
        {
          id: "diabetes.yes.balanced.yes",
          answerText: t('wizard.diabetes_yes_balanced.yes'),
        },
        {
          id: "diabetes.yes.balanced.no",
          answerText: t('wizard.diabetes_yes_balanced.no'),
          isTerminal: true,
          confirmationText: t('wizard.diabetes_yes_balanced.comment'),
        },
      ],
    },
    "cancer": {
      questionText: t('wizard.cancer.q'),
      prev: 'diabetes',
      next: "anemia",
      answers: [
        {
          id: "cancer.yesVirus",
          answerText: t('wizard.cancer.yesVirus'),
          isTerminal: true,
          confirmationText: t('wizard.cancer.comment'),
        },
        {
          id: "cancer.yesOther",
          answerText: t('wizard.cancer.yesOther'),
          next: "cancer.yesOther.beated",
        },
        {
          id: "cancer.no",
          answerText: t('wizard.cancer.no'),
        },
      ],
    },
    "cancer.yesOther.beated": {
      questionText: t('wizard.cancer_yesOther_beated.q'),
      prev: 'cancer',
      next: "anemia",
      answers: [
        {
          id: "cancer.yesOther.beated.yes",
          answerText: t('wizard.cancer_yesOther_beated.yes'),
        },
        {
          id: "cancer.yesOther.beated.no",
          answerText: t('wizard.cancer_yesOther_beated.no'),
          isTerminal: true,
          confirmationText: t('wizard.cancer_yesOther_beated.comment'),
        },
      ],
    },
    "anemia": {
      questionText: t('wizard.anemia.q'),
      prev: 'cancer',
      next: "transfusion",
      answers: [
        {
          id: "anemia.yes",
          answerText: t('wizard.anemia.yes'),
          isTerminal: true,
          confirmationText: t('wizard.anemia.comment'),
        },
        {
          id: "anemia.no",
          answerText: t('wizard.anemia.no'),
        },
      ],
    },
    "transfusion": {
      questionText: t('wizard.transfusion.q'),
      prev: 'anemia',
      next: "miscProcedures",
      answers: [
        {
          id: "transfusion.yesLately",
          answerText: t('wizard.transfusion.yesLately'),
          isTerminal: true,
          confirmationText: t('wizard.transfusion.comment'),
        },
        {
          id: "transfusion.yesNotLately",
          answerText: t('wizard.transfusion.yesNotLately'),
        },
        {
          id: "transfusion.no",
          answerText: t('wizard.transfusion.no'),
        },
      ],
    },
    "miscProcedures": {
      questionText:
        t('wizard.miscProcedures.q'),
      prev: 'transfusion',
      next: "countriesLastYear",
      answers: [
        {
          id: "miscProcedures.yesLately",
          answerText: t('wizard.miscProcedures.yesLately'),
          isTerminal: true,
          confirmationText: t('wizard.miscProcedures.comment'),
        },
        {
          id: "miscProcedures.yesNotLately",
          answerText: t('wizard.miscProcedures.yesNotLately'),
        },
        {
          id: "miscProcedures.no",
          answerText: t('wizard.miscProcedures.no'),
        },
      ],
    },
    "countriesLastYear": {
      questionText: t('wizard.countriesLastYear.q'),
      description: t('wizard.countriesLastYear.description'),
      prev: 'miscProcedures',
      next: "countriesAIDS",
      answers: [
        {
          id: "countriesLastYear.yes",
          answerText: t('wizard.countriesLastYear.q'),
          isTerminal: true,
          confirmationText: t('wizard.countriesLastYear.comment'),
        },

        {
          id: "countriesLastYear.no",
          answerText: t('wizard.countriesLastYear.no'),
        },
      ],
    },
    "countriesAIDS": {
      questionText: t('wizard.countriesAIDS.q'),
      description: t('wizard.countriesAIDS.description'),
      prev: 'countriesLastYear',
      next: "intercourse",
      answers: [
        {
          id: "countriesAIDS.yesLately",
          answerText: t('wizard.countriesAIDS.yesLately'),
          isTerminal: true,
          confirmationText: t('wizard.countriesAIDS.comment'),
        },
        {
          id: "countriesAIDS.yesNotLately",
          answerText: t('wizard.countriesAIDS.yesNotLately'),
        },
        {
          id: "countriesAIDS.no",
          answerText: t('wizard.countriesAIDS.no'),
        },
      ],
    },
    "intercourse": {
      questionText:
        t('wizard.intercourse.q'),
      prev: 'countriesAIDS',
      isFinal: true,
      answers: [
        {
          id: "intercourse.yesLately",
          answerText: t('wizard.intercourse.yesLately'),
          isTerminal: true,
          confirmationText: t('wizard.intercourse.yesLatelyConfirmationText'),
        },
        {
          id: "intercourse.yesNotLately",
          answerText: t('wizard.intercourse.yesNotLately')
        },
        {
          id: "intercourse.no",
          answerText: t('wizard.intercourse.no'),
        },
      ],
    }
  }
};

export default formData