import { request } from "./request";

export function getGoodDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}

export class Goods {
  constructor(itemInfo, columns, promotions) {
    this.title = itemInfo.title;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.realPrice = itemInfo.lowNowPrice;
    this.promotions = promotions;
  }
}
