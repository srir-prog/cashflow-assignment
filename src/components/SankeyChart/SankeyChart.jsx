import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useSelector } from "react-redux";

am4core.useTheme(am4themes_animated);
const SankeyChart = ({ data }) => {
  let chart = React.useRef(null);
  const { sankeyData } = useSelector((state) => ({
    sankeyData: state.budget.sankeyData,
  }));
  const mockData = [
    {
      from: "Salary",
      to: "Total Income",
      value: 5000,
    },
    {
      from: "Total Income",
      to: "Bills",
      value: 3000,
    },
    {
      from: "Bills",
      to: "Electric bill",
      value: 1000,
    },
    {
      from: "Bills",
      to: "Mobile bill",
      value: 2000,
    },
  ];
  // Use "useLayoutEffect" to mutate the DOM synchronously.
  React.useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.SankeyDiagram);
    chart.current = x;
    //Check to see if sankey data is available in store
    //Otherwise pick the mockData defined in the component.
    x.data = mockData;
    let hoverState = x.links.template.states.create("hover");
    hoverState.properties.fillOpacity = 0.6;

    x.dataFields.fromName = "from";
    x.dataFields.toName = "to";
    x.dataFields.value = "value";
    return () => {
      x.dispose();
    };
  }, [mockData]);

  // When the sankeyData state changes it will update the chart
  React.useLayoutEffect(() => {
    chart.current.data = sankeyData;
  }, [sankeyData]);
  return <div id="chartdiv" className="sankeychart__container"></div>;
};

export default SankeyChart;
