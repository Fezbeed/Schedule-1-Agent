const mixData = {
  substances: {
    A: "Cuke",
    B: "Flu Medicine",
    C: "Gasoline",
    D: "Donut",
    E: "Energy Drink",
    F: "Mouth Wash",
    G: "Motor Oil",
    H: "Banana",
    I: "Chili",
    J: "Iodine",
    K: "Paracetamol",
    L: "Viagra",
    M: "Horse Semen",
    N: "Mega Bean",
    O: "Addy",
    P: "Battery",
  },
  substances_rank: {
    A: "1",
    B: "4",
    C: "5",
    D: "1",
    E: "6",
    F: "3",
    G: "7",
    H: "1",
    I: "9",
    J: "11",
    K: "1",
    L: "2",
    M: "13",
    N: "8",
    O: "12",
    P: "10",
  },
  ranks: {
    1: "Street Rat I",
    2: "Hoodlum II",
    3: "Hoodlum III",
    4: "Hoodlum IV",
    5: "Hoodlum V",
    6: "Peddler I",
    7: "Peddler II",
    8: "Peddler III",
    9: "Peddler IV",
    10: "Peddler V",
    11: "Hustler I",
    12: "Hustler II",
    13: "Hustler III",
  },
  substances_price: {
    A: "2",
    B: "2",
    C: "5",
    D: "3",
    E: "6",
    F: "4",
    G: "6",
    H: "2",
    I: "7",
    J: "8",
    K: "3",
    L: "4",
    M: "9",
    N: "7",
    O: "9",
    P: "8",
  },
  effects: [
    {
      substance: "A",
      effect: ["En"],
    },
    {
      substance: "B",
      effect: ["Se"],
    },
    {
      substance: "C",
      effect: ["To"],
    },
    {
      substance: "D",
      effect: ["Cd"],
    },
    {
      substance: "E",
      effect: ["At"],
    },
    {
      substance: "F",
      effect: ["Ba"],
    },
    {
      substance: "G",
      effect: ["Sl"],
    },
    {
      substance: "H",
      effect: ["Gi"],
    },
    {
      substance: "I",
      effect: ["Sp"],
    },
    {
      substance: "J",
      effect: ["Je"],
    },
    {
      substance: "K",
      effect: ["Sn"],
    },
    {
      substance: "L",
      effect: ["Tt"],
    },
    {
      substance: "M",
      effect: ["Lf"],
    },
    {
      substance: "N",
      effect: ["Fo"],
    },
    {
      substance: "O",
      effect: ["Tp"],
    },
    {
      substance: "P",
      effect: ["Be"],
    },
  ],
  effect_abbreviations: {
    Ca: "Calming",
    Re: "Refreshing",
    En: "Energizing",
    Se: "Sedating",
    Be: "Bright-Eyed",
    Cd: "Calorie-Dense",
    Eu: "Euphoric",
    To: "Toxic",
    At: "Athletic",
    Ba: "Balding",
    Ag: "Anti-Gravity",
    Mu: "Munchies",
    Sl: "Slippery",
    Gi: "Gingeritis",
    Sn: "Sneaky",
    Tp: "Thought-Provoking",
    Sp: "Spicy",
    Pa: "Paranoia",
    Tt: "Tropic Thunder",
    Gl: "Glowing",
    Cy: "Cyclopean",
    Fo: "Foggy",
    Ex: "Explosive",
    La: "Laxative",
    Lf: "Long Faced",
    Je: "Jennerising",
    El: "Electrifying",
    Di: "Disorienting",
    Sc: "Schizophrenia",
    Si: "Seizure-Inducing",
    Zo: "Zombifying",
    Fc: "Focused",
    Sm: "Smelly",
    Sh: "Shrinking",
  },
  effect_price: {
    Ca: "0.1",
    Re: "0.14",
    En: "0.22",
    Se: "0.26",
    Be: "0.4",
    Cd: "0.28",
    Eu: "0.18",
    To: "0",
    At: "0.32",
    Ba: "0.3",
    Ag: "0.54",
    Mu: "0.12",
    Sl: "0.34",
    Gi: "0.2",
    Sn: "0.24",
    Tp: "0.44",
    Sp: "0.38",
    Pa: "0",
    Tt: "0.46",
    Gl: "0.48",
    Cy: "0.56",
    Fo: "0.36",
    Ex: "0",
    La: "0",
    Lf: "0.52",
    Je: "0.42",
    El: "0.5",
    Di: "0",
    Sc: "0",
    Si: "0",
    Zo: "0.58",
    Fc: "0.16",
    Sm: "0",
    Sh: "0.6",
  },
  effect_color: {
    Ca: "#FED09B",
    Re: "#B2FE98",
    En: "#9AFE6D",
    Se: "#6B5FD8",
    Be: "#BEF7FD",
    Cd: "#FE84F4",
    Eu: "#FEEA74",
    To: "#5F9A31",
    At: "#75C8FD",
    Ba: "#C79232",
    Ag: "#235BCB",
    Mu: "#C96E57",
    Sl: "#A2DFFD",
    Gi: "#FE8829",
    Sn: "#7B7B7B",
    Tp: "#FEA0CB",
    Sp: "#FE6B4C",
    Pa: "#C46762",
    Tt: "#FE9F47",
    Gl: "#85E459",
    Cy: "#FEC174",
    Fo: "#B0B0AF",
    Ex: "#FE4B40",
    La: "#763C25",
    Lf: "#FED961",
    Je: "#FE8DF8",
    El: "#55C8FD",
    Di: "#FE7551",
    Sc: "#645AFD",
    Si: "#FEE900",
    Zo: "#71AB5D",
    Fc: "#75F1FD",
    Sm: "#7DBC31",
    Sh: "#B6FEDA",
  },
  weed_price: {
    "OG Kush": "35",
    "Sour Diesel": "35",
    "Green Crack": "35",
    "Granddady Purple": "35",
    Cocaine: "150",
    Meth: "70",
  },
  weed_types: {
    "OG Kush": ["Ca"],
    "Sour Diesel": ["Re"],
    "Green Crack": ["En"],
    "Granddady Purple": ["Se"],
    Cocaine: [],
    Meth: [],
  },
  rules: [
    {
      if_present: ["To"],
      if_not_present: ["Eu"],
      requires_substance: "A",
      replace: {
        To: "Eu",
      },
    },
    {
      if_present: ["Sl"],
      if_not_present: ["Mu"],
      requires_substance: "A",
      replace: {
        Sl: "Mu",
      },
    },
    {
      if_present: ["Sn"],
      if_not_present: ["Pa"],
      requires_substance: "A",
      replace: {
        Sn: "Pa",
      },
    },
    {
      if_present: ["Fo"],
      if_not_present: ["Cy"],
      requires_substance: "A",
      replace: {
        Fo: "Cy",
      },
    },
    {
      if_present: ["Gi"],
      if_not_present: ["Tp"],
      requires_substance: "A",
      replace: {
        Gi: "Tp",
      },
    },
    {
      if_present: ["Mu"],
      if_not_present: ["At"],
      requires_substance: "A",
      replace: {
        Mu: "At",
      },
    },
    {
      if_present: ["Eu"],
      if_not_present: ["La"],
      requires_substance: "A",
      replace: {
        Eu: "La",
      },
    },
    {
      if_present: ["Sl", "Mu"],
      if_not_present: ["At"],
      requires_substance: "A",
      replace: {
        Sl: "At",
      },
    },

    {
      if_present: ["Ca"],
      if_not_present: ["Be"],
      requires_substance: "B",
      replace: {
        Ca: "Be",
      },
    },
    {
      if_present: ["At"],
      if_not_present: ["Mu"],
      requires_substance: "B",
      replace: {
        At: "Mu",
      },
    },
    {
      if_present: ["Tp"],
      if_not_present: ["Gi"],
      requires_substance: "B",
      replace: {
        Tp: "Gi",
      },
    },
    {
      if_present: ["Cy"],
      if_not_present: ["Fo"],
      requires_substance: "B",
      replace: {
        Cy: "Fo",
      },
    },
    {
      if_present: ["Mu"],
      if_not_present: ["Sl"],
      requires_substance: "B",
      replace: {
        Mu: "Sl",
      },
    },
    {
      if_present: ["La"],
      if_not_present: ["Eu"],
      requires_substance: "B",
      replace: {
        La: "Eu",
      },
    },
    {
      if_present: ["Eu"],
      if_not_present: ["To"],
      requires_substance: "B",
      replace: {
        Eu: "To",
      },
    },
    {
      if_present: ["Fc"],
      if_not_present: ["Ca"],
      requires_substance: "B",
      replace: {
        Fc: "Ca",
      },
    },
    {
      if_present: ["El"],
      if_not_present: ["Re"],
      requires_substance: "B",
      replace: {
        El: "Re",
      },
    },
    {
      if_present: ["Sh"],
      if_not_present: ["Pa"],
      requires_substance: "B",
      replace: {
        Sh: "Pa",
      },
    },

    {
      if_present: ["En"],
      if_not_present: ["Eu"],
      requires_substance: "C",
      replace: {
        En: "Eu",
      },
    },
    {
      if_present: ["Gi"],
      if_not_present: ["Sm"],
      requires_substance: "C",
      replace: {
        Gi: "Sm",
      },
    },
    {
      if_present: ["Je"],
      if_not_present: ["Sn"],
      requires_substance: "C",
      replace: {
        Je: "Sn",
      },
    },
    {
      if_present: ["Sn"],
      if_not_present: ["Tt"],
      requires_substance: "C",
      replace: {
        Sn: "Tt",
      },
    },
    {
      if_present: ["Mu"],
      if_not_present: ["Se"],
      requires_substance: "C",
      replace: {
        Mu: "Se",
      },
    },
    {
      if_present: ["En"],
      if_not_present: ["Sp"],
      requires_substance: "C",
      replace: {
        En: "Sp",
      },
    },
    {
      if_present: ["Eu"],
      if_not_present: ["Sp", "En"],
      requires_substance: "C",
      replace: {
        Eu: "Sp",
      },
    },
    {
      if_present: ["La"],
      if_not_present: ["Fo"],
      requires_substance: "C",
      replace: {
        La: "Fo",
      },
    },
    {
      if_present: ["Di"],
      if_not_present: ["Gl"],
      requires_substance: "C",
      replace: {
        Di: "Gl",
      },
    },
    {
      if_present: ["Pa"],
      if_not_present: ["Ca"],
      requires_substance: "C",
      replace: {
        Pa: "Ca",
      },
    },
    {
      if_present: ["El"],
      if_not_present: ["Di"],
      requires_substance: "C",
      replace: {
        El: "Di",
      },
    },
    {
      if_present: ["Sh"],
      if_not_present: ["Fc"],
      requires_substance: "C",
      replace: {
        Sh: "Fc",
      },
    },

    {
      if_present: ["Cd"],
      if_not_present: ["Ex"],
      requires_substance: "D",
      add: ["Ex"],
    },
    {
      if_present: ["Ba"],
      if_not_present: ["Sn"],
      requires_substance: "D",
      replace: {
        Ba: "Sn",
      },
    },
    {
      if_present: ["Ag"],
      if_not_present: ["Sl"],
      requires_substance: "D",
      replace: {
        Ag: "Sl",
      },
    },
    {
      if_present: ["Je"],
      if_not_present: ["Gi"],
      requires_substance: "D",
      replace: {
        Je: "Gi",
      },
    },
    {
      if_present: ["Fc"],
      if_not_present: ["Eu"],
      requires_substance: "D",
      replace: {
        Fc: "Eu",
      },
    },
    {
      if_present: ["Sh"],
      if_not_present: ["En"],
      requires_substance: "D",
      replace: {
        Sh: "En",
      },
    },

    {
      if_present: ["Se"],
      if_not_present: ["Mu"],
      requires_substance: "E",
      replace: {
        Se: "Mu",
      },
    },
    {
      if_present: ["Eu"],
      if_not_present: ["En"],
      requires_substance: "E",
      replace: {
        Eu: "En",
      },
    },
    {
      if_present: ["Sp"],
      if_not_present: ["Eu"],
      requires_substance: "E",
      replace: {
        Sp: "Eu",
      },
    },
    {
      if_present: ["Tt"],
      if_not_present: ["Sn"],
      requires_substance: "E",
      replace: {
        Tt: "Sn",
      },
    },
    {
      if_present: ["Gl"],
      if_not_present: ["Di"],
      requires_substance: "E",
      replace: {
        Gl: "Di",
      },
    },
    {
      if_present: ["Fo"],
      if_not_present: ["La"],
      requires_substance: "E",
      replace: {
        Fo: "La",
      },
    },
    {
      if_present: ["Gl"],
      if_not_present: ["Di"],
      requires_substance: "E",
      replace: {
        Gl: "Di",
      },
    },
    {
      if_present: ["Di"],
      if_not_present: ["El"],
      requires_substance: "E",
      replace: {
        Di: "El",
      },
    },
    {
      if_present: ["Sc"],
      if_not_present: ["Ba"],
      requires_substance: "E",
      replace: {
        Sc: "Ba",
      },
    },
    {
      if_present: ["Fc"],
      if_not_present: ["Sh"],
      requires_substance: "E",
      replace: {
        Fc: "Sh",
      },
    },

    {
      if_present: ["Ca"],
      if_not_present: ["Ag"],
      requires_substance: "F",
      replace: {
        Ca: "Ag",
      },
    },
    {
      if_present: ["Cd"],
      if_not_present: ["Sn"],
      requires_substance: "F",
      replace: {
        Cd: "Sn",
      },
    },
    {
      if_present: ["Ex"],
      if_not_present: ["Se"],
      requires_substance: "F",
      replace: {
        Ex: "Se",
      },
    },
    {
      if_present: ["Fc"],
      if_not_present: ["Je"],
      requires_substance: "F",
      replace: {
        Fc: "Je",
      },
    },

    {
      if_present: ["En"],
      if_not_present: ["Mu"],
      requires_substance: "G",
      replace: {
        En: "Mu",
      },
    },
    {
      if_present: ["Fo"],
      if_not_present: ["To"],
      requires_substance: "G",
      replace: {
        Fo: "To",
      },
    },
    {
      if_present: ["En"],
      if_not_present: ["Sc"],
      requires_substance: "G",
      replace: {
        En: "Sc",
      },
    },
    {
      if_present: ["Eu"],
      if_not_present: ["Se"],
      requires_substance: "G",
      replace: {
        Eu: "Se",
      },
    },
    {
      if_present: ["Pa"],
      if_not_present: ["Ag"],
      requires_substance: "G",
      replace: {
        Pa: "Ag",
      },
    },
    {
      if_present: ["Mu"],
      if_not_present: ["Sc", "En"],
      requires_substance: "G",
      replace: {
        Mu: "Sc",
      },
    },

    {
      if_present: ["En"],
      if_not_present: ["Tp", "Cy"],
      requires_substance: "H",
      replace: {
        En: "Tp",
      },
    },
    {
      if_present: ["Ca"],
      if_not_present: ["Sn"],
      requires_substance: "H",
      replace: {
        Ca: "Sn",
      },
    },
    {
      if_present: ["To"],
      if_not_present: ["Sm"],
      requires_substance: "H",
      replace: {
        To: "Sm",
      },
    },
    {
      if_present: ["Lf"],
      if_not_present: ["Re"],
      requires_substance: "H",
      replace: {
        Lf: "Re",
      },
    },
    {
      if_present: ["Cy"],
      if_not_present: ["Tp"],
      requires_substance: "H",
      replace: {
        Cy: "Tp",
      },
    },
    {
      if_present: ["Di"],
      if_not_present: ["Fc"],
      requires_substance: "H",
      replace: {
        Di: "Fc",
      },
    },
    {
      if_present: ["Fc"],
      if_not_present: ["Si"],
      requires_substance: "H",
      replace: {
        Fc: "Si",
      },
    },
    {
      if_present: ["Pa"],
      if_not_present: ["Je"],
      requires_substance: "H",
      replace: {
        Pa: "Je",
      },
    },
    {
      if_present: ["Sm"],
      if_not_present: ["Ag"],
      requires_substance: "H",
      replace: {
        Sm: "Ag",
      },
    },

    {
      if_present: ["At"],
      if_not_present: ["Eu"],
      requires_substance: "I",
      replace: {
        At: "Eu",
      },
    },
    {
      if_present: ["Ag"],
      if_not_present: ["Tt"],
      requires_substance: "I",
      replace: {
        Ag: "Tt",
      },
    },
    {
      if_present: ["Sn"],
      if_not_present: ["Be"],
      requires_substance: "I",
      replace: {
        Sn: "Be",
      },
    },
    {
      if_present: ["Mu"],
      if_not_present: ["To"],
      requires_substance: "I",
      replace: {
        Mu: "To",
      },
    },
    {
      if_present: ["La"],
      if_not_present: ["Lf"],
      requires_substance: "I",
      replace: {
        La: "Lf",
      },
    },
    {
      if_present: ["Sh"],
      if_not_present: ["Re"],
      requires_substance: "I",
      replace: {
        Sh: "Re",
      },
    },

    {
      if_present: ["Ca"],
      if_not_present: ["Ba"],
      requires_substance: "J",
      replace: {
        Ca: "Ba",
      },
    },
    {
      if_present: ["To"],
      if_not_present: ["Sn"],
      requires_substance: "J",
      replace: {
        To: "Sn",
      },
    },
    {
      if_present: ["Fo"],
      if_not_present: ["Pa"],
      requires_substance: "J",
      replace: {
        Fo: "Pa",
      },
    },
    {
      if_present: ["Cd"],
      if_not_present: ["Gi"],
      requires_substance: "J",
      replace: {
        Cd: "Gi",
      },
    },
    {
      if_present: ["Eu"],
      if_not_present: ["Si"],
      requires_substance: "J",
      replace: {
        Eu: "Si",
      },
    },
    {
      if_present: ["Re"],
      if_not_present: ["Tp"],
      requires_substance: "J",
      replace: {
        Re: "Tp",
      },
    },

    {
      if_present: ["En"],
      if_not_present: ["Pa", "Mu"],
      requires_substance: "K",
      replace: {
        En: "Pa",
      },
    },
    {
      if_present: ["Ca"],
      if_not_present: ["Sl"],
      requires_substance: "K",
      replace: {
        Ca: "Sl",
      },
    },
    {
      if_present: ["To"],
      if_not_present: ["Tt"],
      requires_substance: "K",
      replace: {
        To: "Tt",
      },
    },
    {
      if_present: ["Sp"],
      if_not_present: ["Be"],
      requires_substance: "K",
      replace: {
        Sp: "Be",
      },
    },
    {
      if_present: ["Gl"],
      if_not_present: ["To"],
      requires_substance: "K",
      replace: {
        Gl: "To",
      },
    },
    {
      if_present: ["Fo"],
      if_not_present: ["Ca"],
      requires_substance: "K",
      replace: {
        Fo: "Ca",
      },
    },
    {
      if_present: ["Mu"],
      if_not_present: ["Ag"],
      requires_substance: "K",
      replace: {
        Mu: "Ag",
      },
    },
    {
      if_present: ["En", "Pa"],
      if_not_present: ["Ba"],
      requires_substance: "K",
      replace: {
        En: "Ba",
      },
    },
    {
      if_present: ["El"],
      if_not_present: ["At"],
      requires_substance: "K",
      replace: {
        El: "At",
      },
    },

    {
      if_present: ["At"],
      if_not_present: ["Sn"],
      requires_substance: "L",
      replace: {
        At: "Sn",
      },
    },
    {
      if_present: ["Eu"],
      if_not_present: ["Be"],
      requires_substance: "L",
      replace: {
        Eu: "Be",
      },
    },
    {
      if_present: ["La"],
      if_not_present: ["Ca"],
      requires_substance: "L",
      replace: {
        La: "Ca",
      },
    },
    {
      if_present: ["Di"],
      if_not_present: ["To"],
      requires_substance: "L",
      replace: {
        Di: "To",
      },
    },

    {
      if_present: ["Ag"],
      if_not_present: ["Ca"],
      requires_substance: "M",
      replace: {
        Ag: "Ca",
      },
    },
    {
      if_present: ["Gi"],
      if_not_present: ["Re"],
      requires_substance: "M",
      replace: {
        Gi: "Re",
      },
    },
    {
      if_present: ["Tp"],
      if_not_present: ["El"],
      requires_substance: "M",
      replace: {
        Tp: "El",
      },
    },

    {
      if_present: ["En"],
      if_not_present: ["Cy", "Tp"],
      requires_substance: "N",
      replace: {
        En: "Cy",
      },
    },
    {
      if_present: ["Ca"],
      if_not_present: ["Gl"],
      requires_substance: "N",
      replace: {
        Ca: "Gl",
      },
    },
    {
      if_present: ["Sn"],
      if_not_present: ["Ca"],
      requires_substance: "N",
      replace: {
        Sn: "Ca",
      },
    },
    {
      if_present: ["Je"],
      if_not_present: ["Pa"],
      requires_substance: "N",
      replace: {
        Je: "Pa",
      },
    },
    {
      if_present: ["At"],
      if_not_present: ["La"],
      requires_substance: "N",
      replace: {
        At: "La",
      },
    },
    {
      if_present: ["Sl"],
      if_not_present: ["To"],
      requires_substance: "N",
      replace: {
        Sl: "To",
      },
    },
    {
      if_present: ["Tp"],
      if_not_present: ["En"],
      requires_substance: "N",
      replace: {
        Tp: "En",
      },
    },
    {
      if_present: ["Si"],
      if_not_present: ["Fc"],
      requires_substance: "N",
      replace: {
        Si: "Fc",
      },
    },
    {
      if_present: ["Fc"],
      if_not_present: ["Di"],
      requires_substance: "N",
      replace: {
        Fc: "Di",
      },
    },
    {
      if_present: ["Sn"],
      if_not_present: ["Gl"],
      requires_substance: "N",
      replace: {
        Sn: "Gl",
      },
    },
    {
      if_present: ["Tp"],
      if_not_present: ["Cy"],
      requires_substance: "N",
      replace: {
        Tp: "Cy",
      },
    },
    {
      if_present: ["Sh"],
      if_not_present: ["El"],
      requires_substance: "N",
      replace: {
        Sh: "El",
      },
    },

    {
      if_present: ["Se"],
      if_not_present: ["Gi"],
      requires_substance: "O",
      replace: {
        Se: "Gi",
      },
    },
    {
      if_present: ["Lf"],
      if_not_present: ["El"],
      requires_substance: "O",
      replace: {
        Lf: "El",
      },
    },
    {
      if_present: ["Gl"],
      if_not_present: ["Re"],
      requires_substance: "O",
      replace: {
        Gl: "Re",
      },
    },
    {
      if_present: ["Fo"],
      if_not_present: ["En"],
      requires_substance: "O",
      replace: {
        Fo: "En",
      },
    },
    {
      if_present: ["Ex"],
      if_not_present: ["Eu"],
      requires_substance: "O",
      replace: {
        Ex: "Eu",
      },
    },

    {
      if_present: ["Mu"],
      if_not_present: ["Tt"],
      requires_substance: "P",
      replace: {
        Mu: "Tt",
      },
    },
    {
      if_present: ["Eu"],
      if_not_present: ["Zo", "El"],
      requires_substance: "P",
      replace: {
        Eu: "Zo",
      },
    },
    {
      if_present: ["El"],
      if_not_present: ["Zo"],
      requires_substance: "P",
      replace: {
        El: "Eu",
      },
    },
    {
      if_present: ["La"],
      if_not_present: ["Cd"],
      requires_substance: "P",
      replace: {
        La: "Cd",
      },
    },
    {
      if_present: ["El"],
      if_not_present: ["Eu"],
      requires_substance: "P",
      replace: {
        El: "Eu",
      },
    },
    {
      if_present: ["Cy"],
      if_not_present: ["Gl"],
      requires_substance: "P",
      replace: {
        Cy: "Gl",
      },
    },
    {
      if_present: ["Sh"],
      if_not_present: ["Mu"],
      requires_substance: "P",
      replace: {
        Sh: "Mu",
      },
    },
  ],
};

