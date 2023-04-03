import { db } from "$lib/database";
import { redirect } from "@sveltejs/kit";

export const actions = {
  addProperty: async ({ request }) => {
    const data = await request.formData();
    const propertyDetails = {};
    data.forEach((value, key) => {
      propertyDetails[key] = value;
    });
    console.log(propertyDetails);
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
    console.log(updatedUser);

    await db.Property.create({
      data: {
        name: propertyDetails.name,
        slug,
        societyName: propertyDetails.societyName,
        locality: propertyDetails.locality,
        city: propertyDetails.city,
        desc: propertyDetails.desc,
        price: parseInt(propertyDetails.price),
        maintainance: parseInt(propertyDetails.maintainance),
        brokerage: parseInt(propertyDetails.brokerage),
        areaSize: propertyDetails.areaSize,
        bedrooms: parseInt(propertyDetails.bedrooms),
        bathrooms: parseInt(propertyDetails.bathrooms),
        additionalRooms: propertyDetails.additionalRooms,
        ageInMonths: parseInt(propertyDetails.ageInMonths),
        floor: propertyDetails.floors,
        userRole: updatedUser.roleId.toString(),
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
