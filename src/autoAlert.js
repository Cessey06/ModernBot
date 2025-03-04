class AutoAlert extends ModernUtil {
    constructor(c, s) {
        super(c, s);
        this.loop = setInterval(this.main, 60000);

    }

  

    /* Main loop for the alert captcha bot */
    main = () => {
        //console.log(uw.Game);
        
        if (document.querySelector('#recaptcha_window')) {

          this.console.log(" capcha asked !!")

        
            const botToken = '8196422009:AAFvWgY-fbBOqj7GXEMY92GHle3j1kcpTx0';
            const chatId = '-1002402869572';  
            const message = "You need capcha on world : " + uw.Game.world_id + " user : " + uw.Game.player_name;
            ;
            
            fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                chat_id: chatId,
                text: message
              })
            })
              .then(response => response.json())
              .then(data => console.log("Message envoyé :", data))
              .catch(error => console.error("Erreur :", error));
        }
        else {
          this.console.log("No capcha asked ")
        }
        const element = document.querySelector('.notification.incoming_attack');
        if (element && getComputedStyle(element).display === 'block') {

          this.console.log("Attack detected!")

        
            const botToken = '8196422009:AAFvWgY-fbBOqj7GXEMY92GHle3j1kcpTx0';
            const chatId = '-1002402869572';  
            const message =" Careful ! attacke detected on world : " + uw.Game.world_id + " user : " + uw.Game.player_name;
            ;
            
            fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                chat_id: chatId,
                text: message
              })
            })
              .then(response => response.json())
              .then(data => console.log("Message envoyé :", data))
              .catch(error => console.error("Erreur :", error));
        }
        else {
          this.console.log("No attack detected ")
        }

    
    };

}
