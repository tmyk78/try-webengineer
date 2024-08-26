document.addEventListener('DOMContentLoaded', () => {

    // タイトルに改行を入れる
    const titleElement = document.querySelector('#title');
    const textNode = titleElement.querySelector('a').firstChild;
    const parts = textNode.nodeValue.split('！');
    const newHTML = `${parts[0]}！<br>${parts[1]}`;
    titleElement.querySelector('a').innerHTML = newHTML;
  });
  