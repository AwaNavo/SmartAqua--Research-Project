import * as React from "react";
import { Text } from "react-native";
import styles from "./Styles";

// DiseaseUtils.js
export const renderDiseaseInfo = (responseText) => {
  if (responseText === "Redspot") {
    return (
      <Text style={styles.diseaseInfoText}>
        "Red Spot" or "Epizootic ulcerative syndrome" (EUS), is a disease that
        can affect many farmed freshwater and blackish water fish species. EUS
        is caused by a fungus called Aphanomyces invadans and presents as red
        lesions or deep ulcers. Contributing factors: prolonged cold
        temperatures, crowding, conditions associated with drought and after
        effects of ongoing rainfalls and flooding.
      </Text>
    );
  } else if (responseText === "Whitespot") {
    return (
      <Text style={styles.diseaseInfoText}>
        “White spot” or simply “Ich” is a contagious parasitic disease of both
        freshwater and marine fish. Caused by Ichyophthirius multifilis, the
        parasite infects the fish after moving from the bottom of the pond. The
        parasite attaches itself to the fish, moving under the skin where it
        feeds on cells and body fluids. Causes damage to fish tissue which can
        lead to bacterial and fungal infections. The parasites are often
        introduced through infected fish or pond equipment. Changes in
        environmental conditions such as lower temperature can also cause the
        release.
      </Text>
    );
  } else if (responseText === "Tailrot") {
    return (
      <Text style={styles.diseaseInfoText}>
        "Tail Rot" is one of the most common and preventable diseases of
        freshwater and saltwater fish. Often caused by several types of
        gram-negative bacteria like Flexibacter columnaris and occurs
        simultaneously with other diseases. It can be difficult to cure,
        especially in the more advanced stages. This disease always
        environmental in nature and often related to stress which can weaken a
        fish’s immune system.{" "}
      </Text>
    );
  } else if (responseText === "Healthy") {
    return (
      <Text style={styles.diseaseInfoText}>
        Your fish appears to be healthy. Keep up the good care!
      </Text>
    );
  } else {
    return null;
  }
};

export const renderTreatmentInfo = (responseText) => {
  if (responseText === "Redspot") {
    return (
      <Text style={styles.diseaseInfoText}>
        Redspot disease is a common ailment in certain fish species...
      </Text>
    );
  } else if (responseText === "Whitespot") {
    return (
      <Text style={styles.diseaseInfoText}>
        Whitespot Disease (Ichthyophthirius multifiliis), also known as Ich, is
        a highly contagious parasitic infection that affects various species of
        fish, including freshwater and marine fish. It is one of the most common
        and widespread diseases found in aquarium and ornamental fish. Here are
        some critical pieces of information about the Whitespot disease:
        {/* ... (remaining content) ... */}
      </Text>
    );
  } else if (responseText === "Tailrot") {
    return (
      <Text style={styles.diseaseInfoText}>
        Tailrot is a bacterial infection that affects the fins of fish...
      </Text>
    );
  } else if (responseText === "Healthy") {
    return (
      <Text style={styles.diseaseInfoText}>
        Your fish appears to be healthy. Keep up the good care!
      </Text>
    );
  } else {
    return null;
  }
};

