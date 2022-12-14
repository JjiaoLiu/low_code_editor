export interface ICategory {
  name: string;
}
export interface IMaterialData {
  version: string;
  source: string;
}

export interface IMaterial extends IMaterialData {
  id: number;
  name: string;
  title: string;
  thumbnail: string;
  type: string;
  category: ICategory;
  data: IMaterialData[];
}

export interface IMaterialLoader {
  type: string;
  load(material: IMaterial): Promise<any>;
}
