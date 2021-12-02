import { throws } from "assert";

export default class CategoryModel {
  private readonly _id: number;
  private readonly _shop_id: number;
  private readonly _permalink: string;
  private readonly _name: string;
  private readonly _priority: number;
  private readonly _is_active: boolean;
  private readonly _avatar: string;
  private readonly _pdfAvatar: string;
  private readonly _created_at: string;
  private readonly _updated_at: string;

  constructor(props: any) {
    this._id = props?._id;
    this._shop_id = props?.shop_id;
    this._permalink = props?.permalink;
    this._name = props?.name;
    this._priority = props?.priority;
    this._is_active = props?.is_active;
    this._avatar = props?.avatar;
    this._pdfAvatar = props?.pdfAvatar;
    this._created_at = props?.created_at;
    this._updated_at = props?.updated_at;
  }

  public toDTO = () => ({
    id: this._id,
    shop_id: this._shop_id,
    avatar: this._avatar,
    name: this._name,
  });

  public static getListArray = (array: any): object[] => {
    let _array: object[] = [];
    array.map((v: any) => {
      _array.push(new CategoryModel(v).toDTO());
    });
    return _array;
  };
}
