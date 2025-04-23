import styled from "styled-components";
import com_bg from "../../img/com_bg.webp";
import { FaEarthAmericas, FaLightbulb } from "react-icons/fa6";
import { PiHandshakeFill, PiHandsPrayingBold } from "react-icons/pi";
import { FaBalanceScale } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
`;

const Bg = styled.section`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${com_bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const ImgBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #e4e4e421;
`;

const Text = styled.div`
  position: absolute;
  h1 {
    font-size: 55px;
    font-weight: 500;
    letter-spacing: -1px;
  }
`;

const GoalCon = styled.section`
  width: 100%;
  padding: 120px 0;
`;

const GoalWrap = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  h2 {
    font-size: 35px;
    text-align: center;
  }
`;

const Goal = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  li {
    width: 30%;
    margin-top: 40px;
    margin-right: 5%;
    height: 250px;

    border: 1px solid #00000009;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
  }
  li:nth-child(3) {
    margin-right: 0;
  }

  h2 {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 500;
  }
  p {
    margin-top: 20px;
    text-align: center;
    line-height: 26px;
    opacity: 0.6;
    font-size: 18px;
  }
  svg {
    font-size: 50px;
  }
`;

export const KeyValue = () => {
  return (
    <Container>
      <Bg>
        <ImgBg />
        <Text>
          <h1>핵심 가치</h1>
        </Text>
      </Bg>

      <GoalCon>
        <GoalWrap>
          <h2>핵심가치</h2>

          <Goal>
            <li>
              <FaEarthAmericas />
              <h2>지속가능성</h2>
              <p>환경과 기업의 동반성장을 위한 지속가능한 에너지 솔루션 제공</p>
            </li>
            <li>
              <PiHandshakeFill />
              <h2>고객 중심</h2>
              <p>고객의 필요를 이해하고 맞춤형 솔루션 제공</p>
            </li>
            <li>
              <FaLightbulb />
              <h2>기술혁신</h2>
              <p>끊임없는 기술 개발과 새로운 아이디어로 에너지관리 미래 설계</p>
            </li>
            <li>
              <PiHandsPrayingBold />
              <h2>책임감</h2>
              <p>신뢰를 바탕으로 책임감 있는 업무 수행</p>
            </li>
            <li>
              <FaBalanceScale />
              <h2>데이터 기반 투명화 강화</h2>
              <p>에너지 사용 데이터 분석을 통한 공정한 의사결정 지원</p>
            </li>
          </Goal>
        </GoalWrap>
      </GoalCon>
    </Container>
  );
};
