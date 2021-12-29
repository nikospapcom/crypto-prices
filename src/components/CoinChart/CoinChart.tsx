import { FlexibleXYPlot, LineSeries, XAxis, YAxis } from "react-vis";

interface IProps {
  data: any;
}

const CoinChart: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <FlexibleXYPlot
        height={400}
        style={{ backgroundColor: "#1F2937" }}
        xType="time-utc"
      >
        <YAxis
          tickFormat={(v) => `${v.toString().slice(0, 2)}K`}
          tickPadding={0}
          style={{ fill: "#9CA3AF", fontSize: "12px" }}
        ></YAxis>
        <XAxis
          title="Date"
          style={{ fill: "#9CA3AF", fontSize: "12px" }}
        ></XAxis>
        <LineSeries data={data} color="#3861fb" style={{ fill: "none" }} />
      </FlexibleXYPlot>
    </>
  );
};

export default CoinChart;
