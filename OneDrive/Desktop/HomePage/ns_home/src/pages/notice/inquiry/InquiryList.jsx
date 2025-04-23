import { useEffect, useState } from "react";
import { fetchInquiries } from "../../../api";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 700px;
  margin: 3rem auto;
  padding: 1.5rem;
`;

const Button = styled.div`
  background: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  margin-top: 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export const InquiryList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchInquiries(10, 0).then((res) => setList(res.data));
  }, []);

  return (
    <Wrapper>
      {/* <h2>문의 목록</h2>
      {list.map((item) => (
        <div key={item.idx} style={{ marginBottom: "1rem" }}>
          <p>
            <strong>{item.title}</strong> - {item.company}
          </p>
          <Button onClick={() => onRequestEdit(item.idx)}>수정하기</Button>
        </div>
      ))}
      <Button onClick={onCreate}>+ 문의하기</Button> */}
    </Wrapper>
  );
};
