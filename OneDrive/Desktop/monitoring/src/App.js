import "./css/common/style.css";
import "./css/common/color.css";
import "./css/main.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const App = () => {
  const [deviceData, setDeviceData] = useState();
  const [staticData, setStaticData] = useState();
  const [timeUsageData, setTimeUsageData] = useState();
  const [yesterdayData, setYesterdayData] = useState();
  const [dayData, setDayData] = useState();
  const [monthData, setMonthData] = useState();
  const [rankData, setRankData] = useState();
  const [efficiencyData, setEfficiencyData] = useState();
  const [summaryData, setSummaryData] = useState();

  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
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
    } catch (error) {
      console.error(error);
    }
  };

  const Get_Yesterday_Time_Usage = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v2/history/kwh/hour`,
        {
          params: {
            device_list:
              "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55",
            s_date: yesterday,
          },
        }
      );
      setYesterdayData(res.data);
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
    Get_Yesterday_Time_Usage();
    Get_Day_Usage();
    Get_Month_Usage();
    Get_Rank();
    Get_Efficiency();
    Get_Summary();
  }, []);

  // console.log(deviceData);
  // console.log(staticData);
  console.log(timeUsageData);
  // console.log(yesterdayData);
  // console.log(dayData);
  // console.log(monthData);
  // console.log(rankData);
  // console.log(efficiencyData);
  // console.log(summaryData);

  const data = [
    { time: "00:00", usage: 5 },
    { time: "01:00", usage: 6 },
    { time: "02:00", usage: 8 },
    { time: "03:00", usage: 4 },
    { time: "04:00", usage: 7 },
  ];

  return (
    <section className="Sec Power_Monitoring_Main">
      <div className="Top">
        <div className="Inner Monitoring_Inner">
          <div className="Left">
            <ul className="Static">
              <li className="Max">최대</li>
              <li className="Min">최소</li>
              <li className="Average">평균</li>
            </ul>

            <div className="NowUsage">
              <LineChart width={1000} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="usage" stroke="#8884d8" />
              </LineChart>
            </div>
          </div>
          <ul className="Right Usage">
            <li className="Today">당일전력</li>
            <li className="Week">금주전력</li>
            <li className="Month">금월전력</li>
          </ul>
        </div>
      </div>
      <div className="Bottom">
        <div className="Inner"></div>
      </div>
    </section>
  );
};

export default App;
