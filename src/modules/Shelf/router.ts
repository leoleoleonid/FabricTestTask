import express from "express";
import {shelfInst} from "./Shelf";

const router = express.Router();

router.post("/", async (req, res, next) => {
    // const userDto = plainToClass(CreateUserDto, req.body);
    // const errors = await validate(userDto);
    // if (errors.length) {
    //     return next(new ErrorException(ErrorCode.ValidationError, errors));
    // }

    const response = shelfInst.findCell(req.body.productType, req.body.quantity);

    return res.send(response);
});

export default router