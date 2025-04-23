import styled from "styled-components";
import logo from "../../src/img/logo.svg";
import { Link } from "react-router-dom";

const SFooter = styled.section`
  width: 100%;
  /* height: 150px; */
  background-color: #323232;
  color: #fff;
  padding: 0 120px;
`;

const MenuAndSns = styled.div`
  width: 100%;
  border-bottom: 1px solid #ffffff;
  margin: 0 auto;
  padding: 20px 0;
`;

const Menu = styled.ul`
  display: flex;
  li {
    padding-right: 30px;
    height: 100%;
    margin-right: 30px;
    border-right: 1px solid #ffffff90;
    font-size: 15px;
    font-weight: 300;
    opacity: 0.9;
  }
`;

const Sns = styled.div``;

const InfoAndLogo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  font-size: 14px;
  font-weight: 300;
  opacity: 0.9;
`;

const Info = styled.div`
  line-height: 25px;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    font-size: 14px;
  }
`;

const ImgBox = styled.div`
  width: 110px;
  height: 100%;
  margin-top: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Footer = () => {
  return (
    <SFooter>
      <MenuAndSns>
        <Menu>
          <li>
            <Link to={"/case/FEMS"}>구축사례</Link>
          </li>
          <li>
            <Link to={"/inquiryform"}>도입문의</Link>
          </li>
        </Menu>
        <Sns></Sns>
      </MenuAndSns>

      <InfoAndLogo>
        <Info>
          <p>(주)엔에스솔루션 &nbsp; | &nbsp; 대표 이사: 천정희</p>
          <p>사업자등록번호: 123-45-67890</p>
          <p>
            부산 사상구 동주로 14, 2층 (주례동,럭키빌딩) &nbsp; | &nbsp;
            전화번호: &nbsp; 051-714-0774
          </p>
          <p>이메일: &nbsp; as@nixpack.co.kr</p>
        </Info>

        <Logo>
          <p>Copyright ⓒ 2025 엔에스솔루션. All rights reserved.</p>
          <ImgBox>
            <img src={logo} alt="로고" />
          </ImgBox>
        </Logo>
      </InfoAndLogo>
    </SFooter>
  );
};
