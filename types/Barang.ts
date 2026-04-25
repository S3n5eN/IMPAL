export interface Barang{
    id:string;
    name:string;
    desc:string;
    foto:string;
    status:boolean;
    // === Ini baru, karena di datebase minta kategory ====
    category: string
    placeId: string;
}