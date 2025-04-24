import styled, { keyframes } from "styled-components";
import main_bg from "../../../img/main_bg.webp";
import main_bg3 from "../../../img/main_bg3.webp";
import navy_bg from "../../../img/navy_bg.jpeg";
import mainbanner_program_img from "../../../img/mainbanner_program_img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "../components/bannerStyles.css";
import { Link } from "react-router-dom";

const fadeInAndScale = keyframes`
  0% {
    opacity: 0.8;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.section`
  width: 100%;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  animation: ${fadeInAndScale} 2s ease-in-out;
`;

const Slide2ImgBox = styled.div`
  position: absolute;
  bottom: 180px;
  right: 300px;
  width: 900px;
  height: 600px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Bg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #18181873;
  backdrop-filter: ${(props) => (props.$blur ? "blur(3px)" : "none")};
`;

const Text = styled.div`
  position: absolute;
  top: 37%;
  left: 120px;
  letter-spacing: -1px;
  h2 {
    font-size: 60px;
    font-weight: 700;
    color: #fff;
    line-height: 73px;
  }
  p {
    width: 600px;
    font-size: 16px;
    color: #fff;
    line-height: 30px;
    margin-top: 10px;
    font-weight: 500;
  }
  animation: ${fadeInAndScale} 2s ease-in-out;
`;

const Btn = styled.button`
  position: absolute;
  width: 130px;
  height: 40px;
  background-color: #fff;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 10px;
  transition-duration: 0.5s;
  &:hover {
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
  }
`;

export const MainBanner = () => {
  return (
    <Container>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        initialSlide={0}
      >
        <SwiperSlide>
          <ImgBox>
            <img src={main_bg3} alt="ESG경영 및 스마트에너지관리" />
          </ImgBox>
          <Bg />

          <Text>
            <h2>에너지 솔루션으로</h2>
            <h2>실현하는 탄소중립</h2>

            <p>
              엔에스솔루션은 에너지 절감을 극대화하고, 기업들이 탄소중립 목표를
              달성할 수 있도록 돕습니다.
            </p>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <ImgBox className="slide_2">
            <img src={navy_bg} alt="네이비색 배경" />
          </ImgBox>
          <Bg $blur />
          <Slide2ImgBox>
            <img src={mainbanner_program_img} alt="모니터링 프로그램 이미지" />
          </Slide2ImgBox>

          <Text>
            <h2>에너지 소비 실시간 모니터링, </h2>
            <h2>최적화된 관리 솔루션</h2>
            <p>
              신뢰성 있는 데이터 기반으로, 기업의 에너지 사용 패턴을 정확히
              파악하고, 효율적인 에너지 관리 전략을 제시합니다.
            </p>

            <Link to={"/nixpack"}>
              <Btn>솔루션 확인하기</Btn>
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <ImgBox className="banner_2">
            <img src={main_bg} alt="스마트팩토리" />
          </ImgBox>
          <Bg />

          <Text>
            <h2>스마트공장 정부 지원사업</h2>
            <p>
              제조현장에 최적화된 스마트공장 솔루션과 정부지원 컨설팅을
              제공합니다. 다수의 스마트공장 구축 경험을 바탕으로, 기업 맞춤형
              솔루션을 제안해드리겠습니다.
            </p>
          </Text>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
