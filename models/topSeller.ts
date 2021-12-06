export interface ISeller {
  id: string;
  name: string;
  rate: number;
  follow: number;
  rank: number;
  img: StaticImageData;
}

export default class TopSellerModel {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _rate: number;
  private readonly _follow: number;
  private readonly _rank: number;
  private readonly _img: string[];

  constructor(props: any) {
    this._id = props._id;
    this._name = props.shop.user.userName;
    this._rate = props.shop.avg_rating;
    this._follow = props.shop.user.follow_count;
    this._rank = props.shop.ranking_today;
    this._img = props.shop.user.avatar;
  }

  public toDTO = () => ({
    id: this._id,
    name: this._name,
    rate: this._rate,
    follow: this._follow,
    rank: this._rank,
    img: this._img,
  });

  public static getListArray = (array: any): object[] => {
    let _array: object[] = [];
    array.map((v: any) => {
      _array.push(new TopSellerModel(v).toDTO());
    });
    return _array;
  };
}
