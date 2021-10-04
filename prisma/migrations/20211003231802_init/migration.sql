/*
  Warnings:

  - Added the required column `countEmployees` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `company` ADD COLUMN `countEmployees` INTEGER NOT NULL,
    ADD COLUMN `logo` VARCHAR(191) NOT NULL,
    ADD COLUMN `state` ENUM('APPROVED', 'REJECTED') NOT NULL;
