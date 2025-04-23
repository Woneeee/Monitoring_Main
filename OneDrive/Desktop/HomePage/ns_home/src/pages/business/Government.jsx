import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import software from "../../img/software.webp";
import infra from "../../img/infra.webp";
import government from "../../img/government.webp";
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

const GovernIntro = styled.section`
  max-width: 1140px;
  width: 100%;
  margin: 120px auto;
  h2 {
    font-size: 45px;
    font-weight: 500;
    text-align: center;
    letter-spacing: -1px;
  }
  span {
    margin-top: 100px;
    display: block;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -1px;
    opacity: 0.8;
    text-align: center;
  }
  p {
    margin-top: 10px;
    font-size: 18px;
    line-height: 25px;
    opacity: 0.7;
    letter-spacing: -1px;
    text-align: center;
  }
`;

export const Government = () => {
  return (
    <Container>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        initialSlide={2}
      >
        <SwiperSlide>
          <ImgBox>
            <Link to={"/software"}>
              <img src={software} alt="소프트웨어 개발 이미지" />
            </Link>
          </ImgBox>
          <Bg />

          <SoftText>
            <h2>SOFTWARE DEVELOPMENT</h2>
            <h3>소프트웨어개발</h3>
            <p>
              현장에 적합한 모니터링 기능을 분석하고 고객의 요구사항을 반영한
              현장 맞춤형 시스템 소프트웨어를 개발하여 제공합니다.
            </p>
          </SoftText>
        </SwiperSlide>
        <SwiperSlide>
          <ImgBox>
            <Link to={"/infra"}>
              <img src={infra} alt="인프라 구축 이미지" />
            </Link>
          </ImgBox>
          <Bg />

          <SoftText>
            <h2>INFRA DEVELOPMENT</h2>
            <h3>인프라 구축</h3>
            <p>
              저희는 기업의 효율적인 운영을 위한 IT 인프라를 구축하고
              제공합니다.
            </p>
          </SoftText>
        </SwiperSlide>
        <SwiperSlide>
          <ImgBox>
            <Link to={"/government"}>
              <img src={government} alt="정부지원사업 진행 이미지" />
            </Link>
          </ImgBox>
          <Bg />

          <SoftText>
            <h2>GOVERNMENT SUPPORT PROGRAM</h2>
            <h3>정부지원사업</h3>
            <p>
              저희 회사는 혁신과 비즈니스 성장을 촉진하기 위해 다양한 정부 지원
              사업에 적극 참여하고 있습니다.
            </p>
          </SoftText>
        </SwiperSlide>
      </Swiper>

      <GovernIntro>
        <h2>정부지원사업</h2>
        <span>
          엔에스솔루션은 정부가 추진하는 스마트팩토리 구축 및 에너지 효율화 지원
          사업에서 전문 컨설팅과 기술 지원을 제공합니다.
        </span>
        <p>
          중소기업이 스마트팩토리를 도입하는 과정에서 필요한 자금 지원,
          기술개발, 그리고 운영 컨설팅까지 전방위적인 서비스를 제공합니다.
        </p>
        <span>특징 및 기대효과 </span>
        <p>
          • 맞춤형 지원: 기업 규모와 환경에 맞는 스마트팩토리 구축 솔루션 제공
        </p>
        <p>
          • 재정 부담 완화: 정부의 자금 지원 프로그램 활용으로 초기 투자 비용
          절감
        </p>
        <p>
          • 디지털 전환 가속화: IoT, 빅데이터 등 최신 기술 도입으로 제조업의
          디지털 전환 지원
        </p>
        <p>• 경쟁력 강화: 생산성 향상과 품질개선으로 시장 경쟁력 확보</p>
      </GovernIntro>
    </Container>
  );
};
