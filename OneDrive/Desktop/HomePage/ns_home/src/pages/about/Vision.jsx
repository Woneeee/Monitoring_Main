import styled from "styled-components";
import com_bg from "../../img/com_bg.webp";
import vision_bg from "../../img/vision_bg.webp";

const Container = styled.div`
  width: 100%;
`;

const Bg = styled.section`
  width: 100%;
  height: 450px;
  background-image: url(${com_bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
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

const BriefVision = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
  h2 {
    width: 600px;
    line-height: 50px;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1px;
  }
`;

const VisionCon = styled.section`
  width: 100%;
  height: 550px;
  background-image: url(${vision_bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
  position: relative;
  margin-bottom: 120px;
`;

const VisionText = styled.div`
  max-width: 700px;
  width: 100%;
  color: #fff;
  text-align: center;
  position: absolute;
  h2 {
    font-size: 35px;
    font-weight: 500;
  }
  p {
    margin-top: 40px;
    font-size: 35px;
    line-height: 45px;
    font-weight: 300;
  }
`;

const Eng = styled.div`
  width: 100%;
  margin-top: 40px;
  line-height: 25px;
  opacity: 0.6;
  font-weight: 300;
`;

const ImgBg_2 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #1b1b1b5f;
`;

export const Vision = () => {
  return (
    <Container>
      <Bg>
        <ImgBg />
        <Text>
          <h1>VISION</h1>
        </Text>
      </Bg>

      <BriefVision>
        <h2>"탄소중립의 가치를 선도하는 에너지 통합 솔루션의 리더"</h2>
      </BriefVision>

      <VisionCon>
        <ImgBg_2 />
        <VisionText>
          <h2>VISION</h2>
          <p>
            ESG 경영의 실현을 돕고, 지속 가능한 미래를 위한 스마트 에너지 관리
            기술의 선두주자로 자리매김하겠습니다.
          </p>
          <Eng>
            We will help realize ESG management and establish ourselves as a
            leader in smart energy management technology for a sustainable
            future.
          </Eng>
        </VisionText>
      </VisionCon>
    </Container>
  );
};
