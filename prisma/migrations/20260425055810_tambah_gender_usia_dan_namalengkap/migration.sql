/*
  Warnings:

  - You are about to drop the column `birthDate` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `birthDate`,
    ADD COLUMN `Gender` ENUM('Pria', 'Wanita') NULL,
    ADD COLUMN `Usia` INTEGER NULL,
    ADD COLUMN `namaLengkap` VARCHAR(191) NULL;
