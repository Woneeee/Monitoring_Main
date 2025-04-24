import styled from "styled-components";
import software from "../../img/software.webp";
import "../business/styles.css";
import { Link } from "react-router-dom";

const Container = styled.section`
  width: 100%;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Bg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #18181873;
`;

const SoftText = styled.div`
  position: absolute;
  color: #fff;
  letter-spacing: -1px;
  padding: 0 120px;
  h2 {
    font-size: 60px;
    font-weight: 500;
  }
  h3 {
    font-size: 24px;
    font-weight: 500;
    margin-top: 15px;
  }
  p {
    font-size: 15px;
    font-weight: 300;
    margin-top: 20px;
  }
`;

export const Software = () => {
  return (
    <Container>
      <Bg>
        <img src={software} alt="소프트웨어 개발 이미지" />
      </Bg>

      <SoftText>
        <h2>SOFTWARE DEVELOPMENT</h2>
        <h3>소프트웨어개발</h3>
        <p>
          현장에 적합한 모니터링 기능을 분석하고 고객의 요구사항을 반영한 현장
          맞춤형 시스템 소프트웨어를 개발하여 제공합니다.
        </p>
      </SoftText>
    </Container>
  );
};
