/*
  Warnings:

  - Added the required column `resume` to the `Applications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Applications" ADD COLUMN     "resume" TEXT NOT NULL;
