import { db } from "$lib/database";
import { redirect } from "@sveltejs/kit";

export const actions = {
  addProperty: async ({ request }) => {
    const data = await request.formData();
    const propertyDetails = {};
    data.forEach((value, key) => {
      propertyDetails[key] = value;
    });
    //add data validationn here

    const slug = propertyDetails.name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    const updatedUser = await db.User.update({
      where: { email: propertyDetails.user },
      data: {
        Role: { connect: { name: propertyDetails.iAm } },
      },
    });
    const userRole = await db.Roles.findFirst({
      where: { id: updatedUser.roleId },
    });

    await db.Property.create({
      data: {
        name: propertyDetails.name,
        slug,
        societyName: propertyDetails.societyName
          ? propertyDetails.societyName
          : undefined,
        locality: propertyDetails.locality,
        city: propertyDetails.city,
        desc: propertyDetails.desc,
        price: parseInt(propertyDetails.price),
        maintainance: propertyDetails.maintainance
          ? parseInt(propertyDetails.maintainance)
          : undefined,
        brokerage: propertyDetails.brokerage
          ? parseInt(propertyDetails.brokerage)
          : undefined,
        areaSize: propertyDetails.areaSize,
        bedrooms: parseInt(propertyDetails.bedrooms),
        bathrooms: parseInt(propertyDetails.bathrooms),
        additionalRooms: propertyDetails.additionalRooms
          ? propertyDetails.additionalRooms
          : undefined,
        ageInMonths: parseInt(propertyDetails.ageInMonths),
        floor: propertyDetails.floors,
        userRole: userRole.name,
        hot: propertyDetails.hot === "on",

        status: { connect: { name: propertyDetails.status } },
        propertyOfferedAs: { connect: { name: propertyDetails.propertyType } },
        furnishingType: { connect: { name: propertyDetails.furnishingType } },
        rentOrSale: { connect: { name: propertyDetails.rentOrSale } },

        user: { connect: { email: propertyDetails.user } },
      },
    });
    throw redirect(302, "/");
  },
};
