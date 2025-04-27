// Define a type for the infusion options data
export interface IInfusionOption {
  title: string;
  description: string;
  imageUrl: string;
  includes: string[];
  cost: string;
  path: string;
  alt: string;
}