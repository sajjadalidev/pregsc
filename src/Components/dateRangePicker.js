import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";

export const DateRangePicker = () => (
  <Space direction="vertical" size={12} style={{ marginTop: "20px" }}>
    <RangePicker
      defaultValue={[
        dayjs("2015/01/01", dateFormat),
        dayjs("2015/01/01", dateFormat),
      ]}
      format={dateFormat}
    />
  </Space>
);
