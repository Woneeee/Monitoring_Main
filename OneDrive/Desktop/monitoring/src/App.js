import "./css/common/style.css";
import "./css/common/color.css";
import "./css/main.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { LuChartSpline } from "react-icons/lu";
import {
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { IoPieChartOutline } from "react-icons/io5";

const App = () => {
  const [deviceData, setDeviceData] = useState();
  const [staticData, setStaticData] = useState();
  const [timeUsageData, setTimeUsageData] = useState();
  const [mainUsageData, setMainUsageData] = useState();
  const [dummy, setDummy] = useState();
  const [dayData, setDayData] = useState();
  const [weekData, setWeekData] = useState();
  const [lastWeekData, setLastWeekData] = useState();
  const [monthData, setMonthData] = useState();
  const [rankData, setRankData] = useState();
  const [efficiencyData, setEfficiencyData] = useState();
  const [summaryData, setSummaryData] = useState();

  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  // console.log(today);
  const currentYearMonth = new Date().toISOString().slice(0, 7);
  const currentYear = new Date().getFullYear().toString();

  const Get_Device = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/devices`);
      setDeviceData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const Get_Static = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v2/kw/summary`,
        {
          params: {
            deviceList:
              "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55",
          },
        }
      );
      setStaticData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const Get_Time_Usage = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v2/history/kwh/hour`,
        {
          params: {
            device_list:
              "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55",
            s_date: today,
          },
        }
      );
      setTimeUsageData(res.data);
      setMainUsageData(res.data[0].data);
      const formatted = res.data[0].data.map((item) => ({
        datetime: item.datetime,
        kwh: item.kwh,
      }));

      const cumulative = formatted.reduce((acc, cur, idx) => {
        const prev = idx > 0 ? acc[idx - 1].cumulativeKwh : 0;
        acc.push({
          ...cur,
          cumulativeKwh: prev + cur.kwh,
        });
        return acc;
      }, []);
      setDummy(cumulative);
    } catch (error) {
      console.error(error);
    }
  };

  const Get_Day_Usage = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v2/history/kwh/day`,
        {
          params: {
            device_list:
              "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55",
            s_date: currentYearMonth,
          },
        }
      );
      setDayData(res.data);

      const todayDate = new Date();

      // 이번주: 오늘 포함 7일
      const sevenDaysAgo = new Date(todayDate);
      sevenDaysAgo.setDate(todayDate.getDate() - 6);

      // 전주: 7일 이전 7일 (오늘 -13 ~ 오늘 -7)
      const lastWeekStart = new Date(todayDate);
      lastWeekStart.setDate(todayDate.getDate() - 13);

      const lastWeekEnd = new Date(todayDate);
      lastWeekEnd.setDate(todayDate.getDate() - 7);

      // 날짜 문자열 변환 함수
      const toDateString = (date) => date.toISOString().split("T")[0];

      // 이번주 합산
      const totalKwhThisWeek = res.data[0].data
        .filter((item) => {
          const itemDate = new Date(item.datetime);
          return itemDate >= sevenDaysAgo && itemDate <= todayDate;
        })
        .reduce((sum, item) => sum + item.kwh, 0);

      setWeekData(totalKwhThisWeek);

      // 전주 합산
      const totalKwhLastWeek = res.data[0].data
        .filter((item) => {
          const itemDate = new Date(item.datetime);
          return itemDate >= lastWeekStart && itemDate <= lastWeekEnd;
        })
        .reduce((sum, item) => sum + item.kwh, 0);

      setLastWeekData(totalKwhLastWeek); // ← 필요 시 state로 따로 관리
    } catch (error) {
      console.error(error);
    }
  };

  const Get_Month_Usage = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v2/history/kwh/month`,
        {
          params: {
            device_list:
              "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55",
            s_date: currentYear,
          },
        }
      );
      setMonthData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const Get_Rank = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/rank/all/kwh`
      );
      setRankData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const Get_Efficiency = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v2/efficiency/peak-power`,
        {
          params: {
            deviceList:
              "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55",
            yearMonth: currentYearMonth,
          },
        }
      );
      setEfficiencyData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const Get_Summary = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/summary/kwh`,
        {
          params: {
            device_list:
              "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55",
          },
        }
      );
      setSummaryData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    Get_Device();
    Get_Static();
    Get_Time_Usage();
    Get_Day_Usage();
    Get_Month_Usage();
    Get_Rank();
    Get_Efficiency();
    Get_Summary();
  }, []);

  // console.log(deviceData);
  // console.log(staticData);
  // console.log(timeUsageData);
  // console.log(dayData);
  // console.log(monthData);
  // console.log(rankData);
  // console.log(efficiencyData);
  // console.log(summaryData);

  // console.log(dummy);
  // console.log(weekData);
  // console.log(lastWeekData);

  const formatHour = (datetime) => datetime.slice(11, 16); // HH:MM 포맷

  const Top5_Device = rankData && rankData.slice(1);
  const Top5_Device_Name =
    Top5_Device && Top5_Device.map((data) => data.deviceName);

  const Top5_Summary =
    summaryData &&
    summaryData.filter((data) => Top5_Device_Name.includes(data.deviceName));

  const Top5_Summary_Array = Top5_Summary && [
    Top5_Summary[0],
    Top5_Summary[3],
    Top5_Summary[2],
    Top5_Summary[1],
  ];

  const yesterdayRatio =
    (efficiencyData &&
      efficiencyData[0].values.find((item) => item.date === yesterday)
        ?.ratio) ||
    0;

  const ratio = Math.min(Math.max(yesterdayRatio, 1), 4); // 1 ~ 4로 제한

  const data = [
    { yesterdayRatio: ratio - 1 }, // 차트에 들어갈 상대값 (0 ~ 3)
    { yesterdayRatio: 4 - ratio }, // 나머지 값
  ];

  const COLORS = [
    ratio >= 3
      ? "#f87171" // 빨강 (3 이상은 나쁨)
      : ratio >= 2
      ? "#facc15" // 노랑 (2 이상은 보통)
      : "#4ade80", // 초록 (1~2 사이면 좋음)
    "#e5e7eb", // 회색: 나머지 비율
  ];

  return (
    staticData &&
    timeUsageData && (
      <>
        <section className="Sec Power_Monitoring_Main">
          <div className="Top">
            <div className="Inner Monitoring_Inner">
              <div className="Left">
                <ul className="Static">
                  <li className="Max">
                    <div className="title">15분 내 최대</div>
                    <div className="Value">
                      {staticData[0].kwMax} <span>kwh</span>
                    </div>
                  </li>
                  <li className="Min">
                    <div className="title">15분 내 최소</div>
                    <div className="Value">
                      {staticData[0].kwMin} <span>kwh</span>
                    </div>
                  </li>
                  <li className="Average">
                    <div className="title">15분 내 평균</div>
                    <div className="Value">
                      {staticData[0].kwAvg} <span>kwh</span>
                    </div>
                  </li>
                </ul>

                <div className="NowUsage">
                  <div className="title">
                    <LuChartSpline />
                    &nbsp;&nbsp;실시간 시간대별 전력 사용량 (kWh)
                  </div>
                  <ComposedChart width={1120} height={300} data={dummy}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="datetime"
                      tickFormatter={(dt) => dt.slice(11, 16)}
                      tick={{ fill: "#ffffff", fontSize: 15 }}
                    />

                    {/* 왼쪽 Y축: 시간별 전력량(kwh), 범위 0~3000 */}
                    <YAxis
                      yAxisId="left"
                      unit=" kWh"
                      ticks={[0, 400, 800, 1200, 1500]}
                      stroke="#8884d8"
                    />

                    {/* 오른쪽 Y축: 누적 전력량(cumulativeKwh), 범위 0~15000 */}
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      unit=" kWh"
                      ticks={[0, 6000, 12000, 18000, 25000]}
                      stroke="#82ca9d"
                    />

                    <Tooltip labelFormatter={(dt) => dt.slice(11, 16)} />
                    <Legend />

                    {/* 막대그래프: 왼쪽 Y축 사용 */}
                    <Bar
                      yAxisId="left"
                      dataKey="kwh"
                      fill="#8884d8"
                      name="시간별 전력량"
                    />

                    {/* 라인그래프: 오른쪽 Y축 사용 */}
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="cumulativeKwh"
                      stroke="#82ca9d"
                      name="누적 전력량"
                      strokeWidth={2}
                      dot={false}
                    />
                  </ComposedChart>
                </div>
              </div>

              <ul className="Right Usage">
                <li className="Day">
                  <div className="Today">
                    <div className="Today_Left">
                      <div className="title">당일 전력 사용량</div>
                      <div className="Value">
                        {timeUsageData[0].totalKwh.toLocaleString()}
                        <span> kwh</span>
                      </div>
                    </div>

                    <div
                      className="Compare"
                      style={{
                        color:
                          timeUsageData[0].totalKwh -
                            timeUsageData[0].totalLastDayKwh >=
                          0
                            ? "#e7233a"
                            : "#234ae7",
                      }}
                    >
                      {timeUsageData[0].totalKwh -
                        timeUsageData[0].totalLastDayKwh >=
                      0 ? (
                        <FaArrowUp />
                      ) : (
                        <FaArrowDown />
                      )}
                      {(
                        timeUsageData[0].totalKwh -
                        timeUsageData[0].totalLastDayKwh
                      ).toLocaleString()}
                      <span>&nbsp;kwh</span>
                    </div>
                  </div>
                  <div className="Yesterday">
                    <div className="title2">전일 전력 사용량</div>
                    <div className="Value2">
                      {timeUsageData[0].totalLastDayKwh.toLocaleString()}
                      <span> kwh</span>
                    </div>
                  </div>
                </li>

                <li className="Week">
                  <div className="Today">
                    <div className="Today_Left">
                      <div className="title">금주 전력 사용량</div>
                      <div className="Value">
                        {weekData.toLocaleString()}
                        <span> kwh</span>
                      </div>
                    </div>

                    <div
                      className="Compare"
                      style={{
                        color:
                          weekData - lastWeekData >= 0 ? "#e7233a" : "#234ae7",
                      }}
                    >
                      {weekData - lastWeekData >= 0 ? (
                        <FaArrowUp />
                      ) : (
                        <FaArrowDown />
                      )}
                      {(weekData - lastWeekData).toLocaleString()}
                      <span>&nbsp;kwh</span>
                    </div>
                  </div>
                  <div className="Yesterday">
                    <div className="title2">전주 전력 사용량</div>
                    <div className="Value2">
                      {lastWeekData.toLocaleString()}
                      <span> kwh</span>
                    </div>
                  </div>
                </li>

                <li className="Month">
                  <div className="Today">
                    <div className="Today_Left">
                      <div className="title">금월 전력 사용량</div>
                      <div className="Value">
                        {dayData[0].totalKwh.toLocaleString()}
                        <span> kwh</span>
                      </div>
                    </div>

                    <div
                      className="Compare"
                      style={{
                        color:
                          dayData[0].totalKwh - dayData[0].totalLastMonthKwh >=
                          0
                            ? "#e7233a"
                            : "#234ae7",
                      }}
                    >
                      {dayData[0].totalKwh - dayData[0].totalLastMonthKwh >=
                      0 ? (
                        <FaArrowUp />
                      ) : (
                        <FaArrowDown />
                      )}
                      {(
                        dayData[0].totalKwh - dayData[0].totalLastMonthKwh
                      ).toLocaleString()}
                      <span>&nbsp;kwh</span>
                    </div>
                  </div>
                  <div className="Yesterday">
                    <div className="title2">전월 전력 사용량</div>
                    <div className="Value2">
                      {dayData[0].totalLastMonthKwh.toLocaleString()}
                      <span> kwh</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="Bottom">
            <ul className="Inner Bottom_Inner">
              <li className="Bottom_Left">
                <div className="Top5">
                  <div className="title">실시간 전력 소모 Top 4</div>
                  <ul className="Rank">
                    {Top5_Device.map((data, idx) => (
                      <li key={idx} className="Rank_Device">
                        <div className="Rank_Num">{idx + 1}&nbsp;&nbsp;</div>
                        <div>{data.deviceName}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="Device_Summary">
                  <div className="title">Top 4 장비 전력 사용량</div>

                  <table className="Device_Summary_Table">
                    <thead>
                      <tr>
                        <th>순위</th>
                        <th>장치명</th>
                        <th>오늘</th>
                        <th>어제</th>
                        <th>이번주</th>
                        <th>지난주</th>
                        <th>이번달</th>
                        <th>지난달</th>
                        <th>총 사용량</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Top5_Summary_Array.map((data, idx) => (
                        <tr key={idx}>
                          <td className="Rank_Num">{idx + 1}</td>
                          <td>{data.deviceName}</td>
                          <td>{data.dailyKwh.toLocaleString()}</td>
                          <td>{data.yesterdayKwh.toLocaleString()}</td>
                          <td>{data.weeklyKwh.toLocaleString()}</td>
                          <td>{data.lastMonthlyKwh.toLocaleString()}</td>
                          <td>{data.monthlyKwh.toLocaleString()}</td>
                          <td>{data.lastMonthlyKwh.toLocaleString()}</td>
                          <td>{data.totalKwh.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </li>
              <li className="Bottom_Right">
                <div className="Efficiency">
                  <div className="title">
                    <IoPieChartOutline />
                    전일 효율비
                  </div>

                  <div className="gauge-container">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={data}
                          startAngle={180}
                          endAngle={0}
                          innerRadius="70%"
                          outerRadius="100%"
                          dataKey="yesterdayRatio"
                          stroke="none"
                          paddingAngle={3}
                        >
                          {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>

                    <div className="gauge-label">
                      <div className="gauge-value">
                        {yesterdayRatio.toFixed(2)}
                      </div>
                      <div className="gauge-target">효율지표 (1이 적정)</div>
                    </div>

                    <div className="gauge-legend">
                      <div className="legend-item">
                        <div className="legend-color good"></div>
                        <span>양호</span>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color warning"></div>
                        <span>주의</span>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color danger"></div>
                        <span>경고</span>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color other"></div>
                        <span>그외</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </>
    )
  );
};

export default App;
