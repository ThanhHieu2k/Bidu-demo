export interface IQuestion {
    color?: string;
    name?: string;
  }
  
export default class QuestionModel {
    private readonly _id: string;
    private readonly name: string;
    private readonly sold: string;
    private readonly images: string[];
    private readonly sale_price: string;


    constructor(props: any) {
        this._id = props?._id;
        this.name = props?.name;
        this.sold = props?.sold;
        this.images = props?.images ;
        this.sale_price = props?.sale_price ;
    }

    public toDTO = () => ({
        id: this._id,
        sold: this.sold,
        name: this.name,
        images: this.images,
        sale_price: this.sale_price,
    });

    public static getListArray = (array: any): object[] => {
        let _array: object[] = [];
        array.map((v: any) => {
        _array.push(new QuestionModel(v).toDTO());
        });
        return _array;
    };
}
  