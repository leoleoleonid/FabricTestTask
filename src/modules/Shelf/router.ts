import express from "express";
import {shelfInst} from "./Shelf";
import {AllocateCellDTO} from "./allocateCell.dto";
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";
import {ErrorException} from "../../common/errors/error-exception";
import {ErrorCode} from "../../common/errors/error-code";

const router = express.Router();

router.post("/allocateCell", async (req, res, next) => {
    const allocateCellDto = plainToClass(AllocateCellDTO, req.body);
    const errors = await validate(allocateCellDto);
    if (errors.length) {
        return next(new ErrorException(ErrorCode.ValidationError, errors));
    }

    try {
        const response = shelfInst.findCell(req.body.productType, req.body.quantity);
        return res.send(response);
    } catch (e) {
        return next(e);
    }
});

export default router