var mdEls = document.querySelectorAll('.markdown');
for(var i=0; i< mdEls.length ;i++){
    //var mdEl = mdEls[i];
    mdEls[i].innerHTML = marked.parse(mdEls[i].innerHTML);
    //var converted = document.createElement('div');
    //converted.innerHTML = marked.parse(mdEl.value);
    //mdEl.parentNode.replaceChild(converted, mdEl);
}
