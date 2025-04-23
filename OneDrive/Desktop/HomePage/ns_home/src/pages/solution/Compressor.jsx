import styled, { keyframes } from "styled-components";
import nixpack_bg from "../../img/nixpack_bg.webp";
import compressor from "../../img/compressor_program.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.section`
  width: 100%;
`;

const Banner = styled.section`
  width: 100%;
  height: 450px;
  background-image: url(${nixpack_bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: -1px;
  h1 {
    font-size: 55px;
    font-weight: 500;
    letter-spacing: -1px;
    color: #fff;
  }
`;

const CaseBtn = styled.button`
  padding: 12px 35px;
  background-color: #fff;
  margin-top: 30px;
  border-radius: 5px;
  transition-duration: 0.8s;

  &:hover {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
  }
`;

const NixIntro = styled.section`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  margin-top: 120px;
`;

const fadeInAndScale = keyframes`
  0%{
    opacity: 0;
    transform: scale(1.2);
  }
  100%{
    
  }
`;

const NixImg = styled.div`
  height: 550px;
  animation: ${fadeInAndScale} 1s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const NixDesc = styled.div`
  width: 750px;
  margin-top: 80px;
  p {
    opacity: 0.8;
    font-size: 18px;
    line-height: 25px;
  }
`;

const FuncContainer = styled.section`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  margin-top: 120px;
  h2 {
    font-size: 30px;
    font-weight: 500;
  }
`;

const Func = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 47%;
    padding: 30px 10px;
    background-color: #fef6f9;
    font-size: 21px;
    margin-top: 25px;
    border-radius: 10px;
    font-weight: 500;
  }
  span {
    color: #0a0a539b;
  }
`;

const EffectContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 120px auto;
  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 55px;
  }
`;

const Effect = styled.ul`
  li {
    font-size: 21px;
    border-top: 1px solid #55555580;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  h3 {
    display: inline;
  }
  span {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.5s;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
  p {
    padding: 40px 0;
    font-size: 18px;
  }
`;

const EffectTitle = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const EffectDescription = styled.div`
  padding: 40px 0;
  font-size: 18px;
  display: ${({ $open }) => ($open ? "block" : "none")};
`;

export const Compressor = () => {
  const [openIndex, setOpenIndex] = useState(null); // 현재 열린 index 추적

  const toggleHandler = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index)); // 이미 열려있으면 닫기
  };

  const effects = [
    {
      title: "비용 절감 극대화",
      desc: "압축기의 용량과 운전 상태를 최적으로 제어하여 에너지 절감을 실현",
    },
    {
      title: "원가 절감",
      desc: "전력 소모 감소와 유지보수 계획 수립으로 운영 비용을 낮춤",
    },
    {
      title: "운영 효율성 ",
      desc: "압축공기 사용 패턴 분석 및 자동화된 제어로 공정 개선 및 불량률 감소",
    },
  ];

  return (
    <Container>
      <Banner>
        <h1>공기압축기통합제어시스템</h1>

        <CaseBtn>
          <Link to={"/case/공기압축기통합제어시스템"}>고객사례 확인하기</Link>
        </CaseBtn>
      </Banner>

      <NixIntro>
        <NixImg>
          <img src={compressor} alt="공기압축기이미지" />
        </NixImg>

        <NixDesc>
          <p>
            공기압축기 통합 제어 솔루션은 다수의 압축공기를 사용하는 설비를
            실시간으로 모니터링하여, 최적의 운전 상태로 가동 및 제어하는
            시스템입니다. 이를 통해 불필요한 압축기 가동을 줄이고, 에너지
            소모량을 개선합니다.
          </p>
        </NixDesc>
      </NixIntro>

      <FuncContainer>
        <h2>주요기능</h2>

        <Func>
          <li>
            <span>■</span> 에너지 소비량 모니터링
          </li>
          <li>
            <span>■</span> 장비 이상 모니터링
          </li>
          <li>
            <span>■</span> 설비 상태 모니터링
          </li>
          <li>
            <span>■</span> 피크 모니터링
          </li>
        </Func>
      </FuncContainer>

      <EffectContainer>
        <h2>기대효과</h2>
        <Effect>
          {effects.map((item, idx) => (
            <li key={idx}>
              <EffectTitle onClick={() => toggleHandler(idx)}>
                <h3>{item.title}</h3>
                <span>{openIndex === idx ? "-" : "+"}</span>
              </EffectTitle>
              <EffectDescription $open={openIndex === idx}>
                {item.desc}
              </EffectDescription>
            </li>
          ))}
        </Effect>
      </EffectContainer>
    </Container>
  );
};