const clients = [
  // Northtown
  {
    name: "Austin Steiner",
    desired_effects: ["Calorie-Dense", "Euphoric", "Munchies"],
  },
  {
    name: "Beth Penn",
    desired_effects: ["Schizophrenic", "Lethal", "Seizure-Inducing"],
  },
  {
    name: "Chloe Bowers",
    desired_effects: ["Euphoric", "Shrinking", "Munchies"],
  },
  {
    name: "Donna Martin",
    desired_effects: ["Refresing", "Lethal", "Munchies"],
  },
  {
    name: "Geraldine Poon",
    desired_effects: ["Balding", "Long Faced", "Sedating"],
  },
  {
    name: "Jessi Waters",
    desired_effects: ["Energizing", "Paranoia", "Sneaky"],
  },
  {
    name: "Kathy Henderson",
    desired_effects: ["Athletic", "Energizing", "Focused"],
  },
  {
    name: "Kyle Cooley",
    desired_effects: ["Calming", "Munchies", "Smelly"],
  },
  {
    name: "Ludwig Meyer",
    desired_effects: ["Euphoric", "Refreshing", "Energizing"],
  },
  {
    name: "Mick Lubbin",
    desired_effects: ["Euphoric", "Bright-Eyed", "Sneaky"],
  },
  {
    name: "Mrs Ming",
    desired_effects: ["Gingeritis", "Shrinking", "Electrifying"],
  },
  {
    name: "Peggy Mayers",
    desired_effects: ["Bright-Eyed", "Refreshing", "Energizing"],
  },
  {
    name: "Peter File",
    desired_effects: ["Focused", "Refreshing", "Sneaky"],
  },
  {
    name: "Sam Thompson",
    desired_effects: ["Munchies", "Athletic", "Smelly"],
  },
  // Downtown
  {
    name: "Elizabeth Homley",
    desired_effects: ["Sedating", "Tropic Thunder", "Toxic"],
  },
  {
    name: "Eugene Buckley",
    desired_effects: ["Schizophrenic", "Toxic", "Calming"],
  },
  {
    name: "Sam Thompson",
    desired_effects: ["Munchies", "Athletic", "Smelly"],
  },
  {
    name: "Greg Figgle",
    desired_effects: ["Euphoric", "	Tropic Thunder", "Toxic"],
  },
  {
    name: "Jeff Gilmore",
    desired_effects: ["Sedating", "Long Faced", "Laxative"],
  },
  {
    name: "Jennifer Rivera",
    desired_effects: ["Shrinking", "Slippery", "Toxic"],
  },
  {
    name: "Louis Fourier",
    desired_effects: ["Shrinking", "Seizure-Inducing", "Paranoia"],
  },
  {
    name: "Lucy Pennington",
    desired_effects: ["Calorie-Dense", "Euphoric", "Glowing"],
  },
  {
    name: "Philip Wentworth",
    desired_effects: ["Refreshing", "Shrinking", "Foggy"],
  },
  // Docks
  {
    name: "Anna Chersterfield",
    desired_effects: ["Refreshing", "Thought-Provoking", "Euphoric"],
  },
  {
    name: "Billy Kramer",
    desired_effects: ["Spicy", "Schizophrenic", "Long Faced"],
  },
  {
    name: "Cranky Frank",
    desired_effects: ["Laxative", "Toxic", "Tropic Thunder"],
  },
  {
    name: "Genghis Barn",
    desired_effects: ["Electrifying", "Gingeritis", "Athletic"],
  },
  {
    name: "Lisa Gardener",
    desired_effects: ["Laxative", "Schizophrenic", "Anti-Gravity"],
  },
  {
    name: "Mac Cooper",
    desired_effects: ["Focused", "Spicy", "Long Faced"],
  },
  {
    name: "Marco Barone",
    desired_effects: ["Sneaky", "Long Faced", "Refreshing"],
  },
  {
    name: "Melissa Wood",
    desired_effects: ["Anti-Gravity", "Refreshing", "Slippery"],
  },
  // Suburbia
  {
    name: "Chris Sullivan",
    desired_effects: ["Sneaky", "Euphoric", "Electrifying"],
  },
  {
    name: "Hank Stevenson",
    desired_effects: ["Sneaky", "Toxic", "Schizophrenic"],
  },
  {
    name: "Jeremy Wilkinson",
    desired_effects: ["Balding", "Slippery", "Calorie Dense"],
  },
  {
    name: "Carl Bundy",
    desired_effects: ["Glowing", "Athletic", "Disorienting"],
  },
  {
    name: "Harold Colt",
    desired_effects: ["Foggy", "Spicy", "Jennerising"],
  },
  {
    name: "Jack Knight",
    desired_effects: ["Shrinking", "Tought-Provoking", "Lethal"],
  },
  {
    name: "Dennis Kennedy",
    desired_effects: ["Athletic", "Focused", "Bright-Eyed"],
  },
  // West Ville
  {
    name: "Charles Rowland",
    desired_effects: ["Sedating", "Disorienting", "Foggy"],
  },
  {
    name: "Dean Webster",
    desired_effects: ["Glowing", "Laxative", "Spicy"],
  },
  {
    name: "George Greene",
    desired_effects: ["Energizing", "Focused", "Thought-Provoking"],
  },
  {
    name: "Trent Sherman",
    desired_effects: ["Athletic", "Balding", "Calorie-Dense"],
  },
  {
    name: "Meg Cooley",
    desired_effects: ["Sneaky", "Slippery", "Thought-Provoking"],
  },
  {
    name: "Joyce Ball",
    desired_effects: ["Euphoric", "Thought-Provoking", "Calorie-Dense"],
  },
  {
    name: "Keith Wagner",
    desired_effects: ["Slippery", "Sneaky", "Tropic Thunder"],
  },
  {
    name: "Doris Lubbin",
    desired_effects: ["Spicy", "Tropic Thunder", "Balding"],
  },
  {
    name: "Jerry Montero",
    desired_effects: ["Gingeritis", "Smelly", "Thought-Provoking"],
  },
  {
    name: "Kim Delaney",
    desired_effects: ["Shrinking", "Jennerising", "Focused"],
  },
  // Uptown
  {
    name: "Fiona Hancock",
    desired_effects: ["Lethal", "Tought-Provoking", "Tropic Thunder"],
  },
  {
    name: "Jen Heard",
    desired_effects: ["Disorienting", "Energizing", "Sneaky"],
  },
  {
    name: "Walter Cussler",
    desired_effects: ["Schizophrenic", "Calming", "Balding"],
  },
  {
    name: "Herbert Bleuball",
    desired_effects: ["Slippery", "Foggy", "Explosive"],
  },
  {
    name: "Michael Boog",
    desired_effects: ["Jennerising", "Calming", "Schizophrenic"],
  },
  {
    name: "Tobas Wentworth",
    desired_effects: ["Lethal", "Disorienting", "Spicy"],
  },
  {
    name: "Pearl Moore",
    desired_effects: ["Schizophrenic", "Gingeritis", "Explosive"],
  },
];

