function toggleDetailedView() {
  const overview = document.getElementById('dashboard-overview');
  const detailed = document.getElementById('dashboard-detailed');
  if (overview.style.display === 'none') {
    overview.style.display = 'block';
    detailed.style.display = 'none';
  } else {
    overview.style.display = 'none';
    detailed.style.display = 'block';
  }
}
