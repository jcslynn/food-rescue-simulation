-- AlterTable
ALTER TABLE "Model" ADD COLUMN     "chosen" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);
