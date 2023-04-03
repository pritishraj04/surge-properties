import { db } from "$lib/database";

export const load = async ({ locals }) => {
  const status = db.PossesionStatus.findMany();
  const propertyType = db.PropertyType.findMany();
  const furnishingType = db.FurnishingType.findMany();
  const rentorSale = db.RentorSale.findMany();
  const furnitures = db.Furnitures.findMany();
  const amenities = db.Amenities.findMany();
  const properties = db.Property.findMany();
  //   const developer = db.Developer.findMany();
  return {
    user: locals.user,
    status,
    propertyType,
    furnishingType,
    rentorSale,
    furnitures,
    amenities,
    properties,
    // developer,
  };
};
