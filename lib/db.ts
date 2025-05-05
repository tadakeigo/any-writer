import { PrismaClient } from "@prisma/client";

declare global {
    var cachePrisma: PrismaClient;
}

let prisma: PrismaClient;

if(process.env.NODE_ENV === "production") {
    prisma = new PrismaClient({
        log: ["query", "info", "warn", "error"],
    });
} else {
    if(!global.cachePrisma) {
        global.cachePrisma = new PrismaClient({
            log: ["query", "info", "warn", "error"],
        });
    }
    prisma = global.cachePrisma;
}

export const db = prisma;
