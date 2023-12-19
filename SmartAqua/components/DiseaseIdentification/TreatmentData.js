export const Questions = {
  Redspot: [
    {
      name: "Fish Species",
      question:
        "Please specify the type of fish affected by Epizootic Ulcerative Syndrome (EUS)?",

      options: ["Platy Fish", "Molly Fish", "Swordtail Fish"],
    },
    {
      name: "Severity of Infection",
      question:
        "On a scale of 1 to 3, how would you rate the severity of the infection?",
      options: ["Mild", "Moderate", "Severe"],
    },
    {
      name: "Age",
      question: "What is the approximate age(in months) of the affected fish? ",
      options: [
        "Less than 1 month",
        "1 to 3 months",
        "3 to 12 months",
        "More than 1 year",
      ],
    },
    {
      name: "Water Temperature",
      question: "What is the current water temperature in the fish tank?",
      options: [
        "Below 70°F (21°C)",
        "70-75°F (21-24°C)",
        "75-80°F (24-27°C)",
        "Above 80°F (27°C)",
      ],
    },
    {
      name: "Treatment Preferences",
      question:
        "Do you prefer natural remedies or commercial medications for treatment?",
      options: ["Natural", "Commercial", "Herbal"],
    },
    // Add more topics for Redspot as needed
  ],
  Whitespot: [
    {
      name: "Symptoms",
      question:
        "Please describe the visible symptoms observed on the affected fish.",

      options: [
        "White spots on fins and body",
        "Lethargy and decreased activity",
        "Rubbing against objects in the tank",
        "Loss of appetite",
        "Clamped fins",
        "Other",
      ],
    },
    {
      name: "Type of fish",
      question:
        "Please specify the type of fish affected by Epizootic Ulcerative Syndrome (EUS)?",
      options: ["Platy Fish", "Molly Fish", "Tetra Fish"],
    },

    {
      name: "Quarantine",
      question: "Do you have a quarantine tank for isolating sick fish?",
      options: ["Yes", "No"],
    },
    {
      name: "Water Temperature",
      question: "What is the current water temperature in the fish tank?",
      options: [
        "Below 70°F (21°C)",
        "70-85°F (21-29°C)",
        "85-90°F (29-27°C)",
        "Above 90°F (32°C)",
      ],
    },
    {
      name: "Treatment Preferences",
      question:
        "Do you prefer natural remedies or commercial medications for treatment?",
      options: ["Natural", "Commercial", "Herbal"],
    },
    // Add more topics for Whitespot as needed
  ],
  Tailrot: [
    {
      name: "Fish Species",
      question: "Please specify the type of fish affected by tail rot?",
      options: ["Platy Fish", "Molly Fish", "Tetra Fish"],
    },
    {
      name: "Treatment Preferences",
      question:
        "Do you prefer natural remedies or commercial medications for treatment?",
      options: ["Natural", "Commercial", "Herbal"],
    },
    {
      name: "Severity of Infection",
      question: "How would you rate the severity of the tail rot infection?",
      options: ["Mild", "Moderate", "Severe"],
    },
    {
      name: "Age",
      question: "What is the approximate age (in months) of the affected fish?",
      options: [
        "Less than 1 month",
        "1 to 3 months",
        "3 to 12 months",
        "More than 1 year",
      ],
    },
    {
      name: "Tank Environment",
      question: "What is the typical water changing interval?",
      options: [
        "Once a week",
        "Every 2 weeks",
        "Once a month",
        "Every 2 months",
        "Other",
      ],
    },
    {
      name: "Water Temperature",
      question: "What is the current water temperature in the fish tank?",
      options: [
        "Below 70°F (21°C)",
        "70-75°F (21-24°C)",
        "75-80°F (24-27°C)",
        "Above 80°F (27°C)",
      ],
    },
    {
      name: "Tank Size",
      question: "What is the approximate size of the fish tank in gallons?",
      options: [
        "Less than 10 gallons",
        "10-20 gallons",
        "20-50 gallons",
        "More than 50 gallons",
      ],
    },

    // Add more topics for Tailrot as needed
  ],
  Healthy: [
    {
      name: "Your Fish is Healthy ",
      question: "",
      options: [],
    },
    // Add more topics for healthy as needed
  ],
  default: [
    {
      name: "Your Fish is Healthy ",
      question: "",
      options: [],
    },
    // Add more topics for default as needed
  ],
};

