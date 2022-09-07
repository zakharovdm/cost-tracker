import "./ChartBar.css";

const chartBar = (props) => {
  let fillingHeight = "0%";

  if (props.maxValue > 0) {
    fillingHeight = `${Math.round((props.value / props.maxValue) * 100)}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: fillingHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default chartBar;
