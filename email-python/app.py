from flask import Flask
from flask_mail import Mail, Message
from flask_cors import CORS
   
app = Flask(__name__)
CORS(app)
mail = Mail(app) 
   

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'khanhvg06091999@gmail.com'
app.config['MAIL_PASSWORD'] = 'giakhanh'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['CORS_ORIGINS'] = '*'
mail = Mail(app)
   

@app.route("/", methods=['POST'])
def index():
   msg = Message(
                'New report is submmited',
                sender ='khanhvg06091999@gmail.com',
                recipients = ['khanhvg99@gmail.com']
               )
   msg.body = 'Reprot of .. is submmited'
   mail.connect()
   mail.send(msg)
   return 'Sent'
   
if __name__ == '__main__':
   app.run(debug = True)