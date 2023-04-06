import { db } from "$lib/database";

export const load = async ({ locals }) => {
  const status = async () => {
    return await db.PossesionStatus.findMany();
  };
  const propertyType = async () => {
    return await db.PropertyType.findMany();
  };
  const furnishingType = async () => {
    return await db.FurnishingType.findMany();
  };
  const rentorSale = async () => {
    return await db.RentorSale.findMany();
  };
  const furnitures = async () => {
    return await db.Furnitures.findMany();
  };
  const amenities = async () => {
    return await db.Amenities.findMany();
  };
  const properties = async () => {
    return await db.Property.findMany();
  };
  //   const developer = async()=> { db.Developer.findMany();}
  console.log("status:", status());
  return {
    user: locals.user,
    status: status(),
    propertyType: propertyType(),
    furnishingType: furnishingType(),
    rentorSale: rentorSale(),
    furnitures: furnitures(),
    amenities: amenities(),
    properties: properties(),
    //developer: developer(),
  };
};
