import request from "supertest";
import app from "../src/config/app";

describe("CreateUserController", () => {
    it("Should create a user sucessfully", async () => {
        const resp = await request(app).post("/users").send({
            nome: "John Doe",
            email: "teste@dominio.com",
            senha: "senha123",
            role: "Gerente"
        });
        expect(resp.status).toBe(201);
        expect(resp.body).toHaveProperty("id")
    })
})