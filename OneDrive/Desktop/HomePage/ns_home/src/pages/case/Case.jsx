import styled from "styled-components";
import factory from "../../img/factory.webp";
import { useState } from "react";
import { Link } from "react-router-dom";
import { case1, case2, case3, case4 } from "../../config/case/case";

const Container = styled.section`
  width: 100%;
`;

const Bg = styled.section`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${factory});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  h1 {
    font-size: 55px;
    font-weight: 500;
    letter-spacing: -1px;
    position: absolute;
  }
`;

const ImgBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #e2e2e23a;
`;

const NavWrapper = styled.nav`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid #55555580;
`;

const NavItem = styled.div`
  padding: 20px 0;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.$active ? "2px solid #A8E6CF" : "2px solid transparent"};
  transition: border-bottom 0.2s ease;
`;

const FemsContainer = styled.section`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 120px;
  h2 {
    font-size: 35px;
    font-weight: 500;
    letter-spacing: -1px;
    margin-top: 120px;
  }
`;

const Company = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 60px;
  margin-top: 50px;
  li {
    border-radius: 15px;
    transition-duration: 0.2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ImgBox = styled.div`
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }
`;

const ComIntro = styled.div`
  background-color: #fef6f9;
  padding: 15px 10px;
  border-radius: 0 0 15px 15px;
  letter-spacing: -1px;
  h3 {
    font-size: 22px;
    font-weight: 500;
  }
  p {
    margin-top: 10px;
    line-height: 15px;
    opacity: 0.8;
  }
`;

export const Case = () => {
  const navItems = [
    "FEMS",
    "EnMS",
    "공기압축기통합제어시스템",
    "스마트생태공장",
  ];
  const [activeItem, setActiveItem] = useState("FEMS");

  const allCases = [...case1, ...case2, ...case3, ...case4];

  const filteredCases = allCases.filter((item) => item.bs_title === activeItem);

  const year_2022 = filteredCases.filter((item) => item.year === "~2022");
  const year_2023 = filteredCases.filter((item) => item.year === 2023);
  const year_2024 = filteredCases.filter((item) => item.year === 2024);
  const year_2025 = filteredCases.filter((item) => item.year === 2025);

  return (
    <Container>
      <Bg>
        <ImgBg />
        <h1>구축 사례</h1>
      </Bg>

      <NavWrapper>
        {navItems.map((item) => (
          <NavItem
            key={item}
            $active={activeItem === item}
            onClick={() => setActiveItem(item)}
          >
            <Link to={`/case/${item}`}>{item}</Link>
          </NavItem>
        ))}
      </NavWrapper>

      <FemsContainer>
        {year_2025.length > 0 ? <h2>2025년</h2> : ""}

        {year_2025.length > 0 ? (
          <Company>
            {year_2025.map((year_2025) => (
              <li>
                <ImgBox>
                  <img
                    src={`${process.env.PUBLIC_URL}${year_2025.img_url}`}
                    alt="공장이미지"
                  />
                </ImgBox>
                <ComIntro>
                  <h3>{year_2025.company}</h3>
                  <p>{year_2025.bs_title} 사례</p>
                  <p>{year_2025.bs_info}</p>
                </ComIntro>
              </li>
            ))}
          </Company>
        ) : (
          ""
        )}
        {/* --------------------------------------------------------------- */}
        {year_2024.length > 0 ? <h2>2024년</h2> : ""}

        {year_2024.length > 0 ? (
          <Company>
            {year_2024.map((year_2024) => (
              <li>
                <ImgBox>
                  <img
                    src={`${process.env.PUBLIC_URL}${year_2024.img_url}`}
                    alt="공장이미지"
                  />
                </ImgBox>
                <ComIntro>
                  <h3>{year_2024.company}</h3>
                  <p>{year_2024.bs_title} 사례</p>
                  <p>{year_2024.bs_info}</p>
                </ComIntro>
              </li>
            ))}
          </Company>
        ) : (
          ""
        )}
        {/* --------------------------------------------------------------- */}
        {year_2023.length > 0 ? <h2>2023년</h2> : ""}

        {year_2023.length > 0 ? (
          <Company>
            {year_2023.map((year_2023) => (
              <li>
                <ImgBox>
                  <img
                    src={`${process.env.PUBLIC_URL}${year_2023.img_url}`}
                    alt="공장이미지"
                  />
                </ImgBox>
                <ComIntro>
                  <h3>{year_2023.company}</h3>
                  <p>{year_2023.bs_title} 사례</p>
                  <p>{year_2023.bs_info}</p>
                </ComIntro>
              </li>
            ))}
          </Company>
        ) : (
          ""
        )}
        {/* ------------------------------------------------------------ */}
        {year_2022.length > 0 ? <h2>~2022년</h2> : ""}

        {year_2022.length > 0 ? (
          <Company>
            {year_2022.map((year_2022) => (
              <li>
                <ImgBox>
                  <img
                    src={`${process.env.PUBLIC_URL}${year_2022.img_url}`}
                    alt="공장이미지"
                  />
                </ImgBox>
                <ComIntro>
                  <h3>{year_2022.company}</h3>
                  <p>{year_2022.bs_title} 사례</p>
                  <p>{year_2022.bs_info}</p>
                </ComIntro>
              </li>
            ))}
          </Company>
        ) : (
          ""
        )}
      </FemsContainer>
    </Container>
  );
};

//
