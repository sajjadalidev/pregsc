import { Table, Pagination } from "antd";
import "../Styles/searchConsoleTable.css";
const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return <a href="#">Previous</a>;
  }
  if (type === "next") {
    return <a href="#">Next</a>;
  }
  return originalElement;
};

const expandedRowRender = () => {
  const expanded_columns = [
    {
      title: "Queries",
      dataIndex: "queries",
    },
    {
      title: "Clicks",
      dataIndex: "clicks",
    },
    {
      title: "Clicks",
      dataIndex: "clicks",
    },
    {
      title: "Clicks Difference",
      dataIndex: "clicks",
    },
    {
      title: "Impressions",
      dataIndex: "impressions",
    },
    {
      title: "Impressions",
      dataIndex: "impressions",
    },
    {
      title: "Impressions Difference",
      dataIndex: "impressions",
    },
    {
      title: "Position",
      dataIndex: "position",
    },
    {
      title: "Position",
      dataIndex: "position",
    },
    {
      title: "Position Difference",
      dataIndex: "position",
    },
  ];
  const expanded_data = [];
  for (let i = 0; i < 3; ++i) {
    expanded_data.push({
      key: i.toString(),
      queries: "bakken",
      clicks: "34",
      clicks: "34",
      clicks: "34",
      impressions: "56",
      impressions: "56",
      impressions: "56",
      position: "34",
      position: "34",
      position: "34",
    });
  }
  return (
    <Table
      columns={expanded_columns}
      dataSource={expanded_data}
      pagination={false}
    />
  );
};

const columns = [
  {
    title: "Groups",
    dataIndex: "groups",
    sorter: {
      compare: (a, b) => a.groups - b.groups,
      multiple: 3,
    },
  },
  {
    title: "Clicks 1st Period",
    dataIndex: "click_1st_period",
    sorter: {
      compare: (a, b) => a.click_list_period - b.click_list_period,
      multiple: 3,
    },
  },
  {
    title: "Clicks 2nd Period",
    dataIndex: "click_2nd_period",
    sorter: {
      compare: (a, b) => a.click_2nd_period - b.click_2nd_period,
      multiple: 3,
    },
  },
  {
    title: "Clicks Difference",
    dataIndex: "click_difference",
    sorter: {
      compare: (a, b) => a.click_difference - b.click_difference,
      multiple: 3,
    },
  },
  {
    title: "Impressions 1st Period",
    dataIndex: "impression_1st_period",
    sorter: {
      compare: (a, b) => a.impression_1st_period - b.impression_1st_period,
      multiple: 2,
    },
  },
  {
    title: "Impressions 2nd Period",
    dataIndex: "impression_2nd_period",
    sorter: {
      compare: (a, b) => a.impression_2nd_period - b.impression_2nd_period,
      multiple: 2,
    },
  },
  {
    title: "Impressions Difference",
    dataIndex: "impression_difference",
    sorter: {
      compare: (a, b) => a.impression_difference - b.impression_difference,
      multiple: 2,
    },
  },
  {
    title: "changes",
    dataIndex: "changes",
    sorter: {
      compare: (a, b) => a.changes - b.changes,
      multiple: 1,
    },
  },
  {
    title: "Prev Post Position",
    dataIndex: "prev_post_position",
    sorter: {
      compare: (a, b) => a.prev_post_position - b.prev_post_position,
      multiple: 1,
    },
  },
  {
    title: "Action",
    dataIndex: "action",
    sorter: {
      compare: (a, b) => a.action - b.action,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: "1",
    groups: "John Brown",
    click_list_period: 90,
    click_2nd_period: 90,
    click_difference: 30,
    impression_1st_period: 70,
    impression_2nd_period: 70,
    impression_difference: 30,
    changes: 78,
    prev_post_position: 23,
    action: "xyz",
  },
  {
    key: "2",
    groups: "John Brown",
    click_list_period: 90,
    click_2nd_period: 90,
    click_difference: 30,
    impression_1st_period: 70,
    impression_2nd_period: 70,
    impression_difference: 30,
    changes: 78,
    prev_post_position: 23,
    action: "xyz",
  },
  {
    key: "3",
    groups: "John Brown",
    click_list_period: 90,
    click_2nd_period: 90,
    click_difference: 30,
    impression_1st_period: 70,
    impression_2nd_period: 70,
    impression_difference: 30,
    changes: 78,
    prev_post_position: 23,
    action: "xyz",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

export const SecondTable = () => (
  <>
    <Table
      rowClassName={(record, index) =>
        index % 2 === 0 ? "table-row-light" : "table-row-dark"
      }
      columns={columns}
      dataSource={data}
      onChange={onChange}
      pagination={false}
      expandable={{
        expandedRowRender,
      }}
    />
    <Pagination
      total={500}
      itemRender={itemRender}
      style={{
        marginTop: "10PX",
        display: "flex",
        justifyContent: "end",
        padding: "20px",
      }}
    />
  </>
);
