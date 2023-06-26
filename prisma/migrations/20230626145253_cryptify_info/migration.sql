-- CreateTable
CREATE TABLE "CryptoSpreads" (
    "cryptoId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "symbol" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "buy" DOUBLE PRECISION NOT NULL,
    "sell" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CryptoSpreads_pkey" PRIMARY KEY ("cryptoId")
);

-- CreateTable
CREATE TABLE "FiatRates" (
    "fiatId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "symbol" TEXT NOT NULL,
    "buy" DOUBLE PRECISION NOT NULL,
    "sell" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "FiatRates_pkey" PRIMARY KEY ("fiatId")
);

-- CreateIndex
CREATE UNIQUE INDEX "CryptoSpreads_symbol_key" ON "CryptoSpreads"("symbol");

-- CreateIndex
CREATE UNIQUE INDEX "FiatRates_symbol_key" ON "FiatRates"("symbol");
