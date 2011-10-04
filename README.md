### Growl notifications for your beanpole-based app


#### Requirements

- growlnotify         
    
#### How easy is it to implement?
                            
1. In your app directory

          npm install bean.notify.growl

2. In your app

```javascript
   
var router = require('beanpole').router();

router.require('bean.notify.growl');

router.push('user/notification', { message: 'Hello!' });


```