function applyRules(baseEffectList, selectedSubstances) {
  const original = [...baseEffectList];
  let working = [...baseEffectList];
  const blocked = [];
  const processed = new Set();

  // PHASE 1 — Unblocked rules
  for (const rule of mixData.rules) {
    const {
      if_present = [],
      if_not_present = [],
      requires_substance,
      replace = {},
      add = [],
    } = rule;
    if (requires_substance && !selectedSubstances.includes(requires_substance))
      continue;
    if (!if_present.every((e) => original.includes(e))) continue;

    if (if_not_present.some((e) => original.includes(e))) {
      blocked.push(rule);
      continue;
    }

    for (const [oldEff, newEff] of Object.entries(replace)) {
      if (original.includes(oldEff) && !processed.has(oldEff)) {
        working = working.map((e) => (e === oldEff ? newEff : e));
        processed.add(oldEff);
      }
    }
    for (const newEff of add) {
      if (!working.includes(newEff) && working.length < 8) {
        working.push(newEff);
      }
    }
  }

  // PHASE 2 — Previously blocked rules
  for (const rule of blocked) {
    const { if_not_present = [], replace = {}, add = [] } = rule;
    if (if_not_present.some((e) => working.includes(e))) continue;

    for (const [oldEff, newEff] of Object.entries(replace)) {
      if (working.includes(oldEff)) {
        working = working.map((e) => (e === oldEff ? newEff : e));
      }
    }
    for (const newEff of add) {
      if (!working.includes(newEff) && working.length < 8) {
        working.push(newEff);
      }
    }
  }

  return Array.from(new Set(working)).slice(0, 8);
}

