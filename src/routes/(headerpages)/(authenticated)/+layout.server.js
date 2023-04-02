import { db } from "$lib/database";

// import { redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
  //   if (!locals.user) {
  //     throw redirect(302, "/signin");
  //   }
  const status = db.PossesionStatus.findMany();
  const propertyType = db.PropertyType.findMany();
  const furnishingType = db.FurnishingType.findMany();
  const rentorSale = db.RentorSale.findMany();
  const furnitures = db.Furnitures.findMany();
  const amenities = db.Amenities.findMany();
  //   const developer = db.Developer.findMany();
  return {
    user: locals.user,
    status,
    propertyType,
    furnishingType,
    rentorSale,
    furnitures,
    amenities,
    // developer,
  };
};
