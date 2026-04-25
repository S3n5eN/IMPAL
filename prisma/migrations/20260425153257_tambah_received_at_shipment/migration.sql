-- AlterTable
ALTER TABLE `shipment` ADD COLUMN `receivedAt` DATETIME(3) NULL;

-- AddForeignKey
ALTER TABLE `shipment` ADD CONSTRAINT `Shipment_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
