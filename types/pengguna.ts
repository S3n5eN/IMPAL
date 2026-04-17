export interface pengguna {
    id: number;
    name: string;
    email: string;
    password: string;
    totalPoin: number;
    dataDiri: {
        namaLengkap: string;
        usia: number;
        nomorTelpon: string;
        alamat: string;
        gender: string;
        pekerjaan: string;
    }
}