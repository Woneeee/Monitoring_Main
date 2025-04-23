import axios from "axios";

const api = axios.create({
  baseURL: "https://api-monitor.pessems.com/api/homepage",
  headers: {
    "Content-Type": "application/json",
  },
});

// 📌 문의 목록 조회 (GET)
export const fetchInquiries = (list = 10, now = 0) =>
  api.get("/notice/get", {
    params: { list, now },
  });

// 📌 문의 등록 (POST)
export const postInquiry = (data) => api.post("/notice/post", data);

// 📌 문의 수정 (PUT)
export const putInquiry = (data) => api.put("/notice/put", data);

// 이런 식으로 기능별로 주소는 다르지만,
// 결국은 다 같은 DB를 다르게 조작하는 함수들이야.
