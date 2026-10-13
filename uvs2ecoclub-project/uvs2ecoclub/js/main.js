/* Нийтлэг JavaScript үйлдлүүдийг энд нэмнэ. */
document.addEventListener("DOMContentLoaded", () => {
  // Жишээ: одоогийн хуудсыг цэсэнд идэвхтэй болгох
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-menu a").forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop().split("#")[0];
    if (linkPage === currentPage) link.classList.add("active");
  });
});
