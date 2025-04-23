import styled from "styled-components";
import com_bg from "../../img/com_bg.webp";

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
  position: relative;
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

const DesContainer = styled.section`
  max-width: 1140px;
  width: 100%;
  padding: 120px 0;
  margin: 0 auto;
  // padding은 위아래만 줌
  /* background-color: pink; */
`;

const DesWrap = styled.div`
  width: 100%;
  /* background-color: skyblue; */
`;

const Title = styled.div`
  h2 {
    text-align: center;
    font-size: 35px;
    font-weight: 300;
  }
`;

const Des = styled.div`
  h4 {
    margin-top: 80px;
    font-weight: 300;
    line-height: 25px;
    font-size: 14px;
    font-weight: 300;
    color: #777777;
  }
  p {
    margin-top: 30px;
    line-height: 25px;
    font-size: 19px;
    opacity: 0.8;
  }
`;

export const Company = () => {
  return (
    <Container>
      <Bg>
        <ImgBg />
        <Text>
          <h1>회사 소개</h1>
        </Text>
      </Bg>

      <DesContainer>
        <DesWrap>
          <Title>
            <h2>에너지 통합 모니터링 시스템 전문 개발회사</h2>
          </Title>

          <Des>
            <h4>
              2018년에 설립된 엔에스솔루션은 에너지 통합 모니터링 시스템을
              전문적으로 개발하는 기업으로 성장해 왔습니다.
            </h4>
            <p>
              공장 에너지 관리 시스템(FEMS) 구축부터 시스템 도입 컨설팅, 계측 및
              인프라 설치, 그리고 맞춤형 모니터링 시스템 개발까지 모든 단계를
              직접 수행합니다. 산업 현장의 특성에 맞춘 효율적인 에너지 관리
              솔루션을 제공하여 즉각적인 에너지 비용 절감과 운영 효율화를
              실현합니다. 이를 통해 기업이 지속가능한 성장을 이룰 수 있도록
              지원하며, ESG 경영을 강화하는데 기여합니다.
            </p>
            <p>
              엔에스솔루션은 단순한 기술 제공을 넘어, 고객과 함께 미래 지향적인
              에너지 관리 전략을 설계합니다. 우리의 전문성과 혁신적인 접근방식은
              고객들에게 신뢰받는 파트너로 자리잡고있으며, 에너지 관리의 모든
              단계에서 최적의 솔루션을 제공합니다.
            </p>
          </Des>
        </DesWrap>
      </DesContainer>
    </Container>
  );
};
