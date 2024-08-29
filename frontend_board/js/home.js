const $chatBtn = document.getElementById("btn-chat");
const $loginBtn = document.getElementById("btn-login");
const $logoutBtn = document.getElementById("btn-logout");
const $joinBtn = document.getElementById("btn-join");
const $mainDesc = document.getElementsByClassName("main-desc")[0];
const $search = document.getElementById("search");
const $searchBtn = document.getElementById("btn-search");
const $category = document.getElementById("category");
const $sort = document.getElementById("sort");

let postCount = 0;
let categoryList = ["전체", "공지사항", "일반"];
let sortList = ["조회순", "최신순"];

$mainDesc.innerHTML = `<strong>${postCount}개</strong>의 게시글이 있습니다.`;

for (let i = 0; i < categoryList.length; i++) {
    const option = document.createElement("option");
    option.value = categoryList[i];
    option.textContent = categoryList[i];
    $category.appendChild(option);
}

for (let i = 0; i < sortList.length; i++) {
    const option = document.createElement("option");
    option.value = sortList[i];
    option.textContent = sortList[i];
    $sort.appendChild(option);
}