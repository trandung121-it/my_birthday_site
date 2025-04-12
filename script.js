// Sau 5 giây, ẩn màn hình loading và hiện trang chính
setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
  }, 5000);
  
  // Bấm nút thì hiện thiệp
  document.getElementById('show-card-btn').addEventListener('click', () => {
    document.getElementById('greeting-card').classList.remove('hidden');
  });
  