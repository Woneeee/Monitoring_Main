import styled, { keyframes } from "styled-components";
import nixpack_bg from "../../img/nixpack_bg.webp";
import { useState } from "react";
import smartfactory from "../../img/smartfactory.webp";
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
  height: 500px;
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

export const SmartFactory = () => {
  const [openIndex, setOpenIndex] = useState(null); // 현재 열린 index 추적

  const toggleHandler = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index)); // 이미 열려있으면 닫기
  };

  const effects = [
    {
      title: "데이터 기반 의사결정",
      desc: "생산량과 에너지 소비 데이터를 연동해 최적의 운영 방안을 도출",
    },
    {
      title: "생산성 향상",
      desc: "최신 기술 적용으로 기업의 디지털 전환과 시장 경쟁력을 높임",
    },
    {
      title: "지속 가능성 강화",
      desc: "스마트팩토리 구축 관련 정부 지원 사업 참여를 통해 비용 부담 완화",
    },
  ];

  return (
    <Container>
      <Banner>
        <h1>스마트팩토리구축지원</h1>

        <Link to={"/case/스마트생태공장"}>
          <CaseBtn>고객사례 확인하기</CaseBtn>
        </Link>
      </Banner>

      <NixIntro>
        <NixImg>
          <img src={smartfactory} alt="스마트팩토리이미지" />
        </NixImg>

        <NixDesc>
          <p>
            스마트팩토리 구축은 IoT, 빅데이터, 5G 기술을 활용하여 공장의
            생산성과 에너지 효율성을 극대화하는 솔루션입니다. 엔에스솔루션은
            FEMS와 같은 지능형 시스템을 통해 스마트팩토리 환경 조성을
            지원합니다.
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
