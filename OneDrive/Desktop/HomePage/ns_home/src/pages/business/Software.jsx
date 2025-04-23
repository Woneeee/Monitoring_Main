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

export const Software = () => {
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
        initialSlide={0}
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
    </Container>
  );
};
