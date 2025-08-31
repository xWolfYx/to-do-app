// import updateTasks, { tasksList } from "./tasks.js";

// const topNavButtons = document.querySelector(".top-nav-buttons");
// const tabsContainer = document.querySelector(".tabs-container");

// topNavButtons.addEventListener("click", (e) => {
//   if (e.target.classList.contains("tasks-tab"))
//     return changeTab(e, "tasks-tab");
//   if (e.target.classList.contains("done-tab")) return changeTab(e, "done-tab");
//   if (e.target.classList.contains("settings-tab"))
//     return changeTab(e, "settings-tab");
// });

// function changeTab(e, className) {
//   if (e.target.classList.contains("active")) return;
//   [...topNavButtons.children].forEach((el) => el.classList.remove("active"));
//   e.target.classList.add("active");
//   const tabNum = e.target.dataset.tab;
//   [...tabsContainer.children].forEach((el) => el.classList.remove("active"));
//   document.querySelector(`.tab-${tabNum}`).classList.add("active");
//   updateTasks(tasksList);
// }
