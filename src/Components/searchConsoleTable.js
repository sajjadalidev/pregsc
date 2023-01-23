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
    children: [
      {
        key: "56",
        groups: "John Brown",
        total_clicks: 90,
        total_impressions: 70,
        position: 78,
        detail: "View KWS(12)",
      },
      {
        key: "34",
        groups: "John Brown",
        total_clicks: 90,
        total_impressions: 70,
        position: 78,
        detail: "View KWS(12)",
      },
      {
        key: "349",
        groups: "John Brown",
        total_clicks: 90,
        total_impressions: 70,
        position: 78,
        detail: "View KWS(12)",
      },
    ],
  },
  {
    key: "2",
    groups: "John Brown",
    total_clicks: 8,
    total_impressions: 6,
    position: 7,
    detail: "View KWS(19)",
    children: [
      {
        key: "56",
        groups: "John Brown",
        total_clicks: 90,
        total_impressions: 70,
        position: 78,
        detail: "View KWS(12)",
      },
      {
        key: "34",
        groups: "John Brown",
        total_clicks: 90,
        total_impressions: 70,
        position: 78,
        detail: "View KWS(12)",
      },
      {
        key: "349",
        groups: "John Brown",
        total_clicks: 90,
        total_impressions: 70,
        position: 78,
        detail: "View KWS(12)",
      },
    ],
  },
  {
    key: "3",
    groups: "Not Expandable",
    total_clicks: 18,
    total_impressions: 20,
    position: 40,
    detail: "View KWS(2)",
    children: [
      {
        key: "56",
        groups: "John Brown",
        total_clicks: 90,
        total_impressions: 70,
        position: 78,
        detail: "View KWS(12)",
      },
      {
        key: "34",
        groups: "John Brown",
        total_clicks: 90,
        total_impressions: 70,
        position: 78,
        detail: "View KWS(12)",
      },
      {
        key: "349",
        groups: "John Brown",
        total_clicks: 90,
        total_impressions: 70,
        position: 78,
        detail: "View KWS(12)",
      },
    ],
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
