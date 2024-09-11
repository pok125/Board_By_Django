import { apiGet } from "./fetchAPI.js";
import * as URL from "./urls.js";

const $chatBtn = document.getElementById("btn-chat");
const $loginBtn = document.getElementById("btn-login");
const $logoutBtn = document.getElementById("btn-logout");
const $joinBtn = document.getElementById("btn-join");
const $mainDesc = document.getElementsByClassName("main-desc")[0];
const $search = document.getElementById("search");
const $searchBtn = document.getElementById("btn-search");
const $category = document.getElementById("category");
const $sort = document.getElementById("sort");
const $emptyText = document.getElementById("empty-text");
const $postList = document.getElementById("post-list");

let postCount = 0;
let categoryList = ["전체", "공지사항", "일반"];
let sortList = ["조회순", "최신순"];

async function loadPost() {
    try {
        const datas = await apiGet(URL.homeURL);
    
        return datas;
    } catch (err) {
        console.log(err);
    }
}

function render() {
    const datas = loadPost();
    postCount = datas.length();

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

    if (postCount === 0) {
        

    }
    else {
        $emptyText.style.display = "none";
        createPost(datas);
    }

}

function createPost(datas) {
    
    for (let i = 0; i < postCount; i++) {
        const $post = document.createElement("tr");

        const $checkBox = document.createElement("td");
        const $postNum = document.createElement("td");
        const $title = document.createElement("td");
        const $writer = document.createElement("td");
        const $date = document.createElement("td");
        const $viewCount = document.createElement("td");

        $post.append($checkBox, $postNum, $title, $writer, $date, $viewCount);
        $postList.appendChild($post);
    }
}

render();