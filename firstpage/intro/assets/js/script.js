function showImage(id) {
  const popup = document.getElementById(id);

  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}

// 팝업 바깥 여백을 클릭하면 닫기
function hideImage(id) {
  document.getElementById(id).style.display = "none";
}