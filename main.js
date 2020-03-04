window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const spanLang1 = document.getElementById('lang1'),
        spanLang2 = document.getElementById('lang2'),

        swipe = document.getElementById('swipe'),
        
        inputText1 = document.getElementById('text1'),
        inputText2 = document.getElementById('text2'),

        forms = document.querySelectorAll('form');
  let lang1,
      lang2,
      text;      


  const sendForm = () => {
    swipe.addEventListener('click', () => {
      let temp = spanLang1.textContent;
      spanLang1.textContent = spanLang2.textContent;
      spanLang2.textContent = temp;

      temp = inputText1.value;
      inputText1.value = inputText2.value;
      inputText2.value = temp;

    });
    forms.forEach((item) => {
      item.addEventListener('submit', () => {
        event.preventDefault();
        getLanguages(item);

        if(item.id === 'form1') text = encodeURIComponent(inputText1.value);
        else text = encodeURIComponent(inputText2.value);

        const api = '?key=trnsl.1.1.20200303T220002Z.db4ab34c0c66b2ef.9e0f2d093cf1ef8514b9a719bf55e3e13ed279e1',
              url = 'https://translate.yandex.net/api/v1.5/tr.json/translate',
              res = `${url}${api}&text=${text}&lang=${lang1}-${lang2}`;
           
        fetch(res, {method: 'GET'})
          .then(data => data.text())
          .then(text => JSON.parse(text))
          .then(jsData => {
            if(item.id === 'form1') {
              inputText2.value = jsData.text[0];
            } else {
              inputText1.value = jsData.text[0];
            }
          });
      });
    });
  };
  sendForm();

  const getLanguages = (item) => {
    if(item.id === 'form1') {
      if(spanLang1.textContent === 'Русский') {
        lang1 = 'ru';
        lang2 = 'en';
      } else {
        lang1 = 'en';
        lang2 = 'ru';
      }
    } else {
      if(spanLang2.textContent === 'Русский') {
        lang1 = 'ru';
        lang2 = 'en';
      } else {
        lang1 = 'en';
        lang2 = 'ru';
      }
    }
  };

});
