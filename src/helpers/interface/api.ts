/**
 * Common
 */


// Pagination
export interface Paginated<T> {
    results: T;
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    firstRowOnPage: number;
    lastRowOnPage: number;
}


/**
 * API
 * 
 */

// Brands

interface Brand {
  nameAr: string;
  nameEn: string;
  description: string;
  webSite: string;
}
export interface IBrand extends Brand {
  id: number;
}
export type IPostBrand = Omit<IBrand, 'id'>;
export interface IPutBrand extends IBrand {}
export interface IGetAllBrandsProps { name?: string, page?: number, pageSize?: number }
export interface IGetOneBrandProps { id: number }
export interface IUpdateBrandProps { id: number, data: Partial<Brand> }

// Country
export interface Country {
    enName: string;
    arName: string;
}
export interface ICountry extends Country {
    id: number;
}
export type IPostCountry = Omit<ICountry, 'id'>;
export interface IPutCountry extends ICountry {}
export interface IGetAllCountryProps { name?: string, page?: number, pageSize?: number }
export interface IGetOneCountryProps { id: number }
export interface IUpdateCountryProps { id: number, data: Partial<Country> }

// Districts
export interface Province {
    nameAr: string;
    nameEn: string;
    countryId: number,
    country: any;
    districts: any[];
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isDeleted: boolean;
}


export interface District {
  nameAr: string;
  nameEn: string;
  province: Province;
}
export interface IDistrict extends District {
    id: number;
}
export type IPutDistrict = Partial<IPostDistrict>; 
export type IPostDistrict = Omit<IDistrict, 'id'>;
export interface IPutCountry extends ICountry {}
export interface IGetAllDistrictProps { name?: string, page?: number, pageSize?: number }
export interface IGetOneDistrictProps { id: number }
export interface IUpdateDistrictProps { id: number, data: Partial<District> }

// Vendors


export interface IPostVendors {
    name: string;
    description: string;
    email: string;
    phoneNumber: string;
    address: string;
    districtId: number;
    vendorType: number;
    userId: string;
  }