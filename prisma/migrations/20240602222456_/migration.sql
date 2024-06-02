-- DropForeignKey
ALTER TABLE "UserPassword" DROP CONSTRAINT "UserPassword_userId_fkey";

-- AddForeignKey
ALTER TABLE "UserPassword" ADD CONSTRAINT "UserPassword_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
