/*
  Warnings:

  - You are about to alter the column `status` on the `item` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `item` ALTER COLUMN `imageURL` DROP DEFAULT,
    MODIFY `status` ENUM('Tersedia', 'Diambil') NOT NULL DEFAULT 'Tersedia';
