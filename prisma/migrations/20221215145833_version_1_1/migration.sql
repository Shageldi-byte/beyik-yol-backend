-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('NOTIFICATION_CLICK', 'POPUP_CLICK', 'BANNER_CLICK', 'ADS_CLICK', 'BOOKING_CAR_WASH', 'BOOKING_CAR_SERVICE', 'SHARE_LOCATION', 'OTHER');

-- CreateEnum
CREATE TYPE "PageType" AS ENUM ('NOTIFICATION', 'HOME_PAGE', 'MAPS_PAGE', 'SERVICE_PAGE', 'SHOP_PAGE', 'CAR_WASH_PAGE', 'OTHER', 'AUCTION_PAGE', 'SPEEDOMETER_PAGE', 'CARS_PAGE', 'COSTS_PAGE');

-- CreateTable
CREATE TABLE "PageViews" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "pageType" "PageType" NOT NULL DEFAULT 'OTHER',
    "count" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageViews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Events" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" "EventType" NOT NULL DEFAULT 'OTHER',
    "customType" TEXT DEFAULT '',
    "count" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PageViews" ADD CONSTRAINT "PageViews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
