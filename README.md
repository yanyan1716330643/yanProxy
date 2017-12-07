
##description

it is so light and simple todo server proxy.just need a proxyConfig.js file to set proxy.
##installation

```$xslt
npm install yanproxy
```

##usage

```$xslt
yproxy proxyConfig.js
```
proxyConfig.js demo:
```$xslt
module.exports = [
    {
        port:6000,
        targetUrl:'http://127.0.0.1:8080'
    },
    {
        port:6001,
        targetUrl:'http://192.168.1.2:8088'
    },
    {
        port:6003,
        targetUrl:'http://lonelyshadow.cn/'
    },

];
```

##auth

yanyan