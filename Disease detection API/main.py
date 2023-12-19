from fastapi import FastAPI
from tensorflow.keras.models import load_model
#from tensorflow.keras.utils import get_file 
from tensorflow.keras.utils import load_img 
from tensorflow.keras.utils import img_to_array
from tensorflow import expand_dims
#from tensorflow.nn import softmax
from numpy import argmax
#from numpy import max
#from numpy import array
#from json import dumps
from uvicorn import run
import os
from fastapi.middleware.cors import CORSMiddleware
from fastapi import File, UploadFile
import shutil

app = FastAPI()

	
model_dir = "model_resnet50.h5"
model = load_model(model_dir,compile=False)

#essentially allows us to access the API in a different host
#That is, we can extend the app further by creating a front-end interface for it
origins = ["*"]
methods = ["*"]
headers = ["*"]

app.add_middleware(
   CORSMiddleware, 
   allow_origins = origins,
   allow_credentials = True,
   allow_methods = methods,
   allow_headers = headers    
)


@app.get("/")
async def root():
    return {"message": "Welcome to the Disease Detection API!"}

#prediction 
@app.post("/smart-aqua/disease/prediction/")
async def get_disease_prediction(image: UploadFile = File(...)):


    #base_path
    base_path = os.path.dirname(__file__)
    
    #path to be saved
    #img_path = "uploads/uploadedImg.png"
    img_path = os.path.join(base_path, "uploads/uploadedImg.png")
    
    #save the image in that path locally
    with open(img_path, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)
    
    img = load_img(
        img_path, 
        target_size = (256, 256)
    )

    img_array = img_to_array(img)
    img_array = expand_dims(img_array, axis = 0)

    predictions = model.predict(img_array)
    pred =argmax(predictions, axis=1)
    
    if pred==0:
        pred="Disease : Healthy"
    elif pred==1:
        pred="Disease : Redspot"
    elif pred==2:
        pred="Disease : Tailrot"
    else:
        pred="Disease : Whitespot"

    return {
        "model-prediction": pred
    }
 
if __name__ == "__main__":
	
	run(app, host="0.0.0.0", port=8000)

