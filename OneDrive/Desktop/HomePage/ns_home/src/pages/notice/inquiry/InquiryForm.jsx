import styled from "styled-components";
import request_bg from "../../../img/request_bg.webp";
import { useForm } from "react-hook-form";

const Container = styled.section`
  width: 100%;
`;

const Bg = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${request_bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;

const ImgBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #d0d0d02c;
`;

const Form = styled.form`
  padding: 50px 20px;
  max-width: 500px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: #ffffffea;
  backdrop-filter: blur(5px);
  margin: 150px 0 50px 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  h1 {
    font-size: 55px;
    font-weight: 500;
    letter-spacing: -1px;
    text-align: center;
  }
  p {
    width: 250px;
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    opacity: 0.7;
    margin: 0 auto;
    margin-top: 25px;
    text-align: center;
  }
  h4 {
    font-size: 14px;
    font-weight: 500;
    margin-top: 17px;
  }
  span {
    color: #ff0000;
  }
  input {
    all: unset;
    width: 100%;
    height: 40px;
    border: 1px solid #fff;
    margin-top: 4px;
    border-radius: 8px;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 15px;
  }
  textarea {
    all: unset;
    width: 100%;
    height: 250px;
    border: 1px solid #00000063;
    margin-top: 4px;
    border-radius: 8px;
    padding: 10px;
    resize: none;
    font-size: 15px;
    line-height: 20px;
    box-sizing: border-box;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: break-word;
  }
`;

const ErrorMessage = styled.div`
  font-size: 14px;
  color: #ff0000;
  font-weight: 300;
  margin-top: 5px;
`;

const Btn = styled.button`
  margin-top: 40px;
  width: 100%;
  height: 40px;
  border: 1px solid #5555555d;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 300;
  &:hover {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(0, 0, 0, 0.084) 100%
    );
  }
`;

export const InquiryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const requestHandler = () => {};

  return (
    <Container>
      <Bg>
        <ImgBg />

        <Form onSubmit={handleSubmit(requestHandler)}>
          <h1>도입 문의</h1>
          <p>
            상황을 구체적으로 말씀해주시면, 적합한 상담과 제안을 드리겠습니다.
          </p>

          <h4>
            담당자명&nbsp;<span>*</span>
          </h4>
          <input
            {...register("name", {
              required: "답변을 입력해주세요",
            })}
            type="text"
            style={{ borderColor: errors?.name ? "red" : "#00000063" }}
          />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>

          <h4>
            소속(회사명)&nbsp;<span>*</span>
          </h4>
          <input
            {...register("company", {
              required: "답변을 입력해주세요",
            })}
            type="text"
            style={{ borderColor: errors?.company ? "red" : "#00000063" }}
          />
          <ErrorMessage>{errors?.company?.message}</ErrorMessage>

          <h4>
            연락처&nbsp;<span>*</span>
          </h4>
          <input
            {...register("contact", {
              required: "답변을 입력해주세요",
            })}
            type="tel"
            style={{ borderColor: errors?.contact ? "red" : "#00000063" }}
          />
          <ErrorMessage>{errors?.contact?.message}</ErrorMessage>

          <h4>
            회사 이메일&nbsp;<span>*</span>
          </h4>
          <input
            {...register("email", {
              required: "답변을 입력해주세요",
            })}
            type="text"
            style={{ borderColor: errors?.email ? "red" : "#00000063" }}
          />
          <ErrorMessage>{errors?.email?.message}</ErrorMessage>

          <h4>
            문의내용&nbsp;<span>*</span>
          </h4>
          <textarea
            className="contents"
            {...register("contents", {
              required: "답변을 입력해주세요",
            })}
            type="text"
            style={{ borderColor: errors?.contents ? "red" : "#00000063" }}
          />
          <ErrorMessage>{errors?.contents?.message}</ErrorMessage>

          <Btn>제출하기</Btn>
        </Form>
      </Bg>
    </Container>
  );
};
