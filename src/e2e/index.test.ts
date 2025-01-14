import request from "supertest"
import { createApp } from "../createApp";
import { Express } from "express";

describe("/api/users", () => {
    let app: Express;
    
    //we can directly initialize the app globally but we cant to it asynchronously when we have to connect to dbs , at that time createApp will be async.
    beforeAll(async() => {
        app =  await createApp();
    })

    it("should return an empty array when getting api/sers",async () => {
        const response = await request(app).get("/api/users");
        expect(response.body).toStrictEqual([])
    })
})