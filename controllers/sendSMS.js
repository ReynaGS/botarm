const Nexmo = require('nexmo');
require('dotenv').config();

 const Vonage_API_KEY = process.env.API_KEY;
 const Vonage_API_SECRET = process.env.API_SECRET;

module.exports = {
    send: (to,from,text) => {

        const nexmo= new Nexmo({
            apiKey: Vonage_API_KEY,
            apiSecret: Vonage_API_SECRET,
          });
                    
          nexmo.message.sendSms(from, to , text, (err, responseData) => {
            if (err) {
              console.log(err);
            } else {
              if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
              } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
              }
            }
          })
    }
}