function calculateEffects(selects, weedTypeForMixing) {
  const fullNameToAbbrev = {};
  Object.entries(mixData.effect_abbreviations).forEach(
    ([abbrev, full]) => (fullNameToAbbrev[full] = abbrev)
  );

  // Build initial effectList from the weed type (or previous mix)
  const effectsSet = new Set();
  if (mixData.weed_types[weedTypeForMixing]) {
    mixData.weed_types[weedTypeForMixing].forEach((e) => effectsSet.add(e));
  }

  let effectList = Array.from(effectsSet);
  let substanceCost = 0;

  // Helper to compare arrays (order matters)
  function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  selects.forEach((sub) => {
    if (!sub) return;

    const directEffects =
      mixData.effects.find((e) => e.substance === sub)?.effect || [];

    const isSpecialD = sub === "D";
    // Get the cost for this substance (but only add it if we use it)
    const subCost = parseFloat(mixData.substances_price[sub] || "0");

    if (effectList.length < 8) {
      // Not at the cap—add the default effect if applicable.
      if (!isSpecialD) {
        directEffects.forEach((eff) => {
          if (!effectList.includes(eff) && effectList.length < 8)
            effectList.push(eff);
        });
      }
      effectList = applyRules(effectList, [sub]);
      if (isSpecialD) {
        directEffects.forEach((eff) => {
          if (!effectList.includes(eff) && effectList.length < 8)
            effectList.push(eff);
        });
      }
      // Accept this substance: add its cost.
      substanceCost += subCost;
    } else {
      // Already at 8 effects.
      // Do NOT add the default effect; only simulate applying the substance's rules.
      const simulatedEffects = applyRules([...effectList], [sub]);
      if (arraysEqual(simulatedEffects, effectList)) {
        // Substance adds neither its default nor any rule-based change.
        // Mark it as skipped and do not add its cost.
        return; // Skip further processing for this substance.
      } else {
        // Accept the substance: update effectList and add its cost.
        effectList = simulatedEffects;
        substanceCost += subCost;
      }
    }
  });

  const displayNames = effectList.map(
    (e) => mixData.effect_abbreviations[e] || e
  );

  // Pricing & Sell Price calculations.
  const weedPrice = parseFloat(mixData.weed_price["OG Kush"] || "0");
  const effectSum = effectList.reduce(
    (sum, e) => sum + parseFloat(mixData.effect_price[e] || "0"),
    0
  );
  const sellPrice = Math.round(weedPrice * (1 + effectSum));

  return {
    displayNames,
    sellPrice,
    substanceCost,
    profit: sellPrice - substanceCost,
  };
}

