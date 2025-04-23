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
import fix from "../../img/fix.webp";
import install from "../../img/install.webp";
import monitor from "../../img/monitor.webp";

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

const InfraIntro = styled.section`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  margin-top: 120px;
  /* background-color: lavender; */
  h2 {
    font-size: 45px;
    font-weight: 500;
    text-align: center;
    letter-spacing: -1px;
  }
  p {
    font-size: 20px;
    margin-top: 50px;
    opacity: 0.9;
    letter-spacing: -1px;
  }
`;

const InfraInfo = styled.ul`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 120px;
  display: flex;
  justify-content: space-between;
  li {
    width: 30%;
  }
`;

const Img = styled.div`
  border-radius: 30px;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 30px 30px 0 0;
    object-fit: cover;
  }
`;

const Text = styled.div`
  height: 100px;
  background-color: #fef6f9;
  border-radius: 0 0 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    width: 50%;
    line-height: 30px;
    /* background-color: lavender; */
    text-align: center;
    font-size: 20px;
    opacity: 0.9;
  }
`;

export const Infra = () => {
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
        initialSlide={1}
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

      <InfraIntro>
        <h2>인프라 구축</h2>
        <p>인프라</p>
      </InfraIntro>

      <InfraInfo>
        <li>
          <Img>
            <img src={fix} alt="전기공사 하고있는 사람" />
          </Img>
          <Text>
            <p>전기 공사 및 통신공사</p>
          </Text>
        </li>
        <li>
          <Img>
            <img src={install} alt="장비 설치하는 사람" />
          </Img>
          <Text>
            <p>계측장비 설치 및 데이터 정합성 검증</p>
          </Text>
        </li>
        <li>
          <Img>
            <img src={monitor} alt="모니터링 하는 사람" />
          </Img>
          <Text>
            <p>통신환경 구축 및 데이터연계</p>
          </Text>
        </li>
      </InfraInfo>
    </Container>
  );
};
