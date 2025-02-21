document.addEventListener('DOMContentLoaded', function() {
  const languageSwitcher = document.querySelector('.md-header__button.md-logo'); // 言語切り替えボタンのセレクタ (テーマによって異なる場合があります)
  const navLinks = document.querySelectorAll('.md-nav__link'); // ナビゲーションリンクのセレクタ

  languageSwitcher.addEventListener('click', function() {
    const currentLanguage = document.documentElement.lang; // 現在の言語を取得 (<html> タグの lang 属性)
    const newLanguage = currentLanguage === 'ja' ? 'en' : 'ja';

    navLinks.forEach(link => {
      const originalHref = link.getAttribute('href');
      if (originalHref && originalHref.endsWith('.html')) {
        let newHref = originalHref;
        if (originalHref.includes('/ja/')) {
          newHref = originalHref.replace('/ja/', '/en/');
        } else if (originalHref.includes('/en/')) {
          newHref = originalHref.replace('/en/', '/ja/');
        }
        link.setAttribute('href', newHref);
      }
    });
  });
});