export const RedspotMapping = {
  "Platy Fish":
    "Isolate the infected Platy Fish to prevent the spread of the disease. Maintain proper water parameters and hygiene in the tank.",
  "Molly Fish":
    "Isolate the infected Molly Fish to prevent the spread of the disease. Maintain proper water parameters and hygiene in the tank.",
  "Swordtail Fish":
    "Isolate the infected Swordtail Fish to prevent the spread of the disease. Maintain proper water parameters and hygiene in the tank.",
  Mild: "Increase water cleanliness and monitor fish behavior. Consider using aquarium salt to aid healing.",
  Moderate:
    "Isolate the infected fish, improve water quality, and use appropriate antibiotics or antifungal treatments.",
  Severe:
    "Immediate isolation, intensive antibiotic or antifungal treatment, and consultation with a fish health professional.",
  "Less than 1 month":
    "Focus on supportive care and providing a clean environment.",
  "1 to 3 months": "Introduce mild treatments to avoid stressing young fish.",
  "3 to 12 months": "Implement targeted medications to combat the infection.",
  "More than 1 year":
    "Use stronger medications and consider a quarantine tank.",
  "Below 70°F (21°C)":
    "Gradually increase the water temperature to the range of 70-75°F (21-24°C) for better immune response.",
  "70-75°F (21-24°C)":
    "Maintain the 70-75°F (21-24°C) temperature range for treament duration",
  "75-80°F (24-27°C)":
    "Gradually reduce the water temperature to the range of 75-80°F (24-27°C) ",
  "Above 80°F (27°C)":
    "Gradually reduce the water temperature to the range of 75-80°F (24-27°C) to alleviate stress.",
  Natural:
    "Dissolve aquarium salt (sodium chloride) in the tank water at the recommended dosage. Salt can help reduce stress and support the fish's immune system.",
  Commercial:
    "Formalin/Formaldehyde could used to control the spread of EUS. They can be used as dips, baths, or as part of the water treatment. However, formalin can be toxic and should be used with caution and according to the manufacturer's instructions.",
  Herbal:
    "Herbal treatments, such as extracts from neem leaves or tea tree oi can use be used to provide temporary relief and control the spread of the disease. These treatments should be used cautiously and in consultation with an expert.",
};

export const WhiteMapping = {
  "Platy Fish":
    "Isolate the infected Platy Fish to prevent the spread of the disease. Maintain proper water parameters and hygiene in the tank.",
  "Molly Fish":
    "Isolate the infected Molly Fish to prevent the spread of the disease. Maintain proper water parameters and hygiene in the tank.",
  "Tetra Fish":
    "Isolate the infected Tetra Fish to prevent the spread of the disease. Maintain proper water parameters and hygiene in the tank.",
  "White spots on fins and body":
    "White spots on fins and body are indicative of Whitespot. Begin treatment immediately to prevent further spreading.",
  "Lethargy and decreased activity":
    "Lethargy and decreased activity may be signs of advanced infection. Begin treatment promptly.",
  "Rubbing against objects in the tank":
    "Fish rubbing against objects may indicate discomfort. Begin treatment to alleviate symptoms.",
  "Loss of appetite":
    "Loss of appetite is a common symptom of Whitespot. Start treatment and provide a suitable diet.",
  "Clamped fins":
    "Clamped fins can signal stress and discomfort. Treat the fish promptly to improve its condition.",
  "Below 70°F (21°C)":
    "Gradually increase the temperature by 2ºF (1ºC) per hour until it reaches the correct temperature temperature of the water to 86ºF (30ºC) and maintain this temperature for at least 10 days. ",
  "70-85°F (21-29°C)":
    "Gradually increase the temperature by 2ºF (1ºC) per hour until it reaches the correct temperature temperature of the water to 86ºF (30ºC) and maintain this temperature for at least 10 days.",
  "85-90°F (29-27°C)": "Maintain this tempreature for at least 10 days",
  "Above 90°F (32°C)":
    "Gradually reduce the water temperature to the range of 86°F (24-29°C) and maintain it tempreature for at least 10 days.",
  Other: "Monitor the fish closely for any other unusual symptoms.",
  Yes: "Having a quarantine tank is essential for isolating sick fish and preventing disease spread.",
  No: "Consider setting up a quarantine tank to isolate sick fish in the future.",
  Natural:
    "Adding aquarium salt (non-iodized salt) to the water can help reduce the severity of the infection. This can be done by creating a separate bath for the infected fish or by gradually increasing the salt concentration in the main tank. This treatment works best for freshwater fish, so make sure to research the appropriate salt concentration for your specific fish species.    ",
  Commercial:
    "There are various commercially available medications specifically designed to treat ich in aquarium fish. These medications often contain active ingredients like formalin, malachite green, or copper. Follow the manufacturer's instructions carefully and consider isolating infected fish in a separate quarantine tank during treatment to prevent harm to other tank inhabitants.    ",
  Herbal:
    "Aloe vera is believed to have soothing and healing properties. Some aquarists have used aloe vera products to help alleviate the discomfort caused by ich. Look for aquarium-safe aloe vera preparations.    ",
};

