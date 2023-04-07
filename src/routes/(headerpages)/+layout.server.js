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
  const images = async () => {
    return await db.Image.findMany();
  };
  const users = async () => {
    return await db.User.findMany({
      select: { id: true, phone: true, email: true, roleId: true },
    });
  };
  //   const developer = async()=> { db.Developer.findMany();}
  return {
    user: locals.user,
    status: status(),
    propertyType: propertyType(),
    furnishingType: furnishingType(),
    rentorSale: rentorSale(),
    furnitures: furnitures(),
    amenities: amenities(),
    properties: properties(),
    images: images(),
    users: users(),
    //developer: developer(),
  };
};
