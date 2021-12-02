export interface ITopProduct {
  id: string;
  name: string;
  price: number;
  location: string;
  img: string[];
  sold: number;
}

export default class TopProductModel {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _price: string;
  private readonly _location: string;
  private readonly _img: string[];
  private readonly _sold: number;

  constructor(props: any) {
    this._id = props._id;
    this._name = props.name;
    this._price = props.before_sale_price;
    this._location = props.shop.country;
    this._img = props.images;
    this._sold = props.sold;
  }

  public toDTO = () => ({
    id: this._id,
    name: this._name,
    price: this._price,
    location: this._location,
    img: this._img[0],
    sold: this._sold,
  });

  public static getListArray = (array: any): object[] => {
    let _array: object[] = [];
    array.map((v: any) => {
      _array.push(new TopProductModel(v).toDTO());
    });
    return _array;
  };
}
