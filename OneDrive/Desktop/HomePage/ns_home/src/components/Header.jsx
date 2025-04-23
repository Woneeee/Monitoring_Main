import styled from "styled-components";
import logo from "../img/logo.svg";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import bg from "../img/main4.webp";

const SHeader = styled.header`
  width: 100%;
  padding: 25px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  border-bottom: 1px solid #99999940;
`;

const Logo = styled.h1`
  width: 80px;
  height: 100%;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Menu = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  color: rgb(255, 255, 255);
  li {
    font-size: 18px;
    font-weight: 500;
    margin-right: 80px;
    letter-spacing: -0.5px;
  }
  li:nth-child(5) {
    margin: 0;
  }

  .dropdown {
    position: absolute;
    width: 210px;
    background-color: rgb(255, 255, 255);
    margin-top: 43px;
    border-radius: 10px;
    box-shadow: 1px 1px 3px rgba(44, 44, 44, 0.2);
    li {
      font-size: 16px;
      font-weight: 400;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      margin-left: 10px;
    }
    a {
      color: rgb(51, 51, 51);
    }
  }
`;

const MegaMenuWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 700px;
  background-color: white;
  padding: 30px 60px;
  display: ${({ $visible }) => ($visible ? "flex" : "none")};
  justify-content: space-around;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  border-radius: 10px;
`;

const MegaMenuColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h4 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }

  a {
    font-size: 14px;
    color: #666;
    text-decoration: none;

    &:hover {
      color: #000;
    }
  }
`;

const MenuIcon = styled.div`
  height: 100%;
  color: rgb(255, 255, 255);
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    font-size: 50px;
  }
`;

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  visibility: ${(props) => props.$active};
`;

const Bg = styled.div`
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Close = styled.div`
  font-size: 60px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  svg {
    position: absolute;
    top: 10px;
    right: 100px;
  }
`;

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null); // 활성화된 메뉴 상태 관리
  const [activeModal, setActiveModal] = useState(false);
  const path = useLocation();
  const [isHome, setIsHome] = useState(false);

  const mouseEnterHandler = (menu) => {
    setActiveMenu(menu);
  };
  const mouseLeaveHandler = () => {
    setActiveMenu(null);
  };
  const clickHandler = () => {
    setActiveModal(true);
  };
  const closeHandler = () => {
    setActiveModal(false);
  };

  useEffect(() => {
    if (path.pathname === "/") {
      setIsHome(true); // 홈일 때는 true
    } else {
      setIsHome(false); // 홈이 아닐때는 flase
    }
  }, [path.pathname]);

  return (
    <SHeader
      style={{
        backgroundColor: isHome ? "transparent" : "white",
        color: isHome ? "#fff" : "#000",
      }}
    >
      <Logo>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </Logo>

      <Menu>
        <li
          onMouseEnter={() => mouseEnterHandler("aboutus")}
          // onMouseLeave={mouseLeaveHandler}
        >
          <Link to={"/company"} style={{ color: isHome ? "#fff" : "#000" }}>
            ABOUT US
          </Link>
          {activeMenu === "aboutus" && (
            <ul className="dropdown" onMouseLeave={mouseLeaveHandler}>
              <li>
                <Link to={"/company"}>회사소개</Link>
              </li>
              <li>
                <Link to={"/vision"}>VISION</Link>
              </li>
              <li>
                <Link to={"/keyvalue"}>핵심가치</Link>
              </li>
              <li>
                <Link to={"/history"}>연혁 및 인증</Link>
              </li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => mouseEnterHandler("business")}
          // onMouseLeave={mouseLeaveHandler}
        >
          <Link to={"/software"} style={{ color: isHome ? "#fff" : "#000" }}>
            BUSINESS
          </Link>
          {activeMenu === "business" && (
            <ul className="dropdown" onMouseLeave={mouseLeaveHandler}>
              <li>
                <Link to={"/software"}>소프트웨어 개발</Link>
              </li>
              <li>
                <Link to={"/infra"}>인프라 구축</Link>
              </li>
              <li>
                <Link to={"/government"}>정부지원사업</Link>
              </li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => mouseEnterHandler("solutions")}
          // onMouseLeave={mouseLeaveHandler}
        >
          <Link to={"/nixpack"} style={{ color: isHome ? "#fff" : "#000" }}>
            SOLUTIONS
          </Link>
          {activeMenu === "solutions" && (
            <ul className="dropdown" onMouseLeave={mouseLeaveHandler}>
              <li>
                <Link to={"/nixpack"}>에너지통합모니터링시스템</Link>
              </li>
              <li>
                <Link to={"/compressor"}>공기압축기통합제어시스템</Link>
              </li>
              <li>
                <Link to={"/smartfactory"}>스마트팩토리구축지원</Link>
              </li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => mouseEnterHandler("cases")}
          // onMouseLeave={mouseLeaveHandler}
        >
          <Link to={"/case/FEMS"} style={{ color: isHome ? "#fff" : "#000" }}>
            CASES
          </Link>
          {activeMenu === "cases" && (
            <ul className="dropdown" onMouseLeave={mouseLeaveHandler}>
              <li>
                <Link to={"/case/FEMS"}>구축 사례</Link>
              </li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => mouseEnterHandler("notice")}
          // onMouseLeave={mouseLeaveHandler}
        >
          <Link to={"/inquiryform"} style={{ color: isHome ? "#fff" : "#000" }}>
            NOTICE
          </Link>
          {activeMenu === "notice" && (
            <ul className="dropdown" onMouseLeave={mouseLeaveHandler}>
              <li>
                <Link to={"/inquiryform"}>도입 문의</Link>
              </li>
            </ul>
          )}
        </li>
      </Menu>

      <MenuIcon>
        <RiMenu3Fill onClick={clickHandler} />
      </MenuIcon>

      <Modal $active={activeModal ? "visible" : "hidden"}>
        <Bg>
          <img src={bg} alt="menuBg" />
        </Bg>

        <Close onClick={closeHandler}>
          <IoClose />
        </Close>
      </Modal>
    </SHeader>
  );
};
