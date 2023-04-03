-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "phone" BIGINT NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "authToken" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PropertyType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RentorSale" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "RentorSale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FurnishingType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "FurnishingType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PossesionStatus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PossesionStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "propertyName" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Amenities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT,
    "type" TEXT,

    CONSTRAINT "Amenities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Furnitures" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT,

    CONSTRAINT "Furnitures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "societyName" TEXT,
    "locality" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "maintainance" BIGINT,
    "brokerage" BIGINT,
    "areaSize" TEXT NOT NULL,
    "bedrooms" INTEGER NOT NULL DEFAULT 0,
    "bathrooms" INTEGER NOT NULL DEFAULT 0,
    "additionalRooms" TEXT NOT NULL,
    "ageInMonths" INTEGER NOT NULL,
    "floor" TEXT NOT NULL,
    "userRole" TEXT NOT NULL,
    "statusName" TEXT NOT NULL,
    "propertyTypeName" TEXT NOT NULL,
    "furnishingTypeName" TEXT NOT NULL,
    "rentOrSaleName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AmenitiesToProperty" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FurnituresToProperty" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_authToken_key" ON "User"("authToken");

-- CreateIndex
CREATE UNIQUE INDEX "Roles_name_key" ON "Roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyType_name_key" ON "PropertyType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "RentorSale_name_key" ON "RentorSale"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FurnishingType_name_key" ON "FurnishingType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PossesionStatus_name_key" ON "PossesionStatus"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Amenities_name_key" ON "Amenities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Furnitures_name_key" ON "Furnitures"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Property_name_key" ON "Property"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Property_slug_key" ON "Property"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_AmenitiesToProperty_AB_unique" ON "_AmenitiesToProperty"("A", "B");

-- CreateIndex
CREATE INDEX "_AmenitiesToProperty_B_index" ON "_AmenitiesToProperty"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FurnituresToProperty_AB_unique" ON "_FurnituresToProperty"("A", "B");

-- CreateIndex
CREATE INDEX "_FurnituresToProperty_B_index" ON "_FurnituresToProperty"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_propertyName_fkey" FOREIGN KEY ("propertyName") REFERENCES "Property"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_statusName_fkey" FOREIGN KEY ("statusName") REFERENCES "PossesionStatus"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_propertyTypeName_fkey" FOREIGN KEY ("propertyTypeName") REFERENCES "PropertyType"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_furnishingTypeName_fkey" FOREIGN KEY ("furnishingTypeName") REFERENCES "FurnishingType"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_rentOrSaleName_fkey" FOREIGN KEY ("rentOrSaleName") REFERENCES "RentorSale"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AmenitiesToProperty" ADD CONSTRAINT "_AmenitiesToProperty_A_fkey" FOREIGN KEY ("A") REFERENCES "Amenities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AmenitiesToProperty" ADD CONSTRAINT "_AmenitiesToProperty_B_fkey" FOREIGN KEY ("B") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FurnituresToProperty" ADD CONSTRAINT "_FurnituresToProperty_A_fkey" FOREIGN KEY ("A") REFERENCES "Furnitures"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FurnituresToProperty" ADD CONSTRAINT "_FurnituresToProperty_B_fkey" FOREIGN KEY ("B") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;
