/* eslint-disable react/prop-types */
import ReactEChart from "echarts-for-react";
import * as echarts from "echarts/core";
import theme from "./themes/dark";

// https://codesandbox.io/p/sandbox/echartszhu-ti-ce-shi-2zmv3c?file=%2Fdemo.tsx%3A8%2C29
echarts.registerTheme("dark-theme", theme);

export default function ReactEChartComponent({options, styles}) {
 
  return (
      <ReactEChart
        style={{ width: styles.width , height: styles.height}}
        // theme={"dark-theme"}
        option={options}
      />
  );
}