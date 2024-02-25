from flask import Flask,request, url_for, redirect, render_template
import pickle
import numpy as np
from PIL import Image

app = Flask(__name__)


app.template_folder = 'templates'


model=pickle.load(open("C:/Users/singh/OneDrive/Desktop/Nexus/Nexus2.0/Sathi/client/src/components/Mlpage/model.pkl",'rb'))

@app.route('/',methods=['GET'])
def hello_world():
    return render_template('Mlpage/index.html')


@app.route('/',methods=['POST'])
def predict():
    imagefile = request.files['imagefile']
    image_path = "C:/Users/singh/OneDrive/Desktop/Nexus/Nexus2.0/Sathi/client/src/components/Mlpage/images"+imagefile.filename
    imagefile.save(image_path)
    
    image1 = np.asarray(Image.open(image_path).resize((32,32)))
    X1 = np.asarray(image1.tolist())
    X1 = X1/255.

    X2 = X1.reshape((1, 32, 32, 3))
    print(type(X2))
    y_pred = model.predict(X2)
    y_pred_classes = np.argmax(y_pred, axis = 1) 
    print(y_pred_classes)

    label = y_pred_classes[0]

    return render_template('Mlpage/index.html', prediction=label)

if __name__ == '__main__':
    app.run(port=5500,debug=True)