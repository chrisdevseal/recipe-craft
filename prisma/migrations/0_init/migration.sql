-- CreateTable
CREATE TABLE "favorites" (
    "uid" VARCHAR NOT NULL,
    "user_uid" VARCHAR,

    CONSTRAINT "favorites_pk" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "recipe" (
    "uid" VARCHAR NOT NULL,
    "name" VARCHAR,
    "description" VARCHAR,
    "shortdescription" VARCHAR,

    CONSTRAINT "recipe_pk" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "users" (
    "uid" VARCHAR NOT NULL,
    "username" VARCHAR,
    "passwordhash" VARCHAR,
    "firstname" VARCHAR,
    "lastname" VARCHAR,

    CONSTRAINT "users_pk" PRIMARY KEY ("uid")
);

