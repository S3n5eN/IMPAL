/*
  Warnings:

  - You are about to drop the column `stock` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `item` table. All the data in the column will be lost.
  - Added the required column `imageURL` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `item` DROP COLUMN `stock`,
    DROP COLUMN `weight`,
    ADD COLUMN `imageURL` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT false;
