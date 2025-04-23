import styled from "styled-components";
import com_bg from "../../img/com_bg.webp";
import { useState } from "react";
import cer1 from "../../img/cer1.webp";
import cer2 from "../../img/cer2.webp";
import cer3 from "../../img/cer3.webp";

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

const HisContainer = styled.section`
  width: 100%;
  padding: 120px 0 0 0;
  &.second_his {
    padding: 0;
    margin-bottom: 120px;
  }
`;

const HisWrap = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  h2 {
    font-size: 35px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 120px;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  li {
    width: 50%;
    padding: 18px 0;
    font-size: 20px;
    font-weight: 300;
    border: 1px solid #222222;
    cursor: pointer;
  }
  li:nth-child(1) {
    background-color: ${(props) => props.$hiscolor};
  }
  li:nth-child(2) {
    background-color: ${(props) => props.$cercolor};
  }
`;

const HisCon = styled.div`
  justify-content: space-between;
  margin-top: 120px;
  display: ${(props) => props.$hiscontents};
`;

const Year = styled.div`
  font-size: 60px;
  font-weight: 500;
  color: #0a0a539b;
  width: 160px;

  line-height: 70px;
`;

const His = styled.ul`
  h3 {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  li {
    width: 750px;
    border-top: 1px solid #2c2c2c2e;
    padding: 25px 0;
    padding-left: 15px;
  }
  p {
    font-weight: 300;
    font-size: 17px;
    line-height: 30px;
  }
`;

const CerContainer = styled.ul`
  max-width: 1140px;
  width: 100%;
  margin: 120px auto;
  display: ${(props) => props.$cercontents};
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 48%;
    height: 250px;
    margin-bottom: 50px;
    padding: 20px;
    display: flex;
    border: 1px solid #5f5f5f32;
    border-radius: 10px;
  }
  h3 {
    font-size: 25px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
`;

const ImgBox = styled.div`
  width: 150px;
  height: 100%;
  margin-right: 30px;
  border: 1px solid #5f5f5f32;
  padding: 1px;
  border-radius: 5px;
  &:hover {
    transform: scale(1.7);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const History = () => {
  const [hisOn, setHisOn] = useState(true);
  const [cerOn, setCerOn] = useState(false);

  const hisHandler = () => {
    setHisOn(true);
    setCerOn(false);
  };

  const cerHandler = () => {
    setCerOn(true);
    setHisOn(false);
  };

  return (
    <Container>
      <Bg>
        <ImgBg />
        <Text>
          <h1>연혁 및 인증</h1>
        </Text>
      </Bg>

      <HisContainer>
        <HisWrap>
          <h2>
            "독자적이고 최적의 솔루션 컨설팅 및 구축 서비스를 여러분과 함께
            하겠습니다."
          </h2>

          <Menu
            $hiscolor={hisOn ? "#fef6f9" : "white"}
            $cercolor={cerOn ? "#fef6f9" : "white"}
          >
            <li onClick={hisHandler}>연혁</li>
            <li onClick={cerHandler}>인증</li>
          </Menu>

          <HisCon $hiscontents={hisOn ? "flex" : "none"}>
            <Year>2021-2024</Year>

            <His>
              <li>
                <h3>2024년</h3>
                <p>
                  · 공기압축기 모니터링 및 통합제어 시스템 대불/신 평장림 산단
                  30개소 납품
                </p>
                <p>· 신평장림 FEMS 공사 및 시스템 설치 20개소</p>
              </li>
              <li>
                <h3>2023년</h3>
                <p>
                  · 공기압축기 모니터링 및 통합제어 시스템 대불산단 20개소 납품
                </p>
                <p>· FEMS / EnMS 구축 및 소프트웨어 10개소 납품</p>
              </li>
              <li>
                <h3>2022년</h3>
                <p>· 에너지 모니터링 시스템 자체 클라우드 시스템 설비구축</p>
                <p>· EnMS 소프트웨어 5개소 납품</p>
                <p>· 생태공장 FEMS 시스템 3개소 납품</p>
              </li>
              <li>
                <h3>2021년</h3>
                <p>· 동서발전 공기압축기 모니터링 시스템 개발</p>
                <p>· FEMS 소프트웨어 5개소 SKQVNA</p>
                <p>· 고전력 고전압 자동제어 시스템 개발</p>
                <p>· 공기압축기 통합제어 시스템 개발</p>
              </li>
            </His>
          </HisCon>
        </HisWrap>
      </HisContainer>

      <HisContainer className="second_his">
        <HisWrap>
          <HisCon $hiscontents={hisOn ? "flex" : "none"}>
            <Year>2020-2018</Year>

            <His>
              <li>
                <h3>2020년</h3>
                <p>· NIXPACK 에너지 모니터링 시스템 런칭</p>
                <p>· FEMS 소프트웨어 2개소 납품</p>
              </li>
              <li>
                <h3>2019년</h3>
                <p>· 기업부설 연구소 설립</p>
                <p>· 전력 통합제어 및 분석 시스템 개발 및 납품</p>
                <p>· 에너지 모니터링 시스템 FEMS 개발</p>
              </li>
              <li>
                <h3>2018년</h3>
                <p>· 주식회사 엔에스 솔루션 설립</p>
              </li>
            </His>
          </HisCon>
        </HisWrap>
      </HisContainer>

      <CerContainer $cercontents={cerOn ? "flex" : "none"}>
        <li>
          <ImgBox>
            <img src={cer1} alt="인증1" />
          </ImgBox>
          <h3>벤처기업확인서</h3>
        </li>
        <li>
          <ImgBox>
            <img src={cer2} alt="인증2" />
          </ImgBox>
          <h3>중소기업확인서</h3>
        </li>
        <li>
          <ImgBox>
            <img src={cer3} alt="인증3" />
          </ImgBox>
          <h3>기업부설연구소 인증서</h3>
        </li>
      </CerContainer>
    </Container>
  );
};
