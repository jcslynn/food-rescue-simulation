-- CreateEnum
CREATE TYPE "FoodAccess" AS ENUM ('NORMAL', 'LOW', 'EXTREMELY_LOW');

-- CreateEnum
CREATE TYPE "DonationType" AS ENUM ('COMMON', 'UNCOMMON');

-- CreateEnum
CREATE TYPE "LastDonation" AS ENUM ('WEEK_1', 'WEEKS_2', 'WEEKS_3', 'WEEKS_4', 'WEEKS_5', 'WEEKS_6', 'WEEKS_7', 'WEEKS_8', 'WEEKS_9', 'WEEKS_10', 'WEEKS_11', 'WEEKS_12', 'NEVER');

-- CreateTable
CREATE TABLE "Model" (
    "id" SERIAL NOT NULL,
    "travelTime" INTEGER NOT NULL,
    "organizationSize" INTEGER NOT NULL,
    "foodAccess" INTEGER NOT NULL,
    "povertyRate" INTEGER NOT NULL,
    "incomeLevel" INTEGER NOT NULL,
    "lastDonation" INTEGER NOT NULL,
    "donationType" INTEGER NOT NULL,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "travelTime" INTEGER NOT NULL,
    "organizationSize" INTEGER NOT NULL,
    "foodAccess" "FoodAccess" NOT NULL,
    "povertyRate" INTEGER NOT NULL,
    "incomeLevel" INTEGER NOT NULL,
    "lastDonation" "LastDonation" NOT NULL,
    "donationType" "DonationType" NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);
