(function () {
  var btn = document.getElementById('theme-toggle');
  function apply(t) {
    document.documentElement.setAttribute('data-theme', t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) { meta.content = t === 'dark' ? '#0f1923' : '#1B3A5C'; }
  }
  if (btn) {
    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem('alif-theme', next); } catch (e) {}
    });
  }
  apply(document.documentElement.getAttribute('data-theme') || 'light');
})();