export const TailrotMapping = {
  "Platy Fish":
    "Isolate the infected platy fish to prevent the spread of the disease. Maintain proper water parameters and hygiene in the tank.",
  "Molly Fish":
    "Isolate the infected molly fish to prevent the spread of the disease. Maintain proper water parameters and hygiene in the tank.",
  "Tetra Fish":
    "Isolate the infected tetra to prevent the spread of the disease. Maintain proper water parameters and hygiene in the tank.",
  Natural:
    "Adding aquarium salt at a recommended dosage can help reduce the growth of bacteria and fungi. Make sure to follow guidelines for salt concentration.",
  Commercial:
    "Use commercial either Melafix, Pimafix or Triple Sulfa Medications as treatments for tailrot desease. Make sure to follow guidelines and recomonded dosage of each medecine",
  Herbal:
    "Tea tree oil has natural antibacterial properties.  It can be added to a quarantine tank to avoid harming beneficial bacteria in the main aquarium. Aloe vera also can be applied topically to the affected fins or added to the water after proper dilution.    ",
  Mild: "Increase water cleanliness and monitor fish behavior. Consider using aquarium salt to aid healing.",
  Moderate:
    "Isolate the infected fish, improve water quality, and use appropriate natural and herbal treatments given bellow.",
  Severe:
    "Immediately  isolate the fish and consultation with a fish health professional.",
  "Less than 1 month":
    "Focus on supportive care and providing a clean environment.",
  "1 to 3 months":
    "Introduce mild and natural treatments to avoid stressing young fish.",
  "3 to 12 months": "Implement targeted medications to combat the infection.",
  "More than 1 year":
    "Use stronger medications and consider a quarantine tank.",
  "Once a week":
    "Perform weekly water changes to maintain good water quality and prevent further stress on the fish. No filteration system requred.",
  "Every 2 weeks":
    "Perform bi-weekly water changes to ensure a clean and stable environment. small filteration system would be sufficent.",
  "Once a month":
    "Try to perform monthly water changes to prevent the buildup of harmful substances. If unable to do so use moderate to high level filteration system",
  "Every 2 months":
    "Try to perform water changes every two weeks to maintain water quality if unable use strong fileration system",
  Other:
    "Specify a suitable water changing interval based on your tank conditions.",
  "Below 70°F (21°C)":
    "Gradually increase the water temperature to the range of 70-75°F (21-24°C) for better immune response.",
  "70-75°F (21-24°C)":
    "Maintain the 70-75°F (21-24°C) temperature range for the treatment duration.",
  "75-80°F (24-27°C)":
    "Gradually reduce the water temperature to the range of 75-80°F (24-27°C) to alleviate stress.",
  "Above 80°F (27°C)":
    "Gradually reduce the water temperature to the range of 75-80°F (24-27°C) to alleviate stress.",
  "Less than 10 gallons":
    "Smaller tanks require diligent maintenance. Ensure proper high quality filtration and water changes.",
  "10-20 gallons":
    "Moderately sized tanks require regular maintenance to prevent water quality issues.",
  "20-50 gallons":
    "Larger tanks provide more stability but still require regular water changes and monitoring.",
  "More than 50 gallons":
    "Large tanks offer better water quality control. Maintain regular maintenance routine.",
};
