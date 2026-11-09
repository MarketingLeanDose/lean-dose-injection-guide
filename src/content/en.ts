/**
 * ENGLISH CONTENT — Lean Dose At-Home Injection Guide
 * ------------------------------------------------------------
 * Edit wording here. Keep the same structure in es.ts.
 * `pending: true` = awaiting clinical approval. Pending content is hidden from
 * patients (a neutral placeholder is shown) until the flag is removed.
 */
export const en = {
  meta: {
    title: 'Your At-Home Injection Guide | Lean Dose',
    description:
      'Everything you need to prepare and administer your weekly Lean Dose injection with confidence. Available in English and Spanish.',
  },

  ui: {
    skip: 'Skip to main content',
    menu: 'Menu',
    closeMenu: 'Close menu',
    language: 'Language',
    english: 'English',
    spanish: 'Español',
    contact: 'Contact Support',
    backToTop: 'Back to top',
  },

  nav: [
    { id: 'video', label: 'Video' },
    { id: 'schedule', label: 'Dosing Chart' },
    { id: 'supplies', label: 'Supplies' },
    { id: 'steps', label: 'Steps' },
    { id: 'aftercare', label: 'Aftercare' },
    { id: 'safety', label: 'Safety' },
    { id: 'faq', label: 'FAQ' },
  ],

  review: {
    banner:
      'Internal review preview — content marked "Pending clinical review" is hidden from patients until approved.',
    badge: 'Pending clinical review',
    placeholderTitle: 'This section is being finalized',
    placeholderBody:
      'Our clinical team is finalizing this part of the guide. Until then, please follow the technique demonstrated by your Lean Dose healthcare professional, and contact your care team if you have any questions.',
    mediaPlaceholder: 'Clinically approved image will appear here',
  },

  hero: {
    eyebrow: 'Lean Dose Patient Guide',
    title: 'Your At-Home Injection Guide',
    subtitle: 'Everything you need to prepare and administer your weekly injection with confidence.',
    intro:
      "Welcome to Lean Dose! We've created this guide to help you understand your treatment schedule, prepare your medication, and safely administer your weekly injection at home.",
    ctaVideo: 'Watch Injection Tutorial',
    ctaSteps: 'View Step-by-Step Instructions',
    ctaSchedule: 'Find My Dosing Schedule',
    highlights: ['English & Español', 'No account needed', 'Go at your own pace'],
  },

  video: {
    eyebrow: 'Nurse-led tutorial',
    title: 'Watch Your Step-by-Step Injection Tutorial',
    description:
      'Follow along with our nurse as we explain how to prepare your medication, understand your dosing chart, and administer your weekly injection.',
    note: 'Please watch the full tutorial before your first injection. You can come back to the written steps below any time you need a refresher.',
    play: 'Play tutorial video',
    playerTitle: 'Lean Dose injection tutorial (English)',
    placeholderTitle: 'Your tutorial video is coming soon',
    placeholderBody:
      'Our nurse-led video will appear here. In the meantime, follow the written steps below and contact your care team with any questions.',
    captions: 'English captions',
    versionLabel: 'English version',
    showEnglish: 'Watch the English version',
  },

  schedule: {
    eyebrow: 'Your 12-week plan',
    title: 'Understanding Your Three-Month Dosing Chart',
    intro:
      "Your three-month package comes with a personalized 12-week dosing chart. Patients may be prescribed semaglutide or tirzepatide, and starting doses can differ depending on each patient's treatment history and provider's instructions.",
    months: [
      { label: 'Month 1', weeks: 'Weeks 1–4', dose: 'First prescribed dose', injections: 'Four weekly injections' },
      { label: 'Month 2', weeks: 'Weeks 5–8', dose: 'Second prescribed dose', injections: 'Four weekly injections' },
      { label: 'Month 3', weeks: 'Weeks 9–12', dose: 'Third prescribed dose', injections: 'Four weekly injections' },
    ],
    monthsNote:
      "Each month's dose and the matching number of syringe units are listed on your personalized dosing chart.",
    howTitle: 'How to read your chart',
    how: [
      'Identify the medication you were prescribed.',
      'Identify your prescribed starting dose.',
      'Find the dosing instructions that match your medication and dose.',
      'Check which treatment week you are in.',
      'Confirm the number of syringe units for that week.',
      'Make sure it matches your prescription label.',
      'Contact your care team if anything is unclear or doesn’t match.',
    ],
    quote:
      'Your dosing chart tells you how many units to draw into your syringe for each weekly injection. Always follow the instructions provided for your specific medication and prescribed treatment plan.',
    unitsTitle: 'Milligrams and units are not the same',
    unitsBody:
      'Your dose is prescribed in milligrams (mg), but your syringe is marked in units. How many units you draw depends on your medication’s concentration and the type of syringe supplied — so there is no single conversion that works for everyone. Always use the units listed on your own chart.',
    safetyTitle: 'Your dose follows your provider — not the calendar',
    safety: [
      'The three-month layout shows how your package is organized. It does not mean you should automatically increase your dose every four weeks.',
      'Dose changes must be authorized by your prescribing provider.',
      'If your provider delays or changes a dose increase, your updated prescription comes first.',
      'Unsure about your dose? Contact your care team before you inject.',
    ],
    sampleTitle: 'Sample dosing chart',
    sampleNote: 'Example layout only. Your personal chart shows your actual medication, dose, and units.',
    sampleCols: ['Week', 'Prescribed dose', 'Syringe units'],
    samplePlaceholder: 'See your chart',
    monthWord: 'Month',
    weekWord: 'Week',
  },

  finder: {
    eyebrow: 'Your personal schedule',
    title: 'Find Your 12-Week Dosing Schedule',
    intro:
      'Choose your medication and the starting dose on your prescription. We’ll show the number of units and the dose for each week of your three-month package.',
    medLabel: 'Choose your medication',
    doseLabel: 'Choose your starting dose',
    doseHint: 'Your starting dose is printed on your prescription label and your dosing chart.',
    meds: { semaglutide: 'Semaglutide', tirzepatide: 'Tirzepatide' },
    empty: 'Choose your starting dose above to see your schedule.',
    resultTitle: '{med}, starting at {dose} mg',
    unitsWord: 'units',
    perWeek: 'each week',
    weeks: 'Weeks {range}',
    week: 'Week {n}',
    monthWord: 'Month',
    vialTag: 'Vial {n}',
    vialsTitle: 'Your vials',
    vialLine: 'Vial {n} — labeled {label}',
    switchNote:
      'Starting week {week}, use Vial {n} (labeled {label}). It has a different strength, so the number of units changes — your dose stays {dose} mg.',
    sameVialNote: 'Starting week {week}, open Vial {n}. It has the same strength, so draw the units shown.',
    splitNote: 'Week {week}: {total} units total, given as {count} syringes of {each} units each.',
    videoTitle: 'Watch: your {med} schedule, starting at {dose} mg',
    videoSoon: 'Your personalized video is coming soon',
    videoSoonBody: 'Our nurse will walk you through your starting dose and the units for each of the next months. Until then, use the schedule above and your dosing chart.',
    videoPlay: 'Play your schedule video',
    verifyTitle: 'Always double-check',
    verify:
      'Compare this schedule with your personal dosing chart and prescription label before every injection. If your provider changed or delayed a dose increase, follow your updated prescription. If anything doesn’t match, contact your care team before injecting.',
    syringeNote: 'Units are for the U-100 syringe supplied with your treatment (100 units = 1 mL).',
    privacy: 'Your selection is not saved or sent anywhere.',
    wip: 'Work in progress (internal guide)',
  },

  supplies: {
    eyebrow: 'Before you begin',
    title: "What You'll Need",
    intro:
      "Your medication arrives prepared and ready to use, packed in a temperature-controlled container to keep it cold. Before each injection, you'll draw the prescribed number of units into your syringe according to your dosing instructions.",
    items: [
      { icon: 'vial', title: 'Medication vial', body: 'Your prescribed medication. It arrives cold and must be kept in your refrigerator.' },
      { icon: 'syringe', title: 'New sterile syringe', body: 'A new syringe and needle supplied with your treatment — use a fresh one every time.' },
      { icon: 'wipe', title: 'Alcohol wipes', body: 'For cleaning the vial stopper and your injection site.' },
      { icon: 'fridge', title: 'Your refrigerator', body: 'Your medication must be stored in the refrigerator at all times.' },
      { icon: 'sharps', title: 'Needle disposal bottle', body: 'A sturdy plastic bottle with a screw-on lid, like an empty laundry detergent bottle. See how to set one up below.' },
      { icon: 'chart', title: 'Your dosing chart', body: 'Your personalized chart showing the units for each treatment week.' },
    ],
    checkTitle: 'Before every injection, check that:',
    checks: [
      'The medication name and strength on the label match your prescription.',
      'The expiration or beyond-use date has not passed.',
      'The medication looks the way your pharmacy’s instructions describe.',
      'It has been kept in your refrigerator.',
    ],
    checkNote: 'If anything looks different or you’re not sure, contact your care team before injecting.',
    arrival: {
      title: 'When your package arrives: refrigerate right away',
      items: [
        'Your vial ships in a temperature-controlled container that keeps it cold during delivery.',
        'As soon as your package arrives, take the vial out and place it in your refrigerator.',
        'Keep your medication in the refrigerator at all times. Take it out only to prepare your dose, then put it right back.',
        'If your package arrived warm or your vial was left out of the refrigerator, contact your care team before using it.',
      ],
    },
  },

  steps: {
    eyebrow: 'Step-by-step',
    title: 'Your Injection, Step by Step',
    intro: 'Take it one step at a time. Use the buttons to move forward and back, or view all steps at once.',
    progress: 'Step {n} of {total}',
    prev: 'Previous',
    next: 'Next step',
    showAll: 'Show all steps',
    showOne: 'One step at a time',
    finish: 'Continue to aftercare',
    stepWord: 'Step',
    items: [
      {
        key: 'wash',
        short: 'Wash hands',
        title: 'Wash Your Hands',
        paras: [
          'Before preparing your injection, wash your hands thoroughly with soap and water. Dry them with a clean towel and place your supplies on a clean, dry surface.',
        ],
        callout: '',
      },
      {
        key: 'confirm',
        short: 'Confirm dose',
        title: 'Confirm Your Prescribed Dose',
        paras: [
          'Check your medication label and personalized dosing chart. Find your current treatment week and confirm the number of syringe units prescribed for that injection.',
        ],
        callout: 'Never guess your dose or use another patient’s dosing chart.',
      },
      {
        key: 'vial',
        short: 'Prepare vial',
        title: 'Prepare Your Medication Vial',
        paras: [
          'Take your vial out of the refrigerator when you’re ready to prepare your dose.',
          'Check your medication vial to make sure it matches your prescription. Inspect it according to the dispensing pharmacy’s instructions.',
          'Clean the rubber stopper on top of the vial with an alcohol wipe and allow it to dry.',
        ],
        callout: '',
      },
      {
        key: 'draw',
        short: 'Draw dose',
        title: 'Draw Your Medication Into the Syringe',
        paras: [
          'Using a new sterile syringe, follow the instructions provided by your pharmacy to draw the prescribed number of units from your medication vial.',
          'Carefully check the markings on the syringe to make sure the amount matches your dosing chart.',
          'Put the vial back in the refrigerator right away.',
        ],
        callout: 'If you are unsure about the correct amount or notice an issue with the syringe, contact your care team before injecting.',
      },
      {
        key: 'site',
        short: 'Choose site',
        title: 'Choose Your Injection Site',
        paras: [
          'Choose an injection site on your abdomen, at least two inches away from your belly button.',
          'Alternate sides of your abdomen each week and choose a different spot for each injection.',
          'Avoid areas that are bruised, irritated, scarred, red, or tender.',
        ],
        callout: '',
      },
      {
        key: 'clean',
        short: 'Clean site',
        title: 'Clean Your Injection Site',
        paras: [
          'Use a fresh alcohol wipe to clean your selected injection site. Allow your skin to dry completely before administering the injection.',
        ],
        callout: '',
      },
      {
        key: 'inject',
        short: 'Inject',
        title: 'How to Self-Inject Your Medication',
        paras: [
          'Follow these seven short steps to handle your syringe safely, administer your medication, and dispose of your supplies.',
        ],
        callout: '',
      },
    ],
    syringeLabels: {
      plunger: 'Plunger',
      barrel: 'Barrel',
      markings: 'Unit markings',
      needle: 'Needle',
      cap: 'Needle cap',
      vial: 'Medication vial',
      stopper: 'Rubber stopper',
    },
    syringeNote:
      'Your syringe is marked in units, not milligrams. This diagram is for illustration only — always follow the markings on the syringe supplied with your treatment and your nurse’s demonstration.',
    drawDetail: {
      title: 'Detailed drawing technique',
      body: 'Step-by-step instructions for entering the vial, handling air, and drawing your medication will be added here once our dispensing pharmacy’s approved procedure is confirmed. Until then, follow your pharmacy’s instructions and your nurse’s demonstration.',
    },
    site: {
      yourRight: 'Your right side',
      yourLeft: 'Your left side',
      avoid: 'Keep 2 inches away from belly button',
      zone: 'Injection area',
      rotationTitle: 'Example rotation',
      rotationHint: 'Tap a week to see an example spot.',
      rotation: [
        { week: 'Week 1', side: 'right', label: 'Right side' },
        { week: 'Week 2', side: 'left', label: 'Left side' },
        { week: 'Week 3', side: 'right', label: 'Right side, different spot' },
        { week: 'Week 4', side: 'left', label: 'Left side, different spot' },
      ],
      rotationNote:
        'Keep alternating sides throughout your treatment — and pick a new spot each time. Switching sides alone isn’t enough.',
      diagramAlt:
        'Front view of the abdomen. Shaded injection areas are on the right and left sides, with a two-inch area around the belly button left clear.',
    },
  },

  inject: {
    title: 'How to Self-Inject Your Medication',
    reminder:
      'Always follow the injection technique demonstrated by your Lean Dose healthcare professional. If you are unsure about your dose or how to administer your injection, contact your care team before proceeding.',
    watchStep: 'Watch this step',
    demo: { twoIn: '2 in', sideView: 'SIDE VIEW' },
    cards: [
      {
        num: '7.1',
        visual: 'inject-check',
        pending: false,
        title: 'Double-Check Your Prepared Syringe',
        paras: [
          'Before injecting, make sure the amount of medication in your syringe matches the number of units prescribed for your current treatment week.',
          'Check that the syringe and needle are ready for use according to your nurse’s instructions.',
        ],
        callout: 'If you’re uncertain about the dose, stop and contact your care team.',
      },
      {
        num: '7.2',
        visual: 'inject-hold',
        pending: false,
        title: 'Hold Your Syringe Correctly',
        paras: [
          'Hold the prepared syringe securely in your dominant hand, similar to holding a pencil or dart. Carefully remove the protective needle cap when you are ready to inject.',
          'Do not touch the exposed needle or let it touch your skin, clothing, or any surface before the injection. If the needle becomes contaminated, do not use it.',
        ],
        callout: '',
      },
      {
        num: '7.3',
        visual: 'inject-pinch',
        pending: false,
        title: 'Gently Pinch the Skin',
        paras: [
          'Using your free hand, gently pinch a fold of skin and fatty tissue on your stomach, at least 2 inches away from your belly button. Avoid squeezing too tightly.',
          'This helps place the medication into the fatty tissue just under the skin, when recommended for your needle and body type.',
        ],
        callout: '',
      },
      {
        num: '7.4',
        visual: 'inject-insert',
        pending: false,
        title: 'Insert the Needle',
        paras: [
          'Hold the syringe straight up and down, at a 90-degree angle to your skin, and insert the needle into the pinched-up fatty tissue in one smooth motion.',
          'Insert the needle all the way, keeping it straight — not tilted up or down. Keep the syringe steady and avoid unnecessary movement.',
        ],
        callout: '',
      },
      {
        num: '7.5',
        visual: 'inject-administer',
        pending: false,
        title: 'Administer the Medication',
        paras: [
          'Once the needle is correctly positioned, keep the syringe steady and administer the prescribed medication according to your nurse’s instructions.',
          'Press the plunger smoothly and steadily. Follow your clinician’s instructions about holding or releasing the skin fold.',
        ],
        callout: '',
      },
      {
        num: '7.6',
        visual: 'inject-remove',
        pending: false,
        title: 'Remove the Needle',
        paras: [
          'After administering the medication, pull the needle straight out at the same 90-degree angle you used to insert it.',
          'If needed, gently press a clean cotton ball or tissue on the spot. Do not rub or massage the injection area.',
        ],
        callout: '',
      },
      {
        num: '7.7',
        visual: 'inject-dispose',
        pending: false,
        title: 'Dispose of Your Used Syringe',
        paras: [
          'Immediately drop your used needle and syringe, needle first, into your needle disposal bottle or sharps container. Do not recap the used needle.',
          'Never reuse or share needles or syringes. Keep the container closed and away from children and pets. See “Disposing of used needles” for how to set one up.',
        ],
        callout: '',
      },
    ],
  },

  aftercare: {
    eyebrow: 'You did it!',
    title: 'After Your Injection',
    items: [
      'Dispose of your used needle and syringe immediately.',
      'Do not rub or massage the injection site.',
      'Mild, temporary discomfort at the injection site may occur.',
      'Write down the date and the injection location.',
      'Put your vial back in the refrigerator — it must stay refrigerated at all times.',
      'Keep medication out of reach of children and pets.',
      'Follow your prescribed weekly injection schedule.',
    ],
    disposal: {
      title: 'Disposing of Used Needles',
      intro: 'Most homes don’t have a medical sharps container — and that’s okay. You can make a safe needle container from a sturdy plastic bottle you already have.',
      makeTitle: 'Make your own needle container',
      make: [
        'Use an empty, heavy-duty plastic bottle with a screw-on lid, such as a laundry detergent or bleach bottle. Do not use a see-through container.',
        'Label it clearly: “SHARPS — DO NOT RECYCLE.”',
        'Right after each injection, drop the used needle and syringe in, needle first. Never recap the needle.',
        'Keep the lid screwed on tight. Store the bottle upright, out of reach of children and pets.',
        'When it’s about three-quarters full, close the lid tightly and seal it with heavy-duty tape, like duct tape.',
      ],
      fullTitle: 'When the bottle is full',
      full: [
        'In Texas, you can place the sealed, labeled bottle in your regular household trash.',
        'Never put it in the recycling bin.',
        'Never throw loose needles or syringes in the trash, and never flush them.',
      ],
      otherStates: 'Rules can be different outside Texas. If you live in another state, check your local guidelines at safeneedledisposal.org.',
      option: 'Prefer an official container? FDA-cleared sharps containers are sold at most pharmacies and work the same way.',
      sourceNote: 'Based on guidance from the U.S. FDA and the Texas Commission on Environmental Quality (TCEQ).',
    },
    tracker: {
      title: 'Weekly injection tracker',
      intro:
        'Check off each weekly injection and note the date and side you used. This tracker is saved only in this browser on your device — nothing is sent to Lean Dose or anyone else.',
      cols: ['Week', 'Done', 'Date', 'Side'],
      sides: { none: '—', right: 'Right', left: 'Left' },
      progress: '{n} of 12 injections logged',
      clear: 'Clear tracker',
      clearConfirm: 'Clear all entries? This can’t be undone.',
      yes: 'Yes, clear',
      no: 'Cancel',
      lastSide: 'Last logged: {side} side — try the {other} side this week.',
      doneLabel: 'Mark week {n} as done',
      dateLabel: 'Date for week {n}',
      sideLabel: 'Injection side for week {n}',
      storageOff: 'Your browser isn’t saving entries, so they’ll clear when you close this page.',
    },
  },

  safety: {
    eyebrow: 'Stay safe',
    title: 'Important Safety Information',
    intro: 'A few simple habits help keep every injection safe.',
    items: [
      'Verify your medication and dose before every injection.',
      'Use sterile, single-use supplies every time.',
      'Never share medication or injection supplies.',
      'Keep your medication in the refrigerator at all times.',
      'Follow your prescription label and pharmacy instructions.',
      'Never increase or change your dose without your provider’s authorization.',
      'Contact your care team if the vial, syringe, or dosing instructions look incorrect.',
      'Contact your care team if you miss a dose or have a problem with an injection.',
    ],
    emergencyTitle: 'When to get emergency help',
    emergencyBody:
      'Call 911 or seek emergency medical attention right away if you have signs of a severe allergic reaction, such as difficulty breathing or swelling of the face, lips, tongue, or throat.',
    moreNote:
      'Your provider and pharmacy will share information about possible side effects of your specific medication.',
  },

  faq: {
    eyebrow: 'Questions?',
    title: 'Frequently Asked Questions',
    fallback: 'Your Lean Dose care team will give you guidance for your specific medication and plan. Please contact us with this question.',
    items: [
      {
        q: 'How often should I administer my injection?',
        a: 'Once a week, following the schedule on your personalized dosing chart. Many patients find it helpful to choose the same day each week. Always follow your prescription label and your provider’s instructions.',
        pending: false,
      },
      {
        q: 'How do I know how many units to draw?',
        a: 'Your personalized dosing chart lists the number of syringe units for each treatment week. Find your current week, confirm the units, and check them against your prescription label. If the chart and label don’t match, contact your care team before injecting.',
        pending: false,
      },
      {
        q: 'What if I start at a different dose?',
        a: 'That’s normal. Starting doses vary depending on your treatment history and your provider’s instructions. Your chart is built for your plan — always follow your own chart, never someone else’s.',
        pending: false,
      },
      {
        q: 'Does my dose change every month?',
        a: 'Your package is organized into three monthly stages, but your dose only changes when your provider authorizes it. If your provider delays or changes a dose increase, your updated prescription comes first. When in doubt, contact your care team before injecting.',
        pending: false,
      },
      {
        q: 'Where on my abdomen should I inject?',
        a: 'Choose a spot on your abdomen at least two inches away from your belly button. Avoid areas that are bruised, irritated, scarred, red, or tender.',
        pending: false,
      },
      {
        q: 'Should I switch sides every week?',
        a: 'Yes. Alternate between the right and left sides of your abdomen each week — and choose a different spot each time, not just a different side.',
        pending: false,
      },
      {
        q: 'What if I see a small drop of blood?',
        a: 'A small drop of blood at the injection site can happen. Gently press a clean cotton ball or tissue on the spot — do not rub or massage the area. If bleeding doesn’t stop or you notice anything unusual, contact your care team.',
        pending: true,
      },
      {
        q: 'What if I notice an air bubble in my syringe?',
        a: 'Your nurse will show you how to check your syringe as part of the approved preparation technique. If you notice an air bubble and aren’t sure what to do, don’t inject — contact your care team for guidance.',
        pending: true,
      },
      {
        q: 'What should I do if I miss an injection?',
        a: 'Contact your Lean Dose care team for guidance before your next injection. Do not take an extra dose or double up to make up for a missed injection unless your provider tells you to.',
        pending: true,
      },
      {
        q: 'What if I’m not sure I injected the full dose?',
        a: 'Do not take another dose. Contact your care team, let them know what happened, and they’ll tell you what to do next.',
        pending: true,
      },
      {
        q: 'How should I store my medication?',
        a: 'In the refrigerator, at all times. Your vial ships cold in a temperature-controlled container — move it into your refrigerator as soon as your package arrives. Take it out only to prepare your dose, then put it right back, and keep it out of reach of children and pets. If your vial was left out of the refrigerator or arrived warm, contact your care team before using it.',
        pending: false,
      },
      {
        q: 'What should I do with used needles?',
        a: 'You don’t need a special medical container. Drop used needles and syringes, needle first, into an empty heavy-duty plastic bottle with a screw-on lid (like a laundry detergent bottle) labeled “SHARPS — DO NOT RECYCLE.” When it’s about three-quarters full, tape the lid shut. In Texas, the sealed bottle can go in your regular trash — never in recycling. Never recap, reuse, or share needles. See “Disposing of Used Needles” for full steps.',
        pending: false,
      },
      {
        q: 'Who should I contact if I need help?',
        a: 'Your Lean Dose care team is here for you. See the “Need Help?” section below for ways to reach us.',
        pending: false,
      },
    ],
  },

  support: {
    title: "Need Help? We're Here for You!",
    description:
      'Whether you have questions about your dosing chart, preparing your medication, or administering your injection, our Lean Dose care team is here to help.',
    phone: 'Call us',
    email: 'Email us',
    message: 'Send a message',
    notSet: 'Contact details coming soon',
    website: 'Visit leandose.co',
  },

  footer: {
    tagline: 'Provider-guided medical weight management.',
    disclaimer:
      'This guide is provided for educational purposes and does not replace the individualized instructions of your prescribing healthcare provider or dispensing pharmacy. Always follow your prescription label and personalized treatment plan.',
    rights: '© {year} Lean Dose. All rights reserved.',
    website: 'leandose.co',
  },
};
