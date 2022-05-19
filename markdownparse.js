var mdEls = document.querySelectorAll('.markdown');
for(var i=0; i< mdEls.length ;i++){
    var mdEl = mdEls[i];
    var converted = document.createElement('div');
    converted.innerHTML = marked.parse(mdEl.value);
    mdEl.parentNode.replaceChild(converted, mdEl);
}
