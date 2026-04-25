/*
  Warnings:

  - You are about to drop the column `receivedDate` on the `shipment` table. All the data in the column will be lost.
  - You are about to drop the column `shippingDate` on the `shipment` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `shipment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(3))`.
  - You are about to drop the column `Gender` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Usia` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `identityCard` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `namaLengkap` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `pekerjaan` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[itemId,type]` on the table `shipment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `placeId` to the `item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `shipment` DROP FOREIGN KEY `Shipment_itemId_fkey`;

-- DropIndex
DROP INDEX `Shipment_itemId_key` ON `shipment`;

-- AlterTable
ALTER TABLE `item` ADD COLUMN `placeId` INTEGER NOT NULL,
    ADD COLUMN `quality` ENUM('SangatBaik', 'Baik', 'CukupBaik', 'Layak', 'CukupLayak') NULL,
    MODIFY `status` ENUM('PendingApproval', 'Tersedia', 'Diambil', 'Ditolak') NOT NULL DEFAULT 'PendingApproval';

-- AlterTable
ALTER TABLE `shipment` DROP COLUMN `receivedDate`,
    DROP COLUMN `shippingDate`,
    ADD COLUMN `claimType` VARCHAR(191) NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deliveredDate` DATETIME(3) NULL,
    ADD COLUMN `isAutoApproved` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `userProfileId` INTEGER NULL,
    MODIFY `status` ENUM('Pending', 'Approved', 'Rejected', 'Delivered') NOT NULL DEFAULT 'Pending',
    MODIFY `receiverAddress` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `Gender`,
    DROP COLUMN `Usia`,
    DROP COLUMN `address`,
    DROP COLUMN `identityCard`,
    DROP COLUMN `namaLengkap`,
    DROP COLUMN `pekerjaan`,
    DROP COLUMN `phone`;

-- CreateTable
CREATE TABLE `userProfile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `namaLengkap` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `pekerjaan` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `usia` INTEGER NOT NULL,
    `gender` ENUM('Pria', 'Wanita') NOT NULL,
    `identityId` VARCHAR(191) NOT NULL,
    `isVerified` BOOLEAN NOT NULL DEFAULT false,
    `verifiedAt` DATETIME(3) NULL,
    `verifiedBy` INTEGER NULL,

    UNIQUE INDEX `userProfile_userId_key`(`userId`),
    INDEX `UserProfile_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Item_placeId_fkey` ON `item`(`placeId`);

-- CreateIndex
CREATE INDEX `Shipment_userProfileId_fkey_new` ON `shipment`(`userProfileId`);

-- CreateIndex
CREATE UNIQUE INDEX `shipment_itemId_type_key` ON `shipment`(`itemId`, `type`);

-- AddForeignKey
ALTER TABLE `userProfile` ADD CONSTRAINT `UserProfile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `item` ADD CONSTRAINT `Item_placeId_fkey` FOREIGN KEY (`placeId`) REFERENCES `place`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipment` ADD CONSTRAINT `Shipment_userProfileId_fkey` FOREIGN KEY (`userProfileId`) REFERENCES `userProfile`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `shipment` RENAME INDEX `Shipment_adminId_fkey` TO `Shipment_adminId_fkey_new`;

-- RenameIndex
ALTER TABLE `shipment` RENAME INDEX `Shipment_userId_fkey` TO `Shipment_userId_fkey_new`;
