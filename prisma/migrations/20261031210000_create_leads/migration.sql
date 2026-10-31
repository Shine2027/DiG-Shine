CREATE TYPE "LeadStatus" AS ENUM ('NEW', 'CONTACTED', 'QUALIFIED', 'CLOSED', 'LOST');

CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "phone" VARCHAR(50),
    "company" VARCHAR(120),
    "services" TEXT[] NOT NULL,
    "budget" VARCHAR(50),
    "message" VARCHAR(4000) NOT NULL,
    "status" "LeadStatus" NOT NULL DEFAULT 'NEW',
    "notificationSent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");
CREATE INDEX "Lead_status_createdAt_idx" ON "Lead"("status", "createdAt");
