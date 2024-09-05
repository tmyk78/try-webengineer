document.addEventListener('DOMContentLoaded', () => {

  // タイトルに改行を入れる
  const titleElement = document.querySelector('#title');
  const textNode = titleElement.querySelector('a').firstChild;
  const parts = textNode.nodeValue.split('！');
  const newHTML = `${parts[0]}！<br>${parts[1]}`;
  titleElement.querySelector('a').innerHTML = newHTML;

  // コメントにタイトルとコメントを追加する
  const newCommentHtml = `
    <p class="comment-box__title">ご質問・お悩み相談受付中！</p>
    <p class="comment-box__description">ご質問やお悩み、お気軽にコメントください！<br />
      あなたの疑問や不安にお答えします。<br />
      <span class="comment-box__caution">※いただいたコメントを元に記事を作成することがございますので、あらかじめご了承ください。</span>
    </p>
  `;
  document.querySelector('.js-comment-box').insertAdjacentHTML('afterbegin', newCommentHtml);
  
});
