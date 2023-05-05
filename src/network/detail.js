import { request } from 'network/request'

// 详情页数据请求
export function getDetail(iid) {
    return request({
        url: '/detail',
        params:{
            iid,
        }
    })
}

// 详情页数据请求
export class dBaseInfoDate{
    constructor(columns,services,itemInfo){
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.lowNowPrice = itemInfo.lowNowPrice

        this.services = services
        this.columns = columns 
    }
}

export class Shop {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods
    }
}

export class GoodsParam {
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }

