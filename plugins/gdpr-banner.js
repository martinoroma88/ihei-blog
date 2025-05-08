export default ({ env }) => {
  // if (window.location.host !== 'ihei.it') return // TODO: fix host
  
  window._iub = window._iub || [];
  window._iub.csConfiguration = {"siteId":2072615,"lang":"fr","cookiePolicyId":39983958, "banner":{ "position":"float-top-center","rejectButtonColor":"#0073CE","rejectButtonCaptionColor":"white","textColor":"black","backgroundColor":"white","acceptButtonDisplay":true,"acceptButtonColor":"#0073CE","acceptButtonCaptionColor":"white","customizeButtonDisplay":true,"customizeButtonColor":"#DADADA","customizeButtonCaptionColor":"#4D4D4D" }};

  // Creare dinamicamente lo script di iubenda invece di usare vue-script2
  const script = document.createElement('script')
  script.src = "//cdn.iubenda.com/cs/iubenda_cs.js"
  script.async = true
  document.head.appendChild(script)
}
