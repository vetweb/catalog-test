export default interface Item {
    id: number,
    image: string,
    name: string;
    brand: string;
    vendor_sku: string;
    url: string;
    price: number;
    categories: Array<Category>
}

interface Category {
    id: number;
}