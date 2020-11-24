import VS2 from 'vue-script2'

export default ({ env }) => {
  // if (window.location.host !== 'ihei.it') return // TODO: fix host
  
  window._iub = window._iub || [];
  window._iub.csConfiguration = {"siteId":2072615,"lang":"it","cookiePolicyId":39983958, "banner":{ "position":"float-top-center","rejectButtonColor":"#0073CE","rejectButtonCaptionColor":"white","textColor":"black","backgroundColor":"white","acceptButtonDisplay":true,"acceptButtonColor":"#0073CE","acceptButtonCaptionColor":"white","customizeButtonDisplay":true,"customizeButtonColor":"#DADADA","customizeButtonCaptionColor":"#4D4D4D" }};

  VS2.load("//cdn.iubenda.com/cs/iubenda_cs.js")
}
