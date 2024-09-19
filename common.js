document.addEventListener('DOMContentLoaded', () => {

  // タイトルに改行を入れる
  const titleElement = document.querySelector('#title');
  const textNode = titleElement.querySelector('a').firstChild;
  const parts = textNode.nodeValue.split('！');
  const newHTML = `${parts[0]}！<br>${parts[1]}`;
  titleElement.querySelector('a').innerHTML = newHTML;

  // コメントにタイトルとコメントを追加する
  const newCommentHtml = `
    <p class="illustrationTitle comment-box__title">ご質問・お悩み相談受付中！</p>
    <p class="comment-box__description">ご質問やお悩み、お気軽にコメントください！<br />
      あなたの疑問や不安にお答えします。<br />
      <span class="comment-box__caution">※いただいたコメントを元に記事を作成することがございますのであらかじめご了承ください。</span>
    </p>
  `;
  const commentBox = document.querySelector('.js-comment-box');
  if(commentBox) {
    commentBox.insertAdjacentHTML('afterbegin', newCommentHtml);
  }
  
  // トップへ戻るボタンを追加する
  const newToTopHtml = `
    <button type="button" class="toTopButton js-toTopButton"></button>
  `;
  const containerInner = document.querySelector('#container-inner');
  if(containerInner) {
    containerInner.insertAdjacentHTML('beforeend', newToTopHtml);

    const scrollToTopBtn = document.querySelector('.js-toTopButton');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scrollToTopBtn.classList.remove('show');
            } else {
                scrollToTopBtn.classList.add('show');
            }
        });
    }, { threshold: 0 });

    observer.observe(document.querySelector('#blog-title'));

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

  }








  
});