function findEffectCombinations(
  ingredients,
  desired_effects,
  step_limit,
  base_material
) {
  const results = [];
  const combinations = [];
  const repeatableItems = ["A", "K"];
  const seenResults = new Set(); // To track unique results

  const low_level = ingredients.map((el) => {
    return Object.keys(mixData.substances).find(
      (key) => mixData.substances[key] === el
    );
  });

  // Helper function to generate combinations with special rules
  function generateCombinations(size, currentCombination = []) {
    if (currentCombination.length === size) {
      combinations.push([...currentCombination]);
      return;
    }

    for (let i = 0; i < low_level.length; i++) {
      const item = low_level[i];

      // Rule: Can repeat only A or K substances
      const itemCount = currentCombination.filter((el) => el === item).length;
      if (itemCount > 0 && !repeatableItems.includes(item)) {
        continue; // Skip non-repeatable items that are already in the combination
      }

      // Rule: Allow repeating up to 2 times only
      if (itemCount >= 2) {
        continue; // Skip if item already appears twice
      }

      // Rule: Do not allow neighbor repeat
      if (
        currentCombination.length > 0 &&
        currentCombination[currentCombination.length - 1] === item
      ) {
        continue; // Skip if the last added item is the same
      }

      currentCombination.push(item);
      generateCombinations(size, currentCombination);
      currentCombination.pop();
    }
  }

  // Generate all combinations of sizes 2, 3, and 4
  for (let size = 2; size <= step_limit; size++) {
    generateCombinations(size);
  }

  // Test each combination with calculateEffects
  combinations.forEach((combo) => {
    const effects = calculateEffects(combo, base_material);

    // Check which desired effects are in the result
    const matchedEffects = desired_effects.filter((effect) =>
      effects.displayNames.includes(effect)
    );

    // Use 'some' instead of 'every' - at least one effect must match
    const hasAnyDesiredEffect = matchedEffects.length > 0;

    if (hasAnyDesiredEffect) {
      // Create a unique key based on sorted combination, sorted displayNames, and profit
      const sortedCombo = [...combo].sort().join(",");
      const sortedDisplayNames = [...effects.displayNames].sort().join(",");
      const uniqueKey = `${sortedCombo}|${sortedDisplayNames}|${effects.profit}`;

      // Check if we've already seen this result
      if (!seenResults.has(uniqueKey)) {
        seenResults.add(uniqueKey);

        const fullNameCombo = combo.map((el) => mixData.substances[el]);

        results.push({
          combination: fullNameCombo,
          effects: effects,
          matchedEffects: matchedEffects,
          matchCount: matchedEffects.length,
        });
      }
    }
  });

  // Sort results by number of matched effects (most matches first) and then by profit
  const sorted_result = results.sort(
    (a, b) => b.matchCount - a.matchCount || b.effects.profit - a.effects.profit
  );

  return sorted_result;
}

// Use ingredients from mixData.substances only!
const available_ingredients = ["Cuke", "Donut", "Banana", "Paracetamol"];
const target_client = "Austin Steiner";
const base_material = "OG Kush";
const step_limit = 4;
const effects = clients.find((spec) => spec.name === target_client);

// TODO: Update dataset & High Level bug fix
// Source: https://steamcommunity.com/sharedfiles/filedetails/?id=3453359739

if (effects) {
  const validCombinations = findEffectCombinations(
    available_ingredients,
    effects.desired_effects,
    step_limit,
    base_material
  );
  console.log(
    "Valid combinations:",
    JSON.stringify(validCombinations, null, 2)
  );
} else console.info("Client not found.");
