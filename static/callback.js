const ZCallbackWidgetLinkId  = '4b357402d60339496ad0191880338a99';
const ZCallbackWidgetDomain  = 'my.zadarma.com';

(function(){
  const lt = document.createElement('script');
  lt.type ='text/javascript';
  lt.charset = 'utf-8';
  lt.async = true;
  lt.src = 'https://' + ZCallbackWidgetDomain + '/callbackWidget/js/main.min.js';
  const sc = document.getElementsByTagName('script')[0];
  if (sc) sc.parentNode.insertBefore(lt, sc);
  else document.documentElement.firstChild.appendChild(lt);
})()
