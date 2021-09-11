// Status of user (e.g. complete onboarding process or not)
// Show loading spinner before redirecting to dashboard

import { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const StripeCallBack = ({ history }) => {
  return (
    <div className="d-flex justify-content-center p-5">
      <LoadingOutlined className="display-1 p-5 text-danger" />
    </div>
  );
};

export default StripeCallBack;
