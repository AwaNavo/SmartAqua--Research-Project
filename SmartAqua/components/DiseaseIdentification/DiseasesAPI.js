import axios from "axios";

const API_URL = "http://10.0.2.2:8000/smart-aqua/disease/prediction/";

// const API_URL =
//   "https://84ba-2402-d000-8110-e64e-6157-9f6b-724e-f022.ngrok-free.app/smart-aqua/disease/prediction/";

export const predictImage = async (image) => {
  const formData = new FormData();
  formData.append("image", {
    uri: image.uri,
    type: "image/jpeg",
    name: "image.jpg",
  });

  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status !== 200) {
      throw new Error(`Failed to fetch data from the API (${response.status})`);
    }

    const data = response.data;
    return data;
  } catch (error) {
    return { error: "Failed to fetch data from the API" };
  }
};
