(() => {
  const link = document.getElementById('latinfunDownload');
  if (!link) return;
  const ua = navigator.userAgent || '';
  if (/Android/i.test(ua)) {
    link.href = 'https://play.google.com/store/apps/details?id=it.latinfun.app';
  } else if (/iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
    link.href = 'https://apps.apple.com/it/app/latinfun/id6764812867';
  }
})();
