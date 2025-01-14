import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dtos/CreatUser.dto";
import { CreateUserQueryParams } from "../types/query-params";


const users = [{id:1,name: "jeevan",age:23},{id:2,name:"vinod",age:24}]

export function getUsers(request: Request, response: Response) {
       response.send([])
    // response.status(200).json({success:true , message:"fetch success", data:users})
}

export function getUserById(request: Request, response: Response) {
    const userId:Number = Number(request.params['userId']);
    const user = users.find((user)=>user.id == userId)
    response.status(200).json({success:true , message:"fetch success", data:user})
}

export function createUser(request: Request<{}, {},CreateUserDto,CreateUserQueryParams>, response: Response) {
    const user = request.body
    response.status(201).json({success:true , message:"successfully created",data : user })
}