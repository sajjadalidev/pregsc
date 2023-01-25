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
      title: "KWs",
      dataIndex: "kws",
    },
    {
      title: "Clicks",
      dataIndex: "clicks",
    },
    {
      title: "Impression",
      dataIndex: "impression",
    },
    {
      title: "% Clicks of Cluster",
      dataIndex: "click_of_cluster",
    },
    {
      title: "% Impression of Cluster",
      dataIndex: "impression_of_cluster",
    },
    {
      title: "Position",
      dataIndex: "position",
    },
  ];
  const expanded_data = [];
  for (let i = 0; i < 3; ++i) {
    expanded_data.push({
      key: i.toString(),
      kws: "bakken",
      clicks: "34",
      click_of_cluster: "56%",
      impression: "56",
      impression_of_cluster: "6%",
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
    title: "Total Clicks",
    dataIndex: "total_clicks",
    sorter: {
      compare: (a, b) => a.total_clicks - b.total_clicks,
      multiple: 3,
    },
  },
  {
    title: "Total Impressions",
    dataIndex: "total_impressions",
    sorter: {
      compare: (a, b) => a.total_impressions - b.total_impressions,
      multiple: 2,
    },
  },
  {
    title: "Position",
    dataIndex: "position",
    sorter: {
      compare: (a, b) => a.position - b.position,
      multiple: 1,
    },
  },
  {
    title: "Detail",
    dataIndex: "detail",
    sorter: {
      compare: (a, b) => a.detail - b.detail,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: "1",
    groups: "John Brown",
    total_clicks: 90,
    total_impressions: 70,
    position: 78,
    detail: "View KWS(12)",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: "2",
    groups: "John Brown",
    total_clicks: 90,
    total_impressions: 70,
    position: 78,
    detail: "View KWS(12)",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: "3",
    groups: "John Brown",
    total_clicks: 90,
    total_impressions: 70,
    position: 78,
    detail: "View KWS(12)",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

export const SearchConsoleTable = () => (
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