export const topicMapping = {
  Redspot: [
    {
      name: "Life Cycle---(+) ",
      content:
        "The life cycle of EUS, caused by the fungus Aphanomyces invadans, begins with the release of motile zoospores from infected fish or the aquatic environment. Upon contact with a suitable surface, the zoospores encyst and germinate, giving rise to germ tubes that penetrate the skin or mucous membranes of susceptible fish. Once inside the host, the fungus undergoes invasive growth, causing extensive damage and the formation of characteristic ulcers on the skin and fins. As the cycle progresses, the fungus produces sporangia, which release zoospores, into the water, perpetuating the spread of the disease to other fish.      ",
      imageContent: require("../../assets/EUSLifeCycle.jpg"),
    },
    {
      name: "Transmission---------(+)",
      content:
        "Highly contagious and transmitted horizontally. The Aphanomyces zoospores can be horizontally transmitted from one fish to another through the water supply. Only the zoospores are capable of attaching to the damaged skin of fish and germinating into hyphae ",
      imageContent: null, // No image for this topic
    },
    {
      name: "Symptoms---------(+) ",
      content:
        "Develop red spots or small to large ulcerative lesions on the body\n\n" +
        "Early signs - loss of appetite and fish become darker. Scales become detach.\n\n" +
        "Infected fish may float near the surface of the water, and become hyperactive with a very jerky pattern of movement",
      imageContent: require("../../assets/EUS.jpg"),
    },
    {
      name: "Prevention and Control---(+)",
      content:
        "For effective prevention and control, you can follow these measures:\n\n" +
        "•	Maintain good water quality \n\n " +
        "•	Regular surveillance and monitoring of fish allow for early detection and prevent reoccurrence\n\n" +
        "•	Quarantining new fish before introducing them to existing populations\n\n" +
        "•	Implementing stringent biosecurity measures in aquaculture facilities to prevent the introduction of the pathogen through contaminated water or equipment\n\n" +
        "•	Careful management of stocking density is necessary to avoid overcrowding, which can increase stress and disease transmission among fish\n\n",
      imageContent: null, // No image for this topic
    },
    // Add more topics for Redspot as needed
  ],
  Whitespot: [
    {
      name: "Life Cycle ---(+)",
      content:
        "In Trophont stage, the parasite attaches itself to the fish, moving under the skin where it feeds on cells and body fluids. So, parasite is visible on your fish.\n" +
        "Once parasite fully matured it moves out of the fish and attaches itself to pond material where it repeatedly divides itself thousands of times inside a cyst. In few days, it will burst open and new organisms (Theronts) will start swimming out in search of new host. The process begins again.",
      imageContent: require("../../assets/IchtyophthiriusLS.png"),
    },
    {
      name: "Transmission ---------(+)",
      content:
        "Highly contagious and are transmitted horizontally fish to fish. Depending on the fish host, strain of parasite and water temperature, the parasite life cycle may take from days to weeks. The freshwater life cycle is completed in 5 to 7 days at 21°C.\n" +
        "The parasites are often introduced through new infected fish, plants or contaminated equipment. Changes in environmental conditions such as lower temperature can also cause the release.",
      imageContent: null,
    },
    {
      name: "Symptoms ---------(+)",
      content:
        "•	Small white cysts will start to appear over the fish, including the gills. These are roughly the size of a grain of salt.\n\n" +
        "•	Fish will often be seen to rub themselves against stones as the parasite enters the skin\n\n" +
        "•	Disorientated swimming close to the surface or staying close to the bottom and tightly folded fins\n\n" +
        "•	Infected fish may exhibit other signs of distress, such as loss of appetite, rapid breathing, and clamped fins\n\n",
      imageContent: require("../../assets/ichsymptoms.jpg"),
    },
    {
      name: "Prevention ---------------(+)",
      content:
        "Consider quarantine (14 to 21 days) if introducing new fish, new plants to an established tank\n\n" +
        "Use separate nets for separate tanks and disinfecting equipment to prevent cross-contamination\n\n" +
        "Try to buy plants only from tanks without fish\n\n" +
        "Maintain good water quality and avoid overcrowding\n\n" +
        "Test your water regularly\n\n",
      imageContent: null,
    },
    // Add more topics for Whitespot as needed
  ],
  Tailrot: [
    {
      name: "Causes---(+)",
      content:
        "Tail rot is caused by several different species of bacteria. However, the indirect cause of this condition is some type of stress that lowered the infected fish's immune system enough to allow the bacteria to take hold.\n\n" +
        "Common causes of stress:\n\n" +
        "•	Poor water quality\n" +
        "•	Injury\n" +
        "•	Overcrowding\n" +
        "•	Aggressive fish\n" +
        "•	Poor diet",
      imageContent: null,
      // No image for this topic
    },
    {
      name: "Symptoms---(+)",
      content:
        "The primary symptom of tail rot is the progressive deterioration of the tail fin. Initially, the edges of the tail may appear frayed or ragged, and the color of the affected area may become pale or discolored. As the condition worsens, the tail fin may shrink, and the rot may extend further into the fin tissue. In severe cases, the tail fin can be completely eroded, leaving the fish vulnerable and susceptible to other infections.\n\n" +
        "As your fish becomes more ill, it is likely to stop eating and become lethargic. This displays as less movement than usual or drifting near the bottom of the tank",
      imageContent: require("../../assets/finrot.jpg"), // No image for this topic
    },
    {
      name: "General Treatment ---(+)",
      content:
        "Tail rot in fish can be treated by taking a few important steps:\n\n" +
        "•	Syphon the gravel at the bottom of the aquarium to remove any waste and debris\n" +
        "•	Do a 25% water change of your fish tank\n" +
        "•	Check and monitor your water conditions. Test for factors like pH, temperature, chlorine, ammonia, nitrite and nitrate levels\n" +
        "•	Move the affected fish to a quarantine tank if not all fish show signs of fin rot with a separate net. This is important to prevent the fin rot from spreading to other fish.\n" +
        "•	Treat with medications:\n\n" +
        "\tTetracycline (Dose: 3-4 gm/100 l for 2-3 days and Water change after treatment)\n" +
        "\tErythromycine\n" +
        "\tChloromycetin 40 mg in 5L of water\n" +
        "\tAdd 1tsp per gallon of aquarium salt to the water\n\n" +
        "•	Remove the active carbon from the filter during treatment\n" +
        "•	Monitor your fish every day to check if the fin rot has stopped. If treatment is successful, you may notice that the damaged fins and tail will slowly grow back after a few weeks",
      imageContent: null, // No image for this topic
    },
    {
      name: "Prevention ---(+)",
      content:
        "Maintain good water quality\n\n" +
        "Perform regular maintenance in your tank/pond\n\n" +
        "Keep proper water parameters\n\n" +
        "Consider quarantine (14 to 21 days) if introducing new fish to an established tank\n\n",
      imageContent: null, // No image for this topic
    },
    // Add more topics for Tailrot as needed
  ],
  Healthy: [
    {
      name: "Disease Prevention---(+)",
      content:
        "Fish disease prevention is crucial for maintaining the health and well-being of your aquatic pets. There are several essential steps you can take to prevent fish diseases. First and foremost, start with a clean and properly cycled aquarium to create a healthy environment for your fish. Choose fish that are compatible in terms of size, temperament, and water requirements to reduce the risk of stress and aggression. Quarantine new fish in a separate tank before introducing them to the main aquarium to ensure they are disease-free. Maintain good water quality by regularly testing and monitoring parameters like ammonia, nitrite, nitrate, and pH levels. Avoid overfeeding, as excess food can lead to water pollution and stress on the fish. Keep the aquarium clean by removing uneaten food and debris. Finally, be observant of your fish's behavior and appearance; any signs of illness should be addressed promptly to prevent the spread of disease to other fish. By following these preventive measures, you can significantly reduce the likelihood of fish diseases and create a healthy and thriving aquarium environment.",
      imageContent: null,
    },
    // Add more topics for healthy as needed
  ],
  default: [
    {
      name: "Topic 1",
      content: "Information for default - Topic 1",
      imageContent: null, // No image for this topic
    },
    // Add more topics for default as needed
  ],
};
