const BASE_URL = "https://frckqy.laf.run";

export const fetch = ({
  path,
  data,
}: {
  path: string;
  data: Record<string, string>;
}) => {
  return new Promise((resolve, reject) => {
    uni.request({
      method: "POST",
      url: `${BASE_URL}${path}`, //仅为示例，并非真实接口地址。
      data,
      success: function (res) {
        if (res.data?.code === "200") {
          resolve(res.data?.data);
        } else {
          const err = res.data?.message || "请求失败";
          reject(err);
          uni.showToast({
            title: err,
            icon: "error",
            duration: 2000,
          });
        }
      },
      fail: function (err) {
        reject(err);
      },
    });
  });
};
